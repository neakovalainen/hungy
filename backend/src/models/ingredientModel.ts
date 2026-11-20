import { Model, DataTypes, type InferAttributes } from 'sequelize'

import { sequelize } from '../utils/db.ts'

export class Ingredient extends Model<InferAttributes<Ingredient>> {
  declare id: number;
  declare name: string;
}

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
