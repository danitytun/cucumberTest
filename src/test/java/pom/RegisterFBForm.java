package pom;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class RegisterFBForm {
    WebDriver driver;
    By txtLastName = By.cssSelector("input[name='lastname']");
    By txtFirstName = By.cssSelector("input[name='firstname']");
    By txtEmail = By.cssSelector("input[name='reg_email__']");
    By txtReEmail = By.cssSelector("input[name='reg_email_confirmation__']");
    By txtPassWord = By.cssSelector("input[name='reg_passwd__']");
    By drBirthDay = By.cssSelector("select[name='birthday_day']");
    By drBirthMonth = By.cssSelector("select[name='birthday_month']");
    By drBirthYear = By.cssSelector("select[name='birthday_year']");
    By radWomen = By.xpath("//input[@value='1']");
    By radMen = By.xpath("//input[@value='2']");
    By radOther = By.xpath("//input[@value='-1']");

    //Dùng trong TH giới tính other
    By drPronoun = By.cssSelector("select[name='preferred_pronoun']");
    By txtCustomGender = By.cssSelector("input[name='custom_gender']");

    //Validate Message
    By errValidate = By.xpath("//div[@class='_5633 _5634 _53ij']");

    // Submit click
    By btnSubmit = By.xpath("//button[@name='websubmit']");
    By imgLoadBar = By.xpath("//span[@id='u_0_14']");
    By lblError = By.id("reg_error_inner");

    // Định nghĩa các phương thức
    public RegisterFBForm(WebDriver driver){
        this.driver = driver;
    }

    public void OpenRegisterPage(){
        this.driver.get("http://facebook.com");
        this.driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }
    public void EmptyPage(){
        driver.findElement(txtLastName).clear();
        driver.findElement(txtFirstName).clear();
        driver.findElement(txtEmail).clear();
        driver.findElement(txtPassWord).clear();
        inputBirthDay("0");
        inputBirthMonth(0);
        inputBirthYear("0");
    }
    public void inputLastName(String lastName){
        driver.findElement(txtLastName).sendKeys(lastName);
    }
    public void inputFirstName(String firstName){
        driver.findElement(txtFirstName).sendKeys(firstName);
    }
    public void inputEmail(String email){
        driver.findElement(txtEmail).sendKeys(email);
    }
    public void inputReEmail(String reEmail){
        driver.findElement(txtReEmail).sendKeys(reEmail);
    }
    public void inputPassword(String pass){
        driver.findElement(txtPassWord).sendKeys(pass);
    }
    public void inputBirthDay(String day){
        Select drDay = new Select(driver.findElement(drBirthDay));
        drDay.selectByValue(day);
    }
    public void inputBirthMonth(int month){
        Select drMonth = new Select(driver.findElement(drBirthMonth));
        drMonth.selectByIndex(month);
    }
    public void inputBirthYear(String year){
        Select drYear = new Select(driver.findElement(drBirthYear));
        drYear.selectByValue(year);
    }
    public void inputGender(int gender, int pronoun, String custom){
        if(gender == 1){
            driver.findElement(radWomen).click();
        }
        else if(gender == 2){
            driver.findElement(radMen).click();
        }
        else {
            driver.findElement(radOther).click();
            Select Pronoun = new Select(driver.findElement(drPronoun));
            Pronoun.selectByIndex(pronoun);
            driver.findElement(txtCustomGender).sendKeys(custom);
        }
    }
    public void submit(){
        driver.findElement(btnSubmit).click();
    }

    public String msgError(){
        return driver.findElement(lblError).getText();
    }
    public String msgValidate(){
        return driver.findElement(errValidate).getText();
    }
    public By elError(){
        return lblError;
    }
    public void waitMesage(int seconds){
        WebDriverWait wait = new WebDriverWait(driver,seconds);
        wait.until(ExpectedConditions.visibilityOfElementLocated(lblError));
    }
    public void waitLoadBar(int seconds){
        WebDriverWait wait = new WebDriverWait(driver,seconds);
        //wait.until(ExpectedConditions.invisibilityOfElementLocated(imgLoadBar));
        wait.until(ExpectedConditions.presenceOfElementLocated(imgLoadBar));
    }

    public void Should_See_Validate_Message(String message){
        WebDriverWait wait = new WebDriverWait(driver,10);
        WebElement notify = wait.until(ExpectedConditions.visibilityOfElementLocated(errValidate));
        Assert.assertEquals(message, notify.getText());
    }
}
