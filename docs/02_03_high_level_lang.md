# 第三节 高级语言

## 语言的演进

因面向机器语言开发逻辑更接近计算机运转方式，而不是人类思考方式，因此计算机科学家们尝试将面向机器语言进行抽象（也就是接近人类思考的地方给提取出来，然后屏蔽与机器操作相关的细节）。

按照抽象方式划分，语言种类有：

- 面向过程编程
	+ 代表语言：C、Basic、Pascal
- 面向对象编程
	+ 代表语言：Smalltalk、C++、Java、C#
- 面向函数式编程
	+ 代表语言：Lisp、Haskell、Erlang
- 面向逻辑编程
	+ 代表语言：Prolog

主要语言及技术诞生时间线：

- 1957年，Fortran I
	+ 世界上第一种广泛应用的高级语言
	+ 变量名支持6个字符
	+ 没有类型说明符，以I、J、K、L、M、N开头暗示为整数，以其他字母开头暗示为浮点数
	+ 支持 if 选择与 do 循环
	+ 支持函数（子程序）
- 1958年，ALGOL 58
	+ 通用的成熟语言
	+ 标识符可以任意长度
	+ 支持符合语句
	+ 赋值语句：`变量 := 表达式`
	+ 使用BNF来描述语法
	+ 对后代语言影响深远
	+ 支持递归与块结构
- 1960年，Lisp
	+ 世界上第一种函数式语言
	+ 只有原子和表
	+ 主要方言：Common Lisp、Scheme
- 1961年，COBOL 60
	+ 用于商务报表及财务数据打印的语言
	+ 引入 `DEFINE` 宏指令
	+ 取得巨大成功，但因做得非常完美，以至于几乎没有继任语言
- 1962年，APL、SNOBOL
    + 早期动态语言
- 1964年，PL/I
	+ 通用型高级编程语言
	+ 可以处理23种异常或运行时错误
	+ 将指针作为数据类型
- 1970年，C语言
	+ 命令式系统语言
	+ 设计借鉴了CPL、B语言与ALGOL
	+ 操作系统及嵌入式领域依旧是使用最广泛的语言
- 1972年，Prolog
    + 面向逻辑编程的声明式语言，描述规则，推导结论
- 1972年，smalltalk
    + 完全面向对象语言
- 1983年，C++
    + 结合命令式与面向对象特性的语言
- 1991年，Python
    + 广泛使用的高级动态类型编程语言
- 1995年，Java
    + 类似C++，但要求安全可靠，并降低性能要求
- 1995年，JavaScript
    + 用于浏览器的弱类型语言
- 2001年，C#
    + 微软发起的.NET战略的主要语言
- 2012年，Rust
    + 通过所有权等规则限制，使得它成为了一个运行速度快，且安全的系统编程语言

## 低级语言与高级语言之分

面向机器编程则为低级语言，基于面向机器编程语言上做出抽象的语言则为高级语言。

## 面向函数式与面向对象之争

区别：

| | 面向对象 | 面向函数式 |
| :---: | :---: | :---: |
| 学习难度 | 偏简单 | 偏难 |
| 使用人数 | 多 | 少 |
| 思考方式倾向 | 人类思考模型 | 数学逻辑模型 |
| 变量可修改次数 | 可以多次赋值 | 只能初始化时赋值一次 |
| 用于描述UI（相对来说） | 适合 | 不适合 |
| 用于分布式（相对来说） | 不适合 | 适合 |
| 用于多线程计算（相对来说） | 适合 | 更适合 |
| 处于鄙视链位置 | 底端 | 顶端 |

它俩就像光的波粒二象性一样，没有孰高孰劣之分，更多的类似宗教派别，不同派别的人天然对其他派别有敌对之意。擅长面向对象的开发者会觉得面向函数式难，没必要；擅长面向函数式的开发者会觉得面向对象在多线程时会有数据竞争问题，项目一大就容易出bug，等等。

当然，纯面向对象语言（比如Smalltalk）与纯函数式语言（比如Haskell）几乎都没有多少人使用，如今流行的语言几乎都是两者的结合版本。比如C++、可以用面向对象方式写代码，也可以用面向函数式方式，并且它的模板元编程方式是一种纯函数式编程。

## 命令式编程与声明式编程之争

声明式可以分为两种情况，一种是声明式语言，一种是声明式编程规范。声明式编程特性为，代码仅声明关系，具体怎么实现就不管，最终取得结果就行。

比如查询数据用的SQL语言，面向逻辑编程的Prolog语言，都属于声明式编程语言。

声明式编程规范指的是用非声明式语言去模拟/实现出出声明式语言的效果。其中最著名且用途最广的技术是C#的Linq。

## 强类型语言与弱类型语言之分

主要区别是，不兼容的类型能否在使用过程中轻易的转换。比如类似这样的伪代码：`string s = "haha" + 123;`，弱类型语言会自动将123转为字符串，强类型语言将报错。但通常，这种区分方式的分界线越来越不可靠，比如强类型语言C++就能通过 `operator` 来实现类似效果。

## 静态类型语言与动态类型语言之分

静态类型指数据类型在编译时即确定；动态类型值数据类型在运行期间才能确定。C++是一种静态类型语言，有两种模拟动态类型的方式，`std::any`、`std::variant`。

## Stackless 与 Stackful 之分

区别：

| | Stackless | Stackful |
| :---: | :---: | :---: |
| 是否能从程序栈上看出调用链 | 不能 | 能 |
| 示例调用（C++） | co_await fn (); | fn (); |
| 是否能同时调用多个方法 | 能 | 不能 |
| 是否有callback hell问题 | 无 | 有 |
| 性能 | 较高 | 高 |
| 占用空间 | 低 | 高 |

通常用来区分协程类型。无栈协程指通过无协程栈的方式实现协程调用与切换，搭配 `co_await`、`await` 等关键字简化协程调用切换动作。有栈协程性能更高，但比较占用内存空间，且容易产生 callback hell 问题。

后面章节我将详细介绍stackless的实现

## 就业方向

*大概99%的程序员入此坑*

- 应用软件开发
- 服务器应用开发
- 单片机程序开发
