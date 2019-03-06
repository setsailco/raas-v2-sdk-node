/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BrandModel = require('../lib/Models/BrandModel');
const OrderModel = require('../lib/Models/OrderModel');
const DepositRequestModel = require('../lib/Models/DepositRequestModel');
const BillingAddressModel = require('../lib/Models/BillingAddressModel');
const AccountModel = require('../lib/Models/AccountModel');
const CreateCreditCardRequestModel = require('../lib/Models/CreateCreditCardRequestModel');
const GetDepositResponseModel = require('../lib/Models/GetDepositResponseModel');
const RewardModel = require('../lib/Models/RewardModel');
const CurrencyBreakdownModel = require('../lib/Models/CurrencyBreakdownModel');
const AccountSummaryModel = require('../lib/Models/AccountSummaryModel');
const DepositResponseModel = require('../lib/Models/DepositResponseModel');
const ExchangeRateResponseModel = require('../lib/Models/ExchangeRateResponseModel');
const CustomerModel = require('../lib/Models/CustomerModel');
const PageModel = require('../lib/Models/PageModel');
const CreateAccountRequestModel = require('../lib/Models/CreateAccountRequestModel');
const NameEmailModel = require('../lib/Models/NameEmailModel');
const RaasServerErrorModel = require('../lib/Models/RaasServerErrorModel');
const NewCreditCardModel = require('../lib/Models/NewCreditCardModel');
const CreateCustomerRequestModel = require('../lib/Models/CreateCustomerRequestModel');
const UnregisterCreditCardResponseModel =
  require('../lib/Models/UnregisterCreditCardResponseModel');
const UnregisterCreditCardRequestModel = require('../lib/Models/UnregisterCreditCardRequestModel');
const RewardCredentialModel = require('../lib/Models/RewardCredentialModel');
const ExchangeRateModel = require('../lib/Models/ExchangeRateModel');
const FullNameEmailModel = require('../lib/Models/FullNameEmailModel');
const RaasClientErrorModel = require('../lib/Models/RaasClientErrorModel');
const ResendOrderResponseModel = require('../lib/Models/ResendOrderResponseModel');
const CreateOrderRequestModel = require('../lib/Models/CreateOrderRequestModel');
const GetOrdersResponseModel = require('../lib/Models/GetOrdersResponseModel');
const ItemModel = require('../lib/Models/ItemModel');
const OrderSummaryModel = require('../lib/Models/OrderSummaryModel');
const CreditCardModel = require('../lib/Models/CreditCardModel');
const CatalogModel = require('../lib/Models/CatalogModel');
const SystemStatusResponseModel = require('../lib/Models/SystemStatusResponseModel');
const OrderResendCriteriaModel = require('../lib/Models/OrderResendCriteriaModel');
const RaasServerException = require('../lib/Exceptions/RaasServerException');
const RaasGenericException = require('../lib/Exceptions/RaasGenericException');
const RaasClientException = require('../lib/Exceptions/RaasClientException');

const classMap = {
    BrandModel,
    OrderModel,
    DepositRequestModel,
    BillingAddressModel,
    AccountModel,
    CreateCreditCardRequestModel,
    GetDepositResponseModel,
    RewardModel,
    CurrencyBreakdownModel,
    AccountSummaryModel,
    DepositResponseModel,
    ExchangeRateResponseModel,
    CustomerModel,
    PageModel,
    CreateAccountRequestModel,
    NameEmailModel,
    RaasServerErrorModel,
    NewCreditCardModel,
    CreateCustomerRequestModel,
    UnregisterCreditCardResponseModel,
    UnregisterCreditCardRequestModel,
    RewardCredentialModel,
    ExchangeRateModel,
    FullNameEmailModel,
    RaasClientErrorModel,
    ResendOrderResponseModel,
    CreateOrderRequestModel,
    GetOrdersResponseModel,
    ItemModel,
    OrderSummaryModel,
    CreditCardModel,
    CatalogModel,
    SystemStatusResponseModel,
    OrderResendCriteriaModel,
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
