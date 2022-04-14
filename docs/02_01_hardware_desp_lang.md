# 第二章 计算机语言

## 第一节 硬件描述语言

我们在第一章时候实际已经了解了门电路的由来，在此出现一个问题，那就是，大规模集成电路（芯片），里面细节很小很多，那么该如何设计呢？答案是，通过硬件描述语言。

### FPGA

FPGA是一种硬件描述语言，用于设计大规模集成电路（芯片）的物理逻辑，通过这种语言，人们可以定义芯片能做到怎样的功能。设计完成之后，通过光刻机打印并切割后，就是真正的芯片啦。

这儿需要注意。芯片可以运行的指令由芯片设计公司设计（比如Intel），芯片的制程由芯片代工公司决定（比如14nm制程芯片）。

具体生产步骤：

1. 首先生产硅晶圆柱
2. 通过切割技术切割晶圆（圆形硅晶片）
3. 通过光刻机在晶圆上打印门电路
    - 前置条件：一个已开发好的FPGA程序
4. 从晶圆上切割出单个芯片

理论支撑：

根据卡诺图数学原理，任意数字逻辑表达式都能通过与、或、非的组合从而实现。

### VHDL（或同源方言比如Verilog HDL）

芯片通常是非常小一块，用于实际计算的电子设备。假如想让芯片与其他输入输出设备（比如显示器、麦克风或红外监控等）连接起来，那么还需要一个电路骨架，也就是我们常说的PCB（印制电路板）。

PCB（印制电路板）通过VHDL语言描述及设计，它是电子设备的骨架，像搭积木一样将各类设备连接起来。