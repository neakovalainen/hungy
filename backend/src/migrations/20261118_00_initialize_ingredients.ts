import { DataTypes, QueryInterface } from "sequelize"


export const up = async ({ context: queryInterface }: { context: QueryInterface}) => {
  await queryInterface.createTable('ingredients', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  })
}

export const down = async ({ context: queryInterface }: { context: QueryInterface}) => {
  await queryInterface.dropTable('ingredients')
}
