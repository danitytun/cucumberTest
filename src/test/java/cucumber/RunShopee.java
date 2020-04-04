package cucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty","html:target/cucumber-shopee-reports"},
        glue = "steplogin",
        features = "src/test/resource/featureShopee",
        dryRun = true,
        monochrome = true)
public class RunShopee {
}
