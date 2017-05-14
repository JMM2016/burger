const connection = require ("../config/connection.js")

console.log("orm.js")

// Helper function for SQL syntax.
/*
function objToSql(ob) {
  var arr = []

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key])
    }
  }

  return arr.toString();
}*/

// Helper function for SQL syntax.
function quotify(input) {
	return input.map( currVal => {
		return "'" + currVal + "'"
	})
}

function testStr(table, cols, vals) {
		const queryString = `INSERT INTO '${table}' ('${cols.toString()}') VALUES ('${vals.toString()}')`	
		console.log(queryString)
		// INSERT INTO 'burgers' ('first,sec,third') VALUES (''blah','rah','ha'')
}

function testQuotify() {
	let cols = ["blah", "rah", "ha"]
	console.log(`(${cols})`)	
	cols = quotify(cols)
	console.log(cols.toString())
	console.log(`(${cols})`)
	
	let vals = ["first","sec","third"]
	testStr("burgers", vals, cols)	
}

// A Boolean indicating whether or not the object has the specified property as own property.

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) { // why check if own prop?
      arr.push(key + "=" + ob[key]);
    }
  }
  return arr.toString();
}


const orm = {

  selectAll: function (table, cb) {
    const query = `SELECT * FROM '${table}'`

    connection.query(query, (err, result) => {
      if (err) {
        console.log(err)
      }
      cb(result)
    })
  },

  // TODO: values need to be in quotes, cols don't
  insertOne: function (table, cols, vals, cb) { // `(${cols})` = ('blah','rah','ha')
    vals = quotify(vals)
    const queryString =
      `INSERT INTO '${table}' ('${cols.toString()}') VALUES ('${vals.toString()}')`

    query(queryString, cb)
  },

    // colVals = [{burger_name: "New Monster"},{},...]
    // don't need () w/ UPDATE
    updateOne: function (table, colsVals, condition) {
      // UPDATE table_name
      // SET column1 = value1, column2 = value2, ...
      // WHERE condition;

      // UPDATE Customers
      // SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
      // WHERE CustomerID = 1;

      // where burger_name = "monster"
      let queryString = "UPDATE " + table
      queryString += " SET ";
      queryString += objToSql(colVals);
      queryString += " WHERE ";
      queryString += condition;

      console.log(queryString)

      query(queryString, cb)
    }
}


function query(queryString, cb) {
	connection.query(queryString, (err, result) => {
		if (err) {
			console.err(err)
		}
		console.log(result)
		cb(result)
	})
}		

module.exports = orm