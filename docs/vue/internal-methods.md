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
