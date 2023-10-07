# Proxy

## 不可变辅助工具

```js
class MultiTreeNode {
  value = undefined;
  parent = undefined;
  key = undefined;
  constructor(value, parent, key) {
    this.value = value;
    this.parent = parent;
    this.key = key;
  }
}

function isJSONObject(value) {
  return typeof value === 'object' && value !== null;
}

function shallowCopy(obj) {
  return Array.isArray(obj) ? [...obj] : { ...obj };
}

class ImmutableHelper {
  obj = undefined;
  proxy = undefined;
  nodeMap = new Map();
  oldToNew = undefined;
  newToOld = undefined;

  constructor(obj) {
    this.obj = obj;
    this.proxy = this.createProxy(obj);
    this.nodeMap = new Map();
    this.buildTree(obj);
  }

  produce(mutator) {
    this.oldToNew = new Map();
    this.newToOld = new Map();
    mutator(this.proxy);
    return this.oldToNew.get(this.obj) ?? this.obj;
  }

  buildTree(value, parent, key) {
    if (isJSONObject(value)) {
      const node = new MultiTreeNode(value, parent, key);
      const keys = Array.isArray(value)
        ? Array.from({ length: value.length }, (el, i) => i)
        : Object.keys(value);
      keys.forEach(subKey => this.buildTree(value[subKey], node, subKey));
      this.nodeMap.set(value, node);
    }
  }

  createProxy(obj) {
    return new Proxy(obj, {
      set: (target, key, newVal, receiver) => {
        const oldVal = target[key];
        if (oldVal === newVal) {
          return true;
        }
        const oldObj = this.newToOld.get(target) ?? target;
        let node = this.nodeMap.get(oldObj);
        let lastModify = true;
        while (node) {
          let cloned = this.oldToNew.get(node.value);
          if (cloned && !lastModify) {
            break;
          }
          lastModify = cloned === undefined;
          if (!cloned) {
            cloned = shallowCopy(node.value);
            this.oldToNew.set(node.value, cloned);
            this.newToOld.set(cloned, node.value);
          }
          cloned[key] = newVal;
          key = node.key;
          newVal = cloned;
          node = node.parent;
        }
        return true;
      },
      get: (target, key, receiver) => {
        const res = (this.oldToNew.get(target) ?? target)[key];
        return isJSONObject(res) ? this.createProxy(res) : res;
      },
    });
  }
}
```

## 使对象不可变

```js
const arrayMutableMethods = [
  'pop',
  'push',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse',
];

function isJSONObject(value) {
  return typeof value === 'object' && value !== null;
}

function createProxy(obj) {
  const isArr = Array.isArray(obj);
  return new Proxy(obj, {
    set(target, key, newVal, receiver) {
      if (isArr && !isNaN(Number(key))) {
        throw `Error Modifying Index: ${key}`;
      }
      throw `Error Modifying: ${key}`;
    },
    get(target, key, receiver) {
      if (isArr && arrayMutableMethods.includes(key)) {
        return function () {
          throw `Error Calling Method: ${key}`;
        };
      }
      const res = Reflect.get(target, key, receiver);
      return isJSONObject(res) ? createProxy(res) : res;
    },
  });
}

function makeImmutable(obj) {
  return createProxy(obj);
}
```

## 无穷方法对象

```js
function createInfiniteObject() {
  return new Proxy(
    {},
    {
      get(target, key, receiver) {
        return function () {
          return key;
        };
      },
    }
  );
}
```
