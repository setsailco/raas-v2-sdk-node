/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of RewardModel
 */
class RewardModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.credentials = this.constructor.getValue(obj.credentials);
        this.credentialList = this.constructor.getValue(obj.credentialList);
        this.redemptionInstructions = this.constructor.getValue(obj.redemptionInstructions);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'credentials', realName: 'credentials' },
            {
                name: 'credentialList',
                realName: 'credentialList',
                array: true,
                type: 'RewardCredentialModel',
            },
            { name: 'redemptionInstructions', realName: 'redemptionInstructions' },
        ]);
    }
}

module.exports = RewardModel;
