# Getting started

With this RESTful API you can integrate a global reward or incentive program into your app or platform. If you have any questions or if you'd like to receive your own credentials, please contact us at devsupport@tangocard.com.

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:
* `node --version`
* `npm -version` 
![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Raas-Node)  

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):
* `npm install`
![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Raas-Node)
![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder. 

Once dependencies are resolved, you will need to move the folder `Raas ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.  
Click on `File` and select `Open Folder`
![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.
![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Raas-Node)


### 2. Creating a Test File
Now right click on the folder name and select the `New File` option to create a new test file.    Save it as `index.js` Now import the generated NodeJS library using the following lines of code:
```JavaScript
var lib = require('lib');
```
Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Raas-Node)
![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Raas-Node)

### 3. Running The Test File
To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:  
`node index.js`
![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Raas-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 
###### (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2
###### (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3
###### (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Tango Card RaaS v2 APIController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.  

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=Tango%20Card%20RaaS%20v2%20APIController)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| platformName | RaaS v2 API Platform Name |
| platformKey | RaaS v2 API Platform Key |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.platformName = "QAPlatform2"; // RaaS v2 API Platform Name
lib.Configuration.platformKey = "apYPfT6HNONpDRUj3CLGWYt7gvIHONpDRUYPfT6Hj"; // RaaS v2 API Platform Key

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [AccountsController](#accounts_controller)
* [OrdersController](#orders_controller)
* [CatalogController](#catalog_controller)
* [ExchangeRatesController](#exchange_rates_controller)
* [StatusController](#status_controller)
* [CustomersController](#customers_controller)

## <a name="accounts_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AccountsController") AccountsController

### Get singleton instance

The singleton instance of the ``` AccountsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AccountsController;
```

### <a name="get_accounts_by_customer"></a>![Method: ](https://apidocs.io/img/method.png ".AccountsController.getAccountsByCustomer") getAccountsByCustomer

> Gets a list of accounts for a given customer


```javascript
function getAccountsByCustomer(customerIdentifier, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerIdentifier |  ``` Required ```  | Customer Identifier |



#### Example Usage

```javascript

    var customerIdentifier = 'customerIdentifier';

    controller.getAccountsByCustomer(customerIdentifier, function(error, response, context) {

    
	});
```



### <a name="get_account"></a>![Method: ](https://apidocs.io/img/method.png ".AccountsController.getAccount") getAccount

> Get an account


```javascript
function getAccount(accountIdentifier, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountIdentifier |  ``` Required ```  | Account Identifier |



#### Example Usage

```javascript

    var accountIdentifier = 'accountIdentifier';

    controller.getAccount(accountIdentifier, function(error, response, context) {

    
	});
```



### <a name="create_account"></a>![Method: ](https://apidocs.io/img/method.png ".AccountsController.createAccount") createAccount

> Create an account under a given customer


```javascript
function createAccount(customerIdentifier, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerIdentifier |  ``` Required ```  | Customer Identifier |
| body |  ``` Required ```  | Request Body |



#### Example Usage

```javascript

    var customerIdentifier = 'customerIdentifier';
    var body = new CreateAccountRequestModel({"key":"value"});

    controller.createAccount(customerIdentifier, body, function(error, response, context) {

    
	});
```



### <a name="get_all_accounts"></a>![Method: ](https://apidocs.io/img/method.png ".AccountsController.getAllAccounts") getAllAccounts

> Gets all accounts under the platform


```javascript
function getAllAccounts(callback)
```

#### Example Usage

```javascript


    controller.getAllAccounts(function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="orders_controller"></a>![Class: ](https://apidocs.io/img/class.png ".OrdersController") OrdersController

### Get singleton instance

The singleton instance of the ``` OrdersController ``` class can be accessed from the API Client.

```javascript
var controller = lib.OrdersController;
```

### <a name="create_order"></a>![Method: ](https://apidocs.io/img/method.png ".OrdersController.createOrder") createOrder

> TODO: Add a method description


```javascript
function createOrder(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var body = new CreateOrderRequestModel({"key":"value"});

    controller.createOrder(body, function(error, response, context) {

    
	});
```



### <a name="get_order"></a>![Method: ](https://apidocs.io/img/method.png ".OrdersController.getOrder") getOrder

> TODO: Add a method description


```javascript
function getOrder(referenceOrderID, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| referenceOrderID |  ``` Required ```  | Reference Order ID |



#### Example Usage

```javascript

    var referenceOrderID = 'referenceOrderID';

    controller.getOrder(referenceOrderID, function(error, response, context) {

    
	});
```



### <a name="create_resend_order"></a>![Method: ](https://apidocs.io/img/method.png ".OrdersController.createResendOrder") createResendOrder

> TODO: Add a method description


```javascript
function createResendOrder(referenceOrderID, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| referenceOrderID |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var referenceOrderID = 'referenceOrderID';

    controller.createResendOrder(referenceOrderID, function(error, response, context) {

    
	});
```



### <a name="get_orders"></a>![Method: ](https://apidocs.io/img/method.png ".OrdersController.getOrders") getOrders

> TODO: Add a method description


```javascript
function getOrders(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| accountIdentifier |  ``` Optional ```  | TODO: Add a parameter description |
| customerIdentifier |  ``` Optional ```  | TODO: Add a parameter description |
| externalRefID |  ``` Optional ```  | TODO: Add a parameter description |
| startDate |  ``` Optional ```  | TODO: Add a parameter description |
| endDate |  ``` Optional ```  | TODO: Add a parameter description |
| elementsPerBlock |  ``` Optional ```  | TODO: Add a parameter description |
| page |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['accountIdentifier'] = 'accountIdentifier';
        input['customerIdentifier'] = 'customerIdentifier';
        input['externalRefID'] = 'externalRefID';
        input['startDate'] = date("D M d, Y G:i");
        input['endDate'] = date("D M d, Y G:i");
        input['elementsPerBlock'] = 184;
        input['page'] = 184;

    controller.getOrders(input, function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="catalog_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CatalogController") CatalogController

### Get singleton instance

The singleton instance of the ``` CatalogController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CatalogController;
```

### <a name="get_catalog"></a>![Method: ](https://apidocs.io/img/method.png ".CatalogController.getCatalog") getCatalog

> Get Catalog


```javascript
function getCatalog(callback)
```

#### Example Usage

```javascript


    controller.getCatalog(function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="exchange_rates_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ExchangeRatesController") ExchangeRatesController

### Get singleton instance

The singleton instance of the ``` ExchangeRatesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ExchangeRatesController;
```

### <a name="get_exchange_rates"></a>![Method: ](https://apidocs.io/img/method.png ".ExchangeRatesController.getExchangeRates") getExchangeRates

> Retrieve current exchange rates


```javascript
function getExchangeRates(callback)
```

#### Example Usage

```javascript


    controller.getExchangeRates(function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="status_controller"></a>![Class: ](https://apidocs.io/img/class.png ".StatusController") StatusController

### Get singleton instance

The singleton instance of the ``` StatusController ``` class can be accessed from the API Client.

```javascript
var controller = lib.StatusController;
```

### <a name="get_system_status"></a>![Method: ](https://apidocs.io/img/method.png ".StatusController.getSystemStatus") getSystemStatus

> *Tags:*  ``` Skips Authentication ``` 

> Retrieve system status


```javascript
function getSystemStatus(callback)
```

#### Example Usage

```javascript


    controller.getSystemStatus(function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)

## <a name="customers_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CustomersController") CustomersController

### Get singleton instance

The singleton instance of the ``` CustomersController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CustomersController;
```

### <a name="get_customer"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.getCustomer") getCustomer

> Get a customer


```javascript
function getCustomer(customerIdentifier, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerIdentifier |  ``` Required ```  | Customer Identifier |



#### Example Usage

```javascript

    var customerIdentifier = 'customerIdentifier';

    controller.getCustomer(customerIdentifier, function(error, response, context) {

    
	});
```



### <a name="create_customer"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.createCustomer") createCustomer

> Create a new customer


```javascript
function createCustomer(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | Request Body |



#### Example Usage

```javascript

    var body = new CreateCustomerRequestModel({"key":"value"});

    controller.createCustomer(body, function(error, response, context) {

    
	});
```



### <a name="get_all_customers"></a>![Method: ](https://apidocs.io/img/method.png ".CustomersController.getAllCustomers") getAllCustomers

> Gets all customers under the platform


```javascript
function getAllCustomers(callback)
```

#### Example Usage

```javascript


    controller.getAllCustomers(function(error, response, context) {

    
	});
```



[Back to List of Controllers](#list_of_controllers)



