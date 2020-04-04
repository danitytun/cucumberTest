$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Create an account facebook",
  "description": "",
  "id": "create-an-account-facebook",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Show error message when input invalid value",
  "description": "",
  "id": "create-an-account-facebook;show-error-message-when-input-invalid-value",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "The register screen is showed",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "The user input value with \u003clastName\u003e, \u003cfirstName\u003e, \u003cregEmail\u003e, \u003cemailConfirmation\u003e, \u003cnewPassword\u003e, \u003cgender\u003e,\u003cprePronoun\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "The error message \u003cmessage\u003e will be showed",
  "keyword": "Then "
});
formatter.examples({
  "line": 6,
  "name": "",
  "description": "",
  "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;",
  "rows": [
    {
      "cells": [
        "lastName",
        "firstName",
        "regEmail",
        "emailConfirmation",
        "newPassword",
        "gender",
        "prePronoun",
        "message"
      ],
      "line": 7,
      "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;1"
    },
    {
      "cells": [
        "\"\"",
        "b",
        "a@gmail.com",
        "a@gmail.com",
        "12345aA@",
        "1",
        "0",
        "Tên bạn là gì?"
      ],
      "line": 8,
      "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;2"
    },
    {
      "cells": [
        "a",
        "\"\"",
        "a@gmail.com",
        "a@gmail.com",
        "12345aA@",
        "1",
        "0",
        "Tên bạn là gì?"
      ],
      "line": 9,
      "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;3"
    },
    {
      "cells": [
        "a",
        "b",
        "\"\"",
        "\"\"",
        "12345aA@",
        "1",
        "0",
        "Bạn sẽ sử dụng thông tin này khi đăng nhập và khi cần đặt lại mật khẩu."
      ],
      "line": 10,
      "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;4"
    },
    {
      "cells": [
        "a",
        "b",
        "a@gmail.com",
        "\"\"",
        "12345aA@",
        "1",
        "0",
        "Vui lòng nhập lại địa chỉ email của bạn."
      ],
      "line": 11,
      "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;5"
    },
    {
      "cells": [
        "a",
        "b",
        "a@gmail.com",
        "b@gmail.com",
        "12345aA@",
        "1",
        "0",
        "Email của bạn không khớp. Vui lòng thử lại."
      ],
      "line": 12,
      "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;6"
    },
    {
      "cells": [
        "a",
        "b",
        "a@gmail.com",
        "a@gmail.com",
        "\"\"",
        "1",
        "0",
        "Nhập mật khẩu có tối thiểu 6 ký tự bao gồm số, chữ cái và dấu chấm câu (như ! và \u0026)."
      ],
      "line": 13,
      "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;7"
    },
    {
      "cells": [
        "a",
        "b",
        "a@gmail.com",
        "a@gmail.com",
        "12345aA@",
        "\"\"",
        "0",
        "Vui lòng chọn giới tính. Bạn có thể chọn người có thể xem nội dung này sau."
      ],
      "line": 14,
      "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;8"
    },
    {
      "cells": [
        "a",
        "b",
        "a@gmail.com",
        "a@gmail.com",
        "12345aA@",
        "-1",
        "0",
        "Vui lòng chọn đại từ nhân xưng."
      ],
      "line": 15,
      "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;9"
    },
    {
      "cells": [
        "a",
        "b",
        "a",
        "a",
        "12345aA@",
        "1",
        "0",
        "Vui lòng nhập lại số di động hoặc địa chỉ email hợp lệ."
      ],
      "line": 16,
      "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;10"
    },
    {
      "cells": [
        "a",
        "b",
        "a@",
        "a@",
        "12345aA@",
        "1",
        "0",
        "Vui lòng nhập lại số di động hoặc địa chỉ email hợp lệ."
      ],
      "line": 17,
      "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;11"
    },
    {
      "cells": [
        "a",
        "b",
        "a@gmail",
        "a@gmail",
        "12345aA@",
        "1",
        "0",
        "Vui lòng nhập lại số di động hoặc địa chỉ email hợp lệ."
      ],
      "line": 18,
      "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;12"
    },
    {
      "cells": [
        "a",
        "b",
        "a@gmail.@gmail",
        "a@gmail.@gmail",
        "12345aA@",
        "1",
        "0",
        "Vui lòng nhập lại số di động hoặc địa chỉ email hợp lệ."
      ],
      "line": 19,
      "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;13"
    },
    {
      "cells": [
        "a",
        "b",
        "@gmail.com",
        "@gmail.com",
        "12345aA@",
        "1",
        "0",
        "Vui lòng nhập lại số di động hoặc địa chỉ email hợp lệ."
      ],
      "line": 20,
      "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;14"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 8,
  "name": "Show error message when input invalid value",
  "description": "",
  "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "The register screen is showed",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "The user input value with \"\", b, a@gmail.com, a@gmail.com, 12345aA@, 1,0",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "The error message Tên bạn là gì? will be showed",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterFBStep.the_register_screen_is_showed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "\"\"",
      "offset": 26
    },
    {
      "val": "b",
      "offset": 30
    },
    {
      "val": "a@gmail.com",
      "offset": 33
    },
    {
      "val": "a@gmail.com",
      "offset": 46
    },
    {
      "val": "12345aA@",
      "offset": 59
    },
    {
      "val": "1",
      "offset": 69
    },
    {
      "val": "0",
      "offset": 71
    }
  ],
  "location": "RegisterFBStep.the_user_input_value_with_(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tên bạn là gì?",
      "offset": 18
    }
  ],
  "location": "RegisterFBStep.the_error_message_will_be_showed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 9,
  "name": "Show error message when input invalid value",
  "description": "",
  "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "The register screen is showed",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "The user input value with a, \"\", a@gmail.com, a@gmail.com, 12345aA@, 1,0",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "The error message Tên bạn là gì? will be showed",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterFBStep.the_register_screen_is_showed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 26
    },
    {
      "val": "\"\"",
      "offset": 29
    },
    {
      "val": "a@gmail.com",
      "offset": 33
    },
    {
      "val": "a@gmail.com",
      "offset": 46
    },
    {
      "val": "12345aA@",
      "offset": 59
    },
    {
      "val": "1",
      "offset": 69
    },
    {
      "val": "0",
      "offset": 71
    }
  ],
  "location": "RegisterFBStep.the_user_input_value_with_(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tên bạn là gì?",
      "offset": 18
    }
  ],
  "location": "RegisterFBStep.the_error_message_will_be_showed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Show error message when input invalid value",
  "description": "",
  "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "The register screen is showed",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "The user input value with a, b, \"\", \"\", 12345aA@, 1,0",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "The error message Bạn sẽ sử dụng thông tin này khi đăng nhập và khi cần đặt lại mật khẩu. will be showed",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterFBStep.the_register_screen_is_showed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 26
    },
    {
      "val": "b",
      "offset": 29
    },
    {
      "val": "\"\"",
      "offset": 32
    },
    {
      "val": "\"\"",
      "offset": 36
    },
    {
      "val": "12345aA@",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 50
    },
    {
      "val": "0",
      "offset": 52
    }
  ],
  "location": "RegisterFBStep.the_user_input_value_with_(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Bạn sẽ sử dụng thông tin này khi đăng nhập và khi cần đặt lại mật khẩu.",
      "offset": 18
    }
  ],
  "location": "RegisterFBStep.the_error_message_will_be_showed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 11,
  "name": "Show error message when input invalid value",
  "description": "",
  "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "The register screen is showed",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "The user input value with a, b, a@gmail.com, \"\", 12345aA@, 1,0",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "The error message Vui lòng nhập lại địa chỉ email của bạn. will be showed",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterFBStep.the_register_screen_is_showed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 26
    },
    {
      "val": "b",
      "offset": 29
    },
    {
      "val": "a@gmail.com",
      "offset": 32
    },
    {
      "val": "\"\"",
      "offset": 45
    },
    {
      "val": "12345aA@",
      "offset": 49
    },
    {
      "val": "1",
      "offset": 59
    },
    {
      "val": "0",
      "offset": 61
    }
  ],
  "location": "RegisterFBStep.the_user_input_value_with_(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vui lòng nhập lại địa chỉ email của bạn.",
      "offset": 18
    }
  ],
  "location": "RegisterFBStep.the_error_message_will_be_showed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Show error message when input invalid value",
  "description": "",
  "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "The register screen is showed",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "The user input value with a, b, a@gmail.com, b@gmail.com, 12345aA@, 1,0",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "The error message Email của bạn không khớp. Vui lòng thử lại. will be showed",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterFBStep.the_register_screen_is_showed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 26
    },
    {
      "val": "b",
      "offset": 29
    },
    {
      "val": "a@gmail.com",
      "offset": 32
    },
    {
      "val": "b@gmail.com",
      "offset": 45
    },
    {
      "val": "12345aA@",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 68
    },
    {
      "val": "0",
      "offset": 70
    }
  ],
  "location": "RegisterFBStep.the_user_input_value_with_(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Email của bạn không khớp. Vui lòng thử lại.",
      "offset": 18
    }
  ],
  "location": "RegisterFBStep.the_error_message_will_be_showed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "Show error message when input invalid value",
  "description": "",
  "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "The register screen is showed",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "The user input value with a, b, a@gmail.com, a@gmail.com, \"\", 1,0",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "The error message Nhập mật khẩu có tối thiểu 6 ký tự bao gồm số, chữ cái và dấu chấm câu (như ! và \u0026). will be showed",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterFBStep.the_register_screen_is_showed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 26
    },
    {
      "val": "b",
      "offset": 29
    },
    {
      "val": "a@gmail.com",
      "offset": 32
    },
    {
      "val": "a@gmail.com",
      "offset": 45
    },
    {
      "val": "\"\"",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 64
    }
  ],
  "location": "RegisterFBStep.the_user_input_value_with_(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Nhập mật khẩu có tối thiểu 6 ký tự bao gồm số, chữ cái và dấu chấm câu (như ! và \u0026).",
      "offset": 18
    }
  ],
  "location": "RegisterFBStep.the_error_message_will_be_showed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Show error message when input invalid value",
  "description": "",
  "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "The register screen is showed",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "The user input value with a, b, a@gmail.com, a@gmail.com, 12345aA@, \"\",0",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "The error message Vui lòng chọn giới tính. Bạn có thể chọn người có thể xem nội dung này sau. will be showed",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterFBStep.the_register_screen_is_showed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 26
    },
    {
      "val": "b",
      "offset": 29
    },
    {
      "val": "a@gmail.com",
      "offset": 32
    },
    {
      "val": "a@gmail.com",
      "offset": 45
    },
    {
      "val": "12345aA@",
      "offset": 58
    },
    {
      "val": "\"\"",
      "offset": 68
    },
    {
      "val": "0",
      "offset": 71
    }
  ],
  "location": "RegisterFBStep.the_user_input_value_with_(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vui lòng chọn giới tính. Bạn có thể chọn người có thể xem nội dung này sau.",
      "offset": 18
    }
  ],
  "location": "RegisterFBStep.the_error_message_will_be_showed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Show error message when input invalid value",
  "description": "",
  "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "The register screen is showed",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "The user input value with a, b, a@gmail.com, a@gmail.com, 12345aA@, -1,0",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "The error message Vui lòng chọn đại từ nhân xưng. will be showed",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterFBStep.the_register_screen_is_showed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 26
    },
    {
      "val": "b",
      "offset": 29
    },
    {
      "val": "a@gmail.com",
      "offset": 32
    },
    {
      "val": "a@gmail.com",
      "offset": 45
    },
    {
      "val": "12345aA@",
      "offset": 58
    },
    {
      "val": "-1",
      "offset": 68
    },
    {
      "val": "0",
      "offset": 71
    }
  ],
  "location": "RegisterFBStep.the_user_input_value_with_(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vui lòng chọn đại từ nhân xưng.",
      "offset": 18
    }
  ],
  "location": "RegisterFBStep.the_error_message_will_be_showed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Show error message when input invalid value",
  "description": "",
  "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "The register screen is showed",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "The user input value with a, b, a, a, 12345aA@, 1,0",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "The error message Vui lòng nhập lại số di động hoặc địa chỉ email hợp lệ. will be showed",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterFBStep.the_register_screen_is_showed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 26
    },
    {
      "val": "b",
      "offset": 29
    },
    {
      "val": "a",
      "offset": 32
    },
    {
      "val": "a",
      "offset": 35
    },
    {
      "val": "12345aA@",
      "offset": 38
    },
    {
      "val": "1",
      "offset": 48
    },
    {
      "val": "0",
      "offset": 50
    }
  ],
  "location": "RegisterFBStep.the_user_input_value_with_(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vui lòng nhập lại số di động hoặc địa chỉ email hợp lệ.",
      "offset": 18
    }
  ],
  "location": "RegisterFBStep.the_error_message_will_be_showed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "Show error message when input invalid value",
  "description": "",
  "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "The register screen is showed",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "The user input value with a, b, a@, a@, 12345aA@, 1,0",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "The error message Vui lòng nhập lại số di động hoặc địa chỉ email hợp lệ. will be showed",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterFBStep.the_register_screen_is_showed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 26
    },
    {
      "val": "b",
      "offset": 29
    },
    {
      "val": "a@",
      "offset": 32
    },
    {
      "val": "a@",
      "offset": 36
    },
    {
      "val": "12345aA@",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 50
    },
    {
      "val": "0",
      "offset": 52
    }
  ],
  "location": "RegisterFBStep.the_user_input_value_with_(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vui lòng nhập lại số di động hoặc địa chỉ email hợp lệ.",
      "offset": 18
    }
  ],
  "location": "RegisterFBStep.the_error_message_will_be_showed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "Show error message when input invalid value",
  "description": "",
  "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "The register screen is showed",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "The user input value with a, b, a@gmail, a@gmail, 12345aA@, 1,0",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "The error message Vui lòng nhập lại số di động hoặc địa chỉ email hợp lệ. will be showed",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterFBStep.the_register_screen_is_showed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 26
    },
    {
      "val": "b",
      "offset": 29
    },
    {
      "val": "a@gmail",
      "offset": 32
    },
    {
      "val": "a@gmail",
      "offset": 41
    },
    {
      "val": "12345aA@",
      "offset": 50
    },
    {
      "val": "1",
      "offset": 60
    },
    {
      "val": "0",
      "offset": 62
    }
  ],
  "location": "RegisterFBStep.the_user_input_value_with_(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vui lòng nhập lại số di động hoặc địa chỉ email hợp lệ.",
      "offset": 18
    }
  ],
  "location": "RegisterFBStep.the_error_message_will_be_showed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "Show error message when input invalid value",
  "description": "",
  "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "The register screen is showed",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "The user input value with a, b, a@gmail.@gmail, a@gmail.@gmail, 12345aA@, 1,0",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "The error message Vui lòng nhập lại số di động hoặc địa chỉ email hợp lệ. will be showed",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterFBStep.the_register_screen_is_showed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 26
    },
    {
      "val": "b",
      "offset": 29
    },
    {
      "val": "a@gmail.@gmail",
      "offset": 32
    },
    {
      "val": "a@gmail.@gmail",
      "offset": 48
    },
    {
      "val": "12345aA@",
      "offset": 64
    },
    {
      "val": "1",
      "offset": 74
    },
    {
      "val": "0",
      "offset": 76
    }
  ],
  "location": "RegisterFBStep.the_user_input_value_with_(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vui lòng nhập lại số di động hoặc địa chỉ email hợp lệ.",
      "offset": 18
    }
  ],
  "location": "RegisterFBStep.the_error_message_will_be_showed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "Show error message when input invalid value",
  "description": "",
  "id": "create-an-account-facebook;show-error-message-when-input-invalid-value;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "The register screen is showed",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "The user input value with a, b, @gmail.com, @gmail.com, 12345aA@, 1,0",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "The error message Vui lòng nhập lại số di động hoặc địa chỉ email hợp lệ. will be showed",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterFBStep.the_register_screen_is_showed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 26
    },
    {
      "val": "b",
      "offset": 29
    },
    {
      "val": "@gmail.com",
      "offset": 32
    },
    {
      "val": "@gmail.com",
      "offset": 44
    },
    {
      "val": "12345aA@",
      "offset": 56
    },
    {
      "val": "1",
      "offset": 66
    },
    {
      "val": "0",
      "offset": 68
    }
  ],
  "location": "RegisterFBStep.the_user_input_value_with_(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Vui lòng nhập lại số di động hoặc địa chỉ email hợp lệ.",
      "offset": 18
    }
  ],
  "location": "RegisterFBStep.the_error_message_will_be_showed(String)"
});
formatter.result({
  "status": "skipped"
});
});