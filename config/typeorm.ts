import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const dbOptions: TypeOrmModuleOptions = {
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

export default dbOptions;