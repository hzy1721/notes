# Object

对象是原始类型的**键值对**，键只能是 `String` 或 `Symbol`，值可以是任意类型。

## 创建对象

对象的创建有 3 种方法：

- 字面量 `{}`
  - 最常用、最直观的方法
  - 继承自 `Object.prototype`
- `new Object()`
  - 与字面量等效，用得比较少
- `Object.create(proto)`
  - 用于手动指定继承的原型，而不是继承默认的 `Object.prototype`

## 对象属性 (property)

根据属性的来源，可以分为**自有属性** (own)和**继承属性**。

根据属性的本质，可以分为**数据属性**和**访问器属性** (accessor)。

- 数据属性：一个名字对应一个值
- 访问器属性：一个名字对应一个或两个方法 (getter/setter)

## 属性特性 (attribute)

每个对象属性有 3 个特性：

- `writable` (可写)：是否可以修改属性
- `enumerable` (可枚举)：是否可以在 `for...in` 中枚举属性
- `configurable` (可配置)：是否可以删除属性和修改特性

创建的对象默认可写、可枚举、可配置。

很多内置对象的属性不可写、不可枚举、不可配置，只能直接访问。

## 访问属性

访问属性有 2 种方法：

- 点语法：`object.property`
- 方括号语法：`object["property"]`

首先查找自有属性，然后查找继承属性，都不存在则返回 `undefined`。

- 存在自有属性
  - 数据属性
    - 返回自有属性的值
  - 访问器属性
    - 调用 getter
- 存在继承属性
  - 数据属性
    - 返回继承属性的值
  - 访问器属性
    - 调用 getter
- 都不存在
  - 返回 `undefined`

## 设置属性

同样可以使用**点语法**或**方括号语法**设置属性，不过是放在等号左侧。

- 存在自有属性
  - 数据属性
    - 可写：修改属性的值
    - 只读：`TypeError`
  - 访问器属性
    - 调用 setter
- 存在继承属性
  - 数据属性
    - 可写：创建新属性，隐藏继承属性
    - 只读：`TypeError`
  - 访问器属性
    - 调用 setter
- 都不存在
  - 创建新属性

设置属性无法修改或新增原型链上的属性。

## 删除属性

`delete` 操作符用于删除属性，只能删除自有属性。

- 存在自有属性
  - 数据属性
    - 可配置：删除成功，返回 `true`
    - 不可配置：`TypeError`
- 存在继承属性
  - 什么都不做，返回 `true`
- 都不存在
  - 什么都不做，返回 `true`

## 测试属性

测试属性是否存在，有 4 种方法：

- `in` 操作符
  - 自有属性和继承属性
- `object.hasOwnProperty()`
  - 自有属性
- `object.propertyIsEnumerable()`
  - 自有属性且 `enumerable`
- `object.property !== undefined`
  - 自有属性和继承属性，且值不为 `undefined`
  - 无法区分不存在的属性和存在但值为 `undefined` 的属性

## 判断空对象

**空对象**可以理解为没有**自有属性**的对象，而不关注继承属性。

```js
function checkEmptyObject(obj) {
  return Reflect.ownKeys(obj).length === 0;
}

// 加上了剪枝
function checkEmptyObject(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return Reflect.ownKeys(obj).length === 0;
}
```
