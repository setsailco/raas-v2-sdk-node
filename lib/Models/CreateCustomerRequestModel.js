/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of CreateCustomerRequestModel
 */
class CreateCustomerRequestModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.customerIdentifier = this.constructor.getValue(obj.customerIdentifier);
        this.displayName = this.constructor.getValue(obj.displayName);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'customerIdentifier', realName: 'customerIdentifier' },
            { name: 'displayName', realName: 'displayName' },
        ]);
    }
}

module.exports = CreateCustomerRequestModel;
