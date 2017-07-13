/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of AccountSummaryModel
 */
class AccountSummaryModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.accountIdentifier = this.constructor.getValue(obj.accountIdentifier);
        this.displayName = this.constructor.getValue(obj.displayName);
        this.createdAt = this.constructor.getValue(obj.createdAt);
        this.status = this.constructor.getValue(obj.status);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'accountIdentifier', realName: 'accountIdentifier' },
            { name: 'displayName', realName: 'displayName' },
            {
                name: 'createdAt',
                realName: 'createdAt',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            { name: 'status', realName: 'status' },
        ]);
    }
}

module.exports = AccountSummaryModel;
