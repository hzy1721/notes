# 卷积层

以二维卷积为例：

- 输入 X：n_h x n_w
- 卷积核 W：k_h x k_w
- 偏差 b：实数
- 输出 Y：(n_h - k_h + 1) x (n_w - k_w + 1)

$Y = X \star W + B$

可学习的参数：

- 卷积核矩阵 W
- 偏差 b

超参数：

- 卷积核大小 k_h x k_w
- 填充 p_h、p_w
- 步幅 s_h、s_w
- 输出通道数 c_o

## 卷积操作

| 类型     | 公式                                                                           |
| -------- | ------------------------------------------------------------------------------ |
| 一维卷积 | $y_i = \sum_{a=1}^h w_a x_{i+a}$                                               |
| 二维卷积 | $y_{i,j} = \sum_{a=1}^h \sum_{b=1}^w w_{a,b} x_{i+a,j+b}$                      |
| 三维卷积 | $y_{i,j,k} = \sum_{a=1}^h \sum_{b=1}^w \sum_{c=1}^d w_{a,b,c} x_{i+a,j+b,k+c}$ |

## 输出形状

以高 h 为例：

$o_h = \lfloor (n_h + p_h - k_h + s_h) / s_h \rfloor$

如果想维持输入输出的形状不变：

$p_h = k_h - 1$

- 偶数：上下各填充一半
- 奇数：一侧向上取整、一侧向下取整

$o_h = \lfloor (n_h + s_h - 1) / s_h \rfloor$

如果高度 h 可以被 s_h 整除：

$o_h = n_h / s_h$

## 多通道

- 输入 X：$c_i \times n_h \times n_w$
- 卷积核 W：$c_o \times c_i \times k_h \times k_w$
- 偏差 B：$c_o \times c_i$
- 输出：$c_o \times m_h \times m_w$

## 1x1 卷积

$k_h = k_w = 1$

不识别空间信息，只融合通道。等价于全连接层。
