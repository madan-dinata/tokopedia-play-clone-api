[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# Tokopedia Play Clone Api

Play is a streaming platform that can be accessed through the Tokopedia application. Users can enjoy a variety of interesting videos about live shopping with special promos, cooking shows, creations, and sports which will be broadcast live or rebroadcast. Users can also buy directly the products that are shown on Tokopedia Play.

## Table of contents

- [Tech Stack](#tech-stack)
- [Bonus Features](#bonus-features)
- [Database Structure](#database-structure)
- [API Documentation](#api-documentation)
  - [Base URL](#base-url)
  - [API Request and Response](#api-request-and-response)
- [Run Locally](#run-locally)
- [Feedback](#feedback)

## Tech Stack

**Server:** Node, Express, Mongodb, socket io

## Bonus Features

- Search videos by title
- Real time data for comment list
- Get user profile picture and username on the top right corner of the page

## Database Structure

Database have one collection

## videos collection

```
{
  _id: ObjectId,
  urlThumbnail: string,
  urlVideo: string,
  products: [
    {
      _id: ObjectId,
      linkProduct: string,
      title: string,
      price: int
    }
  ],
  comments: [
    {
      _id: ObjectId,
      username: {
        type: String,
        ref: "users",
      },
      comment: string,
      createdAt: Date
      updatedAt: Date
    }
  ]
}
```

## user collection

```
{
  _id: ObjectId,
  username: String,
  password: String,
  urlImage: String
}
```

## API Documentation

## Base URL

The base URL for all API endpoints is:

```
http://localhost:{PORT}/api/v1
```

## API Request and Response

## Videos

- Video object

```
{
  id: ObjectId()
  title: string
  description: string
  urlThumbnail: string
  urlVideo: string
}
```

## GET /videos

Returns all video in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200  
     **Content:**
    ```
    [
      {<video_object>},
      {<video_object>},
      {<video_object>}
    ]
    ```

## GET /videos/:id

Returns the specified video by id.

- **URL Params**  
  _Required:_ `id=string`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200  
    **Content:**
    ```
    { <video_object> }
    ```
- **Error Response:**
  - **Code:** 400  
    **Content:**
    ```
    { "message" : "Id not found" }
    ```

## GET /videos/search - Bonus Feature

Returns the videos by search query.

- **URL Params**  
  _Required:_ none
- **Data Params**  
  `Required: ?q=[value:string]`
- **Headers**  
  Content-Type: application/json
- **Success Response:**

  - **Code:** 200  
    **Content:**

    ```
    [ { <video_object> } ]
    ```

- **Error Response:**
  - **Code:** 500  
    **Content:**
    ```
    { "message" : "Internal Server Error" }
    ```

## POST /videos

Creates a new Video and returns the new object.

- **URL Params**  
  None
- **Data Params**
  ```
  {
    urlThumbnail: string,
    urlVideo: string
  }
  ```
- **Headers**  
  Content-Type: application/json
- **Success Response:**
  - **Code:** 201  
     **Content:**  
     `       { "message": "Successful create video" }`
- **Error Response:**
  - **Code:** 400  
    **Content:**
    ```
    { "message" : "Url Thumbnail or Url Video not be empty" }
    ```

---

## Products

- Product object

```
{
  id: ObjectId()
  linkProduct: string
  title: string
  price: integer
  urlImage: string
}
```

## GET /products/:videoId

Returns all products by video id in the system.

- **URL Params**  
  _Required:_ `videoId=string`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200  
    **Content:**
    ```
    [
        {<product_object>},
        {<product_object>},
        {<product_object>}
    ]
    ```
- **Error Response:**
  - **Code:** 400  
    **Content:**
    ```
    { "message" : "Id not found" }
    ```

## POST /products/:videoId

Creates a new Product by video id and returns the new object.

- **URL Params**  
  _Required:_ `videoId=string`
- **Data Params**

```
  {
    linkProduct: string
    title: string,
    price: integer
  }
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200  
    **Content:**
    ```
      { "message": "Successful Product" }
    ```
- **Error Response:**

  - **Code:** 400  
    **Content:**

    ```
    { "message" : "Id not found" }
    ```

    OR

    **Content:**

    ```
    { "message" : "Link Product or title or price not be empty" }
    ```

---

## Comments

- Comment object

```
{
  id: ObjectId()
  username: string
  comment: string
  createdAt: Date()
  updatedAt: Date()
}
```

## GET /comments/:videoId

Returns all comments by video id in the system.

- **URL Params**  
  _Required:_ `videoId=string`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200  
    **Content:**
    ```
    [
        {<comment_object>},
        {<comment_object>},
        {<comment_object>}
    ]
    ```
- **Error Response:**
  - **Code:** 400  
    **Content:**
    ```
    { message : "Id not found" }
    ```

## POST /comments/:videoId

Creates a new Comment by video id and returns the new object.

- **URL Params**  
  _Required:_ `videoId=string`
- **Data Params**

```
  {
    username: string
    comment: string
  }
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200  
    **Content:**
    ```
      { "message": "Successful Comment" }
    ```
- **Error Response:**

  - **Code:** 400  
    **Content:**

    ```
    { "message" : "Id not found" }
    ```

    OR

    **Content:**

    ```
    { "message" : "comment not be empty" }
    ```

## Users

- User object

```
{
  _id: ObjectId
  username: String
  password: String
  urlImage: String
}
```

## POST /register

Create a new User

- **URL Params**  
  None
- **Data Params**

```
  {
    username: string
    password: string
  }
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**

  - **Code:** 200  
    **Content:**
    ```
    { message: "Account successfully created"}
    ```

- **Error Response:**

  - **Code:** 400  
    **Content:**

    ```
    { message: "Username already exists" }
    ```

    OR

  - **Code:** 400  
    **Content:**
    ```
    { "message": "username or password can not be empty" }
    ```

## POST /login

Login with user account

- **URL Params**  
  None
- **Data Params**

```
  {
    username: string
    password: string
  }
```

- **Headers**  
  Content-Type: application/json
- **Success Response:**

  - **Code:** 200  
    **Content:**
    ```
    { accessToken }
    ```

- **Error Response:**

  - **Code:** 400  
    **Content:**

    ```
    { message: "User not found" }
    ```

    OR

  - **Code:** 400

    **Content:**

    ```
    { "message": "Invalid password" }
    ```

## GET /me - Bonus Feature

Get current user login

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
  - **Code:** 200  
    **Content:**
    ```
    {
      id: ObjectId,
      username: String
      urlImage: String
    }
    ```
- **Error Response:**
  - **Code:** 401
    **Content:**
    ```
    { message : "No token provided!" }
    ```

## Run Locally

Clone the project

```bash
  git clone https://github.com/madan-dinata/tokopedia-play-clone-api.git
```

Go to the project directory

```bash
  cd tokopedia-play-clone-api
```

Install dependencies

```bash
  npm install
```

Environment Variables

You will need to add the following environment variables to your .env file

```bash
  MONGO_URL=
  PORT=
  SECRET_KEY=
  ALLOWED_ORIGIN=
```

Start the server

```bash
  npm run dev
```

## Feedback

If you have any feedback, please reach out to us at madandinata68@gmail.com
