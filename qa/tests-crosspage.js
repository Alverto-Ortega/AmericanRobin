 
var Browser =  require('zombie'), assert = require("chai").assert;
var browser;

suite("Cross-Page Tests", function(){
    setup(function(){
        browser =  new Browser();
    });

test("requesting a group rate quote from the Hamden sleeping giant tour page"+
        "should populate the referrer field.", function(done){
            var referrer = "http://localhost:3000/tours/hamden-sleeping-giant";
            browser.visit(referrer, function(){
                browser.clickLink(".requestGroupRate", function(){
                    assert(browser.field("referrer").value === "");
                    done();
                });

            });
        });
test("requesting a group rate from the Saw Mill City Tour page should"+
        "populate the referrer field", function(done){
            var referrer = "http://localhost:3000/tours/SawMillCity";
            browser.visit(referrer, function(){
                browser.clickLink(".requestGroupRate", function(){
                    assert(browser.field("referrer").value === "");
                    done();
                });
            });
        });
test("Visiting the 'request group rate' page directly should result"+
        "in an empty referrer field", function(done){
            browser.visit("http://localhost:3000/tours/request-group-rate", function(){
                assert(browser.field("referrer").value === '');
                done();
            });
        });
});