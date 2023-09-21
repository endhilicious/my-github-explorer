# Github Repositories Explorer

## How to Run

### Installation

Make sure you have Node.js and npm installed on your computer.

1. Download the source code files.

2. Navigate to the project directory:
`cd react-movie-app`

3. Install dependencies by running the following command:
`npm install`


### Running the Application

After the installation is complete, you can run the application using the command:
`npm run dev`


The application will run at `http://localhost:3000`.

## Unit Testing

You can run unit tests using the command:
`npm run test`
 


## What's Used

### Context

- **useToast**: This context allows the application to easily display toast messages when errors or specific actions occur. The messages will appear for 3 seconds.
- **useResponsive**: This context checks whether the screen is in responsive mode or not, allowing the application to adapt its layout accordingly.
- **useLoading**: This context is used to manage the loading queue when the application is fetching data.
- **useGithubData**: This context is used to store the data in github api.

### Unit Testing

Unit tests have been added for some components using Jest as the testing framework and React Testing Library (RTL) to ensure that the components work as expected.

You can run all unit tests using the command `npm run test`.
