import { registerAs } from '@nestjs/config';
import typeOrmConfig from './typeOrm.config';

export interface DatabaseConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export default registerAs('database', (): DatabaseConfig => typeOrmConfig);
