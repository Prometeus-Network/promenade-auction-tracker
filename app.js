require('dotenv').config()

const healthcheck = require('../healthcheck')
const trackAuction = require('./services/auctiontracker')

trackAuction()
healthcheck()
