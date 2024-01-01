# controller

- `@Controller` 指定类内接口的根路径
- `@Get`、`@Post` 等函数注解指定接口的剩余路径
- `@Query(key?: string)` 接收 query param
- `@Param(key?: string)` 接收 path param
- `@Body(key?: string)` 接收 form param
- `@Headers(name?: string)` 接收请求头

```ts
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```
