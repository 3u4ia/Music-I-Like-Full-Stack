const UserAccountsRepository = require('../repositories/userAccountsRepository'); //for the sql stuff ig
const logger = require('../logger/logger'); //for logs
const bcrypt = require('bcrypt');
const saltRounds = 10; //also for encryption idk

const registerLoginCredentials = async (request, response) =>{
    const { userName, password } = request.body; //pulling out the userName and password given from the user in the request
    const userAccountsRepository = new UserAccountsRepository();
    const existingUserAccount = await  userAccountsRepository.select(userName);
    if(!existingUserAccount){//if the selection failed(meaning the username doesn't exist in the db then do this stuff
        logger.info('Creating new record in user_account table');
        const salt = await bcrypt.genSalt(saltRounds);
        const passwordHash = await bcrypt.hash(password, salt);

        const newUserAccount = await userAccountsRepository.insert(userName, passwordHash);
        const id = newUserAccount.id;
        logger.info(`Record created with id ${id}`);
        return response.status(201).json({ id });
    } else { //if the userAccount exists do this stuff
        const error = `${userName} already has an account`;
        logger.error(error);
        return response.status(409).json({ error });
    }
};

module.exports = registerLoginCredentials;