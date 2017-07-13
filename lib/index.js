/**
  * @module raas
  *
  * With this RESTful API you can integrate a global reward or incentive program into your app or platform. If you have any questions or if you'd like to receive your own credentials, please contact us at devsupport@tangocard.com.
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const Logger = require('./LogConfig');
const AccountsController = require('./Controllers/AccountsController');
const OrdersController = require('./Controllers/OrdersController');
const CatalogController = require('./Controllers/CatalogController');
const ExchangeRatesController = require('./Controllers/ExchangeRatesController');
const StatusController = require('./Controllers/StatusController');
const CustomersController = require('./Controllers/CustomersController');
const AccountSummaryModel = require('./Models/AccountSummaryModel');
const CustomerModel = require('./Models/CustomerModel');
const AccountModel = require('./Models/AccountModel');
const CreateCustomerRequestModel = require('./Models/CreateCustomerRequestModel');
const CreateAccountRequestModel = require('./Models/CreateAccountRequestModel');
const RaasServerErrorModel = require('./Models/RaasServerErrorModel');
const SystemStatusResponseModel = require('./Models/SystemStatusResponseModel');
const CatalogModel = require('./Models/CatalogModel');
const BrandModel = require('./Models/BrandModel');
const ItemModel = require('./Models/ItemModel');
const OrderModel = require('./Models/OrderModel');
const CurrencyBreakdownModel = require('./Models/CurrencyBreakdownModel');
const NameEmailModel = require('./Models/NameEmailModel');
const ExchangeRateResponseModel = require('./Models/ExchangeRateResponseModel');
const GetOrdersResponseModel = require('./Models/GetOrdersResponseModel');
const ResendOrderResponseModel = require('./Models/ResendOrderResponseModel');
const CreateOrderRequestModel = require('./Models/CreateOrderRequestModel');
const RewardModel = require('./Models/RewardModel');
const RewardCredentialModel = require('./Models/RewardCredentialModel');
const ExchangeRateModel = require('./Models/ExchangeRateModel');
const PageModel = require('./Models/PageModel');
const RaasClientErrorModel = require('./Models/RaasClientErrorModel');
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
    OrdersController,
    CatalogController,
    ExchangeRatesController,
    StatusController,
    CustomersController,
    // models of raas
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
    // exceptions of raas
    RaasGenericException,
    RaasClientException,
    RaasServerException,
    APIException,
};

initializer.Logger.LogConfig();

module.exports = initializer;
