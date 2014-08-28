/* global describe, it */

(function () {
    'use strict';
    var assert = require('assert');
    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {
                assert.equal(4, [1,2,3,4,5].indexOf(5));
            });
        });
    });
})();
