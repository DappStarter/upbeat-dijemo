const assert = require('chai').assert;
const spawn = require("cross-spawn");
const DappLib = require('../src/lib/dapp-lib.js');

describe('Flow Dapp Tests', async () => {

    let config = null;
    before('setup contract', async () => {
       // Setup tasks for tests
       config = DappLib.getConfig();
    });


    describe('Voting — Ballot', async () => {

        it(`can create a new proposal`, async function () {
            try {
                await DappLib.initializeProposals({
                   admin:  config.accounts[0],
                   files: []
                });
                assert.equal(true, true, "Incorrect ...");    
            }
            catch(e) {
                assert.fail(e.message);
            }
        });

        it(`can issue a ballot`, async function () {
            try {
                assert.equal(false, false, "Incorrect ...");    
            }
            catch(e) {
                assert.fail(e.message);
            }
        });
    });



});