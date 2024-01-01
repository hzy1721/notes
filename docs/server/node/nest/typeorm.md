# TypeORM

Nest 官方提供了对 TypeORM 的集成。

## 安装

```sh
npm i @nestjs/typeorm typeorm
npm i mysql2 # 数据库相关包
```

在 app module 的 imports 指定连接配置：

```ts
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
```
