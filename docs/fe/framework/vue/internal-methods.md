# 内部方法

**内部方法**是操作对象时在 JS 引擎内部调用的方法，对于开发者不可见。

| 内部方法                | 签名                                                |
| ----------------------- | --------------------------------------------------- |
| `[[GetPrototypeOf]]`    | `() -> Object \| null`                              |
| `[[SetPrototypeOf]]`    | `(Object \| null) -> Boolean`                       |
| `[[IsExtensible]]`      | `() -> Boolean`                                     |
| `[[PreventExtensions]]` | `() -> Boolean`                                     |
| `[[GetOwnProperty]]`    | `(propertyKey) -> Undefined \| Property Descriptor` |
| `[[DefineOwnProperty]]` | `(propertyKey, propertyDescriptor) -> Boolean`      |
| `[[HasProperty]]`       | `(propertyKey) -> Boolean`                          |
| `[[Get]]`               | `(propertyKey, Receiver) -> any`                    |
| `[[Set]]`               | `(propertyKey, value, Receiver) -> Boolean`         |
| `[[Delete]]`            | `(propertyKey) -> Boolean`                          |
| `[[OwnPropertyKeys]]`   | `() -> List of propertyKey`                         |
| `[[Call]]`              | `(any, a List of any) -> any`                       |
| `[[Construct]]`         | `(a List of any, Object) -> Object`                 |

内部方法具有多态性，不同的对象部署相同的内部方法，但是行为可能不同。

JS 对象分为两种：**常规对象 (ordinary object)** 和**异质对象 (exotic object)**。

满足以下三点要求的是常规对象：

- 前 11 种必要的内部方法，必须使用 ECMA 规范 10.1.x 节给出的定义实现
- 内部方法 `[[Call]]`，必须使用 ECMA 规范 10.2.1 节给出的定义实现
- 内部方法 `[[Construct]]`，必须使用 ECMA 规范 10.2.2 节给出的定义实现

不符合这三点要求的对象都是异质对象，也就是说异质对象为了实现与常规对象不同的行为，在某些内部方法上有自己独特的实现。
