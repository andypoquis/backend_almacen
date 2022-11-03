'use strict';

/**
 * area-production service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::area-production.area-production');
