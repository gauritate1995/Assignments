import {test,expect} from '@playwright/test';

test('Verify login to Para Bank Application', async({page})=>{
// 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
await page.goto('https://parabank.parasoft.com/parabank/index.htm');

// 2.verify application logo is displayed
await expect(page.getByAltText('ParaBank')).toBeVisible();

// 3.Verify application caption displayed as "Experience the difference"
await expect(page.getByText('Experience the difference')).toBeVisible();

// 4.Enter invalid username
await page.locator('input[name="username"]').fill('gauri123');

// 5.Enter empty Password
await page.locator('input[name="password"]').fill('');

// 6.Click on login button
await page.locator('input[value="Log In"]').click();

// 7.Verify the error message "Please enter a username and password."
const errorMessage = await page.locator(".error");
await expect(errorMessage).toHaveText('Please enter a username and password.');

// 8.Click on admin page link
await page.locator('//a[text()="Admin Page"]').click();

// 9.select the option "soap" from dba mode radio button
await dbaMode(page,"soap");

// 10.Scroll to element dropdown
const loanProviderdropdown = await page.locator("#loanProvider");
await loanProviderdropdown.scrollIntoViewIfNeeded();

// 11.Select the option web service from the dropdown
await loanProviderdropdown.selectOption({value:'ws'});

// 12.click on submit button
await page.locator('input[value="Submit"]').click();

// 13.verify submission is successful by validating success message
const successMessage = await page.locator('//b[text()="Settings saved successfully."]');
await expect(successMessage).toBeVisible();

// 14.Click on services page link
await page.locator('#headerPanel > ul.leftmenu > li:nth-child(3) > a').click();

// 15.wait for service page
const waitForPageLoad = await page.locator('//span[text()="Available Bookstore SOAP services:"]');
await expect(waitForPageLoad).toBeVisible();

// 16.Scroll down till bookstore services table
const bookstoreServiceTable= await page.locator('//span[text()="Bookstore services:"]');
await bookstoreServiceTable.scrollIntoViewIfNeeded();

// 17.get total rows of books store services table
const tableRows = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]/tbody/tr');
const totalRowsCount = await tableRows.count();
console.log(`Total rows in book store service table: "${totalRowsCount}"`);

// 18.get total columns of books store services table
const tableColumns = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]/tbody/tr[1]/td');
const totalColumnsCount = await tableColumns.count();
console.log(`Total rows in book store service table: "${totalColumnsCount}"`);

// 19.Print table data (row wise and column wise data)
for(let r:number = 1; r<= totalRowsCount;r++){
    for(let c:number=1; c<=totalColumnsCount;c++){
        const cell = await page.locator(`//span[text()="Bookstore services:"]/following-sibling::table[1]//tbody//tr[${r}]//td[${c}]`);
        const cellText = await cell.textContent();
        console.log(`Rows "${r}" Column "${c}" : "${cellText}"`);
    }
}
})

async function dbaMode(page:any, option:string) {

    //Locate the radio button based on the option
    const radioBtn = await page.locator(`input[value="${option}"]`);

    //click on the radio button to select option
    await radioBtn.check();   
}