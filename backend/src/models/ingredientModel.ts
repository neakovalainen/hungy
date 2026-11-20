import { Model, DataTypes } from 'sequelize'

import { sequelize } from '../utils/db.ts'

export class Ingredient extends Model {}

Ingredient.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'ingredient'
})
