package stepsregister;

import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pom.RegisterFBForm;

public class RegisterFBStep {
    WebDriver driver;
    RegisterFBForm form;
    @Before
    public  void StartTest(){
        this.driver = new ChromeDriver();
        form = new RegisterFBForm(this.driver);
    }
    @Given("^The register screen is showed$")
    public void the_register_screen_is_showed() throws Throwable {
        form.OpenRegisterPage();
    }

    @When("^The user input value with (.+), (.+), (.+), (.+), (.+), (.+),(.+)$")
    public void the_user_input_value_with_(String lastname, String firstname, String regemail, String emailconfirmation, String newpassword, String gender, String prepronoun) throws Throwable {
        System.out.println("Let implement");
        RegisterFBForm rg = new RegisterFBForm(driver);
        rg.EmptyPage();
        rg.inputFirstName(firstname);
        rg.inputLastName(lastname);
        rg.inputEmail(regemail);
        rg.inputReEmail(emailconfirmation);
        rg.inputPassword(newpassword);
        rg.inputGender(Integer.parseInt(gender),Integer.parseInt(prepronoun),"");
        rg.submit();
    }
    @Then("^The error message (.+) will be showed$")
    public void the_error_message_will_be_showed(String message) throws Throwable {
        form.Should_See_Validate_Message(message);
        System.out.println("Let implement");
    }

}
