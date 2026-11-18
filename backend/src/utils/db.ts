import { Sequelize } from "sequelize"
import { Umzug, SequelizeStorage } from "umzug"

import config from './config.ts'

export const sequelize = new Sequelize(config.DATABASE_URL!, {
  dialectOptions: {
    ssl: {
      disable: true,
      rejectUnauthorized: false
    }
  }
})

const runMigrations = async () => {
  const migrator = new Umzug({
    migrations: {
      glob: 'src/migrations/*.ts',
    },
    storage: new SequelizeStorage({ sequelize, tableName: 'migrations' }),
    context: sequelize.getQueryInterface(),
    logger: console,
  })

  const migrations = await migrator.up()
  console.log('migrations okkiii!', {
    files: migrations.map((migration) => migration.name)
  })
}

export const startDatabase = async () => {
  try {
    await sequelize.authenticate()
    await runMigrations()
    console.log('authentication and migrations maybe successful')
  } catch (error) {
    console.error('unable to connect because of: ', error)
  }
  return
}
