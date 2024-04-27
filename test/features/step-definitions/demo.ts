import { Given, When, Then } from "@wdio/cucumber-framework";
import {expect} from "chai"

Given(/^Google page is opened$/, async function () {
  console.log("before");
  await browser.url("https://www.google.com");
  //browser.debug()
  await browser.pause(5000);
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(`search item: ${searchItem}`);
  let ele = await $(`[name=q]`);
  await ele.setValue(searchItem);
  await browser.keys("Enter")

});

Then(/^Click on first search result$/, async function(){
    let ele = await $(`<h3>`)
    await ele.click()

})

Then(/^URL should match (.*)$/, async function(expectedURL) {
    let url = await browser.getUrl()
    await expect(url).to.equal(expectedURL)
})

Given(/^A web page is opened$/, async function(){
  await browser.url("https://www.google.com");
  await browser.setTimeout({implicit:15000, pageLoad:10000});
  await browser.maximizeWindow()


})