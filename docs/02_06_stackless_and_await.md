# 第二章 计算机语言

## 第六节 stackless与await

await是一种特殊的语义抽象语法，它能将回调语法简写为简单的调用形式。在js、python、c#等语言有await关键字，c艹语言有co_await关键字都能实现同样的作用。

stackless作为对现有stackful的补充，从而通过其他途径来实现协程切换的功能。下面我给出一个示例，使用C++伪代码：

```cpp
waitable<int> async_func1 ();
waitable<int> async_func2 ();

waitable<int> async_func () {
    int n = co_await async_func1 ();
    n += co_await async_func2 ();
    co_return n;
}
```

我们一步一步来拆解：

我详细介绍介绍co_await的原理。首先，一个异步函数`async_func`，函数内部有两个co_await，这将代码拆分为了三部分，也就是说函数实际被拆分为了三个函数，第一个函数执行完后，等待一个异步任务结束，再调用第二个函数，等待第二个任务执行完后，再调用第三个函数。用代码来描述就是：

```cpp
void async_func_part0 () {
    async_func1.run ();
}

void async_func_part1 () {
    async_func2.run ();
}

int async_func_part2 (int part0_ret, int part1_ret) {
    return part0_ret + part1_ret;
}

// 逻辑执行步骤：
async_func_part0 ();
int part0_ret = wait...;
async_func_part1 ();
int part1_ret = wait...;
async_func_part2 (part0_ret, part1_ret);
```

这儿我们通过一个函数，然后select方式实现，每次执行后，_index变量改变到下一位置，这样每次调用resume即可跳转到不同的位置，从而实现一个函数调用三次执行三块不同的功能代码。示例代码：

```cpp
int _index;
bool run () {
    select (_index) {
        case 0:
            // 省略...
            return false;
        case 1:
            // 省略...
            return false;
        case 2:
            // 省略...
            return true;
    }
}
```

然后，程序有很多上一段代码用到的变量，在等待之后，下一段代码还接着用。此处于是将其实现为，临时变量转类成员变量，这样就使得，异步函数结束前，每段功能代码都能访问到所有局部变量。

这儿给出最上面的异步函数，实际编译后，生成的代码的样子（不完全是实际样子）：

```cpp
struct async_func1_t;
struct async_func2_t;

void manage_async_func (async_t* _a1, async_t* _a2) {
    // 省略实际实现...
    // 函数功能：
    // 1. 在任务队列中执行_a1.run ()
    // 2. 如果为true则执行_a2.run ()
    // 3. 如果为false则等待_a1需等待的另一个异步函数，等待完毕继续执行_a1.run ()，重复这一步，直至返回true后执行_a2.run ()
}

struct async_func_t: public async_t {
    int n;
    int _index = 0;
    int _ret;
    async_func1_t *_async_func1;
    async_func2_t *_async_func2;

    bool run () {
        switch (_index) {
            case 0:
                _async_func1 = new async_func1_t {};
                manage_async_func (_async_func1, this);
                _index = 1;
                return false;
            case 1:
                n = _async_func1->_ret;
                delete _async_func1;
                _async_func2 = new async_func2_t {};
                manage_async_func (_async_func1, this);
                _index = 2;
                return false;
            case 2:
                n += _async_func2->_ret;
                _ret = n;
                return true;
        }
        throw;
    }
};
```
