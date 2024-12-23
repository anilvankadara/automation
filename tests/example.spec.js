// @ts-check
const { test, expect } = require('@playwright/test');
import {ai} from "@zerostep/playwright"

test('AI Test capabulity', async ({ page }) => {
  const aiArgs = {page, test}
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
  const discountPrice = await ai("What is the Discount price of Tomato", aiArgs)
  const price = await ai("What is the Price of Tomato", aiArgs)
  const diff = await ai("What is the value difference between price and Discount price of tomato", aiArgs)
  expect(discountPrice).toEqual("26")
  expect(price).toEqual("37")
  expect(diff).toEqual("11")


  await page.goto("https://rahulshettyacademy.com/dropdownsPractise/")
  const blinkingText = await ai("Get blinking text in the page", aiArgs)
  expect(blinkingText).toEqual("Free Access to InterviewQues/ResumeAssistance/Material")
  const firstText = await ai('Split ${blinkingText} with "/" and give 0th index value', aiArgs)
  console.log(firstText)
  expect(firstText).toEqual("Free Access to InterviewQues")

});
