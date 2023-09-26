# 查询元素

## getElementById

ID 对应的元素。

```js
getElementById(id);
```

返回值：

- Element 或 null

## getElementsByClassName

包含类名的所有元素。

```js
getElementsByClassName(names);
```

返回值：

- HTMLCollection

## getElementsByName

匹配 name 的所有元素。

```js
getElementsByName(name);
```

返回值：

- NodeList

## getElementsByTagName

对应标签的所有元素。

```js
getElementsByTagName(name);
```

返回值：

- HTMLCollection

## getElementsByTagNameNS

指定 namespace 下查询对应标签的所有元素。

```js
getElementsByTagNameNS(namespace, name);
```

返回值：

- NodeList

## querySelector

匹配选择器的第一个元素。

```js
querySelector(selectors);
```

返回值：

- Element 或 null

## querySelectorAll

匹配选择器的所有元素。

```js
querySelectorAll(selectors);
```

返回值：

- NodeList
