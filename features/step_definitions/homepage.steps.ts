import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { browser, by, element, } from 'protractor';
import { defineSupportCode } from 'cucumber';
import * as _ from 'lodash';
import { expect } from '../../support/hooks';
import * as fs from 'fs';
//r&d
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
defineSupportCode(function ({ Given, Then, When }) {
    function delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    Given('I navigate to {path}', async (path: string) => {
        await browser.get(path);
        await delay(5000);
        browser.waitForAngular();
        await delay(10000);
    });
    When('navigate to market page', async () => {
        await delay(10000);
        element(by.xpath("//a[@href='https://market.beta.formed.org']")).click();
        await delay(15000);
        browser.waitForAngular();
    });
    When('navigate to market', async () => {
        await delay(1000);
         rl.question('Pleae Enter No Of Mails ', async (answer) => {
        // TODO: Log the answer in a
        console.log(`Thank you for your Mails Requested: ${answer}`);
        });
    });
    When('i click on login button and enter username and password', async () => {
        await delay(20000);
        element(by.xpath(".//*[@id='login-dropdown-button']")).click();
        await delay(3000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("rajeshnakka.cmc@gmail.com");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("123456");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
        await delay(1000);
        browser.waitForAngular();
        await delay(8000);
    });
    When('PAP-0010 click on Talks', async () => {
        await delay(7000);
        element(by.xpath(".//*[@href='https://market.beta.formed.org/shop-products/listen/talks.html']")).click();
        await delay(1000);
        browser.waitForAngular();
        await delay(5000);
    });
    When('PAP-0020 i click on Item', async () => {
        await delay(5000);
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
        await delay(1000);
        browser.waitForAngular();
    });
    Then('Click on Add to cart', async () => {
        await delay(10000);
        element(by.xpath(".//*[@id='product-addtocart-button']")).click();
        await delay(5000);
    });
    When('PBP-0060 Click on checkout option', async () => {
        await delay(10000);
        element(by.xpath(".//*[@class='counter qty']")).click();
        await delay(5000);
        element(by.xpath(".//*[@id='top-cart-btn-checkout']")).click();
        await delay(20000);
    });
    When('PBP-0070 Click on create account', async () => {
        await delay(10000);
        element(by.xpath(".//*[@id='checkout-step-billing']/div/div/a")).click();
        await delay(1000);
        browser.waitForAngular();
    });
    When('i move to listen products', async () => {
        await delay(5000);
        browser.actions().mouseMove(element(by.linkText("Listen"))).perform();
        await delay(2000);
    
    });
    Then('Enter Gmail Accounts', async () => {
        // await delay(10000)
            var obj = {
                randomMails: []
            };
            for (var i = 0; i < 10i++) {
                let randomString = Date.now();
                let randomMail = `invalid+${randomString+i}@gmail.com`;
                obj.randomMails.push(randomMail);

            }
            var json = JSON.stringify(obj);
            console.log(`random mails array obj`, obj);
            var outputFilename = './testcases.json';
            fs.writeFile(outputFilename, json, 'utf8', cb);
            function cb(data) {
                console.log(`testcases.json updated successfully...`);
            }

            // rl.close();
         //});

    });
});
