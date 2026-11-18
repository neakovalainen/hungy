import { Sequelize } from "sequelize"

import config from './config.ts'



export const sequelize = new Sequelize(config.DATABASE_URL!, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      disable: true,
      rejectUnauthorized: false
    }
  }
})

export const startDatabase = async () => {
  try {
    await sequelize.authenticate()
    console.log('connection successful')
  } catch (error) {
    console.error('unable to connect because of: ', error)
  }
}
