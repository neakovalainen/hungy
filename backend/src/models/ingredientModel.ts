import { Model, DataTypes, type InferAttributes } from 'sequelize'

import { sequelize } from '../utils/db.ts'

export class Ingredient extends Model<InferAttributes<Ingredient>> {
  declare id: number;
  declare name: string;
  declare user_id: number;
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
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'users', key: 'id' }
    }
  }, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'ingredient'
})
