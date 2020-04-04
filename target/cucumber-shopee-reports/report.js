$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "The login with Shopee",
  "description": "",
  "id": "the-login-with-shopee",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Show error message when input invalid credential",
  "description": "",
  "id": "the-login-with-shopee;show-error-message-when-input-invalid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "The login screen is showed",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "The user input value with \u003cUsername\u003e and \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "The error message \"Tên tài khoản của bạn hoặc Mật khẩu không đúng, vui lòng thử lại\" will be showed",
  "keyword": "Then "
});
formatter.examples({
  "line": 6,
  "name": "",
  "description": "",
  "id": "the-login-with-shopee;show-error-message-when-input-invalid-credential;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 7,
      "id": "the-login-with-shopee;show-error-message-when-input-invalid-credential;;1"
    },
    {
      "cells": [
        "huongkhuat",
        "dsfsdfs"
      ],
      "line": 8,
      "id": "the-login-with-shopee;show-error-message-when-input-invalid-credential;;2"
    },
    {
      "cells": [
        "hsfahs",
        "12345"
      ],
      "line": 9,
      "id": "the-login-with-shopee;show-error-message-when-input-invalid-credential;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 8,
  "name": "Show error message when input invalid credential",
  "description": "",
  "id": "the-login-with-shopee;show-error-message-when-input-invalid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "The login screen is showed",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "The user input value with huongkhuat and dsfsdfs",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "The error message \"Tên tài khoản của bạn hoặc Mật khẩu không đúng, vui lòng thử lại\" will be showed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginShopeeStep.the_login_screen_is_showed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "huongkhuat",
      "offset": 26
    },
    {
      "val": "dsfsdfs",
      "offset": 41
    }
  ],
  "location": "LoginShopeeStep.the_user_input_value_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tên tài khoản của bạn hoặc Mật khẩu không đúng, vui lòng thử lại",
      "offset": 19
    }
  ],
  "location": "LoginShopeeStep.the_error_message_something_will_be_showed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 9,
  "name": "Show error message when input invalid credential",
  "description": "",
  "id": "the-login-with-shopee;show-error-message-when-input-invalid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "The login screen is showed",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "The user input value with hsfahs and 12345",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "The error message \"Tên tài khoản của bạn hoặc Mật khẩu không đúng, vui lòng thử lại\" will be showed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginShopeeStep.the_login_screen_is_showed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "hsfahs",
      "offset": 26
    },
    {
      "val": "12345",
      "offset": 37
    }
  ],
  "location": "LoginShopeeStep.the_user_input_value_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tên tài khoản của bạn hoặc Mật khẩu không đúng, vui lòng thử lại",
      "offset": 19
    }
  ],
  "location": "LoginShopeeStep.the_error_message_something_will_be_showed(String)"
});
formatter.result({
  "status": "skipped"
});
});