

const Users = require('../models/users');
const joi = require('@@hapi/joi');

module.exports = class UsersController{
  static async get(ctx, next){

  }

  static async getOne(ctx, next){

  }

  static get createSchema(){
    return joi.object().keys({
      username: joi.string().lowercase().alphanum().required(),
      gender: joi.string().lowercase().valid(['male','female']).required()
    })
  }

  static async create(ctx, next){

  }
}
