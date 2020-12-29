$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BankSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Search Functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.background({
  "line": 2,
  "name": "user is successfully logged in",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "user opens the \"chrome\" browser and exe \"E:\\\\PrimusBank\\\\src\\\\test\\\\resources\\\\DRIVERS\\\\chromedriver.exe\"",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "user enters the url \"http://primusbank.qedgetech.com/\"",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "user enters \"Admin\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"Admin\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is on the Admin main page and get message as Welcome to Admin",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 16
    },
    {
      "val": "E:\\\\PrimusBank\\\\src\\\\test\\\\resources\\\\DRIVERS\\\\chromedriver.exe",
      "offset": 41
    }
  ],
  "location": "Login.user_opens_the_browser_and_exe(String,String)"
});
formatter.result({
  "duration": 6474448100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://primusbank.qedgetech.com/",
      "offset": 21
    }
  ],
  "location": "Login.user_enters_the_url(String)"
});
formatter.result({
  "duration": 1727327700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    }
  ],
  "location": "Login.user_enters_as_username(String)"
});
formatter.result({
  "duration": 638482000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    }
  ],
  "location": "Login.user_enters_as_password(String)"
});
formatter.result({
  "duration": 398419700,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 613554300,
  "status": "passed"
});
formatter.match({
  "location": "Login.welcometoadmin()"
});
formatter.result({
  "duration": 115942300,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Search button functinality for valid data",
  "description": "",
  "id": "search-functionality;search-button-functinality-for-valid-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@EndToEnd"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user click on branches",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User select \"INDIA\" as country",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User select \"MAHARASTRA\" as state",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User select \"MUMBAI\" as city",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User is able to view list of branches available at \"MUMBAI\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.userclickbranches()"
});
formatter.result({
  "duration": 553847100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INDIA",
      "offset": 13
    }
  ],
  "location": "Search.selectcountry(String)"
});
formatter.result({
  "duration": 581262300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MAHARASTRA",
      "offset": 13
    }
  ],
  "location": "Search.selectstate(String)"
});
formatter.result({
  "duration": 562031400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MUMBAI",
      "offset": 13
    }
  ],
  "location": "Search.selectcity(String)"
});
formatter.result({
  "duration": 294254300,
  "status": "passed"
});
formatter.match({
  "location": "Search.user_click_on_search_button()"
});
formatter.result({
  "duration": 375574500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MUMBAI",
      "offset": 52
    }
  ],
  "location": "Search.ViewBank(String)"
});
formatter.result({
  "duration": 108762700,
  "status": "passed"
});
});