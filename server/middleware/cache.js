const cache = require('apicache')

const cacheMiddleware = cache.middleware('3 minutes')

module.exports = cacheMiddleware
