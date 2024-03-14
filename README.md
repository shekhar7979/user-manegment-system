
# UserManagementSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Get started

### Clone the repo

```shell
git clone https://github.com/shekhar7979/user-manegment-system
cd user-manegment-system
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

The `npm start` command builds (compiles TypeScript and copies assets) the application into `dist/`, watches for changes to the source files, and runs `lite-server` on port `3000`.

Shut it down manually with `Ctrl-C`.



# Modules

## 1. User Module

### 1.1 User Module Setup

In the User module, a folder named `User` has been created containing the `module.ts` file. This file includes the necessary routing configurations to navigate to the user page.

### 1.1.1 User-Upsert Component

#### Description
The User-Upsert component facilitates the creation and updating of user information through a reactive form.

#### Form Fields
- FirstName
- LastName
- Address
- Email
- Phone

#### Validation
- All fields are required.
- Email field undergoes email validation.
- Phone field accepts only 10-digit numbers.

#### Functionality
- Upon submission, the data is saved into a list.
- If the user is new, they are added to the list; if they already exist, their information is updated.


### 1.1.2 User-List Component

#### Description
The User-List component presents all created users in a grid format.

#### Grid Columns
- Name
- Email
- Phone
- Action (Edit and Delete buttons)

#### Functionality
- Edit button transfers user details to the User-Upsert Component.
- Delete button removes the user from the list.

### 1.2 Validation

#### Description
Ensures that user data is validated before submission. If the user already exists, an "already exists" message is displayed.

### 1.3 Data Passing

#### Description
- When a user is selected in the User-List component, the DataService is utilized to transfer the selected user to the User-Upsert component.
- Upon addition or update of a user in the User-Upsert component, the DataService notifies the User-List component to refresh the user list.

### 1.4 Styling

#### Description
Basic styling has been implemented to enhance the visual appeal of the application.

#### CSS Framework
Bootstrap framework are used for styling



