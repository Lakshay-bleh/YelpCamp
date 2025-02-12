# YelpCamp

YelpCamp is a web application built using Node.js, Express, MongoDB, and other modern web technologies. It allows users to view, create, edit, and delete campgrounds, post reviews, and upload images. The project is a great example of full-stack development with user authentication, image uploading, and CRUD operations.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

YelpCamp is a platform where users can browse, create, and share their experiences with various campgrounds. The app features:
- User authentication (sign up, login, logout).
- Users can create, edit, and delete campgrounds.
- Users can leave reviews for campgrounds.
- Image upload for campgrounds.
- Maps integration using the Google Maps API for campsite locations.

## Features
- **User Authentication**: Users can sign up, log in, and manage their accounts.
- **Campground CRUD Operations**: Users can create, read, update, and delete campgrounds.
- **Reviews**: Users can add reviews, with star ratings, to campgrounds.
- **Image Upload**: Campground images are stored on a cloud service (e.g., Cloudinary).
- **Search and Filters**: Find campsites based on location, type, or rating.
- **Responsive Design**: The app is mobile-friendly, adapting to different screen sizes.

## Technologies

- **Frontend:**
  - HTML, CSS (Bootstrap for styling)
  - JavaScript (for dynamic behavior)
- **Backend:**
  - Node.js
  - Express.js (for routing and server handling)
- **Database:**
  - MongoDB (for storing user data and campgrounds)
  - Mongoose (ODM for MongoDB)
- **Authentication:**
  - Passport.js (for handling user authentication)
- **Cloud Storage:**
  - Cloudinary (for image upload and storage)
- **Other Tools:**
  - Mapbox (for integrating maps and locations)
  - Moment.js (for handling dates)
  - Body-parser (for handling form submissions)

## Installation

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/yelpcamp.git
    ```

2. Navigate into the project directory:
    ```bash
    cd yelpcamp
    ```

3. Install the necessary dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root of the project and add your sensitive information, like MongoDB URI, Passport keys, and Cloudinary credentials:
    ```env
    MONGO_URI=<your-mongodb-uri>
    CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
    CLOUDINARY_API_KEY=<your-cloudinary-api-key>
    CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
    SECRET=<your-session-secret>
    ```

5. Start the application:
    ```bash
    npm start
    ```

6. The app should be accessible at `http://localhost:3000`.

## Usage

- After logging in, you can create new campgrounds and view existing ones.
- Campgrounds can include images, descriptions, and location data (latitude and longitude).
- Leave reviews for campgrounds, rate them, and share your experiences.
- The map will show the location of the campground if the coordinates are provided.

## Contributing

If you'd like to contribute to the development of this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request to the main repository.
