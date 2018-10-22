/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const CreateAccountRequestModel = require('../lib/Models/CreateAccountRequestModel');
const NameEmailModel = require('../lib/Models/NameEmailModel');
const SystemStatusResponseModel = require('../lib/Models/SystemStatusResponseModel');
const RaasServerErrorModel = require('../lib/Models/RaasServerErrorModel');
const NewCreditCardModel = require('../lib/Models/NewCreditCardModel');
const CreateCustomerRequestModel = require('../lib/Models/CreateCustomerRequestModel');
const UnregisterCreditCardResponseModel =
  require('../lib/Models/UnregisterCreditCardResponseModel');
const UnregisterCreditCardRequestModel = require('../lib/Models/UnregisterCreditCardRequestModel');
const CreateOrderRequestModel = require('../lib/Models/CreateOrderRequestModel');
const DepositRequestModel = require('../lib/Models/DepositRequestModel');
const GetOrdersResponseModel = require('../lib/Models/GetOrdersResponseModel');
const ItemModel = require('../lib/Models/ItemModel');
const CatalogModel = require('../lib/Models/CatalogModel');
const RewardCredentialModel = require('../lib/Models/RewardCredentialModel');
const OrderModel = require('../lib/Models/OrderModel');
const ExchangeRateModel = require('../lib/Models/ExchangeRateModel');
const FullNameEmailModel = require('../lib/Models/FullNameEmailModel');
const RaasClientErrorModel = require('../lib/Models/RaasClientErrorModel');
const BrandModel = require('../lib/Models/BrandModel');
const BillingAddressModel = require('../lib/Models/BillingAddressModel');
const AccountModel = require('../lib/Models/AccountModel');
const CreateCreditCardRequestModel = require('../lib/Models/CreateCreditCardRequestModel');
const GetDepositResponseModel = require('../lib/Models/GetDepositResponseModel');
const RewardModel = require('../lib/Models/RewardModel');
const CurrencyBreakdownModel = require('../lib/Models/CurrencyBreakdownModel');
const AccountSummaryModel = require('../lib/Models/AccountSummaryModel');
const ResendOrderResponseModel = require('../lib/Models/ResendOrderResponseModel');
const DepositResponseModel = require('../lib/Models/DepositResponseModel');
const ExchangeRateResponseModel = require('../lib/Models/ExchangeRateResponseModel');
const CustomerModel = require('../lib/Models/CustomerModel');
const OrderSummaryModel = require('../lib/Models/OrderSummaryModel');
const PageModel = require('../lib/Models/PageModel');
const CreditCardModel = require('../lib/Models/CreditCardModel');
const RaasServerException = require('../lib/Exceptions/RaasServerException');
const RaasGenericException = require('../lib/Exceptions/RaasGenericException');
const RaasClientException = require('../lib/Exceptions/RaasClientException');

const classMap = {
    CreateAccountRequestModel,
    NameEmailModel,
    SystemStatusResponseModel,
    RaasServerErrorModel,
    NewCreditCardModel,
    CreateCustomerRequestModel,
    UnregisterCreditCardResponseModel,
    UnregisterCreditCardRequestModel,
    CreateOrderRequestModel,
    DepositRequestModel,
    GetOrdersResponseModel,
    ItemModel,
    CatalogModel,
    RewardCredentialModel,
    OrderModel,
    ExchangeRateModel,
    FullNameEmailModel,
    RaasClientErrorModel,
    BrandModel,
    BillingAddressModel,
    AccountModel,
    CreateCreditCardRequestModel,
    GetDepositResponseModel,
    RewardModel,
    CurrencyBreakdownModel,
    AccountSummaryModel,
    ResendOrderResponseModel,
    DepositResponseModel,
    ExchangeRateResponseModel,
    CustomerModel,
    OrderSummaryModel,
    PageModel,
    CreditCardModel,
    RaasServerException,
    RaasGenericException,
    RaasClientException,
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
