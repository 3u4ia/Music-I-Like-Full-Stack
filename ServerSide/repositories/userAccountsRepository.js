const dbClient = require('../db/client');

class UserAccountsRepository {
    constructor() {
    }

    async insert(userName, password) {
        const sql = `INSERT INTO user_accounts (user_name, password)
            VALUES($1, $2)
            RETURNING id`;
        // the stuff in the parameters are the column names in the user_accounts table
        const values = [userName, password]; // so this is for the $1 $2 stuff
        const results = await dbClient.query(sql, values); // this passes in the sql along with the values that will replae the $1 and $2 stuff
        return results.rows[0]; // This returns the row that was created
    }

    async select(userName) { //this is prob for checking if a user is already registered
        const sql = `SELECT id, user_name, password FROM user_accounts WHERE user_name = $1`;
        const values = [userName];
        const results = await dbClient.query(sql, values);
        return results.rows[0];
    }
}

module.exports = UserAccountsRepository;