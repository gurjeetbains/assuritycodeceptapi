# Assurity API Test

This is the test assignment for Assurity Consultancy showing whether the API meets the Acceptance Criteria mentioned below

## Acceptance Criteria

[API Under Test](https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false)

ACC's
* Name = "Carbon credits"
* CanRelist = true
* The Promotions element with Name = "Gallery" has a Description that contains the text "2x larger image"
 

## Installation

* Install [node.js](https://nodejs.org/en/download/)
* Clone the Repository
* Open the cloned folder in terminal
* Use the [npm](https://www.npmjs.com/package/npm) package manager to install the required libraries

```bash
npm install
```

## Usage

To run the tests use the below command. 
```bash
npm run test
```
This will start running the test and generate the results on commandline along with generating the allure results in output folder and junit reports in junitreports folder for CI/CD Pipeline. 
After the test completes running, execute the below command to view a HTML report. The report will automatically open in your default browser.
```bash
npm run createReport
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. 
