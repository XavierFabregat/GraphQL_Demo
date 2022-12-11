import { sequelize } from "./index.js";
import { DataTypes } from "sequelize";
import { v4 as  uuidv4 } from 'uuid'

export const Post = sequelize.define('Posts', {
    id: {
        type: DataTypes.STRING,
        defaultValue: uuidv4(),
        primaryKey: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING,
        defaultValue: String(Date.now())
    },
    picUrl: {
        type: DataTypes.STRING,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
})
