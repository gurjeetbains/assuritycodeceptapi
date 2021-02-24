/**
 * Codecept Configuration file where we define the helpers to do our testing 
 * Can be a API test helper or web Helper as well
 */
exports.config = {
  tests: 'tests/*_test.js',
  output: './output',
  helpers: {
    REST: { // Uses Axios Library in backend to run the test
      endpoint: 'https://api.tmsandbox.co.nz' //Base URL for the API to be tested entered here
    },
    ChaiWrapper: { // Uses Chai library in backend for assertions
      require: "codeceptjs-chai"
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {
    reporter: "mocha-multi",
    reporterOptions: {
      "codeceptjs-cli-reporter": {
        stdout: "-",
        options: {
          verbose: false,
          steps: true,
        }
      },
      "mocha-junit-reporter": {
        stdout: "./junitreports/console.log",
        options: {
          mochaFile: "./junitreports/result.xml"
        }
      }
    }
  },
  name: 'assuritytest',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true
    }
  }
}