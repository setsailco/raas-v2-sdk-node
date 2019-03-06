/**
 * raas
 *
 * This file was automatically generated for Tango Card, Inc. by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");

const controller = testerlib.StatusController;
const SystemStatusResponseModel = testerlib.SystemStatusResponseModel;

describe("StatusController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Tests if we can retrieve the system status
     */
    it("should testStatusIsOK response", function testStatusIsOKTest(done) {
        controller.getSystemStatus(function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {
  "status" : "UP"
}, false, true, false));
            done();
        });
    });

});
