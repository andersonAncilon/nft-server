import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'ec2-3-209-38-221.compute-1.amazonaws.com',
  port: 5432,
  username: 'fcjbxdkigxtmun',
  password: 'be24475a30fd59457247572a147a6318a21e23b953d1392b5d98290e932ef644',
  database: 'd3cvshh2s19f32',

  autoLoadEntities: true,
  synchronize: true,

  ssl: {
    rejectUnauthorized: false,
    ca: process.env.SSL_CERT,
  },
};

export { typeOrmConfig };
