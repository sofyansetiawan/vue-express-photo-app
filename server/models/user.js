'use strict';
const {
  Model
} = require('sequelize');

const { hashPass } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'invalid email format'
        },
        notEmpty: {
          args: true,
          msg: 'email cannot be empty'
        }
      },
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'password cannot be empty'
        }
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user, opt) => {
        user.password = hashPass(user.password)
      }
    },
    modelName: 'User'
  });
  return User;
};