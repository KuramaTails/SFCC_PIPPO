'use strict';

/**
 * validates the current users address
 * @param {String} email - The current user's basket
 * @returns {Object} an error object
 */

function subscribe(email) {

    var result = { error: false, message: null };
    var Transaction = require('dw/system/Transaction');
    Transaction.wrap(function () {
        var CustomObject = CustomObjectMgr.createCustomObject('Newsletter_Forms', email);
        CustomObject.custom.email = email;
    }); 
}

exports.subscribe = subscribe;