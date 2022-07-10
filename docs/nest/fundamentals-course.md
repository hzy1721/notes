# TypeORM 迁移指南

[NestJS Fundamentals Course](https://www.bilibili.com/video/BV1T44y1W7Si) 使用的旧版 TypeORM 与目前的最新版 (0.3.7) 语法有较大差异，本文记录了如何迁移到 0.3.7 语法。

## 25 Using Repository to Access Database

`coffees.service.ts`

```ts
async findOne(id: number) {
  const coffee = await this.coffeeRepository.findOne({
    where: { id: id },
    relations: ['flavors'],
  });
  if (!coffee) {
    throw new NotFoundException(`Coffee #${id} not found`);
  }
  return coffee;
}
```

## 32 Setting up Migrations

```sh
npx typeorm migration:create src/migrations/CoffeeRefactor
```

`ormconfig.ts`

```ts
export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
});
```

```sh
npx typeorm-ts-node-esm migration:run -d ormconfig.ts
```

```sh
npx typeorm-ts-node-esm migration:revert -d ormconfig.ts
```

```sh
npx typeorm-ts-node-esm migration:generate src/migrations/SchemaSync -d ormconfig.ts
```

## 41 Create a Dynamic Module

`database.module.ts`

```ts
static register(options: DataSourceOptions): DynamicModule {
  return {
    module: DatabaseModule,
    providers: [
      {
        provide: 'CONNECTION',
        useValue: new DataSource(options).initialize(),
      },
    ],
  };
}
```