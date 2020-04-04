package cucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty","html:target/cucumber-fb-reports"},
        glue = "stepsregister",
        features = "src/test/resource/featureFb",
        dryRun = true,
        monochrome = true)
public class RunFacebook {
}
