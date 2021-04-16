// const { db } = require('./.env')

// module.exports = {
// 	client: 'postgresql',
// 	connection: db,
// 	pool: {
// 		min: 2,
// 		max: 10
// 	},
// 	migrations: {
// 		tableName: 'knex_migrations'
// 	}
// };
module.exports = {
	client: 'postgresql',
	connection: {
		database: 'knowledge_final',
		user: 'postgres',
		password: '123456'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
}
