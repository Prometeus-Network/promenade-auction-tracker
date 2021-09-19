require('dotenv').config()

const healthcheck = require('../promenade-thumbnail-indexer/healthcheck')
const trackAuction = require('./services/auctiontracker')

trackAuction()
healthcheck()
