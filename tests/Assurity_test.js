let responseData // Variable to store the API result
Feature('Testing the API is as per the acceptance criteria');
/**
 * Before Suite is added to call the API once and store the result in a variable
 */
BeforeSuite(async ({ I }) => {
    /**
     * Submit the API and get the data returned in the data variable
     * It uses axios library to make the API call and we use chai library for assertions
     */
    let apiReturnData = await I.sendGetRequest('/v1/Categories/6327/Details.json?catalogue=false')
    responseData = apiReturnData.data //The api response returns data inside a data obeject extracting that out in responseData variable
});
/**
 * Acceptance Criteria - checking for name to be Carbon credits
 */
Scenario('Checking that the name returned is "Carbon credits"', async ({ I }) => {
    I.assertEqual(responseData.Name, 'Carbon credits', 'The name is not equal to Carbon credits');
})
/**
 * Acceptance Criteria - checking for CanRelist to be true
 */
Scenario('Checking that the CanRelist is true', async ({ I }) => {
    I.assertTrue(responseData.CanRelist, 'The CanRelist Value is not true');
})
/**
 * Acceptance Criteria - checking Promotions Gallery has Description Text to be 2x larger image
 */
Scenario('Checking that the Promotions element with Name = "Gallery" has a Description that contains the text "2x larger image"', async ({ I }) => {
    let galleryElement = responseData.Promotions.filter(singlePromotion => singlePromotion.Name === "Gallery"); 
    I.assertEqual(galleryElement[0].Description, '2x larger image', 'Gallery Promotion Description is not equal to "2x larger image"');
})