/*global describe, beforeEach, expect, browser, sleep, repeater, element, it */

'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Todo list', function() {
    beforeEach(function() {
        browser().navigateTo('/');
        sleep(1);
    });

    it('should move todo to correct list when user toggles checkbox', function() {
        expect(repeater('.not-done').count()).toBe(2);
        expect(repeater('.done').count()).toBe(1);

        element('.not-done input').query(function (els, done) {
            els[0].click();
            done();
        });

        sleep(0.3);

        expect(repeater('.not-done').count()).toBe(1);
        expect(repeater('.done').count()).toBe(2);

        element('.done input').query(function (els, done) {
            els[0].click();
            done();
        });

        sleep(0.3);

        expect(repeater('.not-done').count()).toBe(2);
        expect(repeater('.done').count()).toBe(1);
    });
});
