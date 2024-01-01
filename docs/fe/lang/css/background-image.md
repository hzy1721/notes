# background-image

背景图片。

- `none`
- `<image>`

## \<image\>

- `url()`
- `<gradient>`
- `element()`
- `image()`
- `cross-fade()`
- `image-set()`

## \<gradient\>

渐变，属于 `<image>`。

- `linear-gradient()`
- `radial-gradient()`
- `repeating-linear-gradient()`
- `repeating-radial-gradient()`
- `conic-gradient()`

## linear-gradient()

```
<linear-gradient()> =
  linear-gradient( [ <linear-gradient-syntax> ] )

<linear-gradient-syntax> =
  [ <angle> | to <side-or-corner> ]? , <color-stop-list>

<side-or-corner> =
  [ left | right ]  ||
  [ top | bottom ]

<color-stop-list> =
  <linear-color-stop> , [ <linear-color-hint>? , <linear-color-stop> ]#

<linear-color-stop> =
  <color> <length-percentage>?

<linear-color-hint> =
  <length-percentage>

<length-percentage> =
  <length>      |
  <percentage>
```
