## Contents:

Each folder and file in this repository is properly documented. You may read the `README.md` file of each folder to understand its content. You may also read the inline comments of each file explaining the statements line-per-line.

- [controllers](https://github.com/ccapdev1920T2/s11g12/tree/master/controllers) - This folder contains files which defines callback functions for client requests.
- [models](https://github.com/ccapdev1920T2/s11g12/tree/master/models) - This folder contains files for database modeling and access.
- [public](https://github.com/ccapdev1920T2/s11g12/tree/master/public) - This folder contains static assets such as css, js, and image files.
- [routes](https://github.com/ccapdev1920T2/s11g12/tree/master/routes) - This folder contains files which describes the response of the server for each HTTP method request to a specific path in the server.
- [views](https://github.com/ccapdev1920T2/s11g12/tree/master/views) - This folder contains all hbs files to be rendered when requested from the server.
- [add_data.js](https://github.com/ccapdev1920T2/s11g12/blob/master/add_data.js) - This script creates the database and inserts 5 user details in the collection `users`.
- [add_products.js](https://github.com/ccapdev1920T2/s11g12/blob/master/add_products.js) - This script creates the database and inserts 5 user details in the collection `products`.
- [add_reviews.js](https://github.com/ccapdev1920T2/s11g12/blob/master/add_reviews.js) - This script creates the database and inserts 5 user details in the collection `reviews`.
- [add_transaction.js](https://github.com/ccapdev1920T2/s11g12/blob/master/add_transaction.js) - This script creates the database and inserts 5 user details in the collection `transaction`.
- [addtocart.js](https://github.com/ccapdev1920T2/s11g12/blob/master/addtocart.js) - This script creates the database and inserts 5 user details in the collection `cart`.
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
npm install express --save
```

5. We may now run our server. To do this, we run the command `node index.js`. Upon running the command, your Command Prompt should display the following statement:
```
app listening at port 3000
```

6. Let's test our web application. Go to the link below to access the web application homepage:
```
http://localhost:3000/homepage
```

7. ### Products
You can click on the products you can see on the homepage such as the promos. Once cliked
it will redirect you to the page of the product itself, where you can go and see some details. 
You can also access these products by:
```
http://localhost:3000/shorts
http://localhost:3000/modess
http://localhost:3000/oil

```

8. ### Navigation Bar

9. ### Footer
Here you can access different information about the website such as "About us", "Contact Us", "Our boses" and etc.
You can also directly access these by:
```
http://localhost:3000/aboutus
http://localhost:3000/boss
http://localhost:3000/contactus
```



## Authors

* **Elderwell Ramos** - *Initial work*
* **Justine Fernandez** - *Initial work*
* **Kristal Ambrosio** - *Initial work*

