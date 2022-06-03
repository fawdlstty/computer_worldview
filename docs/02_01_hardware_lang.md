# 第一节 硬件语言

我们在第一章时候实际已经了解了门电路的由来，在此出现一个问题，那就是，大规模集成电路（芯片），里面细节很小很多，那么该如何设计呢？答案是，通过硬件描述语言。

## PLD/FPGA

PLD全称为 `可编程逻辑器件`，FPGA全称为 `现场可编程门阵列`，它是一种特殊的PLD。

PLD是电子芯片设计领域一种非常具有活力的技术。用于设计大规模集成电路（芯片）的物理逻辑，通过这种语言，人们可以定义芯片能做到怎样的功能。设计完成之后，通过光刻机打印并切割后，就是真正的芯片啦。

这儿需要注意。芯片可以运行的指令由芯片设计公司设计（比如Intel），芯片的制程由芯片代工公司决定（比如台积电）。

大致逻辑开发步骤：

1. 在抽象环境开发
2. 仿真测试
3. 流片（印刷芯片）及测试
4. 上生产线

大致芯片生产步骤：

1. 首先生产硅晶圆柱
2. 通过切割技术切割晶圆（圆形硅晶片）
3. 通过光刻机在晶圆上打印门电路
    - 前置条件：一个已开发好的FPGA程序
4. 从晶圆上切割出单个芯片

理论支撑：

根据卡诺图数学原理，任意数字逻辑表达式都能通过与、或、非的组合从而实现。

芯片类别：（TODO）

- ASIC
- 通用集成电路
- PAL
- CPLD

## 硬件描述语言 VHDL（或同源方言比如Verilog HDL）

芯片通常是非常小一块，用于实际计算的电子设备。假如想让芯片与其他输入输出设备（比如显示器、麦克风或红外监控等）连接起来，那么还需要一个电路骨架，也就是我们常说的PCB（印制电路板）。PCB通过VHDL语言描述及设计。

印刷的电路板在引脚位置接入芯片、输入输出设备及电源后，即可开始运行。

## 就业方向

- 电路板研发及生产
- 电器研发及生产
- 数字化控制
- 芯片研发
- 单片机研发

芯片设计就走FPGA方向，电路设计就走VHDL方向，嵌入式应用领域流行C/C++等语言进行数控应用开发。