# Disease Prediction ~ DiagnoCare

Welcome to the Disease Prediction UI repository! This project provides a user interface for predicting health risks related to heart disease and diabetes.

## Features

- **Health Risk Prediction**: Users can get predictions related to heart disease and diabetes.
- **User Authentication**: Secure sign-in and profile management using Clerk.
- **User Profile**: Users can view and update their health condition and prescriptions.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **React**: Front-end framework for building the user interface.
- **Next.js**: React framework with server-side rendering and static site generation.
- **Clerk**: User authentication and management.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Lottie**: Animations for enhancing user experience.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn

### Clone the Repository

```bash
git clone https://github.com/sagnik-05/disease-prediction-ui.git
cd disease-prediction-ui
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Configure Clerk

1. Create a Clerk account if you don't have one.

2. Set up your application in the Clerk dashboard.

3. Add your Clerk API keys to your environment variables. Create a .env.local file in the root directory of your project and add the following variables:

```plaintext
NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
CLERK_API_KEY=<your-clerk-api-key>
```

### Run the Deployement Server

```bash
npm run dev
# or
yarn dev
```

Visit http://localhost:3000 in your browser to see the application in action.

### Usage

Diagnosis: Navigate to the diagnosis pages to check predictions for heart disease and diabetes.
Profile: Sign in to view and update your profile with health conditions and prescriptions.

### Contributing

We welcome contributions! If you have suggestions, bug reports, or want to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Make your changes and commit them (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature/your-feature).
5. Create a new Pull Request.

### License

This project is licensed under the MIT License - see the LICENSE file for details.
