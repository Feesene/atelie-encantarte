import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  autoLoadEntities: true,
  // synchronize só em desenvolvimento; em produção use migrations.
  synchronize: process.env.NODE_ENV === 'development',
};
