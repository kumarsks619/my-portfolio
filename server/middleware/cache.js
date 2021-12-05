const cache = require('apicache')

const cacheMiddleware = cache.middleware('3 minutes')
const clearCache = () => cache.clear()

module.exports = { cacheMiddleware, clearCache }
