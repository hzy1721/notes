# SQL 题目

## 重名学生的名字

- 窗口函数的字段不能用于 where，需要在外面包一层

```sql
create table student (
  id int primary key,
  name varchar(30)
);

insert into student values (1, 'hzy');
insert into student values (2, 'hzy');
insert into student values (3, 'react');
insert into student values (4, 'react');
insert into student values (5, 'vue');

select name
from (
  select
    name,
    row_number() over (partition by name) as row_number
  from student
)
where row_number = 2;
-- hzy
-- react
```
