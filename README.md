## Contents:

Each folder and file in this repository is properly documented. You may read the `README.md` file of each folder to understand its content. You may also read the inline comments of each file explaining the statements line-per-line.

- [controllers](https://github.com/ccapdev1920T2/s11g12/tree/master/controllers) - This folder contains files which defines callback functions for client requests.
- [models](https://github.com/ccapdev1920T2/s11g12/tree/master/models) - This folder contains files for database modeling and access.
- [public](https://github.com/ccapdev1920T2/s11g12/tree/master/public) - This folder contains static assets such as css, js, and image files.
- [routes](https://github.com/ccapdev1920T2/s11g12/tree/master/routes) - This folder contains files which describes the response of the server for each HTTP method request to a specific path in the server.
- [views](https://github.com/ccapdev1920T2/s11g12/tree/master/views) - This folder contains all hbs files to be rendered when requested from the server.
- [add_data.js](https://github.com/ccapdev1920T2/s11g12/blob/master/add_data.js) - This script creates the database and inserts user details in the collection `users`.
- [add_products.js](https://github.com/ccapdev1920T2/s11g12/blob/master/add_products.js) - This script creates the database and inserts product details in the collection `products`.
- [add_reviews.js](https://github.com/ccapdev1920T2/s11g12/blob/master/add_reviews.js) - This script creates the database and inserts reviews in the collection `reviews`.
- [add_transaction.js](https://github.com/ccapdev1920T2/s11g12/blob/master/add_transaction.js) - This script creates the database and inserts transaction details in the collection `transaction`.
- [addtocart.js](https://github.com/ccapdev1920T2/s11g12/blob/master/addtocart.js) - This script creates the database and inserts product details to the cart in the collection `cart`.
- [index.js](https://github.com/ccapdev1920T2/s11g12/blob/master/index.js) - The main entry point of the web application.

## Follow the steps below to set-up  this repository:
1. Clone the repository either by downloading the contents of the repository [here](https://github.com/ccapdev1920T2/s11g12/archive/master.zip), or using the command below (Note: git should be installed in your system for this to work).
```
git clone https://github.com/ccapdev1920T2/s11g12
```
2. Open Command Prompt
3. Navigate to the project folder - the folder containing the contents of the cloned or downloaded repository.
```
npm init
```
4. Run the command `npm install` to initialize and install all necessary modules used in the project.
```
npm install
```

5. We may now run our server. To do this, we run the command `node index.js`. Upon running the command, your Command Prompt should display the following statement:
```
app listening at port 3000
```

6. Let's test our web application. Go to the link below to access the web application homepage:
```
http://localhost:3000/homepage
```

7. ### Navigation Bar
There are multiple parts here in Navigation bar
- Home
  -This is where you will be directed to the homepage
- Conact Us
  -This is where you will be directed to a form where you can enter your
  name, email, mobile number, and the message that will be sent to the admin
- Categories
  -Under this there are 4 main categories namely; Beauty,Fitness,Fashion,Health. And sub links
  which are promos and new releases
- User
  -This is where yoiu can see "Sign up/ Login" and "View Profile" when this dropdown is clicked. (Further details will be           below)
- My Cart
  -This is where you can view the user's products that are added in the cart.

8. ### Sign Up
Let us first create a new user by clicking on sign up and Enter these as values:
```
Name : Vhino Ramos
Email : wendell@gmail.com
Password: 123
Re-type Password : 123
Choose  photo: /public/img/vhino.jpg
```
After this you will be directed to your profile

9. ### Log In
You can close the app and rerun it. On the navigation bar click on user then "Login / Sign up".
```
Email: wendell@gmail.com
Password: 12345678

Email: kristal@gmail.com
Password: 12345678

Email: jus@gmail.com
Password: 12345678
```
After this you will be directed to homepage where you can see some of the products

10. ### Search
You can search some products in the search bar by using some keywords from the product name or the whole product name itself
There will be no result if the input is not a product's name
```
Shorts

Sweater

Collagen
```

11. ### Categories
There are different categories to help filter the products
```
Beauty
Fitness
Fashion
Health
Promos
New Releases
```

12. ### Contact Us
This would route the user to send a message to us (just for display)

13. ### More into products
```
      A. Review a Product would only work if you have bought the product already
      B. You can only review a product once
      C. In reviewing a product you can leave a comment, a title, and star rating
      D. You can increase the quantity of each product that you want to buy
      E. Buy now will directly go to checkout
      F. Check out will put the product in the cart
      G. Add to wishlist and the product will be added to the wishlist
 ```     
14. ### Profile
  ```
  A. Edit- You can edit your profile info such as first name, last name, etc.
  B. To recieve - are the items that have been ordered and to be recieved by the customer
      once that the order is already delivered you can click on "Order recieved" button
  C. Completed - Are the items that have been successfully recieved. You can opt return the product by clicking "return" button
  D. Cancelled -  Are the products cancelled before they are recieved
  E. Returned - Are the items returned by the user
  F. Day Simulation - Is used to simulate the days passing
  
  ```

15. ### Check Out 
    This is when you click on My Cart on the navigation bar then "checkout" button. Or via
    clicking on check out when you are on the specific product page.

16. ### Footer
Here you can access different information about the website such as "About us", "Contact Us", "Our boses" and etc.
You can also directly access these by:

17. ### Link
Link for the heroku app
You can also directly access these by:
```
https://s11g12.herokuapp.com/
```


## Authors

* **Elderwell Ramos** 
* **Justine Fernandez** 
* **Kristal Ambrosio** 

