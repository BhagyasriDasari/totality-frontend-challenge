Property Rental Platform
Description
This project is a React-based property rental platform that simulates a rental service with key features including property listings, booking functionality, and a checkout process. The application uses JSON data located in src/data/properties.json for property information, eliminating the need for a backend server.

Features
Property Listings: Displays available properties with images, details, and a "Book Now" button for each property.
Booking: Allows users to add properties to their cart and proceed to checkout.
Cart Management: Shows the total amount of booked properties and allows users to navigate to the checkout page.
Checkout: Provides a form for users to complete their booking with necessary details.
Technologies Used
React.js: For building the user interface and managing application state.
React Router: For handling navigation between pages.
JSON Data: Property information is stored in src/data/properties.json.
Setup Instructions
Clone the repository:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000.

File Structure
src/
components/ - Contains React components for different parts of the application.
data/ - Contains JSON data for properties.
contexts/ - Contains context files for managing state (e.g., CartContext, AuthContext).
App.js - Main application component.
index.js - Entry point of the application.
app.css - Global CSS styles.


Deployed link:https://totalityhouse.netlify.app/