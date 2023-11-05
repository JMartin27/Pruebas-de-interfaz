const { Browser, Builder, By} = require("selenium-webdriver");
const Chrome = require("selenium-webdriver/chrome");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const start = async () => {
    let driver = null;
    try {
        const chromeOptions = new Chrome.Options();
        // chromeOptions.headless();

        driver = await new Builder(). forBrowser(Browser.CHROME)
        .setChromeOptions(chromeOptions).build();

        await driver.get("https://www.selenium.dev/selenium/web/web-form.html");
    
         // 1. En el campo Textarea, agrega el texto "anita lava la tina"
    const textarea = await driver.findElement(By.id('my-textarea'));
    await textarea.sendKeys('anita lava la tina');

        await delay(2000);

         // 2. En el campo Dropdown (select), selecciona la opción "Three"
    const dropdown = await driver.findElement(By.id('my-select'));
    await dropdown.findElement(By.css('option[value="Three"]')).click();

        await delay(2000);

        // 3. En el campo Color picker, selecciona el color con la configuración R: 32, G: 167, B: 34
    const colorPicker = await driver.findElement(By.id('my-colors'));
    await colorPicker.sendKeys('#20a722');

    await delay(2000);

     // 4. En el campo Datepicker, selecciona la fecha "16 de agosto de 1970"
     const datepicker = await driver.findElement(By.id('my-date'));
     await datepicker.sendKeys('08/16/1970');

     await delay(2000);

     // 5. Marca el campo Default checkbox
    const checkbox = await driver.findElement(By.id('my-check-1'));
    await checkbox.click();
    
    // 6. Presiona el botón submit
    const submit = await driver.findElement(By.css('button[type=submit]'));
    await submit.click();

        await delay(2000);

        const textResult = await driver.findElement(By.id("message"));
        const textValue = await textResult.getText();
        console.log(textValue); 
    } catch (error) {
        console.error(error);
    } finally {
        if(driver) {
           // await driver.quit();
        }

    }
}

start();