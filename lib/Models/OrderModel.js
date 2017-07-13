/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of OrderModel
 */
class OrderModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.accountIdentifier = this.constructor.getValue(obj.accountIdentifier);
        this.amountCharged = this.constructor.getValue(obj.amountCharged);
        this.createdAt = this.constructor.getValue(obj.createdAt);
        this.customerIdentifier = this.constructor.getValue(obj.customerIdentifier);
        this.denomination = this.constructor.getValue(obj.denomination);
        this.referenceOrderID = this.constructor.getValue(obj.referenceOrderID);
        this.reward = this.constructor.getValue(obj.reward);
        this.rewardName = this.constructor.getValue(obj.rewardName);
        this.sendEmail = this.constructor.getValue(obj.sendEmail);
        this.status = this.constructor.getValue(obj.status);
        this.utid = this.constructor.getValue(obj.utid);
        this.campaign = this.constructor.getValue(obj.campaign);
        this.emailSubject = this.constructor.getValue(obj.emailSubject);
        this.externalRefID = this.constructor.getValue(obj.externalRefID);
        this.message = this.constructor.getValue(obj.message);
        this.notes = this.constructor.getValue(obj.notes);
        this.recipient = this.constructor.getValue(obj.recipient);
        this.sender = this.constructor.getValue(obj.sender);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'accountIdentifier', realName: 'accountIdentifier' },
            { name: 'amountCharged', realName: 'amountCharged', type: 'CurrencyBreakdownModel' },
            {
                name: 'createdAt',
                realName: 'createdAt',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            { name: 'customerIdentifier', realName: 'customerIdentifier' },
            { name: 'denomination', realName: 'denomination', type: 'CurrencyBreakdownModel' },
            { name: 'referenceOrderID', realName: 'referenceOrderID' },
            { name: 'reward', realName: 'reward', type: 'RewardModel' },
            { name: 'rewardName', realName: 'rewardName' },
            { name: 'sendEmail', realName: 'sendEmail' },
            { name: 'status', realName: 'status' },
            { name: 'utid', realName: 'utid' },
            { name: 'campaign', realName: 'campaign' },
            { name: 'emailSubject', realName: 'emailSubject' },
            { name: 'externalRefID', realName: 'externalRefID' },
            { name: 'message', realName: 'message' },
            { name: 'notes', realName: 'notes' },
            { name: 'recipient', realName: 'recipient', type: 'NameEmailModel' },
            { name: 'sender', realName: 'sender', type: 'NameEmailModel' },
        ]);
    }
}

module.exports = OrderModel;
