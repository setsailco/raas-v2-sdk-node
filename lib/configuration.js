/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const servers = require('./Servers');
const environments = require('./Environments');
const apiHelper = require('./APIHelper');

const environmentsMap = [];

environmentsMap[environments.SANDBOX] = [];
environmentsMap[environments.PRODUCTION] = [];
environmentsMap[environments.QA] = [];
environmentsMap[environments.GAMMA] = [];
environmentsMap[environments.LOCAL] = [];

environmentsMap[environments.SANDBOX][servers.MDEFAULT] =
    'https://integration-api.tangocard.com/raas/v2';
environmentsMap[environments.PRODUCTION][servers.MDEFAULT] = 'https://api.tangocard.com/raas/v2';
environmentsMap[environments.QA][servers.MDEFAULT] = 'https://qa-api.tangocard.com/raas/v2';
environmentsMap[environments.GAMMA][servers.MDEFAULT] = 'https://gamma-api.tangocard.com/raas/v2';
environmentsMap[environments.LOCAL][servers.MDEFAULT] = 'http://raastango.cc:8080/v2';

const Configuration = {
    // RaaS v2 API Platform Name
    platformName: 'QAPlatform2',

    // RaaS v2 API Platform Key
    platformKey: 'apYPfT6HNONpDRUj3CLGWYt7gvIHONpDRUYPfT6Hj',

    /**
     * Current API environment
     * @type {string}
     */
    currentEnvironment: environments.PRODUCTION,

    /**
     * Get base URI for a server in the current API environment
     * @param  {string|null} server Server name
     * @return {string}             Base URI for server
     */
    getBaseUri(server) {
        const url = environmentsMap[this.currentEnvironment][server || servers.MDEFAULT];
        const urlParams = {
        };
        return apiHelper.appendUrlWithTemplateParameters(url, urlParams);
    },
};

module.exports = Configuration;
