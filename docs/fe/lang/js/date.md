# Date

## 创建

```js
// 当前时间
new Date();
// 时间戳
new Date(milliseconds);
// 与 Date.parse 算法相同
new Date(datestring);
// 前 2 个参数必须，当前时区
new Date(year, month, date, hours, minutes, seconds, ms);
```

## 访问

```js
// 基于当前时区
getFullYear();
getMonth();
getDate();
getHours();
getMinutes();
getSeconds();
getMilliseconds();
getDay();
// 基于 UTC+0 时区
getUTCFullYear();
getUTCMonth();
getUTCDate();
getUTCHours();
getUTCMinutes();
getUTCSeconds();
getUTCMilliseconds();
getUTCDay();
// 时间戳
getTime();
// UTC - 当前时区的分钟数，比如 UTC+8 为 -480
getTimezoneOffset();
```

## 设置

```js
// 当前时区
setFullYear(year, [month], [date]);
setMonth(month, [date]);
setDate(date);
setHours(hour, [min], [sec], [ms]);
setMinutes(min, [sec], [ms]);
setSeconds(sec, [ms]);
setMilliseconds(ms);
// UTC+0 时区
setUTCFullYear(year, [month], [date]);
setUTCMonth(month, [date]);
setUTCDate(date);
setUTCHours(hour, [min], [sec], [ms]);
setUTCMinutes(min, [sec], [ms]);
setUTCSeconds(sec, [ms]);
setUTCMilliseconds(ms);
// 时间戳
setTime(milliseconds);
```

## 自动校准

- `Date` 会重新分配超出范围的时间值，可以用于计算一定时间后的日期

```js
// 2013/1/32 -> 2013/2/1
new Date(2013, 0, 32);
// 2016/2/30 -> 2016/3/1
const date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);
```

## 转为 Number

- `Date` 转为 `Number` 得到对应的时间戳，与 `date.getTime()` 相同

## 静态方法

- `Date.now()`：当前时间戳，不会创建 `Date` 对象
- `Date.parse(str)`：格式为 `YYYY-MM-DDTHH:mm:ss.sssZ`
  - `T`：分隔符
  - `Z`：可选时区，格式为 `+/-hh:mm`，单个字符 `Z` 表示 UTC+0 时区

## 格式化字符串

```js
const date = new Date(2023, 0, 1, 8, 0, 0);
// Sun Jan 01 2023 08:00:00 GMT+0800 (China Standard Time)
date.toString();
// Sun Jan 01 2023
date.toDateString();
// 08:00:00 GMT+0800 (China Standard Time)
date.toTimeString();
// 1/1/2023, 8:00:00 AM
date.toLocaleString();
// 1/1/2023
date.toLocaleDateString();
// 8:00:00 AM
date.toLocaleTimeString();
// Sun, 01 Jan 2023 00:00:00 GMT
date.toUTCString();
// Sun, 01 Jan 2023 00:00:00 GMT
date.toGMTString();
// 2023-01-01T00:00:00.000Z
date.toISOString();
// 2023-01-01T00:00:00.000Z
date.toJSON();
```
