import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

export const Card = sequelize.define('Card', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  position: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});