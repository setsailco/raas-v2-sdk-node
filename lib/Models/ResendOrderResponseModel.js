/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of ResendOrderResponseModel
 */
class ResendOrderResponseModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.createdAt = this.constructor.getValue(obj.createdAt);
        this.id = this.constructor.getValue(obj.id);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            {
                name: 'createdAt',
                realName: 'createdAt',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
            { name: 'id', realName: 'id' },
        ]);
    }
}

module.exports = ResendOrderResponseModel;
