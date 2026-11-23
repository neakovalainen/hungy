import { DataTypes, QueryInterface } from "sequelize"

export const up = async ({ context: queryInterface }: { context: QueryInterface}) => {
    await queryInterface.createTable('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password_hash: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false
    }
  }),
  await queryInterface.createTable('ingredients', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'users', key: 'id' }
    }
  })
}

export const down = async ({ context: queryInterface }: { context: QueryInterface}) => {
  await queryInterface.dropTable('ingredients')
  await queryInterface.dropTable('users')
}