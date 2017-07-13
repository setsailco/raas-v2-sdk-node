/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of PageModel
 */
class PageModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.number = this.constructor.getValue(obj.number);
        this.elementsPerBlock = this.constructor.getValue(obj.elementsPerBlock);
        this.resultCount = this.constructor.getValue(obj.resultCount);
        this.totalCount = this.constructor.getValue(obj.totalCount);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'number', realName: 'number' },
            { name: 'elementsPerBlock', realName: 'elementsPerBlock' },
            { name: 'resultCount', realName: 'resultCount' },
            { name: 'totalCount', realName: 'totalCount' },
        ]);
    }
}

module.exports = PageModel;
