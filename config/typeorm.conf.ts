import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const DBOptions: TypeOrmModuleOptions = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "test",
    "password": "jiangink",
    "database": "nestseed",
    "entities": [
        "src/**/**.entity{.ts,.js}"
    ],
    "synchronize": true
};
