export interface Config {
  port: number;
  database: DatabaseConfig;
  rabbitmq: RabbitMQConfig;
  redis: RedisConfig;
}

export interface DatabaseConfig {
  type: any;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export interface RabbitMQConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  vhost: string;
  prefetchCount: number;
}

export interface RedisConfig {
  isSentinel: boolean;
  host: string;
  port: number;
  password?: string;
  set?: string;
}

export default (): Config => {
  return {
    port:
      process.env.NODE_ENV === 'production'
        ? 3000
        : parseInt(process.env.PORT, 10),
    database: {
      type: process.env.DB_TYPE,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    rabbitmq: {
      host: process.env.RABBITMQ_HOST,
      port: parseInt(process.env.RABBITMQ_PORT, 10),
      username: process.env.RABBITMQ_USERNAME,
      password: process.env.RABBITMQ_PASSWORD,
      vhost: process.env.RABBITMQ_VHOST,
      prefetchCount: parseInt(process.env.RABBITMQ_PREFETCH_COUNT, 10),
    },
    redis: {
      isSentinel: process.env.REDIS_IS_SENTINEL === 'true',
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT, 10),
      password: process.env.REDIS_PASSWORD,
      set: process.env.REDIS_SET,
    },
  };
};
