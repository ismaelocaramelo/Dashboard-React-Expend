# expend-dashboard-challenge

We'd like you to create a single page app, that looks like the `dashboard-mock-up.png` image included.
The dashboard should be implemented with React version 15 and above.
You should also include a node.js server that provides a simple REST backend for the dashboard to use. It should support two REST functions:

## Node.js server
1. GET /accounting_platforms - returns a simple JSON structure with the following values "Xero", "Crunch", "Free Agent". The JSON result should look like this:
[ {"accountingProvider": "Xero" }, ... ]
2. POST /sign_up

## The Form
It contains a form with 4 fields:
* Name
* Email
* Accounting provider (A dropdown) and
* Company Size

Name: Alphanumeric, at least two words, not exceeding 100 characters and without any special characters such as @,$,%,* etc.
Email: standard email validation
Accounting Platform. This dropdown should contain the list of accounting providers returned from the GET described above, sorted alphabetically.

Implement validation on the fields so that a red message is displayed if the user tries to submit the form if there are errors.

## Result
If there are no validation errors, POST the form to the /sign_up URL on the node.js instance. The /sign_up handler should append the received form data to a file called ‘signup.csv’ in the following format:
It should contain a single line for each signup:
`<Date and Time>`,`<IP Address>`, `<Name>`, `<email Address>`, `<Accounting Platform>`, `<Company Size>`

## Styling
Please try to match the styling in the provided image as best as possible.

## Assets
The dashboard contains a single image named `phone.png` which we have attached.

## Testing
We would like you to test your react components and also unit test your simple node.js server.

## NPM Packages
You are free to use any npm packages, but must write the application with React.

## Version control
Please use git to commit your work in logical stages.

# Submitting your Work
To submit your work, create a pull request to `curoo/expend-dashboard-challenge-<your_github_username>`˜
