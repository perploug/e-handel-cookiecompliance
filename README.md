## Test suite for danish e-commerce sites of the year 2023

This is a sample testing suite, put together to showcase the use of the EU's [website evidence collector](https://github.com/EU-EDPS/website-evidence-collector). a tool designed to test for cookie compliance on websites - made by the EU data protection supervisor and used by GDPR auditors across the EU.

It does so by:

- Loading a website in a headless browser
- listens to all cookies, scripts and http requests made inside this browser
- logs everything

This will give you a basic report to understand what happens if a user simply visits a url, without
clicking a consent button.

## Compliance as code

There is a slim layer of automation on top of WEC - the [wec testrunner](https://github.com/perploug/wec-testrunner) - which can either be used to run as a scheduled
test runner and can be integrated into most CI/CD systems. Or you can simply run it manually
to execute a number of test cases you can define in code.

So this is essentially a compliance as code setup, which require very little setup and is flexible
enough to be used for most usecases where you want to monitor if your website has a compliant cookie setup.

`index.js` contains the code which executes the test runner, and the `/tests` folder contain the different
test configurations you might want to execute. In this case there is just one, with multiple URLs

Each test suite has a number of urls, and then a number of
tests to run. For this setup, it tests for sites in a list of common marketing websites, and also checks
for any 3rd party cookies.

## How to run

Clone this repository and run the following commands:

```
npm install
npm start
```

This will generate a report for all 10 sites in output/
