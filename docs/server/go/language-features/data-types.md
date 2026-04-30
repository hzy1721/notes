# 数据类型

## 基本类型

- 布尔：`bool`
- 整型：
  - 有符号：`int8` / `int16` / `int32` / `int64`
  - 无符号：`uint8` / `uint16` / `uint32` / `uint64`
  - 平台相关：`int` / `uint` / `uintptr`
- 浮点型：`float32` / `float64`
- 复数：`complex64` / `complex128`
- 字符串：`string`
- 字节：`byte` (同 `uint8`，表示 ASCII 字符)
- 字符：`rune` (同 `int32`，表示 Unicode 字符)

## 复合类型

数组：固定长度，同类型元素集合

```go
var arr [5]int = [5]int{1, 2, 3, 4, 5}
```

切片：基于数组的引用类型，动态长度

```go
s := []int{1, 2, 3}
s = append(s, 4)
```

哈希表：键值对映射，引用类型

```go
m := map[string]int{
    "apple": 1,
    "banana": 2,
}
```

结构：自定义类型，不同类型命名字段的聚合

```go
type Person struct {
    Name string
    Age  int
}
p := Person{Name: "Alice", Age: 30}
```

## 指针类型

```go
x := 10
p := &x   // p 是指向 x 的指针
fmt.Println(*p) // 解引用，输出 10
```

## 函数类型

```go
add := func(a, b int) int {
    return a + b
}
fmt.Println(add(1, 2)) // 3
```

## 接口类型

```go
type Animal interface {
    Speak() string
}
```

## 通道类型

用于 goroutine 之间通信

```go
ch := make(chan int, 1)
ch <- 42
val := <-ch
```
