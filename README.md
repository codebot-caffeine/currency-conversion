# CURRENCY CONVERSION APP

A mini **react website/app** that needs an account to **sign-in** as to
get the resultant currency value from given selected currency by making
an **API** request

### COMPONENT STRUCTURE/FUNCTIONALITY:

- **Home Route**

- When invalid credentials are provided and the Login button is
  clicked, then the respective error message is displayed.
- When a valid username and password are provided and the Login button
  is clicked, then the page renders **CURRENCY CONVERSION COMPONENT**.

- **SignIn Route**
- For User feasibility **SignIn** component is provided inside `HOME`
  component.
- When invalid credentials are provided and the Login button is
  clicked, then the respective error message is displayed.
- If any **registered user** forgot their password with valid
  credentials can change their password for which a **Forgot
  Password** link is also provided which redirects to
  `forgot password component`
- When a valid username and password are provided and the Login button
  is clicked, then the page renders **CURRENCY CONVERSION COMPONENT**.

- **SignUp Route**
- Any New user who wants to access **CURRENCY CONVERSION COMPONENT**
  needs to provide **email**,**username** and create a new
  **password** `[Note- empty credentials are not taken]` which are
  stored in their `LOCAL STORAGE` as mentioned.
- if **username**,**password**,**email** already exists in the
  `LOCAL STORAGE` respective error messages are displayed on the
  **UI**.

- **Forgot Password Route**
- Any registered user who wants to change password need to provide
  their valid credentials asked, which will be used to update data in
  `local storage`.

- **Header Component**
- A header component with `sign in` and `sign up` links are provided
  for easy navigation between routes.

- **Currency Conversion Component**
- After the user gets **logged in** using valid credentials this
  component makes an `API request` for fetching both
  `currency symbols` and `currency values` which are provided in a
  drop down **select** options.
- when the required options are chose from both **select** options and
  `convert` button is clicked resultant currency value is shown.

### Data fetch URLs

- `CurrencyValues`
  :`[https://free.currconv.com/api/v7/currencies?apiKey]`
- `currencyConvertingURL`
  :`[https://free.currconv.com/api/v7/convert?q=&compact=ultra&apiKey]`
  `NOTE - API key is required to fetch data and above URL's are provided to give information regarding them`

### Functionality for future purposes:

- Can provide Google Auth0 to skip login,signup etc..,
- required installations are done.
