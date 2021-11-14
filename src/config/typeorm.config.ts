import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'ec2-44-197-94-126.compute-1.amazonaws.com',
  port: 5432,
  username: 'obpzrfqmpsykhg',
  password: '39c12ac1be68677d74eafdd20d192cb172845984603ec528b55e84a84e29f914',
  database: 'dd5d600qho5nvd',

  autoLoadEntities: true,
  synchronize: true,

  ssl: {
    rejectUnauthorized: false,
    ca: process.env.SSL_CERT,
  },
};

export { typeOrmConfig };
