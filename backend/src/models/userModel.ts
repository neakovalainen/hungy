import { Model, DataTypes, type InferAttributes } from "sequelize"

import { sequelize } from '../utils/db.ts'

export class User extends Model<InferAttributes<User>> {
  declare id: number;
  declare username: string;
  declare password: string;
}

User.init({
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
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'user'
})

User.sync()