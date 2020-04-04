package steplogin;

import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pom.LoginShopeeForm;

public class LoginShopeeStep {
    WebDriver driver;
    LoginShopeeForm form;
    @Before
    public  void StartTest(){
        this.driver = new ChromeDriver();
        form = new LoginShopeeForm(this.driver);
    }
    @Given("^The login screen is showed$")
    public void the_login_screen_is_showed() throws Throwable {
        form.OpenLoginForm();
    }

    @When("^The user input value with (.+) and (.+)$")
    public void the_user_input_value_with_and(String Username, String Password) throws Throwable {
        form.EmptyPage();
        form.InputValue(Username,Password);
        form.SubmitForm();
    }

    @Then("^The error message \"([^\"]*)\" will be showed$")
    public void the_error_message_something_will_be_showed(String message) throws Throwable {
        form.Should_See_Error_Message(message);
    }
}
