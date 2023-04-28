# 遍历属性

对象属性分为：

1. 自有属性：
   - 数据/访问器
   - 字符串/Symbol
   - 可枚举/不可枚举
2. 继承属性：对象从原型链中继承属性

## 自有属性

| 语法                               | 包含                                      | 不包含                 |
| ---------------------------------- | ----------------------------------------- | ---------------------- |
| `for...in` + `hasOwnProperty`      | 数据/字符串/可枚举                        | 访问器/Symbol/不可枚举 |
| `Object.keys`                      | 数据/字符串/可枚举                        | 访问器/Symbol/不可枚举 |
| `JSON.stringify`                   | 数据/字符串/可枚举                        | 访问器/Symbol/不可枚举 |
| `...`                              | 数据/字符串/Symbol/可枚举                 | 访问器/不可枚举        |
| `Object.assign`                    | 数据/字符串/Symbol/可枚举                 | 访问器/不可枚举        |
| `_.clone`                          | 数据/字符串/Symbol/可枚举                 | 访问器/不可枚举        |
| `Object.getOwnPropertyNames`       | 数据/访问器/字符串/可枚举/不可枚举        | Symbol                 |
| `Object.getOwnPropertySymbols`     | 数据/Symbol/可枚举/不可枚举               | 访问器/字符串          |
| `Object.getOwnPropertyDescriptors` | 数据/访问器/字符串/Symbol/可枚举/不可枚举 |                        |
| `Reflect.ownKeys`                  | 数据/访问器/字符串/Symbol/可枚举/不可枚举 |                        |

枚举顺序：

- 语法符合非负整数的字符串属性，按照数值顺序从小到大
- 剩余字符串属性，按照添加的先后顺序
- 符号属性，按照添加的先后顺序

### 测试脚本

```js
const dKey = Symbol('d');

const obj = {
  a: '(a) data prop',
  c: '(c) string prop',
  [dKey]: '(d) Symbol prop',
  e: '(e) enumerable prop',
};

Object.defineProperty(obj, 'b', {
  get() {
    return '(b) accessor prop';
  },
});

Object.defineProperty(obj, 'f', {
  value: '(f) non-enumerable prop',
  enumerable: false,
});

const props = ['a', 'b', 'c', dKey, 'e', 'f'];

const clone = /** XXX */;
for (const key of props) {
  console.log(`clone.${key === dKey ? 'd' : key}: ${clone[key]}`);
}
```
