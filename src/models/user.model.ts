import { sequelize } from "./index.js";
import { DataTypes } from "sequelize";
import { v4 as  uuidv4 } from 'uuid'

export const User = sequelize.define('Users', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: uuidv4()
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    posts: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [] 
    }
}, {
    timestamps: false,
})
