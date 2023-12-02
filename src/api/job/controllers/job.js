'use strict';

/**
 * job controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::job.job', ({ strapi }) => ({
  // async totalCustomers(ctx) {
  //   try {
  //     const count = await strapi.db.query('api::job.job').count();
  //     // const cat = strapi.db.query().create({})
  //     return { data: { count } };
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
}));
