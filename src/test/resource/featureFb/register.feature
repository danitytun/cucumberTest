Feature: Create an account facebook
  Scenario Outline: Show error message when input invalid value
    Given The register screen is showed
    When The user input value with <lastName>, <firstName>, <regEmail>, <emailConfirmation>, <newPassword>, <gender>,<prePronoun>
    Then The error message <message> will be showed
    Examples:
      |lastName	|firstName	|regEmail		|emailConfirmation	|newPassword	|gender	|prePronoun |message																				|
      |""  		|b			|a@gmail.com	|a@gmail.com		|12345aA@		|1		|0			|Tên bạn là gì?																		    |
      |a		|""			|a@gmail.com	|a@gmail.com		|12345aA@		|1		|0			|Tên bạn là gì?																			|
      |a		|b			|""				|""					|12345aA@		|1		|0			|Bạn sẽ sử dụng thông tin này khi đăng nhập và khi cần đặt lại mật khẩu.				|
      |a		|b			|a@gmail.com	|""					|12345aA@		|1		|0			|Vui lòng nhập lại địa chỉ email của bạn.												|
      |a		|b			|a@gmail.com	|b@gmail.com		|12345aA@		|1		|0			|Email của bạn không khớp. Vui lòng thử lại.											|
      |a		|b			|a@gmail.com	|a@gmail.com		|""				|1		|0			|Nhập mật khẩu có tối thiểu 6 ký tự bao gồm số, chữ cái và dấu chấm câu (như ! và &).	|
      |a		|b			|a@gmail.com	|a@gmail.com		|12345aA@		|""		|0			|Vui lòng chọn giới tính. Bạn có thể chọn người có thể xem nội dung này sau.			|
      |a		|b			|a@gmail.com	|a@gmail.com		|12345aA@		|-1		|0			|Vui lòng chọn đại từ nhân xưng.														|
      |a		|b			|a				|a					|12345aA@		|1		|0			|Vui lòng nhập lại số di động hoặc địa chỉ email hợp lệ.								|
      |a		|b			|a@				|a@					|12345aA@		|1		|0			|Vui lòng nhập lại số di động hoặc địa chỉ email hợp lệ.								|
      |a		|b			|a@gmail		|a@gmail			|12345aA@		|1		|0			|Vui lòng nhập lại số di động hoặc địa chỉ email hợp lệ.								|
      |a		|b			|a@gmail.@gmail	|a@gmail.@gmail		|12345aA@		|1		|0			|Vui lòng nhập lại số di động hoặc địa chỉ email hợp lệ.								|
      |a		|b			|@gmail.com		|@gmail.com			|12345aA@		|1		|0			|Vui lòng nhập lại số di động hoặc địa chỉ email hợp lệ.					    		|
