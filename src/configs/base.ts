export const config = {
  PORT: process.env.PORT || 3000,
  DB_URL: process.env.DB_URL || 'mongodb://localhost/sudoku-test',
  DB_USER: process.env.DB_USER || '',
  DB_PASS: process.env.DB_PASS || '',
  DB_NAME: process.env.DB_NAME || 'katha',
};

export const mongoOptions = {
  // https://stackoverflow.com/questions/17385394/mongodb-mongoose-poolsize-recommendation
  maxPoolSize: parseInt(process.env.POOL_SIZE || '100', 10),
};

export const dbUrl = `${config.DB_URL.replaceAll('<user>', config.DB_USER)
  .replaceAll('<password>', encodeURIComponent(config.DB_PASS))
  .replaceAll('<dbName>', config.DB_NAME)}`;
