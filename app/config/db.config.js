module.exports = {
  HOST: process.env.DB_HOST || '151.106.124.51',
  USER: process.env.DB_USER ||  'u283850121_idcardsform',
  PASSWORD: process.env.DB_PASSWORD || '?SpuVnmaBS8p',
  DB: process.env.DB_NAME || 'u283850121_idcardsform',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}
