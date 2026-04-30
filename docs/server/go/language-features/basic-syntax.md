# 基础语法

## 变量

```go
// var 声明变量
var name string = "Go"
var age int = 10

// 短变量声明
name := "Go"
age := 10

// const 声明常量
const PI = 3.14
```

## 条件

```go
// if-else
if x > 0 {
  fmt.Println("正数")
} else if x < 0 {
  fmt.Println("负数")
} else {
  fmt.Println("零")
}

// switch
switch day {
  case "Monday":
    fmt.Println("星期一")
  case "Friday":
    fmt.Println("星期五")
  default:
    fmt.Println("其他")
}
```

## 循环

```go
// for 循环
for i := 0; i < 5; i++ {
  fmt.Println(i)
}

// "while" 风格
for x < 10 {
  x++
}
```
