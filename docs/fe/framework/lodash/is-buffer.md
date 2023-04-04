# isBuffer

```js
const freeGlobal =
  typeof global === 'object' &&
  global !== null &&
  global.Object === Object &&
  global;

const freeGlobalThis =
  typeof globalThis === 'object' &&
  globalThis !== null &&
  globalThis.Object == Object &&
  globalThis;

const freeSelf =
  typeof self === 'object' &&
  self !== null &&
  self.Object === Object &&
  self;

const root =
  freeGlobalThis || freeGlobal || freeSelf || Function('return this')();

const freeExports =
  typeof exports === 'object' &&
  exports !== null &&
  !exports.nodeType &&
  exports;

const freeModule =
  freeExports &&
  typeof module === 'object' &&
  module !== null &&
  !module.nodeType &&
  module;

const moduleExports = freeModule && freeModule.exports === freeExports;

const Buffer = moduleExports ? root.Buffer : undefined;

const nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

const isBuffer = nativeIsBuffer || (() => false);
```
