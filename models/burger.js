const orm = require ("../config/orm.js")

console.log("burgers.js")

const burger = {
	readAll: function (cb){ // can these be anonymous funs??
		orm.selectAll("burgers", res => {
			cb(res)
		})
	},
	
	create: function (cols, vals, cb) { // can these be anonymous funs??
		orm.insertOne("burgers", cols, vals, res => {
			cb(res)
		})
	},

	update: function (colVals, condition, cb) { // can these be anonymous funs??
		orm.updateOne("burgers", colVals, condition, res => {
			cb(res)
		})
	}
}

module.exports = burger