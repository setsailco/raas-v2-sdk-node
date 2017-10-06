/**
  * @module raas
  *
  * With this RESTful API you can integrate a global reward or incentive program into your app or
  * platform. If you have any questions or if you'd like to receive your own credentials, please
  * contact us at devsupport@tangocard.com.
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const Logger = require('./LogConfig');
const AccountsController = require('./Controllers/AccountsController');
const CatalogController = require('./Controllers/CatalogController');
const OrdersController = require('./Controllers/OrdersController');
const CustomersController = require('./Controllers/CustomersController');
const ExchangeRatesController = require('./Controllers/ExchangeRatesController');
const StatusController = require('./Controllers/StatusController');
const FundController = require('./Controllers/FundController');
const AccountSummaryModel = require('./Models/AccountSummaryModel');
const ItemModel = require('./Models/ItemModel');
const CurrencyBreakdownModel = require('./Models/CurrencyBreakdownModel');
const NameEmailModel = require('./Models/NameEmailModel');
const ExchangeRateResponseModel = require('./Models/ExchangeRateResponseModel');
const CreateCustomerRequestModel = require('./Models/CreateCustomerRequestModel');
const CreateAccountRequestModel = require('./Models/CreateAccountRequestModel');
const RaasServerErrorModel = require('./Models/RaasServerErrorModel');
const CatalogModel = require('./Models/CatalogModel');
const BrandModel = require('./Models/BrandModel');
const CustomerModel = require('./Models/CustomerModel');
const AccountModel = require('./Models/AccountModel');
const OrderModel = require('./Models/OrderModel');
const GetOrdersResponseModel = require('./Models/GetOrdersResponseModel');
const ResendOrderResponseModel = require('./Models/ResendOrderResponseModel');
const CreateOrderRequestModel = require('./Models/CreateOrderRequestModel');
const RewardModel = require('./Models/RewardModel');
const RewardCredentialModel = require('./Models/RewardCredentialModel');
const SystemStatusResponseModel = require('./Models/SystemStatusResponseModel');
const ExchangeRateModel = require('./Models/ExchangeRateModel');
const PageModel = require('./Models/PageModel');
const RaasClientErrorModel = require('./Models/RaasClientErrorModel');
const CreditCardModel = require('./Models/CreditCardModel');
const CreateCreditCardRequestModel = require('./Models/CreateCreditCardRequestModel');
const NewCreditCardModel = require('./Models/NewCreditCardModel');
const BillingAddressModel = require('./Models/BillingAddressModel');
const UnregisterCreditCardRequestModel = require('./Models/UnregisterCreditCardRequestModel');
const UnregisterCreditCardResponseModel = require('./Models/UnregisterCreditCardResponseModel');
const DepositRequestModel = require('./Models/DepositRequestModel');
const DepositResponseModel = require('./Models/DepositResponseModel');
const GetDepositResponseModel = require('./Models/GetDepositResponseModel');
const RaasGenericException = require('./Exceptions/RaasGenericException');
const RaasClientException = require('./Exceptions/RaasClientException');
const RaasServerException = require('./Exceptions/RaasServerException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of raas
    Configuration,
    Environments,
    Logger,
    // controllers of raas
    AccountsController,
    CatalogController,
    OrdersController,
    CustomersController,
    ExchangeRatesController,
    StatusController,
    FundController,
    // models of raas
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
    // exceptions of raas
    RaasGenericException,
    RaasClientException,
    RaasServerException,
    APIException,
};

initializer.Logger.LogConfig();

module.exports = initializer;
