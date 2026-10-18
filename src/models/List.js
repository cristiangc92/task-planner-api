import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export const List = sequelize.define('List', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  position: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});