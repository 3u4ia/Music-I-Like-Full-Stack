const UserAccountDetailsRepository = require('../repositories/userAccountDetailsRepository');
const logger = require('../logger/logger');

const getAccountDetails = async (request, response) => {
    const userId = request.query.userId;  // huh? where is this coming from how do you get the userId is this a react thingy?
    const userAccountDetailsRepository = new UserAccountDetailsRepository();
    const existingUserAccountDetails = await userAccountDetailsRepository.select(userId);
    logger.info(`the userId is ${userId}`);
    if (existingUserAccountDetails) {
        logger.info(`existingUserAccountDetails ${existingUserAccountDetails.first_name}`);
        return response.status(200).json({
            id: existingUserAccountDetails.id,
            userId: existingUserAccountDetails.user_id,
            firstName: existingUserAccountDetails.first_name,
            lastName: existingUserAccountDetails.last_name,
            address1: existingUserAccountDetails.address_1,
            address2: existingUserAccountDetails.address_2,
            city: existingUserAccountDetails.city,  //might be a problem because same name as sql column
            state: existingUserAccountDetails.state,  //might be a problem because same name as sql column
            zipCode: existingUserAccountDetails.zip_code,
            phoneNumber: existingUserAccountDetails.phone_number,
            email: existingUserAccountDetails.email    //might be a problem because same name as sql column
        });
    } else {
        logger.info('No data for that account.');
        return response.status(204).json({}); //heh???????????????
    }
};
const updateAccountDetails = async(request, response) => {
    const {userId, firstName, lastName, address1, address2,
        city, state, zipCode, phoneNumber, email} = request.body;
    const userAccountDetailsRepository = new UserAccountDetailsRepository();
    const existingUserAccountDetails = await userAccountDetailsRepository.select(userId);
    logger.info(`The userId is ${userId}`);
    if(existingUserAccountDetails){
        logger.info(`changing info for account with firstName: ${existingUserAccountDetails.first_name}`);
        await userAccountDetailsRepository.update(userId, firstName, lastName, address1, address2,
            city, state, zipCode, phoneNumber, email);
        logger.info(`Account info successfully changed`)
        return response.status(200).json({userId, firstName, lastName, address1, address2, city, state, zipCode, phoneNumber, email});
    }
    else {
        const error = 'No user account found with that id'
        logger.error(error)
        return response.status(404).json({error});
    }//
};


const createAccountDetails = async (request, response) => {
    const {
        userId, firstName, lastName, address1, address2,
        city, state, zipCode, phoneNumber, email
    } = request.body;

    const userAccountDetailsRepository = new UserAccountDetailsRepository();
    const userAccountDetails = await userAccountDetailsRepository.insert(
        userId, firstName, lastName, address1, address2,
        city, state, zipCode, phoneNumber, email
    );
    return response.status(201).json({
        id: userAccountDetails.id,
        firstName: userAccountDetails.firstName,
        lastName: userAccountDetails.lastName,
        address1: userAccountDetails.address1,
        address2: userAccountDetails.address2,
        city: userAccountDetails.city,
        state: userAccountDetails.state,
        zipCode: userAccountDetails.zipCode,
        phoneNumber: userAccountDetails.phoneNumber,
        email: userAccountDetails.email
    });
};

module.exports = { createAccountDetails, getAccountDetails, updateAccountDetails };