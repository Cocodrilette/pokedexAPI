export const evnConfig = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongodb: process.env.MONGO_DB,
  port: process.env.PORT,
  defaultLimit: parseInt(process.env.DEFAULT_LIMIT),
});
