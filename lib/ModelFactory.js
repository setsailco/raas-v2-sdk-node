/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const AccountSummaryModel = require('../lib/Models/AccountSummaryModel');
const CustomerModel = require('../lib/Models/CustomerModel');
const AccountModel = require('../lib/Models/AccountModel');
const CreateCustomerRequestModel = require('../lib/Models/CreateCustomerRequestModel');
const CreateAccountRequestModel = require('../lib/Models/CreateAccountRequestModel');
const RaasServerErrorModel = require('../lib/Models/RaasServerErrorModel');
const SystemStatusResponseModel = require('../lib/Models/SystemStatusResponseModel');
const CatalogModel = require('../lib/Models/CatalogModel');
const BrandModel = require('../lib/Models/BrandModel');
const ItemModel = require('../lib/Models/ItemModel');
const OrderModel = require('../lib/Models/OrderModel');
const CurrencyBreakdownModel = require('../lib/Models/CurrencyBreakdownModel');
const NameEmailModel = require('../lib/Models/NameEmailModel');
const ExchangeRateResponseModel = require('../lib/Models/ExchangeRateResponseModel');
const GetOrdersResponseModel = require('../lib/Models/GetOrdersResponseModel');
const ResendOrderResponseModel = require('../lib/Models/ResendOrderResponseModel');
const CreateOrderRequestModel = require('../lib/Models/CreateOrderRequestModel');
const RewardModel = require('../lib/Models/RewardModel');
const RewardCredentialModel = require('../lib/Models/RewardCredentialModel');
const ExchangeRateModel = require('../lib/Models/ExchangeRateModel');
const PageModel = require('../lib/Models/PageModel');
const RaasClientErrorModel = require('../lib/Models/RaasClientErrorModel');
const RaasGenericException = require('../lib/Exceptions/RaasGenericException');
const RaasClientException = require('../lib/Exceptions/RaasClientException');
const RaasServerException = require('../lib/Exceptions/RaasServerException');

const classMap = {
    AccountSummaryModel,
    CustomerModel,
    AccountModel,
    CreateCustomerRequestModel,
    CreateAccountRequestModel,
    RaasServerErrorModel,
    SystemStatusResponseModel,
    CatalogModel,
    BrandModel,
    ItemModel,
    OrderModel,
    CurrencyBreakdownModel,
    NameEmailModel,
    ExchangeRateResponseModel,
    GetOrdersResponseModel,
    ResendOrderResponseModel,
    CreateOrderRequestModel,
    RewardModel,
    RewardCredentialModel,
    ExchangeRateModel,
    PageModel,
    RaasClientErrorModel,
    RaasGenericException,
    RaasClientException,
    RaasServerException,
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
    /**
     * Creates instance of a model class
     * @param  modelName  {string}  Name of class to instantiate
     * @returns  {object} Instance of the model class
     */
    static getInstance(modelName) {
        return new classMap[modelName]();
    }
}

module.exports = ModelFactory;
