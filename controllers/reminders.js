const Fasting = require('../models/fastings');
const joi = require('@hapi/joi');

module.exports = class ReminderController {
  static async get(ctx, next) {

  }

  static async getOne(ctx, next) {

  }

  static get createSchema() {
    return joi.object().keys({
      description: joi.string().required(),
      time: joi.date().required(),
    });
  }

  static async create(ctx, next) {

  }

  static get updateSchema() {
    return joi.object().keys({
      description: joi.string(),
      time: joi.date()
    })
  }

  static async update(ctx, next) {
    //req.body.time should > time
  }

  static async delete(ctx, next) {

  }
}