
const Fasting = require('../models/fastings');
const joi = require('@@hapi/joi');

module.exports = class FastingController{
  static async get(ctx, next){

  }


  static async getOne(ctx, next){

  }

  static get createSchema(){
    return joi.object().keys({
      startTime: joi.date().required(),
      endDate: joi.date(),
      description: joi.string()
    })
  }

  static async create(ctx, next){

  }

  static get updateSchema(){
    return joi.object().keys({
      startTime: joi.date(),
      endTime: joi.date(),
      description: joi.string()
    })
  }

  static async update(ctx, next){

  }

  static async delete(ctx, next){

  }

}
