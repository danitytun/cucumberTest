Feature: The login with Shopee
  Scenario Outline: Show error message when input invalid credential
    Given The login screen is showed
    When The user input value with <Username> and <Password>
    Then The error message "Tên tài khoản của bạn hoặc Mật khẩu không đúng, vui lòng thử lại" will be showed
    Examples:
      |Username   |Password |
      |huongkhuat |dsfsdfs  |
      |hsfahs     |12345    |