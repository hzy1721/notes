# createElement

JSX 语法会编译为 `React.createElement` 函数调用，是创建 React 元素的核心。

```ts
// DOM 元素

// input 元素
// TODO: generalize this to everything in `keyof ReactHTML`, not just "input"
function createElement(
  type: 'input',
  props?:
    | (InputHTMLAttributes<HTMLInputElement> &
        ClassAttributes<HTMLInputElement>)
    | null,
  ...children: ReactNode[]
): DetailedReactHTMLElement<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// 大部分 HTML 元素
function createElement<P extends HTMLAttributes<T>, T extends HTMLElement>(
  type: keyof ReactHTML,
  props?: (ClassAttributes<T> & P) | null,
  ...children: ReactNode[]
): DetailedReactHTMLElement<P, T>;

// svg 元素
function createElement<P extends SVGAttributes<T>, T extends SVGElement>(
  type: keyof ReactSVG,
  props?: (ClassAttributes<T> & P) | null,
  ...children: ReactNode[]
): ReactSVGElement;

// 其他字符串类型元素
function createElement<P extends DOMAttributes<T>, T extends Element>(
  type: string,
  props?: (ClassAttributes<T> & P) | null,
  ...children: ReactNode[]
): DOMElement<P, T>;

// 自定义组件

// 函数组件 FC
function createElement<P extends {}>(
  type: FunctionComponent<P>,
  props?: (Attributes & P) | null,
  ...children: ReactNode[]
): FunctionComponentElement<P>;

// 类组件 CC
function createElement<P extends {}>(
  type: ClassType<
    P,
    ClassicComponent<P, ComponentState>,
    ClassicComponentClass<P>
  >,
  props?:
    | (ClassAttributes<ClassicComponent<P, ComponentState>> & P)
    | null,
  ...children: ReactNode[]
): CElement<P, ClassicComponent<P, ComponentState>>;

// 其他类型组件
function createElement<
  P extends {},
  T extends Component<P, ComponentState>,
  C extends ComponentClass<P>
>(
  type: ClassType<P, T, C>,
  props?: (ClassAttributes<T> & P) | null,
  ...children: ReactNode[]
): CElement<P, T>;

//
function createElement<P extends {}>(
  type: FunctionComponent<P> | ComponentClass<P> | string,
  props?: (Attributes & P) | null,
  ...children: ReactNode[]
): ReactElement<P>;
```
