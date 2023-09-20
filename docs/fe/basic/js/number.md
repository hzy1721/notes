# Number

`Number` 类型是 64 位 (8 字节) 的 IEEE-754 双精度浮点数 (double)。

```js
let billion = 1000000000;
billion = 1_000_000_000; // 使用下划线作为分隔符
billion = 1e9; // 科学记数法
const dec = 255; // 默认十进制
const hex = 0xff; // 0x 开头的十六进制
const oct = 0x377; // 0o 开头的八进制
const bin = 0b11111111; // 0b 开头的二进制
```

`toString(base = 10)` 返回指定进制的字符串表示。

```js
(123).toString(); // 需要使用括号，第一个点默认是小数点
```

舍入：

- `Math.floor`：向下舍入
- `Math.ceil`：向上舍入
- `Math.round`：四舍五入
- `Math.trunc`：截断小数部分，相当于向 0 舍入
- `toFixed(n = 0)`：舍入到小数点后 n 位，返回字符串表示
  - 四舍五入，类似于 `Math.round`
  - 位数不足会补 0

超出 64 位浮点数表示范围的值为 `Infinity` 或 `-Infinity`，表示正无穷或负无穷。

- 可以使用 `isFinite(value)` 函数判断一个值是否为 `Infinity/-Infinity/NaN`

还有一个特殊的值 `NaN`，表示 Not a Number，从其他类型转换为数字时出现。

- `NaN` 不等于任何值，包括它自身
  ```js
  NaN === NaN; // false
  ```
- 可以使用 `isNaN(value)` 函数判断一个值是否为 `NaN`
- `Object.is` 可以比较两个 NaN，也能区分 0 和 -0，其他行为与 `===` 相同
  ```js
  Object.is(NaN, NaN); // true
  Object.is(0, -0); // false
  ```

## parseInt/Float

通过隐式或显式转换字符串为数字是很严格的，不允许有多余的非数字字符。

`parseInt` 和 `parseFloat` 的转换规则更为宽松。

1. 去掉首尾的空白符
2. 尝试从**开头**解析数字，碰到非法字符或末尾时终止
   - 只允许末尾有非数字字符，不允许开头有非数字字符
3. 返回收集到的数字，没有解析到数字返回 `NaN`

```js
parseInt('100px'); // 100
parseFloat('12.5em'); // 12.5
parseInt('12.3'); // 12
parseFloat('12.3.4'); // 12.3
parseInt('a123'); // NaN
parseInt(''); // NaN
parseInt('0xff', 16); // 第二个参数指定进制，默认是十进制
parseInt('ff', 16); // 没有前缀也有效
```
