# 模板编译

> 模板字符串

- 词法分析
- 语法分析

> 模板 AST

- AST 转换

> JS AST

- 代码生成

> 渲染函数

```js
const templateAST = parse(template); // 词法 + 语法分析
const jsAST = transform(templateAST); // AST 转换
const code = generate(jsAST); // 代码生成
```
