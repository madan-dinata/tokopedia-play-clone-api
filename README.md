[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# Tokopedia Play Clone Api

Play is a streaming platform that can be accessed through the Tokopedia application. Users can enjoy a variety of interesting videos about live shopping with special promos, cooking shows, creations, and sports which will be broadcast live or rebroadcast. Users can also buy directly the products that are shown on Tokopedia Play.

## Tech Stack

**Server:** Node, Express, Mongodb

## Database Structure

### 1. Database Structure :

```json
videos : {
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
                username: string,
                comment: string,
                createdAt: Date
                updatedAt: Date
              }
            ]
          }
```

_*Using nested collections because there's no good reason to separate them and not using joins in this case*_

## API Documentation

Base URL 
----
The base URL for all API endpoints is:

```
http://api.exampel.com/api/v1
```

## API Request and Response

Videos
----
* Video object
```
{
  id: ObjectId()
  urlThumbnail: string
  urlVideo: string
}
```
GET /videos
----
  Returns all video in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
    * **Code:** 200  
    **Content:**  
        ```
        [
            {<video_object>},
            {<video_object>},
            {<video_object>}
        ]
        ```

GET /videos/:id
----
  Returns the specified video by id.
* **URL Params**  
  *Required:* `id=string`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json 
* **Success Response:** 
    * **Code:** 200  
      **Content:**  
        ```
        { <video_object> }
        ``` 
* **Error Response:**  
    * **Code:** 400  
      **Content:** 
        ```
        { "message" : "Id not found" }
        ```
        
POST /videos
----
  Creates a new Video and returns the new object.
* **URL Params**  
  None
* **Data Params**  
  ```
  {
    urlThumbnail: string,
    urlVideo: string
  }
  ```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
    * **Code:** 201  
    **Content:**  
        ```
            { "message": "Successful create video" }
        ```
* **Error Response:**  
    * **Code:** 400  
      **Content:** 
        ```
        { "message" : "Url Thumbnail or Url Video not be empty" }
        ```
----
Products
----
* Product object
```
{
  id: ObjectId()
  linkProduct: string
  title: string
  price: integer
}
```
GET /products/:videoId
----
  Returns all products by video id in the system.
* **URL Params**  
  *Required:* `videoId=string`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
    * **Code:** 200  
      **Content:**  
        ```
        [
            {<product_object>},
            {<product_object>},
            {<product_object>}
        ]
        ``` 
* **Error Response:**  
    * **Code:** 400  
      **Content:** 
        ```
        { "message" : "Id not found" }
        ```


POST /products/:videoId
----
  Creates a new Product by video id and returns the new object.
* **URL Params**  
  *Required:* `videoId=string`
* **Data Params**  
```
  {
    linkProduct: string
    title: string,
    price: integer
  }
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
    * **Code:** 200  
      **Content:**  
      ```
        { "message": "Successful Product" }
      ``` 
* **Error Response:**  
    * **Code:** 400  
      **Content:** 
        ```
        { "message" : "Id not found" }
        ```
        
      OR
      
      **Content:** 
        ```
        { "message" : "Link Product or title or price not be empty" }
        ```
----
Comments
----
* Comment object
```
{
  username: string
  comment: string
  createdAt: Date()
  updatedAt: Date()
}
```
GET /comments/:videoId
----
  Returns all comments by video id in the system.
* **URL Params**  
  *Required:* `videoId=string`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
    * **Code:** 200  
      **Content:**  
        ```
        [
            {<comment_object>},
            {<comment_object>},
            {<comment_object>}
        ]
        ``` 
* **Error Response:**  
    * **Code:** 400  
      **Content:** 
        ```
        { message : "Id not found" }
        ```

POST /comments/:videoId
----
  Creates a new Comment by video id and returns the new object.
* **URL Params**  
  *Required:* `videoId=string`
* **Data Params**  
```
  {
    username: string
    comment: string
  }
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
    * **Code:** 200  
      **Content:**  
      ```
        { "message": "Successful Comment" }
      ``` 
* **Error Response:**  
    * **Code:** 400  
      **Content:** 
        ```
        { "message" : "Id not found" }
        ```
        
      OR
      
      **Content:** 
        ```
        { "message" : "username or comment not be empty" }
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
```

Start the server

```bash
  npm run dev
```

## Feedback

If you have any feedback, please reach out to us at madandinata68@gmail.com
