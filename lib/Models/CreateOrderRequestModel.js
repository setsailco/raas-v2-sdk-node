/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of CreateOrderRequestModel
 */
class CreateOrderRequestModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.accountIdentifier = this.constructor.getValue(obj.accountIdentifier);
        this.amount = this.constructor.getValue(obj.amount);
        this.customerIdentifier = this.constructor.getValue(obj.customerIdentifier);
        this.sendEmail = this.constructor.getValue(obj.sendEmail);
        this.utid = this.constructor.getValue(obj.utid);
        this.campaign = this.constructor.getValue(obj.campaign);
        this.emailSubject = this.constructor.getValue(obj.emailSubject);
        this.externalRefID = this.constructor.getValue(obj.externalRefID);
        this.message = this.constructor.getValue(obj.message);
        this.recipient = this.constructor.getValue(obj.recipient);
        this.sender = this.constructor.getValue(obj.sender);
        this.notes = this.constructor.getValue(obj.notes);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'accountIdentifier', realName: 'accountIdentifier' },
            { name: 'amount', realName: 'amount' },
            { name: 'customerIdentifier', realName: 'customerIdentifier' },
            { name: 'sendEmail', realName: 'sendEmail' },
            { name: 'utid', realName: 'utid' },
            { name: 'campaign', realName: 'campaign' },
            { name: 'emailSubject', realName: 'emailSubject' },
            { name: 'externalRefID', realName: 'externalRefID' },
            { name: 'message', realName: 'message' },
            { name: 'recipient', realName: 'recipient', type: 'NameEmailModel' },
            { name: 'sender', realName: 'sender', type: 'NameEmailModel' },
            { name: 'notes', realName: 'notes' },
        ]);
    }
}

module.exports = CreateOrderRequestModel;
