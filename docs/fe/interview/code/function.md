# 函数

## 看代码说输出

```js
const implA = {
  name: 'a',
  showName() {
    console.log(this.name);
  },
};

const implB = {
  name: 'b',
  showName: implA.showName,
};

implA.showName(); // a
implB.showName(); // b
```
