const getFeed = require('../routes/api/route_helpers/updates/getFeed')
const getUsersUpdates = require('./getUsersUpdates')
const postUpdate = require('./postUpdate')
module.export = {
  getFeed,
  getUsersUpdates,
  postUpdate
}