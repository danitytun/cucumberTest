package pom;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class LoginShopeeForm {
    WebDriver driver;
    By loginLink = By.xpath("/html/body/div[1]/div/div[2]/div[1]/div/div[1]/div/ul/li[5]");
    By txtLoginKey = By.name("loginKey");
    By txtPassword = By.xpath("//input[@name='password']");
    By btnLogin = By.xpath("//button[@class='_1BMmPI _37G57D _7h_6kj _1qIIqG _3JP5il']");
    By lblError = By.xpath("//div[@role='alert']");

    // Định nghĩa các phương thức
    public LoginShopeeForm(WebDriver driver){
        this.driver = driver;
    }

    public void OpenLoginForm(){
        this.driver.get("https://shopee.vn/");
        this.driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        this.driver.findElement(loginLink).click();
    }
    public void EmptyPage(){
        driver.findElement(txtLoginKey).clear();
        driver.findElement(txtPassword).clear();
    }
    public void InputValue (String userName, String pass)
    {
        driver.findElement(txtLoginKey).sendKeys(userName);
        driver.findElement(txtPassword).sendKeys(pass);
    }
    public void SubmitForm (){
        driver.findElement(btnLogin).click();
    }

    public void Should_See_Error_Message(String message){
        WebDriverWait wait = new WebDriverWait(driver,10);
        WebElement notify = wait.until(ExpectedConditions.visibilityOfElementLocated(lblError));
        Assert.assertEquals(message, notify.getText());
    }
}
