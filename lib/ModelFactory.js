/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const AccountSummaryModel = require('../lib/Models/AccountSummaryModel');
const ItemModel = require('../lib/Models/ItemModel');
const CurrencyBreakdownModel = require('../lib/Models/CurrencyBreakdownModel');
const NameEmailModel = require('../lib/Models/NameEmailModel');
const ExchangeRateResponseModel = require('../lib/Models/ExchangeRateResponseModel');
const CreateCustomerRequestModel = require('../lib/Models/CreateCustomerRequestModel');
const CreateAccountRequestModel = require('../lib/Models/CreateAccountRequestModel');
const RaasServerErrorModel = require('../lib/Models/RaasServerErrorModel');
const CatalogModel = require('../lib/Models/CatalogModel');
const BrandModel = require('../lib/Models/BrandModel');
const CustomerModel = require('../lib/Models/CustomerModel');
const AccountModel = require('../lib/Models/AccountModel');
const OrderModel = require('../lib/Models/OrderModel');
const GetOrdersResponseModel = require('../lib/Models/GetOrdersResponseModel');
const ResendOrderResponseModel = require('../lib/Models/ResendOrderResponseModel');
const CreateOrderRequestModel = require('../lib/Models/CreateOrderRequestModel');
const RewardModel = require('../lib/Models/RewardModel');
const RewardCredentialModel = require('../lib/Models/RewardCredentialModel');
const SystemStatusResponseModel = require('../lib/Models/SystemStatusResponseModel');
const ExchangeRateModel = require('../lib/Models/ExchangeRateModel');
const PageModel = require('../lib/Models/PageModel');
const RaasClientErrorModel = require('../lib/Models/RaasClientErrorModel');
const CreditCardModel = require('../lib/Models/CreditCardModel');
const CreateCreditCardRequestModel = require('../lib/Models/CreateCreditCardRequestModel');
const NewCreditCardModel = require('../lib/Models/NewCreditCardModel');
const BillingAddressModel = require('../lib/Models/BillingAddressModel');
const UnregisterCreditCardRequestModel = require('../lib/Models/UnregisterCreditCardRequestModel');
const UnregisterCreditCardResponseModel =
  require('../lib/Models/UnregisterCreditCardResponseModel');
const DepositRequestModel = require('../lib/Models/DepositRequestModel');
const DepositResponseModel = require('../lib/Models/DepositResponseModel');
const GetDepositResponseModel = require('../lib/Models/GetDepositResponseModel');
const RaasGenericException = require('../lib/Exceptions/RaasGenericException');
const RaasClientException = require('../lib/Exceptions/RaasClientException');
const RaasServerException = require('../lib/Exceptions/RaasServerException');

const classMap = {
    AccountSummaryModel,
    ItemModel,
    CurrencyBreakdownModel,
    NameEmailModel,
    ExchangeRateResponseModel,
    CreateCustomerRequestModel,
    CreateAccountRequestModel,
    RaasServerErrorModel,
    CatalogModel,
    BrandModel,
    CustomerModel,
    AccountModel,
    OrderModel,
    GetOrdersResponseModel,
    ResendOrderResponseModel,
    CreateOrderRequestModel,
    RewardModel,
    RewardCredentialModel,
    SystemStatusResponseModel,
    ExchangeRateModel,
    PageModel,
    RaasClientErrorModel,
    CreditCardModel,
    CreateCreditCardRequestModel,
    NewCreditCardModel,
    BillingAddressModel,
    UnregisterCreditCardRequestModel,
    UnregisterCreditCardResponseModel,
    DepositRequestModel,
    DepositResponseModel,
    GetDepositResponseModel,
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
