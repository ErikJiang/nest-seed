<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# [NEST](https://github.com/nestjs/nest) 种子工程框架



## 安装依赖

``` bash
$ npm install
```

## 创建数据库

``` sql
CREATE DATABASE nestseed DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
```
配置 `config/typeorm.ts` 数据库连接参数;

## 启动项目

``` bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# incremental rebuild (webpack)
$ npm run webpack
$ npm run start:hmr

# production mode
$ npm run start:prod
```

## 测试

``` bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 预计需要支持

* Swagger
* TypeORM
* JWT
* Logger

---
