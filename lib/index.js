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
const StatusController = require('./Controllers/StatusController');
const AccountsController = require('./Controllers/AccountsController');
const FundController = require('./Controllers/FundController');
const ExchangeRatesController = require('./Controllers/ExchangeRatesController');
const OrdersController = require('./Controllers/OrdersController');
const CustomersController = require('./Controllers/CustomersController');
const CatalogController = require('./Controllers/CatalogController');
const BrandModel = require('./Models/BrandModel');
const OrderModel = require('./Models/OrderModel');
const DepositRequestModel = require('./Models/DepositRequestModel');
const BillingAddressModel = require('./Models/BillingAddressModel');
const AccountModel = require('./Models/AccountModel');
const CreateCreditCardRequestModel = require('./Models/CreateCreditCardRequestModel');
const GetDepositResponseModel = require('./Models/GetDepositResponseModel');
const RewardModel = require('./Models/RewardModel');
const CurrencyBreakdownModel = require('./Models/CurrencyBreakdownModel');
const AccountSummaryModel = require('./Models/AccountSummaryModel');
const DepositResponseModel = require('./Models/DepositResponseModel');
const ExchangeRateResponseModel = require('./Models/ExchangeRateResponseModel');
const CustomerModel = require('./Models/CustomerModel');
const PageModel = require('./Models/PageModel');
const CreateAccountRequestModel = require('./Models/CreateAccountRequestModel');
const NameEmailModel = require('./Models/NameEmailModel');
const RaasServerErrorModel = require('./Models/RaasServerErrorModel');
const NewCreditCardModel = require('./Models/NewCreditCardModel');
const CreateCustomerRequestModel = require('./Models/CreateCustomerRequestModel');
const UnregisterCreditCardResponseModel = require('./Models/UnregisterCreditCardResponseModel');
const UnregisterCreditCardRequestModel = require('./Models/UnregisterCreditCardRequestModel');
const RewardCredentialModel = require('./Models/RewardCredentialModel');
const ExchangeRateModel = require('./Models/ExchangeRateModel');
const FullNameEmailModel = require('./Models/FullNameEmailModel');
const RaasClientErrorModel = require('./Models/RaasClientErrorModel');
const ResendOrderResponseModel = require('./Models/ResendOrderResponseModel');
const CreateOrderRequestModel = require('./Models/CreateOrderRequestModel');
const GetOrdersResponseModel = require('./Models/GetOrdersResponseModel');
const ItemModel = require('./Models/ItemModel');
const OrderSummaryModel = require('./Models/OrderSummaryModel');
const CreditCardModel = require('./Models/CreditCardModel');
const CatalogModel = require('./Models/CatalogModel');
const SystemStatusResponseModel = require('./Models/SystemStatusResponseModel');
const OrderResendCriteriaModel = require('./Models/OrderResendCriteriaModel');
const RaasServerException = require('./Exceptions/RaasServerException');
const RaasGenericException = require('./Exceptions/RaasGenericException');
const RaasClientException = require('./Exceptions/RaasClientException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of raas
    Configuration,
    Environments,
    Logger,
    // controllers of raas
    StatusController,
    AccountsController,
    FundController,
    ExchangeRatesController,
    OrdersController,
    CustomersController,
    CatalogController,
    // models of raas
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
    // exceptions of raas
    RaasServerException,
    RaasGenericException,
    RaasClientException,
    APIException,
};

initializer.Logger.LogConfig();

module.exports = initializer;
