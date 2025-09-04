import knex from 'knex'
import config from '../knexfile.js'

const environment = process.env.NODE_ENV
const connection = knex(config[environment])


export default connection