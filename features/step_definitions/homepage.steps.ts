import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
var expects = chai.use(chaiAsPromised).expect;
import {browser, by, element, protractor, $} from 'protractor';
import {defineSupportCode, StepDefinitionParam, TableDefinition} from 'cucumber';
import * as _ from 'lodash';
import {expect} from '../../support/hooks';
import { Key } from 'protractor/node_modules/@types/selenium-webdriver';
import { callbackify } from 'util';
import { Driver } from 'selenium-webdriver/opera';
import { F_OK } from 'constants';
import { async } from 'q';



defineSupportCode(function ({Given, Then, When}) {
    function delay(ms: number) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
		Given('I navigate to {path}', async (path: string) => {
    
			await browser.get(path);
			await delay(15000);
	});
	When('navigate to market page', async () => {
		await delay(10000);
		element(by.xpath("//a[@href='https://market.beta.formed.org']")).click();
		await delay(20000);
	    await browser.get("https://market2.beta.formed.org");
	    await delay(15000);
	});
	When('Click on market page', async () => {
		await delay(10000);
		element(by.xpath("//a[@href='https://market2.beta.formed.org/']")).click();
		await delay(20000);
	});
	When('i click on login button and enter username and password', async () => {
        await delay(10000);
        element(by.xpath(".//*[@id='login-dropdown-button']")).click();
        await delay(3000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("rajeshnakka.cmc@gmail.com");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("123456");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
		await delay(10000);
    });
    When('ALA-0010 click on login button and enter username and password', async () => {
        element(by.xpath(".//*[@id='login-dropdown-button']")).click();
        await delay(3000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("test1+girardt100@formed.org");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("formed18!");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
		await delay(15000);
    });
    When('ALP-0020 click on Account page', async () => {
        element(by.xpath(".//*[@id='account-dropdown-button']")).click();
        await delay(3000);
        element(by.xpath(".//*[@id='account-dropdown']/div/a[1]")).click();
		await delay(15000);
    });
    When('ALP-0030 click On Demand Subscription in Account page', async () => {
        await expect(browser.findElement(by.xpath(".//*[@id='account-dropdown']/div/a[1]"))).to.eventually.exist;
        await delay(2000);
        element(by.xpath(".//*[@id='account-dropdown']/div/a[1]")).click();
        await delay(10000);
        element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
        await delay(8000);
	});
	When('i click on login user with out purchase product', async () => {
        await delay(10000);
        element(by.xpath(".//*[@id='login-dropdown-button']")).click();
        await delay(3000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("saicharan@gmail.com");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("Honey@123");
        await delay(1000);
        element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
		await delay(10000);
	});

	Then('ABP-0010 plan details are displayed', async () => {
		await delay(5000);
		await expect(browser.findElement(by.xpath(".//*[@id='account-nav']/ul/li[1]/a"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='account-nav']/ul/li[2]/a"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='account-nav']/ul/li[4]/a"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='account-nav']/ul/li[5]/a"))).to.eventually.exist;
		await delay(5000);
		await expect(browser.findElement(by.xpath(".//*[@id='account-nav']/ul/li[7]/a"))).to.eventually.exist;
		await delay(5000);
		element(by.xpath(".//*[@id='account-nav']/ul/li[1]/a")).click();
		await delay(10000);
	});
	When('ABP-0010 account overview is displayed', async () => {
		await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[1]/div[2]/section"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[1]/div[2]/div/p[1]"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[1]/div[2]/div/p[2]"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[1]/div[4]"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='my-orders-table']/tbody/tr[1]"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='my-orders-table']/tbody/tr[2]"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='my-orders-table']/tbody/tr[3]"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='my-orders-table']/tbody/tr[4]"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='my-orders-table']/tbody/tr[5]"))).to.eventually.exist;
		await delay(3000);
	});
	When('ABP-0020 click on login settings', async () => {
		element(by.xpath(".//*[@id='account-nav']/ul/li[5]/a")).click();
		await delay(10000);
	});
	Then('ABP-0020 login details are displayed', async () => {
		await expect(browser.findElement(by.xpath(".//*[@id='gigya-update-profile-screen']/form/div[1]/div/div[1]/input"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='gigya-update-profile-screen']/form/div[1]/div/div[2]/input"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='gigya-update-profile-screen']/form/div[1]/div/div[3]/input"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='gigya-update-profile-screen']/form/div[2]/div[3]/div/input[1]"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='gigya-update-profile-screen']/form/div[2]/div[2]/a[1]"))).to.eventually.exist;
		await delay(3000);
		element(by.xpath(".//*[@id='gigya-update-profile-screen']/form/div[2]/div[2]/a[1]")).click();
		await delay(15000);
	});
	Then('ABP-0020 Password settings are displayed', async () => {
		await expect(browser.findElement(by.xpath(".//*[@id='gigya-change-password-screen']/form/div[1]/div/div[1]/input"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='gigya-change-password-screen']/form/div[1]/div/div[2]/input"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='gigya-change-password-screen']/form/div[1]/div/div[3]/input"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='gigya-change-password-screen']/form/div[2]/div[3]/a[1]"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='gigya-change-password-screen']/form/div[2]/div[2]/div/input[1]"))).to.eventually.exist;
		await delay(3000);
	});
	When('ABP-0030 click on payment method', async () => {
		element(by.xpath("//a[@href='https://market2.beta.formed.org/magedelight_cybersource/cards/listing/']")).click();
		await delay(10000);
	});
	Then('ABP-0030 payment method details is displayed', async () => {
		await expect(browser.findElement(by.xpath(".//*[@id='my-saved-cards-table']/tbody/tr/td[5]/span/form[1]/a"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='my-saved-cards-table']/tbody/tr/td[5]"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[3]/div[3]/button"))).to.eventually.exist;
		await delay(3000);
		element(by.xpath(".//*[@id='my-saved-cards-table']/tbody/tr/td[5]/span/form[1]/a")).click();
		await delay(10000);
	});
	Then('ABP-0040 edit page is displayed in payment method', async () => {
		await expect(browser.findElement(by.xpath(".//*[@id='magedelight_cybersource_firstname']"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='magedelight_cybersource_lastname']"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='magedelight_cybersource_street']"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='magedelight_cybersource_city']"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='magedelight_cybersource_region_id']"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='magedelight_cybersource_zip']"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='country']"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[3]/div[2]/p/a"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='form_delete_93']/div/a"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='cybersource_add_card_btn']"))).to.eventually.exist;
		await delay(3000);
	});
	When('ABP-0050 click on credit plan', async () => {
		element(by.xpath("//a[@href='https://market2.beta.formed.org/rewards/account/']")).click();
		await delay(10000);
	});
	Then('ABP-0050 credit plan details are displayed', async () => {
		await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[3]/div[2]/div/h3"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[3]/div[2]/div/p[1]/a"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[3]/div[2]/div/p[2]/a[1]"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='cancel-credit-plan-btn']"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[6]"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[3]/div[2]/div/p[1]"))).to.eventually.exist;
		await delay(3000);
		element(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[3]/div[2]/div/p[2]/a[1]")).click();
		await delay(10000);

	});
		Then('ABP-0050 credit plan subscription is displayed', async () => {
		await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ul/li[3]"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ul/li[2]"))).to.eventually.exist;
		await delay(3000);
	});
		When('ABP-0050 click on cancel credit plan', async () => {
		element(by.xpath(".//*[@id='cancel-credit-plan-btn']")).click();
		await delay(10000);
	});
		Then('ABP-0050 cancel credit plan prompt is displayed', async () => {
		await expect(browser.findElement(by.xpath(".//*[@class='cancel-credit-plan-btn']"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='plan-cancel-popup-container']"))).to.eventually.exist;
		await delay(3000);
		element(by.xpath(".//*[@class='cancel-credit-plan-btn']")).click();
		await delay(10000);
	});
		When('ABP-0060 click on your orders', async () => {
		element(by.xpath("//a[@href='https://market2.beta.formed.org/sales/order/history/']")).click();
		await delay(10000);
	});
		Then('ABP-0070 orders page is displayed', async () => {
		await expect(browser.findElement(by.xpath(".//*[@id='my-orders-table']/tbody/tr[1]"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[3]/div[1]/strong"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='my-orders-table']/tbody/tr[1]/td[5]/a/span"))).to.eventually.exist;
		await delay(3000);
		element(by.xpath(".//*[@id='my-orders-table']/tbody/tr[1]/td[5]/a/span")).click();
		await delay(10000);
	});
		Then('ABP-0070 View details is displayed', async () => {
		await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div[1]/div[3]/div[1]/div[1]"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div[1]/div[3]/div[2]/div[1]"))).to.eventually.exist;
		await delay(3000);
	});
	When('click on logout button',async () => {
		element(by.xpath(".//*[@id='account-dropdown-button']")).click();
		await delay(5000);
		element(by.xpath(".//*[@id='account-dropdown']/div/a[4]")).click();
		await delay(10000);
	 });
	 When('i move to shops products', async () => {
	    await delay(5000);
        browser.actions().mouseMove(element(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products.html']"))).perform();
        await delay(5000);
	});
	When('PAP-0010 i navigate to listen and click on audio dramas', async () => {
	  
        element(by.xpath(".//*[@href='https://market2.beta.formed.org/shop-products/listen/audio-dramas.html']")).click();
        await delay(10000);
	});
	Then('PAP-0010 Audio dramas page is displayed', async () => {
        await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/au-odetosaintcecilia-en.html']"))).to.eventually.exist;
        await delay(2000);
    });
    When('PAP-0020 i click on Item', async () => {
        element(by.xpath("//a[@href='https://market2.beta.formed.org/au-odetosaintcecilia-en.html']")).click();
        await delay(5000);
	});
	Then('PAP-0020 Product detailed page is displayed', async () => {     
        await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[4]/div[2]/h1/span"))).to.eventually.exist;
        await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@id='options-803-list']/div/label"))).to.eventually.exist;
        await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div[1]/div[1]/div/img"))).to.eventually.exist;
        await delay(3000);
    
    });
    Then('PAP-0020 Text, You May Also Like, Product card in right column with image, Add to cart button are displayed', async () => {
    
        await expect(browser.findElement(by.xpath(".//*[@id='related__items']/div[2]/div/ol/li[1]/div/a"))).to.eventually.exist;
        await delay(3000);
        await expect(browser.findElement(by.xpath(".//*[@id='product-addtocart-button']"))).to.eventually.exist;
        await delay(5000);   
	});
	Then('Click on Add to cart', async () => {        
        element(by.xpath(".//*[@id='product-addtocart-button']")).click();    
        await delay(10000);
	});
	When('PBP-0060 click on incart icon',async () => {
		element(by.xpath(".//*[@class='counter qty']")).click();
		await delay(6000);
		await expect(browser.findElement(by.xpath(".//*[@id='mini-cart']/li/div[1]/span/img"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='mini-cart']/li[1]/div[1]/div/div"))).to.eventually.exist;
		await delay(3000);
		await expect(browser.findElement(by.xpath(".//*[@id='mini-cart']/li[1]/div[1]/div/strong[2]"))).to.eventually.exist;
		await delay(3000);
	 });      
	 When('PBP-0060 click on title',async () => {
	    element(by.xpath(".//*[@id='mini-cart']/li[1]/div[1]/div/strong[1]/a")).click();
        await delay(10000);
	});
	When('PBP-0050 click on product in you may also like', async () => {
        element(by.xpath(".//*[@id='related__items']/div[2]/div/ol/li[1]/div/a/img")).click();
        await delay(10000);
	});
	When('PBP-0060 click on remove option',async () => {
	    element(by.xpath(".//*[@id='mini-cart']/li[1]/div[1]/div/div/div/a")).click();
        await delay(5000);
		await expect(browser.findElement(by.xpath(".//*[@id='minicart-content-wrapper']/div"))).to.eventually.exist;
	    await delay(3000);
	});
	When('PBP-0060 Click on check out option',async () => {
	    element(by.xpath(".//*[@id='top-cart-btn-checkout']")).click();
        await delay(15000);		
	});
    When('PBP-0070 Click on the create an account', async () => {
        await delay(5000);
        element(by.xpath(".//*[@id='register_modal_trigger']")).click();
        await delay(10000);
   });
   Then('PBP-0070 Enter Details in create Account', async () => {
	  var x = 999999;
	  var rand = Math.floor(Math.random()*x) + 1;        
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[1]/input")).sendKeys("Fname");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[2]/input")).sendKeys("Lname");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[1]/input")).sendKeys("5000");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[2]/input")).sendKeys("invalid"+rand+"@gmail.com");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[3]/input")).sendKeys("Raj@2016");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[4]/input")).sendKeys("Raj@2016");
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[5]/div/label")).click();
	  await delay(1000);
	  element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]")).click();        
	  await delay(20000);
  });
  Then('PBP-0070 Billing information are displayed', async () => { 
	browser.navigate().refresh();
	element(by.xpath("html/body/main/div/main/div/div/div[3]/div[4]/div/div[1]/div/div[4]/div[1]/div[2]/div[1]/div[2]/div[1]/form/fieldset/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
	await delay(5000);
	element(by.xpath("html/body/main/div/main/div/div/div[3]/div[4]/div/div[1]/div/div[4]/div[1]/div[2]/div[1]/div[2]/div[1]/form/fieldset/fieldset/div/div[1]/div/input")).sendKeys("Chicago");
	await delay(1000);
	element(by.css("html/body/main/div/main/div/div/div[3]/div[4]/div/div[1]/div/div[4]/div[1]/div[2]/div[1]/div[2]/div[1]/form/fieldset/div[5]/div/select")).click();
	await delay(1000);
	element(by.xpath("html/body/main/div/main/div/div/div[3]/div[4]/div/div[1]/div/div[4]/div[1]/div[2]/div[1]/div[2]/div[1]/form/fieldset/div[5]/div/select/option[13]")).click();
	await delay(1000);
	element(by.xpath("html/body/main/div/main/div/div/div[3]/div[4]/div/div[1]/div/div[4]/div[1]/div[2]/div[1]/div[2]/div[1]/form/fieldset/div[6]/div/input")).sendKeys("60014");
	await delay(1000);	
});
Then('PBP-0070 Enter Payment Method', async () => { 
	
	//await delay(5000);
	//element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']")).click();
	
	await delay(5000);
	//element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']/option[4]")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_number']")).sendKeys("4111111111111111");
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']/option[3]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration']/option[7]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration_yr']")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration_yr']/option[4]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys("222");
	await delay(3000);
});
Then('PBP-0070 Verify the Checkout Page', async () => { 
	element(by.xpath(".//*[@id='review']/div[1]")).click();
	await delay(15000);
});
Then('PBP-0070 Click on View library', async () => { 
	element(by.xpath("//a[@href='https://market2.beta.formed.org/mylibrary/']")).click();
	await delay(12000);
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li/div/div/a/img")).click();
	await delay(8000);

});
Then('PBP-0070 Order Confirmation is displayed for Group', async () => {         
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[1]/div[2]/div[2]/strong"))).to.eventually.exist;
	//element(by.linkText("Order Date")).isDisplayed();
	//element(by.linkText("1Year FORMED On Demand Gift Subscription")).isDisplayed();
	//element(by.linkText("Payment summary")).isDisplayed();
	//element(by.linkText("Sent to: Fname Lname")).isDisplayed();
	//element(by.linkText("rajeshnakka.c212c@gmail.com")).isDisplayed();
	await delay(10000);
});
When('PBP-0070 Click on view in library', async () => {
  await delay(3000);
  element(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[3]/button")).click();
  await delay(10000);
});
Then('PBP-0070 View in library is displayed', async () => {      
	await expect(browser.findElement(by.xpath(".//*[@id='product-viewinlibrary-button']"))).to.eventually.exist;
	await delay(10000);
});
Then('Click on Product in watch', async () => {
   element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
   await delay(10000);
});
When('CO-0010 Click on Watch in Digital products', async () => {
	await delay(8000);
	element(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[1]/a/label/div")).click();
	await delay(10000);
});
Then('Click on Product2 in watch', async () => {
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[2]/div/a/img")).click();
	await delay(10000);  
}); 
Then('CO-0010 Verify Check Out in Cart', async () => {
	element(by.xpath(".//*[@id='mini-cart']/li[1]/div[1]/div/strong[1]/a")).click();
	await delay(10000);
 });
 Then('CO-0020 Cart should contain added products', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div[1]/div[1]/div/img"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='product-alreadyincart-button']"))).to.eventually.exist;
	await delay(5000);
	element(by.xpath(".//*[@id='product-alreadyincart-button']")).click();
	await delay(10000);
  });
  Then('CO-0030 delete product from Cart', async () => {
   element(by.xpath(".//*[@id='mini-cart']/li[2]/div[1]/div/div/div/a")).click();
   await delay(10000);
  });
  Then('CO-0040 Create Account and Continue login is displayed', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='register_modal_trigger']"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='login_modal_trigger']"))).to.eventually.exist;
	await delay(5000);
  });
  Then('Click on Checkout in Cart Summary', async () => {       
	element(by.xpath(".//*[@id='top-cart-btn-checkout']")).click(); 
	await delay(20000);   
});
Then('CO-0050 Enter Details in create Account', async () => {
	var x = 999999;
	var rand = Math.floor(Math.random()*x) + 1;        
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[1]/input")).sendKeys("Fname");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[2]/input")).sendKeys("Lname");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[1]/input")).sendKeys("5000");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[2]/input")).sendKeys("sair7989@gmail.com");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[3]/input")).sendKeys("krishna@123");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[4]/input")).sendKeys("Krishna@123");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[5]/div/label")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]")).click();        
	await delay(20000);   
});  
When('VR-0020 Click on the create an account', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='register_modal_trigger']")).click();
	await delay(10000);
});
When('SGB-0060 Conformation prompt is displayed', async () => {
	await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@value='OK']"))).to.eventually.exist;
    await delay(3000);
    element(by.xpath(".//*[@value='OK']")).click();
	await delay(10000);
});
Then('SGB-0070 leader check list is displayed', async () => {
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='leaders-wrapper']/div/div[9]/a"))).to.eventually.exist;
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='leaders-wrapper']/div/div[8]/label"))).to.eventually.exist;
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='leaders-wrapper']/div/div[8]/label"))).to.eventually.exist;
    await delay(3000);
});
Then('CPS-0060 Enter Billing Information', async () => { 
	browser.navigate().refresh()
	//element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
	await delay(5000);
	//element(by.css("html body.checkout-index-index.page-layout-1column main.formed__container.logged__in div.page-wrapper main#maincontent.page-main div.columns div.column.main div#checkout.checkout-container div.opc-wrapper ol#checkoutSteps.opc li#payment.checkout-payment-method div#checkout-step-payment.step-content form#co-payment-form.form.payments fieldset.fieldset div#checkout-payment-method-load.opc-payment div.items.payment-methods div.payment-group div.payment-method.custom-cybersource._active div.payment-method-content div div.payment-method-billing-address div.checkout-billing-address fieldset.fieldset div.billing-address-form form div#billing-new-address-form.fieldset.address fieldset.field.street.admin__control-fields.required div.control div.field._required div.control")).click();
	
	await delay(5000);
	element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
	
	await delay(5000);
	//element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
	element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[4]/div/input")).sendKeys("Chicago");
	await delay(1000);
	//element(by.css("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select")).click();
	await delay(1000);
	element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
	await delay(1000);
	element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[7]/div/input")).sendKeys("60014");
	await delay(1000);
	element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
	await delay(10000);
});
Then('CPS-0060 Enter Payment Method', async () => { 
        
	//await delay(5000);
	//element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']")).click();
	
	await delay(5000);
	//element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']/option[3]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_number']")).sendKeys("4111111111111111");
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration']/option[7]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration_yr']/option[3]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys("222");
	await delay(1000);
	element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[2]/div[6]/div/button")).click();
	await delay(10000);
});
When('i click on user name drop down', async () => {  
	element(by.xpath(".//*[@id='account-dropdown-button']")).click();
	await delay(10000);
});
When('ABP-0010 click on get credit plan', async () => {
	await delay(5000);
	element(by.xpath("//a[@href='https://market2.beta.formed.org/rewards/account/']")).click();
	await delay(15000);
});
When('click on credits', async () => {
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ul/li[1]/form/button")).click();
	await delay(8000);
	element(by.xpath(".//*[@class='counter qty']")).click();
	await delay(8000);
	element(by.xpath(".//*[@id='top-cart-btn-checkout']")).click();
	await delay(15000);
});
Then('CO-0080 Enter CVV', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys("222");
	await delay(2000);
	element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[2]/div[6]/div/button")).click();
	await delay(10000);
});
When('click on watch document product', async () => {
	await delay(5000);
	element(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/watch/documentaries.html']")).click();
	await delay(15000);
});
Then('click on watch document', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[8]/div/div/strong/a")).click();
	await delay(15000);
});
Then('click on watch document1', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[13]/div/a/img")).click();
	await delay(15000);
});
Then('CPS-0080 Order Confirmation is displayed', async () => { 
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/header/h1"))).to.eventually.exist;
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div/div[4]/div[1]/div[1]/div[2]/div[2]/strong"))).to.eventually.exist;
	await delay(10000);
});
Then('CPS-0010 there is get credit plan', async () => {
	await delay(10000);
	await expect(browser.findElement(by.xpath("html/body/header/section[2]/div[8]/div/a/span"))).to.eventually.exist;
	//element(by.xpath("html/body/header/section[1]/div[8]/div/a/span")).isDisplayed();
});
Then('click on product', async () => {
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[3]/div/a/img")).click();
	await delay(10000);
});
Then('CPS-0020 Get Credit Plan prompt is displayed', async () => {
	await delay(5000);
	await expect(browser.findElement(by.xpath("html/body/header/section[1]/div[8]/div/a/span"))).to.eventually.exist;
	await delay(10000);
		//element(by.xpath("html/body/header/section[1]/div[8]/div/a/span")).isDisplayed();
});       
When('CPS-0030 i click on get credits plan', async () => {      
  element(by.xpath("html/body/header/section[2]/div[8]/div/a/span")).click();
  await delay(10000);
});
Then('CPS-0030 get credits plan link is displayed', async () => {      
 await expect(browser.findElement(by.xpath(".//*[@id='offer-dt']/p[4]/a/button"))).to.eventually.exist;
 await delay(10000);
}); 
When('CPS-0050 Click on Monthly credit plan', async () => {          
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ul/li[2]/form/button")).click();
	await delay(10000);
});	
Then('CPS-0090 Available credits are displayed', async () => { 
	await expect(browser.findElement(by.xpath(".//*[@class='counter amount']"))).to.eventually.exist;
	await delay(5000);
});
When('then account is displayed', async () => {     
    await expect(browser.findElement(by.xpath(".//*[@id='account-dropdown']/div/a[1]"))).to.eventually.exist;
    await delay(3000);
});
When('i click on account', async () => {       
    element(by.xpath(".//*[@id='account-dropdown']/div/a[1]")).click();
	await delay(10000);
});	
When('CPS-0100 Click on Annual credit plan', async () => {          
  element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ul/li[3]/form/button")).click();
  await delay(5000);
});
Then('CPS-0100 Click on Change credit plan', async () => {  
	await delay(2000);       
	element(by.xpath(".//*[@href='https://market2.beta.formed.org/creditplans.html/']")).click();
	await delay(6000);
});
Then('CPS-0110 Click on Cancel Credit Plan', async () => {
	await delay(6000);
	element(by.xpath(".//*[@id='cancel-credit-plan-btn']")).click();
	await delay(3000);
	element(by.xpath(".//*[@class='cancel-credit-plan-btn']")).click();
	await delay(10000);
});
Then('CO-0050 Verify Details in create Account', async () => {
    await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[1]/input"))).to.eventually.exist;
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[2]/input"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[1]/div[2]/input"))).to.eventually.exist;
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[2]/input"))).to.eventually.exist;
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[3]/input"))).to.eventually.exist;
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[4]/input"))).to.eventually.exist;
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[5]/div/label/span[2]"))).to.eventually.exist;
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]"))).to.eventually.exist;
    await delay(5000);
});
When('click on get credit plan in market view', async () => {
	await delay(6000);
	element(by.xpath("html/body/header/section[2]/div[8]/div/a/span")).click();
	await delay(3000);
});
Then('CO-0100 Click on Apply credits', async () => {
	await delay(6000);
	element(by.xpath(".//*[@id='opc-sidebar']/div[1]/div/div[2]/div/ol/li[1]/div/div[2]/label/span")).click();
    await delay(3000);
    element(by.xpath(".//*[@id='opc-sidebar']/div[1]/div/div[2]/div/ol/li[2]/div/div[2]/label/span")).click();
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='minicart-apply-credits']"))).to.eventually.exist;
    await delay(1000);
    await expect(browser.findElement(by.xpath(".//*[@id='reward-points-form']/div[1]"))).to.eventually.exist;
    await delay(1000);
    element(by.xpath(".//*[@id='opc-sidebar']/div[1]/div/div[2]/div/ol/li[2]/div/div[2]/label/span")).click();
	await delay(3000);
});
Then('CO-0100 click on apply credits', async () => {
    await expect(browser.findElement(by.xpath(".//*[@id='minicart-apply-credits']/button[1]"))).to.eventually.exist;
    await delay(1000);
    await expect(browser.findElement(by.xpath(".//*[@id='minicart-apply-credits']/button[2]"))).to.eventually.exist;
    await delay(1000);
    element(by.xpath(".//*[@id='minicart-apply-credits']/button[1]")).click();
    await delay(15000);
    await expect(browser.findElement(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[2]/div[4]"))).to.eventually.exist;
    await delay(2000); 
});
Then('HPF-0020 market details are displayed', async () => {
   await expect(browser.findElement(by.xpath(".//*[@href='https://market2.beta.formed.org/shop-products.html']"))).to.eventually.exist;
   await delay(3000);
   await expect(browser.findElement(by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]"))).to.eventually.exist;
   await delay(3000);
   await expect(browser.findElement(by.xpath(".//*[@id='login-dropdown-button']"))).to.eventually.exist;
   await delay(3000);
});
When('HPF-0020 move to shop products', async () => {
	browser.actions().mouseMove(element(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products.html']"))).perform();
	await delay(5000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/watch.html']"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/watch/feature-films.html']"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/watch/documentaries.html']"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/watch/talks.html']"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/watch/tv-shows.html']"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/watch/spanish.html']"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/listen.html']"))).to.eventually.exist;
	await delay(2000)
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/listen/talks.html']"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/listen/audio-dramas.html']"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/listen/audiobooks.html']"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/listen/espa-ol.html']"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/formed-subscriptions.html']"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/formed-subscriptions/on-demand.html']"))).to.eventually.exist;
	await delay(2000);
});
When('i click on search icon and enter text', async () => {
	element(by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]")).click();
	await delay(4000);
	element(by.xpath(".//*[@id='search']")).sendKeys("Listen");
	await delay(2000);                  
	element(by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]")).click();
	await delay(8000);
 });
When('HPF-0030 click on demand page', async () => {
    await delay(5000);
	element(by.xpath(".//*[@href='https://beta.formed.org/']")).click();
	await delay(10000);                         
});
When('HPF-0050 i click on library link', async () => {
    await delay(20000);
	element(by.xpath(".//*[@href='https://market2.beta.formed.org/mylibrary/']']")).click();
	await delay(15000);
});
Then('your library is  empty and some message is displayed',async () => {
	
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/section/h1"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/section/p"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/section/a"))).to.eventually.exist;
	await delay(2000);
 });
 When('HPF-0060 Click on user name', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[1]"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]"))).to.eventually.exist;
	await delay(5000);
});
Then('HPF-0070 login user market page details', async () => {	   
   await expect(browser.findElement(by.xpath(".//*[@href='https://market2.beta.formed.org/shop-products.html']"))).to.eventually.exist;
   await delay(3000);
   await expect(browser.findElement(by.xpath(".//*[@id='account-dropdown-button']"))).to.eventually.exist;
   await delay(3000);
   await expect(browser.findElement(by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]"))).to.eventually.exist;
   await delay(3000);
 });
When('HPF-0080 click on library page', async () => {
  element(by.xpath("//a[@href='https://market2.beta.formed.org/mylibrary/']")).click();
  await delay(10000);
});
When('HPF-0080 show purchase products', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[1]/div/div/a/img"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[2]/div/div/a/img"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[3]/div/div/a/img"))).to.eventually.exist;
	await delay(3000);
});
When('LP-0020 click on library page', async () => {
   element(by.xpath(".//*[@href='https://market2.beta.formed.org/mylibrary/']")).click();
   await delay(10000);
});
Then('LP-0030 Purchase products is displayed', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[1]/div/div/a/img"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[2]/div/div/a/img"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[3]/div/div/a/img"))).to.eventually.exist;
	await delay(3000);
});
When('LP-0050 click on watch', async () => {
	element(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li/ol/li[1]/a/label")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/catalog/product/view/id/376/s/vd-threemiraclesofhappiness-en/category/6/']"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='open-modal-mylibrary-player-1969']/i"))).to.eventually.exist;
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[1]/div/div/div[1]"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='open-modal-mylibrary-player-1969']/i"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[1]/div/div/div[2]"))).to.eventually.exist;
	await delay(3000);
	element(by.xpath(".//*[@id='open-modal-mylibrary-player-1969']/i")).click();
	await delay(10000);
});
Then('LP-0060 click on play button', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='close-modal-mylibrary-player-1969']")).click();
	await delay(5000);
});
Then('LP-0070 click on play button', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='close-modal-mylibrary-player-1665']")).click();
	await delay(5000);
});
When('LP-0070 click on Listen', async () => {
	element(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li/ol/li[2]/a/label/div[1]")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li/div/div/a/img"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li/div/div/div[1]/div"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li/div/div/div[2]"))).to.eventually.exist;
	await delay(5000);
	element(by.xpath(".//*[@id='open-modal-mylibrary-player-1665']/i")).click();
	await delay(15000);
});
When('LP-0040 click on Titel string', async () => {
	element(by.xpath(".//*[@id='sorter']")).click();
	await delay(10000);                         
	await expect(browser.findElement(by.xpath(".//*[@id='sorter']/option[1]"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='sorter']/option[2]"))).to.eventually.exist;
	await delay(3000);   
});
When('LP-0080 click on Read', async () => {
	element(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li/ol/li[3]/a/label/div[1]")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[4]/div/ol/li[1]/div/div/div[2]/strong"))).to.eventually.exist;
	await delay(3000);
	element(by.xpath(".//*[@id='open-ebook-download-modal-2297']/i")).click();
	await delay(10000);
});
Then('LP-0090 Download format is displayed', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='ebook-download-modal-2297']/p"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='ebook-download-modal-2297']/div/div[1]/a"))).to.eventually.exist;
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='ebook-download-modal-2297']/div/div[1]/p"))).to.eventually.exist;
	await delay(3000);
});
Then('LLP-0010 Formed icon, Ondemand, Library, Market are displayed', async  () => {
	await delay(15000);
	await expect(browser.findElement(by.xpath(".//*[@title='On Demand']"))).to.eventually.exist;	
	await delay(3000);   
	await expect(browser.findElement(by.xpath(".//*[@title='Community']"))).to.eventually.exist;  
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@href='https://market2.beta.formed.org/mylibrary/']"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@href='https://market2.beta.formed.org/']"))).to.eventually.exist;
	await delay(3000);
});
When('i click on login button to verify for forgot password', async  () => { 
	element(by.xpath(".//*[@id='login-dropdown-button']")).click();
	await delay(5000);   
});
Then('LLP-0020 Email, Password, submit, Forgot password are displayed', async  () => {
		  
	await expect(browser.findElement(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[3]/a"))).to.eventually.exist;
	await delay(2000);
});
When('LLP-0040 When click on Forgot Password', async  () => {
	await delay(2000); 
	element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[3]/a")).click();
	await delay(2000);
});
Then('LLP-0040 Prompt is displayed to enter email', async  () => {
	await expect(browser.findElement(by.xpath(".//*[@id='gigya-forgot-password-screen']/form/div/div[1]/div/input"))).to.eventually.exist;
	await delay(2000);
	 
});
Then('click on back to enter email', async  () => {
              
	element(by.xpath(".//*[@id='gigya-forgot-password-screen']/form/div/div[3]/label/a")).click();
	await delay(2000);
	
});
When('LLP-0050 Click on account drop down for parish user', async  () => {
	  
	element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("test+parish@formed.org");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("formed");
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
	await delay(15000);
	element(by.xpath(".//*[@id='account-dropdown-button']")).click();
	await delay(1000);
});
Then('LLP-0050 Account, subscription, dashboard, logout are displayed', async  () => {
		  
	await expect(browser.findElement(by.xpath(".//*[@id='account-dropdown']/div/a[1]"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='account-dropdown']/div/a[2]"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='account-dropdown']/div/a[3]"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='account-dropdown']/div/a[4]"))).to.eventually.exist;
	await delay(2000);
});
When('LLP-0060 Click on Account in username drop down', async  () => {
          
	element(by.xpath(".//*[@id='account-dropdown']/div/a[1]")).click();
	await delay(5000);
});
Then('LLP-0060 Name, Email, Password are displayed', async  () => {
		  
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[1]/div[2]/section/p"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[3]/div[1]/div[1]/div[2]/section/h2"))).to.eventually.exist;
	await delay(2000);
});
When('LLP-0080 Click on Subscription in username drop down', async  () => {
	  
	element(by.xpath(".//*[@id='account-dropdown-button']")).click();
	await delay(2000);
	element(by.xpath(".//*[@id='account-dropdown']/div/a[2]")).click();
	await delay(12000);
});
Then('LLP-0080 Subscription, Parish, Payment information are displayed', async  () => {
    await delay(8000);
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[2]/div/div/div[1]/div[2]/a"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='parishCode']"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[2]/div/div/div[1]/div[2]/a"))).to.eventually.exist;
	await delay(2000);
});
When('LLP-0110 Click on dashboard in username drop down', async  () => {  
	element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
	await delay(2000);
	element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/span[1]/a")).click();
	await delay(12000);
});
When('LLP-0120 Click on logout button', async  () => {
	element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
	await delay(2000);
	element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]")).click();
	await delay(20000);
});
When('LLP-0050 Click on username drop down for individual user', async  () => {
    await delay(15000);
	element(by.xpath(".//*[@id='simple-dropdown']")).click();
	await delay(2000);
	element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys("rajeshnakka.cmc@gmail.com");
	await delay(1000);
	element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys("123456");
	await delay(1000);
	element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
	await delay(10000);
	element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
	await delay(2000);
});
Then('LLP-0050 Account, Subscription, logout are displayed', async  () => {
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[1]"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]"))).to.eventually.exist;
	await delay(2000);
});
When('LLP-0100 Click on Subscription for individual user', async  () => {
	await delay(5000);
	element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]")).click();
	await delay(10000);
});
Then('LLP-0100 Subscription payement is displayed', async  () => {
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div/div/div/div/div[2]/div/div[1]"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div/div/div/div/div[2]/div/div[2]/div/modal-link/a/span"))).to.eventually.exist;
	await delay(2000);
});
Then('click on ondemand subscription' , async () => {
    element(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/formed-subscriptions/on-demand.html']")).click();
    await delay(15000);
    element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img")).click();
    await delay(8000);
});
Then('VR-0020 sign in group detail is displayed', async  () => {      
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[4]/div[2]/h1/span"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div[1]/div[1]/div/img"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='product-addtocart-button']"))).to.eventually.exist;
	await delay(2000);
	element(by.xpath(".//*[@id='product-options-wrapper']/div/div[1]/div/label")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='product-addtocart-button']")).click();
	await delay(10000);
});
Then('VR-0020 click on checkout button', async  () => {
	element(by.xpath(".//*[@class='counter-number']")).click();
	await delay(8000);
	element(by.xpath(".//*[@id='top-cart-btn-checkout']")).click();
	await delay(15000);
});
When('PBC-0010 click on pay by check' , async () => {
    element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[1]/div[2]/div/div/select")).click();
    await delay(5000);
    element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[1]/div[2]/div/div/select/option[2]")).click();
    await delay(10000);
});
Then('PBC-0020 Billing information are displayed', async () => { 

    element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[2]/div/input")).sendKeys("test");
    await delay(5000);
    element(by.xpath(".//*[@name=street[0]]")).sendKeys("Chicago illonois");
    await delay(5000);
    element(by.xpath(".//*[@name=city")).sendKeys("Chicago");
    await delay(5000);
    element(by.xpath(".//*[@name=region_id")).click();
	await delay(5000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[5]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[3]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
    await delay(1000);
    element(by.xpath(".//*[@name=country_id]")).click();
    await delay(1000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[5]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[3]/div/fieldset/div[2]/form/div/div[8]/div/select/option[219]")).click();
    await delay(1000);
    element(by.xpath(".//*[@name=telephone]")).sendKeys("9898985555");
    await delay(3000);
    element(by.xpath(".//[@name=postcode]")).sendKeys("60014");
    await delay(1000);
    element(by.xpath(".//*[@id='billing-new-address-form']/div[10]/div/button[1]")).click();
    await delay(5000);
});
When('PBCC-0040 click on Entercupon', async () => {
	await delay(8000);
	element(by.xpath(".//*[@id='coupons-tax-exempt']/div[1]/strong/a")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[1]/label/input"))).to.eventually.exist;
    await delay(2000);
    element(by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[1]/label/input")).sendKeys("2018FormedSP");
	await delay(2000);
	element(by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[1]/button[1]")).click();
    await delay(2000);
});
When('PBC-0030 order conformation is displayed', async () => {
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[2]/div[2]/div[2]/span[1]/span"))).to.eventually.exist;
	await delay(2000);
});
When('click on Dashboard', async () => {
    element(by.xpath(".//*[@id='account-dropdown-button']")).click();
    await delay(5000);
    element(by.xpath(".//*[@id='account-dropdown']/div/a[3]")).click();
    await delay(20000);
});
When('click on login user in ondemand page', async () => { 
    element(by.xpath(".//*[@class='initials ng-binding']")).click();
    await delay(5000);
    element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]")).click();
    await delay(10000);
});
When('subscription information is displayed', async () => {
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[1]/div/div/div[2]/div/div[1]"))).to.eventually.exist;
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[1]/div/div/div[1]/div[1]/a"))).to.eventually.exist;
    await delay(5000);
    await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[1]/div/div/div[2]/div/div[2]/div/modal-link/a/span"))).to.eventually.exist;
    await delay(5000);
});
Then('VR-0010 entercode,getfreetrail,sign up group is displayed', async  () => {
    await delay(20000);
	element(by.xpath(".//*[@id='scroll-top']/div/div/div[2]/div[3]/registration-column/a")).click();
	await delay(10000);
});
Then('VR-0030 Billing information are displayed', async () => { 
	browser.navigate().refresh();
	element(by.css("html body.checkout-index-index.page-layout-1column main.formed__container.logged__in div.page-wrapper main#maincontent.page-main div.columns div.column.main div#checkout.checkout-container div.opc-wrapper ol#checkoutSteps.opc li#payment.checkout-payment-method div#checkout-step-payment.step-content form#co-payment-form.form.payments fieldset.fieldset div#checkout-payment-method-load.opc-payment div.items.payment-methods div.payment-group div.payment-method.custom-cybersource._active div.payment-method-content div div.payment-method-billing-address div.checkout-billing-address fieldset.fieldset div.billing-address-form form div#billing-new-address-form.fieldset.address fieldset.field.street.admin__control-fields.required div.control div.field._required div.control")).click();
	await delay(12000);
	element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
	await delay(5000);
	element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
	element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[4]/div/input")).sendKeys("Chicago");
	await delay(1000);
	element(by.css("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select")).click();
	await delay(1000);
	element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
	await delay(1000);
	element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[9]/div/input")).sendKeys("9898985555");
	await delay(3000);
	element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[7]/div/input")).sendKeys("60014");
	await delay(1000);
	element(by.xpath(".//*[@id='billing-new-address-form']/div[10]/div/button[1]")).click();
	await delay(5000);
});
Then('VR-0030 Enter Payment Method', async () => { 
	
	//await delay(5000);
	//element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']")).click();
	
	await delay(5000);
	//element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']/option[3]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_number']")).sendKeys("4242424242424242");
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration']/option[2]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration_yr']/option[4]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys("123");
});
Then('SGB-0010 Enter Payment Method with Form fund', async () => { 
	
	//await delay(5000);
	//element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']")).click();
	
	await delay(5000);
	//element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_type']/option[3]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_cc_number']")).sendKeys("4242424242424242");
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration']/option[2]")).click();
	await delay(1000);
	element(by.xpath(".//*[@id='magedelight_cybersource_expiration_yr']/option[4]")).click();
	await delay(1000);
    element(by.xpath(".//*[@id='magedelight_cybersource_cc_cid']")).sendKeys("123");
    await delay(1000);
    element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[2]/div[4]/label/span")).click();
    await delay(4000);    
});
Then('SGB-0020 agree for terms of Funding', async () => {
	await delay(8000);
	element(by.xpath(".//*[@id='terms-modal-checkbox']/label/span")).click();
	await delay(10000);
	element(by.xpath(".//*[@id='terms-modal-footer-actions']/button")).click();
	await delay(2000);
});
Then('SGB-0020 Set goal', async () => {
	await delay(3000);
	element(by.xpath("html/body/div[6]/aside[1]/div[2]/footer/button[1]")).click();
	await delay(3000);
});
Then('SGB-0030 summary Page is displayed', async () => {
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@class='btn formed-funding-order-success__group-setup']"))).to.eventually.exist;
    await delay(2000);
    
    //.//*[@id='maincontent']/div[2]/div/div[3]/div/div[2]/button
});
Then('SGB-0040 Click on Setup group and verify', async () => {
	await delay(3000);
	element(by.xpath(".//*[@class='btn formed-funding-order-success__group-setup']")).click();
    await delay(15000);
    
    //.//*[@id='maincontent']/div[2]/div/div[3]/div/div[2]/button
});
Then('SGB-0050 Enter Organisation information is displayed', async () => {
	await delay(3000);
	element(by.xpath(".//*[@id='groupMission']")).sendKeys("");
	//await delay(2000);
    element(by.xpath(".//*[@id='groupLeader']")).sendKeys(".//*[@id='groupLeader']");
    await delay(2000);
    element(by.xpath("//*[@id='groupMission']")).sendKeys(".//*[@id='groupLeader']");
    await delay(2000);
    element(by.xpath("html/body/div[5]/div/div/group-finish-init/div[2]/div[1]/div[2]/form/input[3]")).sendKeys("test");
    await delay(2000);
    element(by.xpath(".//*[@value='activate']")).click();
    await delay(2000);
    //.//*[@id='maincontent']/div[2]/div/div[3]/div/div[2]/button
});
Then('SGB-0080 Enter Organisation information is displayed', async () => {
    await delay(3000);
    await expect(browser.findElement(by.xpath("html/body/div[5]/div/div/group-finish-init/div[2]/div[1]/div[2]/form/input[3]"))).to.eventually.exist;
    await delay(10000);
    await expect(browser.findElement(by.xpath("html/body/div[3]/div/div/group-finish-init/div[2]/div[1]/div[2]/form/custom-url/div/div/div[1]/input"))).to.eventually.exist;
    await delay(10000);
    await expect(browser.findElement(by.xpath(".//*[@value='activate']"))).to.eventually.exist;
    await delay(10000);
});

Then('SGB-0050 Enter Organisation information', async () => {
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='groupName']"))).to.eventually.exist;
	await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='groupLeader']"))).to.eventually.exist;
    await delay(2000);
    //.//*[@id='maincontent']/div[2]/div/div[3]/div/div[2]/button
});

When('VR-0040 click on Entercupon', async () => {
	await delay(8000);
	element(by.xpath(".//*[@id='coupons-tax-exempt']/div[1]/strong/a")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[1]/label/input"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[2]/input"))).to.eventually.exist;
	await delay(2000);
});

When('VR-0030 Choose organization', async () => {
	element(by.xpath(".//*[@id='group-subscription-diocese-select']")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='group-subscription-diocese-select']/option[5]")).click();
	await delay(2000);
	element(by.xpath(".//*[@id='group-subscription-organization-select']")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='group-subscription-organization-select']/option[6]")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[4]/div[3]/div/button")).click();
	await delay(15000);
});
When('VR-0040 Choose organization', async () => {
	element(by.xpath(".//*[@id='group-subscription-diocese-select']")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='group-subscription-diocese-select']/option[5]")).click();
	await delay(2000);
	element(by.xpath(".//*[@id='group-subscription-organization-select']")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='group-subscription-organization-select']/option[6]")).click();
	await delay(5000);
	element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[2]/div[6]/div/button")).click();
	await delay(15000);
});
When('VR-0050 order conformation is displayed', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[3]/button"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[1]/h2"))).to.eventually.exist;
	await delay(2000);
	element(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[3]/button")).click();
	await delay(15000);

});
When('VR-0060 Enter organization information', async () => {
	element(by.xpath(".//*[@id='groupLeader']")).sendKeys("Krishna");
	await delay(2000);
	element(by.xpath(".//*[@id='groupMission']")).sendKeys("I love my country");
	await delay(2000);
	element(by.xpath("html/body/div[5]/div/div/group-finish-init/div[2]/div[1]/div[2]/form/input[3]")).sendKeys("Formed");
	await delay(2000);
	element(by.xpath(".//*[@value='activate']")).click();
	await delay(5000); 
	element(by.xpath(".//*[@value='OK']")).click();
	await delay(10000);
});
Then('VR-0060 Leader checklist is displayed', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='leaders-wrapper']/div/div[2]/label"))).to.eventually.exist;
	await delay(1000);
	await expect(browser.findElement(by.xpath(".//*[@id='leaders-wrapper']/div/div[3]/label"))).to.eventually.exist;
	await delay(1000);
	await expect(browser.findElement(by.xpath(".//*[@id='leaders-wrapper']/div/div[4]/label"))).to.eventually.exist;
	await delay(1000);
	await expect(browser.findElement(by.xpath(".//*[@id='leaders-wrapper']/div/div[5]/label"))).to.eventually.exist;
	await delay(1000);
	element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
	await delay(4000);
	element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]")).click();
	await delay(10000); 
});
Then('VR-0070 Account information is displayed', async () => {
  await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[1]/div/div/div/div[3]/div[2]/a"))).to.eventually.exist;
  await delay(2000);
  await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div/div[1]/div[1]/div/div/div/div[3]/div[2]/a"))).to.eventually.exist;
  await delay(2000);
  element(by.xpath(".//*[@id='simple-dropdown']")).click();
  await delay(4000);
  element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]")).click();
  await delay(15000);             
});
Then('VR-0080 click on ondemand subscription' , async () => {
  element(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/formed-subscriptions/on-demand.html']")).click();
  await delay(10000);
  element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[2]/div/a/img")).click();
  await delay(8000);
});
Then('VR-0090 sign in group detail is displayed', async  () => {

await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div[1]/div[1]/div/img"))).to.eventually.exist;
await delay(2000);
element(by.xpath(".//*[@id='product-options-wrapper']/div/div[1]/div/label")).click();
await delay(5000);
element(by.xpath(".//*[@id='product-addtocart-button']")).click();
await delay(10000);

});
Then('VR-0100 Billing information are displayed', async () => { 
browser.navigate().refresh();
element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
await delay(5000);
element(by.css("html body.checkout-index-index.page-layout-1column main.formed__container.logged__in div.page-wrapper main#maincontent.page-main div.columns div.column.main div#checkout.checkout-container div.opc-wrapper ol#checkoutSteps.opc li#payment.checkout-payment-method div#checkout-step-payment.step-content form#co-payment-form.form.payments fieldset.fieldset div#checkout-payment-method-load.opc-payment div.items.payment-methods div.payment-group div.payment-method.custom-cybersource._active div.payment-method-content div div.payment-method-billing-address div.checkout-billing-address fieldset.fieldset div.billing-address-form form div#billing-new-address-form.fieldset.address fieldset.field.street.admin__control-fields.required div.control div.field._required div.control")).click();
await delay(12000);
element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
await delay(5000);
element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[4]/div/input")).sendKeys("Chicago");
await delay(1000);
element(by.css("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select")).click();
await delay(1000);
element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
await delay(1000);
element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[4]/ol/li[5]/div/form/fieldset/div[1]/div/div/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[7]/div/input")).sendKeys("60014");
await delay(1000);
element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
await delay(5000);
});
When('VR-0120 click on Entercupon', async () => {
await delay(8000);
element(by.xpath(".//*[@id='coupons-tax-exempt']/div[1]/strong/a")).click();
await delay(10000);
await expect(browser.findElement(by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[1]/label/input"))).to.eventually.exist;
await delay(2000);
await expect(browser.findElement(by.xpath(".//*[@id='coupons-tax-exempt']/div[2]/div[2]/input"))).to.eventually.exist;
await delay(2000);
element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[2]/div[6]/div/button")).click();
await delay(15000);
});
When('VR-0130 order conformation is displayed', async () => {
await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[3]/button"))).to.eventually.exist;
await delay(2000);
await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
await delay(2000);
element(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[1]/div[4]/div[1]/div[3]/button")).click();
await delay(15000);
});
Then('VR-0140 subscription information', async () => {
element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
await delay(4000);
element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[2]")).click();
await delay(10000); 
});
Then('PBP-0010 click on Read option in digital products',async () => {
	 
	browser.actions().mouseMove(element(by.xpath(".//*[@href='https://market2.beta.formed.org/shop-products.html']"))).perform();
	await delay(5000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/read.html']"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/read/nonfiction.html']"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/read/fiction.html']"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/read/youth.html']"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/read/espa-ol.html']"))).to.eventually.exist;
	await delay(3000);
					  
});	   
Then('PBP-0010 Read Products page is displayed',async () => {
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/read/nonfiction.html']"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/read/fiction.html']"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/read/youth.html']"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/read/espa-ol.html']"))).to.eventually.exist;
	await delay(3000); 
	element(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/read/fiction.html']")).click();
	await delay(10000);
});
When('PBP-0020 click on the read product', async () => {
	element(by.xpath(".//a[@href='https://market2.beta.formed.org/catalog/product/view/id/980/s/bk-emilybronte-wutheringheights-en/category/111/']")).click();
	await delay(10000);
});	
Then('PBP-0020 Read Products page are displayed',async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div[1]/div[1]/div/img"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='product__description']/div[1]/p[1]"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='related__items']"))).to.eventually.exist;
	await delay(5000);
});
When('PBP-0030 click on Add to cart button', async () => {
	element(by.xpath(".//*[@id='product-addtocart-button']")).click();
	await delay(5000);
});
Then('PBP-0030 Message and cart icon number and incart displayed', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[1]/div[2]/div[2]/div/div"))).to.eventually.exist;
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[4]/div[2]/h1/span"))).to.eventually.exist;
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='product-alreadyincart-button']"))).to.eventually.exist;
	await delay(5000);
});
When('PBP-0040 Click on incart button', async () => {
	element(by.xpath(".//*[@id='counter-number']")).click();
	await delay(5000);
	// element(by.xpath(".//*[@id='minicart-content-wrapper']/div")).isDisplayed();
	
});
When('PBP-0050 cart icon button is increased by 1', async () => {
	await expect(browser.findElement(by.xpath(".//*[@class='counter-number']"))).to.eventually.exist;
	await delay(5000);
});
Then('SPP-0010 digital products and search icon are displayed', async () => {
	
	await expect(browser.findElement(by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@href='https://market2.beta.formed.org/shop-products.html']"))).to.eventually.exist;
	await delay(3000);
 });
 When('SPP-0020 click on the search icon', async () => {
	element(by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]")).click();
	await delay(3000);
	element(by.xpath(".//*[@id='search']")).sendKeys("pope");
	await delay(6000);
	element(by.xpath(".//*[@id='search_mini_form']/div[1]/div/label/span[1]")).click();
	await delay(10000);
});
Then('SPP-0030 Search product page is displayed', async () => {
	   
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div/section[1]/a/div/h2"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ol/li[1]/div/a/img"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ol/li[3]/div/div/div[1]/div[3]/span"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol"))).to.eventually.exist;
	await delay(3000);   
	await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dt[4]"))).to.eventually.exist;
	await delay(3000);         	   
 });
 When('SPP-0040 click on watch in left side view', async () => {
	element(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[1]/a/label/div")).click();
	await delay(6000);
 });
 Then('SPP-0040 Watch sub options are displayed', async () => {
	
	await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[1]/ol/li[1]/a/label/div"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[1]/ol/li[2]/a/label/div"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[1]/ol/li[3]/a/label/div"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[1]/ol/li[4]/a/label/div"))).to.eventually.exist;
	await delay(3000);
	element(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[2]/a/label/div")).click();
	await delay(15000);
 });
 Then('SPP-0040 Listen sub options are displayed', async () => {
	   
	await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[2]/ol/li[1]/a/label/div"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[2]/ol/li[2]/a/label/div"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[2]/ol/li[3]/a/label/div"))).to.eventually.exist;
	await delay(3000);
	element(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[3]/a/label/div")).click();
	await delay(15000);  
 
 });
 Then('SPP-0040 Read sub options are displayed', async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[3]/ol/li[2]/a/label"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[3]/ol/li[3]/a/label/div"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[3]/ol/li[4]/a/label/div"))).to.eventually.exist;
	await delay(3000);
 });  
 When('SPP-0040 select one or more attribute filter',async () => {		 
	element(by.xpath(".//*[@id='narrow-by-list']/dd[4]/ol/form/li[5]/a/label/div")).click();
	await delay(6000);
	element(by.xpath(".//*[@id='narrow-by-list']/dd[4]/ol/form/li[6]/a/label/div")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ol/li[2]/div/a"))).to.eventually.exist;
	await delay(3000);
});
When('SPP-0050 click on filter product',async () => {
		 
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[1]/ol/li[2]/div/a")).click();
	await delay(10000);
});
Then('SPP-0050 Product details are displayed',async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[5]/div[1]/div[1]/div[1]/img"))).to.eventually.exist;
	await delay(3000);
	element(by.xpath(".//*[@id='product__description--toggle']")).click();
	await delay(10000);
});
Then('SPP-0060 Product page is displayed',async () => {
	element(by.xpath(".//*[@href='https://market2.beta.formed.org/shop-products/read/fiction.html']")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[3]/a/label/div"))).to.eventually.exist;
	await delay(5000);
	await expect(browser.findElement(by.xpath(".//*[@id='sorter']"))).to.eventually.exist;
	await delay(5000);
	//element(by.xpath(".//*[@id='sorter']")).click(); 
});
Then('SPP-0070 featured drop down is displayed',async () => {
 
	await expect(browser.findElement(by.xpath(".//*[@id='sorter']/option[1]"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='sorter']/option[2]"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='sorter']/option[3]"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='sorter']/option[4]"))).to.eventually.exist;
	await delay(2000);
	await expect(browser.findElement(by.xpath(".//*[@id='sorter']/option[5]"))).to.eventually.exist;
	await delay(2000);
});
Then('SPP-0080 is products displayed',async () => {
 
	await expect(browser.findElement(by.xpath(".//*[@id='product__description']/div[1]/p[1]"))).to.eventually.exist;
	await delay(5000);
});
When('SPP-0080 Click second',async () => {
 
	element(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[2]/div/a/img")).click();
	await delay(5000);
});
Then('navigate to lenlet_cart', async () => {
	await delay(5000);
	await browser.get("https://market2.beta.formed.org/c/lenten_trial");
	await delay(15000);
})
Then('navigate to getbronze', async () => {
	await delay(5000);
	await browser.get("https://market2.beta.formed.org/c/getbronze");
	await delay(15000);
});
Then('navigate to 7daytrial', async () => {
	await delay(5000);
	await browser.get("https://market2.beta.formed.org/c/7daytrial");
	await delay(15000);
});
Then('navigate to SoG', async () => {
	await delay(5000);
	await browser.get("https://market2.beta.formed.org/c/SoG");
	await delay(15000);
});
Then('navigate to BiaY', async () => {
	await delay(5000);
	await browser.get("https://market2.beta.formed.org/c/BiaY");
	await delay(15000);
});
Then('navigate to getsilver', async () => {
	await delay(5000);
	await browser.get("https://market2.beta.formed.org/c/getsilver");
	await delay(15000);
});
Then('navigate to getplatinum', async () => {
	await delay(5000);
	await browser.get("https://market2.beta.formed.org/c/getplatinum");
	await delay(15000);
});
Then('navigate to getgold', async () => {
	await delay(5000);
	await browser.get("https://market2.beta.formed.org/c/getgold");
	await delay(15000);
});
Then('ICO-0020 Verify the Checkout Page', async () => { 
    element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div[2]/div[2]/div[6]/div/button")).click();
    await delay(15000);
});
When('ICO-0010 instant page is displayed', async () => {
    await delay(1000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div/div[1]/div/h1"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div/div[1]/div/img"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]"))).to.eventually.exist;
    await delay(2000);
});
Then('ICO-0030 order conformation is displayed', async () => { 
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[3]/button"))).to.eventually.exist;
    await delay(2000);
});
Then('ICO-0020 Billing information are displayed in incart', async () => { 
    browser.navigate().refresh();
    element(by.css("html body.checkout-index-index.page-layout-1column main.formed__container.logged__in div.page-wrapper main#maincontent.page-main div.columns div.column.main div#checkout.checkout-container div.opc-wrapper ol#checkoutSteps.opc li#payment.checkout-payment-method div#checkout-step-payment.step-content form#co-payment-form.form.payments fieldset.fieldset div#checkout-payment-method-load.opc-payment div.items.payment-methods div.payment-group div.payment-method.custom-cybersource._active div.payment-method-content div div.payment-method-billing-address div.checkout-billing-address fieldset.fieldset div.billing-address-form form div#billing-new-address-form.fieldset.address fieldset.field.street.admin__control-fields.required div.control div.field._required div.control")).click();
    await delay(12000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
    await delay(5000);
    element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[4]/div/input")).sendKeys("Chicago");
    await delay(1000);
    element(by.css("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select")).click();
    await delay(1000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
    await delay(1000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div[2]/div[1]/div[2]/div/fieldset/div[2]/form/div/div[7]/div/input")).sendKeys("60014");
    await delay(1000);
    element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
    await delay(5000);
});
Then('getbronze order conformation is displayed', async () => { 
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[1]"))).to.eventually.exist;
    await delay(2000);
});
Then('getsilver order conformation is displayed', async () => { 
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[3]/div[3]/button"))).to.eventually.exist;
    await delay(2000);
});
Then('getgold order conformation is displayed', async () => { 
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@class='counter amount']"))).to.eventually.exist;
    await delay(2000);
});
Then('getplatinum order conformation is displayed', async () => { 
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@class='counter amount']"))).to.eventually.exist;
    await delay(2000);
});
Then('SoG order conformation is displayed', async () => { 
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[3]/button"))).to.eventually.exist;
    await delay(2000);
});
Then('BiaY order conformation is displayed', async () => { 
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[3]/button"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[1]/div[2]/div[1]/img[1]"))).to.eventually.exist;
    await delay(2000);
});
Then('7daytrial conformation is displayed', async () => { 
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div[2]/div[4]/div[1]/div[3]/button"))).to.eventually.exist;
    await delay(2000);
});
Then('BiYa Verify the Checkout Page', async () => { 
    element(by.xpath(".//*[@id='checkout-payment-method-load']/div/div[2]/div[2]/div/div[7]/div/button")).click();
    await delay(15000);
});
Then('BiaY Billing information are displayed in incart', async () => { 
    browser.navigate().refresh();
    element(by.css("html body.checkout-index-index.page-layout-1column main.formed__container.logged__in div.page-wrapper main#maincontent.page-main div.columns div.column.main div#checkout.checkout-container div.opc-wrapper ol#checkoutSteps.opc li#payment.checkout-payment-method div#checkout-step-payment.step-content form#co-payment-form.form.payments fieldset.fieldset div#checkout-payment-method-load.opc-payment div.items.payment-methods div.payment-group div.payment-method.custom-cybersource._active div.payment-method-content div div.payment-method-billing-address div.checkout-billing-address fieldset.fieldset div.billing-address-form form div#billing-new-address-form.fieldset.address fieldset.field.street.admin__control-fields.required div.control div.field._required div.control")).click();
    await delay(12000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div/div[1]/div/fieldset/div[2]/form/div/fieldset/div/div[1]/div/input")).sendKeys("Chicago illonois");
    await delay(5000);
    element(by.xpath(".//*[@id='billing-new-address-form']/div[4]/div")).click();
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div/div[1]/div/fieldset/div[2]/form/div/div[4]/div/input")).sendKeys("Chicago");
    await delay(1000);
    element(by.css("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div/div[1]/div/fieldset/div[2]/form/div/div[5]/div/select")).click();
    await delay(1000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div/div[1]/div/fieldset/div[2]/form/div/div[5]/div/select/option[13]")).click();
    await delay(1000);
    element(by.xpath("html/body/main/div/main/div[3]/div/div[3]/div[3]/ol/li[5]/div/form/fieldset/div[1]/div/div[2]/div[2]/div/div[1]/div/fieldset/div[2]/form/div/div[7]/div/input")).sendKeys("60014");
    await delay(1000);
    element(by.xpath(".//*[@id='billing-new-address-form']/div[9]/div/button[1]")).click();
    await delay(5000);
});
Then('ICO-0040 7 days free trial page is displayed', async () => { 
    await delay(3000);
    await expect(browser.findElement(by.xpath(".//*[@id='maincontent']/div[2]/div/div[3]/div/div[1]/div/div/p[1]"))).to.eventually.exist;
    await delay(2000);
    await expect(browser.findElement(by.xpath(".//*[@id='gigya-register-screen']/form/div[2]/div[6]/input[1]"))).to.eventually.exist;
    await delay(2000);
});
When('LPA-0010 click on login button', async () => {
	await delay(15000);
	element(by.xpath(".//*[@id='simple-dropdown']")).click();
	await delay(10000);
});
When('LPA-0010 Enter Parish Admin Name and password', async () => {
	element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[1]")).sendKeys("test+parish@formed.org");
	await delay(1000);
	element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/input[2]")).sendKeys("formed");
	await delay(1000);
	element(by.xpath(".//*[@id='header']/div/div/div/div/ul/profile-menu/div/div/span/div/login/form/button")).click();
	await delay(25000);
});
When('I click on On Demand page', async () => {
	await delay(8000);
	element(by.xpath(".//a[@href='https://beta.formed.org/']")).click();
	await delay(10000);
});
Then('LPA-0020 Click on study Link and Verify with parish admin', async () => {
	await delay(10000);
	element(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[1]/a")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[1]/segmented-menu-item/div/segmented-links/div/div[1]/a"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[1]/segmented-menu-item/div/segmented-links/div/div[1]/a"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[1]/segmented-menu-item/div/segmented-links/div/div[3]/a"))).to.eventually.exist;
	await delay(3000);
	
});
Then('LPA-0020 Click on watch Link and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/watch']")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[2]/segmented-menu-item/div/segmented-links/div/div[1]/a"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[2]/segmented-menu-item/div/segmented-links/div/div[2]/a"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[2]/segmented-menu-item/div/segmented-links/div/div[3]/a"))).to.eventually.exist;
	await delay(3000);
	
});
Then('LPA-0020 Click on Listen Link and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/listen']")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[3]/segmented-menu-item/div/segmented-links/div/div[1]/a"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[3]/segmented-menu-item/div/segmented-links/div/div[2]/a"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[3]/segmented-menu-item/div/segmented-links/div/div[3]/a"))).to.eventually.exist;
	await delay(3000);
});
Then('LPA-0020 Click on read Link and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/read']")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[4]/segmented-menu-item/div/segmented-links/div/div[1]/a"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[4]/segmented-menu-item/div/segmented-links/div/div[2]/a"))).to.eventually.exist;
	await delay(3000);
	await expect(browser.findElement(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[4]/segmented-menu-item/div/segmented-links/div/div[3]/a"))).to.eventually.exist;
	await delay(3000);
});
Then('LPA-0030 Click on sacramental-preparation and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/study?linkId=study-sacramental-preparation']")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='study-sacramental-preparation']/div/div[1]/h1"))).to.eventually.exist;
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[2]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
	await delay(3000);
});
Then('LPA-0030 Click on Faith Information and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/study?linkId=study-faith-formation']")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='study-faith-formation']/div/div[1]/h1"))).to.eventually.exist;
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
	await delay(3000);
});
Then('LPA-0030 Click on Bible studies and Verify with parish admin', async () => {
	element(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[1]/segmented-menu-item/div/segmented-links/div/div[3]/a")).click();
	await delay(10000);
});
Then('LPA-0030 Click on Current Topics and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/study?linkId=study-current-topics']")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='study-current-topics']/div/div[1]/h1"))).to.eventually.exist;
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[4]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
	await delay(3000);
});
Then('LPA-0030 Click on Youth Disciple and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/study?linkId=study-youth']")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[5]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[1]/div/a/img"))).to.eventually.exist;
	await expect(browser.findElement(by.xpath(".//*[@id='study-youth']/div/div[1]/h1"))).to.eventually.exist;
	await delay(3000);
});
Then('LPA-0030 Click on espanol and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/study?linkId=study-espanol']")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[6]/segment/div[2]/div/stripe/div/div/div/div/div[1]"))).to.eventually.exist;
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[6]/segment/div[2]/div/stripe/div/div/div/div/div[1]"))).to.eventually.exist;
	await delay(3000);
});
When('STUDY link is hovered', async () => {
	await delay(5000);
	browser.actions().mouseMove(element(by.xpath("//a[@href='/study']"))).perform();
	await delay(5000);
});
When('Watch link is hovered', async () => {
	browser.actions().mouseMove(element(by.xpath("//a[@href='/watch']"))).perform();
	await delay(5000);
});
When('listen link is hovered', async () => {
	browser.actions().mouseMove(element(by.xpath("//a[@href='/listen']"))).perform();
	await delay(5000);
});
When('Read link is hovered', async () => {
	browser.actions().mouseMove(element(by.xpath("//a[@href='/read']"))).perform();
	await delay(5000);
});
Then('LPA-0040 Click on Watch Movies and Verify with parish admin', async () => {
	await delay(6000);
	element(by.xpath("//a[@href='/watch?linkId=watch-movies']")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='watch-movies']/div/div[1]/h1"))).to.eventually.exist;
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
	await delay(3000);
});
Then('LPA-0040 Click on Documentaries and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/watch?linkId=watch-documentaries']")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='watch-documentaries']/div/div[1]/h1"))).to.eventually.exist;
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[2]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
	await delay(3000);
});
Then('LPA-0040 Click on Apologetics and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/watch?linkId=watch-apologetics']")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='watch-apologetics']/div/div[1]/h1"))).to.eventually.exist;
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[3]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
	await delay(3000);
});
Then('LPA-0040 Click on Watch Youth Disciple and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/watch?linkId=watch-youth']")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='watch-youth']/div/div[1]/h1"))).to.eventually.exist;
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[4]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
	await delay(3000);
});
Then('LPA-0040 Click on watch espanol and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/watch?linkId=watch-espanol']")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='watch-espanol']/div/div[1]/h1"))).to.eventually.exist;
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[5]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[4]/div/a/img"))).to.eventually.exist;
	await delay(3000);
});
Then('LPA-0050 Click on Listen Talks and Verify with parish admin', async () => {
	element(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[3]/segmented-menu-item/div/segmented-links/div/div[2]/a")).click();
	await delay(6000);
});
Then('LPA-0050 Click on Listen audio drama and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/listen?linkId=listen-dramas']")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='listen-dramas']/div/div[1]/h1"))).to.eventually.exist;
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/segmented-page/div/div[1]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[1]/div/a/img"))).to.eventually.exist;
	await delay(3000);
});
Then('LPA-0050 Click on Listen audio books and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/listen?linkId=listen-audiobooks']")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='listen-audiobooks']/div/div[1]/h1"))).to.eventually.exist;
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/segmented-page/div/div[3]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[6]/div/a/img"))).to.eventually.exist;
	await delay(3000);
});
Then('LPA-0050 Click on Listen espanol and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/listen?linkId=listen-espanol']")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='listen-espanol']/div/div[1]/h1"))).to.eventually.exist;
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/segmented-page/div/div[4]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[6]/div/a/img"))).to.eventually.exist;
	await delay(3000);
});    
Then('LPA-0060 Click on NonFiction and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/read?linkId=read-nonfiction']")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='read-nonfiction']/div/div[1]/h1"))).to.eventually.exist;
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[8]/div/a/img"))).to.eventually.exist;
	await delay(3000);
});
Then('LPA-0060 Click on Fiction and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/read?linkId=read-fiction']")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='read-fiction']/div/div[1]/h1"))).to.eventually.exist;
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[2]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[8]/div/a/img"))).to.eventually.exist;
	await delay(3000);
});
Then('LPA-0060 Click on Read Youth and Verify with parish admin', async () => {
	element(by.xpath(".//*[@id='header']/div/div[3]/div/main-nav/ul/li[4]/segmented-menu-item/div/segmented-links/div/div[3]/a")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[3]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[1]/div/a/img"))).to.eventually.exist;
	await delay(6000);
});
Then('LPA-0060 Click on Read espanol and Verify with parish admin', async () => {
	element(by.xpath("//a[@href='/read?linkId=read-espanol']")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='read-espanol']/div/div[1]/h1"))).to.eventually.exist;
	await expect(browser.findElement(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[4]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[1]/div/a/img"))).to.eventually.exist;
	await delay(3000);
}); 
Then('i click on account and logout for parish in market page', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='account-dropdown-button']")).click();
	await delay(4000);
	element(by.xpath(".//*[@id='account-dropdown']/div/a[4]")).click();
	await delay(5000);
}); 
Then('i click on account and logout for parish', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='simple-dropdown']/span")).click();
	await delay(4000);
	element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/a[3]")).click();
	await delay(5000);
});      
When('LLP-0020 Click on Login button', async  () => {
	await delay(20000);
	element(by.xpath(".//*[@id='simple-dropdown']")).click();
	await delay(3000);
});
Then('Show products link is displayed', async () => {
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products.html']"))).to.eventually.exist;    
	await delay(8000);
});
When('Show products link is hovered', async () => {
	browser.actions().mouseMove(element(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products.html']"))).perform();
	await delay(5000);
});
Then('click on feature film link and verify', async () => {
	element(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/watch/feature-films.html']")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
    await delay(2000);
});     
Then('click on Documentreies link and verify', async () => {
	element(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/watch/documentaries.html']")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[2]/div/a/img"))).to.eventually.exist;
    await delay(2000);
});
Then('click on Talks link and verify', async () => {
	element(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/watch/talks.html']")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[3]/div/a/img"))).to.eventually.exist;
    await delay(2000);
});
Then('click on Tv shows link and verify', async () => {
	element(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/watch/tv-shows.html']")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[3]/div/a/img"))).to.eventually.exist;
    await delay(2000);
});
Then('click on Espamol in watch link and verify', async () => {
	element(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/watch/spanish.html']")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[3]/div/a/img"))).to.eventually.exist;
    await delay(2000);
});
Then('Click on talks Link and Verify', async () => {
	element(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/listen/talks.html']")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
	await delay(2000); 
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
	await delay(2000); 
});
Then('Click on audio dramas Link and Verify', async () => {
	element(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/listen/audio-dramas.html']")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/h1"))).to.eventually.exist;
	await delay(2000); 
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a"))).to.eventually.exist;
	await delay(2000); 
});

Then('Click on audiobooks Link and Verify', async () => {
	element(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/listen/audiobooks.html']")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/h1"))).to.eventually.exist;
	await delay(2000);  
});
Then('Click on espanol Listen Link and Verify', async () => {
	element(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/listen/espa-ol.html']")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
	await delay(2000);
});
Then('Click on nonfiction link and verify', async () => {
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/read/nonfiction.html']"))).to.eventually.exist;
    await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[2]/div/a/img"))).to.eventually.exist;
	await delay(2000);  
});
Then('Click on fiction link and verify', async () => {
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/read/fiction.html']"))).to.eventually.exist;
    await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[2]/div/a/img"))).to.eventually.exist;
	await delay(2000);
});
Then('Click on youth link and verify', async () => {
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/read/youth.html']"))).to.eventually.exist;
    await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
	await delay(2000);
});
Then('Click on espanol link and verify', async () => {
	await expect(browser.findElement(by.xpath("//a[@href='https://market2.beta.formed.org/shop-products/read/espa-ol.html']"))).to.eventually.exist;
    await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='amasty-shopby-product-list']/div[3]/ol/li[1]/div/a/img"))).to.eventually.exist;
	await delay(2000);
});
Then('Click on watch Link and Verify', async () => {
	element(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[1]/a/label/div")).click();
	await delay(10000);
});
Then('Click on Listen Link and Verify', async () => {
	element(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[2]/a/label/div")).click();
	await delay(10000);
});
Then('Click on read Link and Verify', async () => {
	await delay(5000);
	element(by.xpath(".//*[@id='narrow-by-list']/dd[1]/ol/form/li[2]/ol/li[3]/a/label/div")).click();
	await delay(10000);
});
When('navigate to formed page', async () => {
	element(by.xpath(".//*[@class='icon-formed']")).click();
	await delay(10000);
});
Then('Enter Name and password for individual user', async () => {
	element(by.xpath("//input[@name='email']")).sendKeys("rajeshnakka.cmc@gmail.com");
	await delay(1000);
	element(by.xpath("//input[@name='password']")).sendKeys("123456");
	await delay(1000);
	element(by.xpath("//button[@class='btn btn-large btn-primary login-submit']")).click();
	await delay(5000);
});
When('forgot password is displayed', async  () => {    
  await delay(1000);  
  await expect(browser.findElement(by.xpath(".//*[@class='forgotPassword']"))).to.eventually.exist;
  //element(by.xpath("html/body/header/section[1]/div[6]/ul/li/div/div/div/div/div/div/div/div/div[2]/div/form/div/div[3]/a")).isDisplayed();
	 
});
Then('i Enter Name and password for individual user', async () => {
	await delay(1000);
	element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[1]/input")).sendKeys("rajeshnakka.cmc@gmail.com");
	await delay(2000);
	element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[1]/div[2]/input")).sendKeys("123456");
	await delay(2000);
	element(by.xpath(".//*[@id='gigya-login-screen']/form/div/div[2]/div/input[1]")).click();
	await delay(15000);
});
Then('SPP-0050 Expand attributes',async () => {
	element(by.xpath(".//*[@id='product__description--toggle']']")).click();
	await delay(6000);
	await expect(browser.findElement(by.xpath(".//*[@id='product__description']/div[2]"))).to.eventually.exist;
	await delay(3000);
	element(by.xpath(".//*[@id='product__description--toggle']']")).click();
	await delay(6000);		
});
Then('SPP-0050 collapse attributes',async () => {
	await expect(browser.findElement(by.xpath(".//*[@id='product__description']"))).to.eventually.exist;
	await delay(3000);
});
When('TS-0010 click on product in movies link', async () => {
    element(by.xpath(".//*[@id='scroll-top']/div/segmented-page/div/div[1]/segment/div[3]/div/stripe/div/div/div/div/div/div/div/div[6]/div/a/img")).click();
    await delay(12000);
    await expect(browser.findElement(by.xpath(".//*[@id='movie-title']/h1"))).to.eventually.exist;
    await delay(1000);
    await expect(browser.findElement(by.xpath(".//*[@id='social-icons']/share/div/div/span[1]/a"))).to.eventually.exist;
    await delay(1000);
    await expect(browser.findElement(by.xpath(".//*[@id='social-icons']/share/div/div/span[2]/a"))).to.eventually.exist;
    await delay(1000);
    element(by.xpath(".//*[@id='oo-responsive']/div/div[1]/a")).click();
	await delay(25000);
	element(by.xpath(".//*[@id='social-icons']/share/div/div/span[1]/a")).click();
    await delay(10000);
});
Then('TS-0020 share model dialog page is displayed', async () => {
    await expect(browser.findElement(by.xpath(".//*[@id='simple-dropdown']"))).to.eventually.exist;
    await delay(3000);
    await expect(browser.findElement(by.xpath("html/body/div[5]/div/div/topic-share/div[1]/form/div[1]/div/div[2]"))).to.eventually.exist;
    await delay(3000);
    await expect(browser.findElement(by.xpath("html/body/div[5]/div/div/topic-share/div[1]/form/div[2]/input"))).to.eventually.exist;
	await delay(3000);
	element(by.xpath("html/body/div[5]/div/div/topic-share/div[1]/form/div[2]/input")).sendKeys("formed");
	await delay(2000);
	element(by.xpath(".//*[@id='topicComment']")).sendKeys("share model dialog page is displayed");
	await delay(15000);
	element(by.xpath("html/body/div[5]/div/div/topic-share/div[1]/form/input")).click();
	await delay(15000);
});
Then('TS-0030 share icons are displayed', async () => {
    await expect(browser.findElement(by.xpath("html/body/div[5]/div/div/topic-share/div[1]/div/ul/li[1]/a"))).to.eventually.exist;
    await delay(3000);
    await expect(browser.findElement(by.xpath("html/body/div[5]/div/div/topic-share/div[1]/div/ul/li[2]/a"))).to.eventually.exist;
    await delay(3000);
    await expect(browser.findElement(by.xpath("html/body/div[5]/div/div/topic-share/div[1]/div/ul/li[3]/a"))).to.eventually.exist;
    await delay(3000);
    await expect(browser.findElement(by.xpath("html/body/div[5]/div/div/topic-share/div[1]/div/ul/li[4]/a"))).to.eventually.exist;
	await delay(3000);
});
Then('TS-0060 click on facbook', async () => {
    element(by.xpath("html/body/div[5]/div/div/topic-share/div[1]/div/ul/li[1]/a")).click();
	await delay(3000);
});
Then('TS-0070 click on twitter', async () => {
	element(by.xpath("html/body/div[5]/div/div/topic-share/div[1]/div/ul/li[2]/a")).click(); 
	await delay(10000);
});
Then('TS-0080 click on pinterest', async () => {
	element(by.xpath("html/body/div[5]/div/div/topic-share/div[1]/div/ul/li[3]/a")).click(); 
	await delay(10000);
});
Then('TS-0090 click on gamil', async () => {
	element(by.xpath("html/body/div[5]/div/div/topic-share/div[1]/div/ul/li[4]/a")).click(); 
	await delay(10000);
});
Then('TS-0100 close the share icons', async () => {
	element(by.xpath("html/body/div[5]/div/div/topic-share/div[1]/div/i")).click(); 
	await delay(10000);
});
Then('TS-0040 click on audio image', async () => {
	element(by.xpath(".//*[@id='scroll-top']/div/div[2]/div/segmented-page/div/div[2]/segment/div[2]/div/stripe/div/div/div[2]/div/div/div/div/div[6]/div/a/img")).click();
	await delay(10000);
	await expect(browser.findElement(by.xpath(".//*[@id='audio']/div[1]/div/div[1]/img"))).to.eventually.exist;
    await delay(1000);
});
Then('TS-0110 click on topicshares in on demand page', async () => {
	element(by.xpath(".//*[@id='header']/div/div[1]/div/div/ul/profile-menu/div/div/div/div/div[2]/span[2]/a")).click();
	await delay(10000);
});
Then('TS-0110 Your Evangelization Impact are displayed', async () => {
	await expect(browser.findElement(by.xpath(".//*[@class='subheader text-center']"))).to.eventually.exist;
    await delay(1000);
    await expect(browser.findElement(by.xpath(".//*[@class='text-link ng-binding']"))).to.eventually.exist;
	await delay(1000);
	element(by.xpath("html/body/div[5]/div/div/div[2]/evangelization-panel/div/table/tbody/tr[5]/td[1]")).click();
	await delay(10000);
});
Then('TS-0050 click on play button', async () => {
	element(by.xpath(".//*[@id='oo-responsive']/div/div[1]/a")).click();
	await delay(40000);
});
When('TS-0120 comments and rating are displayed', async () => {
	await expect(browser.findElement(by.xpath(".//*[@class='ng-scope']"))).to.eventually.exist;
    await delay(1000);
    await expect(browser.findElement(by.xpath(".//*[@id='movie']/prorater/div/div/div[1]/modal-link/a/span"))).to.eventually.exist;
    await delay(1000);
	await expect(browser.findElement(by.xpath(".//*[@class='col-sm-6 commentary hidden-sm']"))).to.eventually.exist;
	await delay(1000);
});
Then('TS-0130 click on video product ondemand page without user', async () => {
	await delay(15000);
	element(by.xpath(".//*[@id='scroll-top']/div/div/trending-topics/div[2]/div/div/div/div/div[5]/a/div/div/div[2]/div")).click();
	await delay(5000);
});
});
