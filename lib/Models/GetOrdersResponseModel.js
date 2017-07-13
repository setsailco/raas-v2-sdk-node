/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of GetOrdersResponseModel
 */
class GetOrdersResponseModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.page = this.constructor.getValue(obj.page);
        this.orders = this.constructor.getValue(obj.orders);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'page', realName: 'page', type: 'PageModel' },
            { name: 'orders', realName: 'orders', array: true, type: 'OrderModel' },
        ]);
    }
}

module.exports = GetOrdersResponseModel;
