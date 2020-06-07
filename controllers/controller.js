const db = require('../models/db.js');
const crypto = require('crypto');
const sanitize = require('mongo-sanitize');
const Account= require('../models/UserModel.js');
const Product = require('../models/ProductModel.js');
const Log = require('../models/LoggedModel.js');
const Review = require('../models/ReviewModel.js');
const Transaction = require('../models/TransModel.js');
const History = require('../models/HistoryModel.js');
const Category = require('../models/CategoryModel.js');
const Cart = require('../models/CartModel.js');
const Wishlist = require('../models/WishlistModel.js');
const controller = {

    getHomepage: function (req, res) {
        var checker = req.cookies.userData;
        if(!checker)
        {
            db.findOne(Log, null, null, function(result){
                db.findManyLimited(Product, null, null, 6, function(prodresult){
                    res.render('homepage', {
                        title: 'HOME', logged: result.logged, product: prodresult.map(prodresult => prodresult.toJSON())
                    });
                })
                
            })
        }
        else{
            db.findOne(Log, null, null, function(result){
                db.findManyLimited(Product, null, null, 6, function(prodresult){
                    res.render('homepage', {
                        title: 'HOME', logged: result.logged, firstname: req.cookies.userData.firstname, product: prodresult.map(prodresult => prodresult.toJSON())
                    });
                })
                
            })
        }
        
    },
    getSearch: function(req,res){
        var checker = req.cookies.userData;
        var query = {$or: [{name: {'$regex' : req.query.search, '$options' : 'i'}}, {type: {'$regex' : req.query.search, '$options' : 'i'}}]}
        if(!checker)
        {
            db.findOne(Log, null, null, function(result){
                db.findMany(Product, query, null, function(prodresult){
                    res.render('search', {
                        title: 'SEARCH', logged: result.logged, product: prodresult.map(prodresult => prodresult.toJSON())
                    });
                })
                
            })
        }
        else{
            db.findOne(Log, null, null, function(result){
                db.findMany(Product, query, null, function(prodresult){
                    res.render('search', {
                        title: 'SEARCH', logged: result.logged, firstname: req.cookies.userData.firstname, product: prodresult.map(prodresult => prodresult.toJSON())
                    });
                })
                
            })
        }
    },
    getAboutUs: function (req, res) {
        var checker = req.cookies.userData;
        if(!checker)
        {
            db.findOne(Log, null, null, function(result){
                res.render('aboutus', {
                    title: 'ABOUT US', logged: result.logged
                });
            })
        }
        else{
            db.findOne(Log, null, null, function(result){
                res.render('aboutus', {
                    title: 'ABOUT US', logged: result.logged, firstname: req.cookies.userData.firstname
                });
            })
        }
    },
    getBoss: function (req, res) {
        var checker = req.cookies.userData;
        if(!checker)
        {
            db.findOne(Log, null, null, function(result){
                res.render('boss', {
                    title: 'OUR BOSSES', logged: result.logged
                });
            })
        }
        else{
            db.findOne(Log, null, null, function(result){
                res.render('boss', {
                    title: 'OUR BOSSES', logged: result.logged, firstname: req.cookies.userData.firstname
                });
            })
        }
    },
    getLogout: function(req,res){
        res.clearCookie('userData');
        db.updateOne(Log, {logged: 1}, {logged: 0});
        res.redirect('/homepage');
    },
    getLogin: function (req, res) {
        var checker = req.cookies.userData;
        if(!checker)
        {
            db.findOne(Log, null, null, function(result){
                res.render('login', {title: 'LOGIN', hidden: "hidden", logged: result.logged
                });
            })
        }
        else
        res.redirect('/homepage');
    },
    postLogin: function(req, res)
    {
        var u = sanitize(req.body.email);
        var p = sanitize(req.body.password);
        var query = {email: u};
        var projection = null;
        var hash = crypto.createHash('md5');
        db.findOne(Account, query, projection, function(result){
            if(result===null){
                res.render('login', {title: 'LOGIN', hidden: ""});
            }
            else{
                var passHash = p + result.salt;
                hash = hash.update(passHash).digest('hex');
                if(hash === result.hash)
                {
                    var dateToday = new Date();
                    db.updateMany(Transaction, null, {dateToday: dateToday});
                    db.updateOne(Log, {logged: 0}, {logged: 1});
                    res.cookie("userData", result);
                    res.redirect('/homepage');
                }
                else
                {
                    res.render('login', {title: 'LOGIN', hidden: ""});

                }
            }
        })
    },
    getSignup: function (req, res) {
        var checker = req.cookies.userData;
        if(!checker)
        {
            db.findOne(Log, null, null, function(result){
                res.render('signup', {
                    title: 'SIGN UP', logged: result.logged
                });
            })
        }
        else
        res.redirect('/homepage');
    },
    postSignup: function(req,res){
        var photo = req.body.photo
        if(!photo){
            photo = 'default.png';
        }
        var salt = crypto.randomBytes(64).toString('base64');
        var password = req.body.password + salt;
        var hash = crypto.createHash('md5').update(password).digest('hex');
        var user = {
            firstname: req.body.namesu1,
            lastname: req.body.namesu2,
            email: req.body.email,
            state: req.body.region,
            hash: hash,
            salt: salt,
            photo: photo
        }
        db.insertOne(Account, user);
        db.updateOne(Log, {logged: 0}, {logged: 1});
        var cart = {
            user: req.body.email
        }
        db.insertOne(Cart, cart);
        db.insertOne(Wishlist, cart);
        var dateToday = new Date();
        db.updateMany(Transaction, null, {dateToday: dateToday});
        res.cookie("userData", user);
        res.redirect('/homepage');
    },
    getCheckEmail: function(req,res){
        var email = req.query.email;
        var query = {email: email};
        projection = 'email';
        db.findOne(Account, query, projection, function(result){
            res.send(result)
        })
    },
    getProducts: function(req,res){
        var checker = req.cookies.userData;
        var query = {name: req.query.name};
        if(!checker)
        {
            db.findOne(Log, null, null, function(result){
                db.findOne(Product, query, null, function(prodresult){
                    db.findMany(Review, {item: req.query.name}, null, function(revresult){
                        res.render('products', {
                            title: 'PRODUCTS', logged: result.logged, name: prodresult.name, desc: prodresult.desc, photo: prodresult.photo, price: prodresult.price,
                            rating: prodresult.rating, region: 'Metro Manila', sold: prodresult.sold, reviews: prodresult.reviews, review: revresult.map(revresult => revresult.toJSON())
                        });
                    })
                    
                })
                
            })
        }
        else{
            db.findOne(Log, null, null, function(result){
                db.findOne(Product, query, null, function(prodresult){
                    db.findMany(Review, {item: req.query.name}, null, function(revresult){
                        res.render('products', {
                            title: 'PRODUCTS', logged: result.logged, name: prodresult.name, firstname: req.cookies.userData.firstname, desc: prodresult.desc, photo: prodresult.photo, price: prodresult.price,
                            rating: prodresult.rating, region: req.cookies.userData.state, sold: prodresult.sold, reviews: prodresult.reviews, review: revresult.map(revresult => revresult.toJSON())
                        });
                    })
                    
                })
                
            })
        }
    },
    getLogged: function(req,res){
        var query = {logged: req.query.logged};
        db.findOne(Log, query, null, function(result){
            res.send(result);
        })
    },
    getReview: function(req, res){
        var revquery = {item: req.query.item, user: req.cookies.userData.email};
            db.findOne(Review, revquery, null, function(revresult){
                res.send(revresult);
            })
    },
    getBought: function(req,res){
        var revquery = {name: req.query.name, email: req.cookies.userData.email, status: "Delivered"};
            db.findOne(History, revquery, null, function(hisresult){
                res.send(hisresult);
            })
    },
    postProducts: function(req,res){
        var name = req.cookies.userData.firstname + " " + req.cookies.userData.lastname;
        var today = new Date()
        var review = {
            user: req.cookies.userData.email,
            name: name,
            item: req.body.pnametext,
            date: today,
            photo: req.cookies.userData.photo,
            rating: req.body.stars,
            message: req.body.content,
            title: req.body.title
        }
        db.insertOne(Review, review);
        var query = {name: req.body.pnametext} 
        db.findOne(Product, query, null, function(result){
            var reviews = result.reviews + 1;
            var rating = (result.rating + req.body.stars) / reviews
            var update = {
                reviews: reviews,
                rating: rating
            }
            db.updateOne(Product, query, update);
        })
        redirect = '/products?name=' + req.body.pnametext
        res.redirect(redirect)
    },
    getAddCart: function(req,res){
        var item
        var photo
        var price
        var query = {user: req.cookies.userData.email}
        var quantity = Number(req.query.quantity)
        if(!quantity)
        quantity = 1
        db.findOne(Cart, query, null, function(result){
            item = result.item;
            photo = result.photo;
            price = result.price;
            for(var i = 0; i < quantity; i++){
                item.push(req.query.item);
                photo.push(req.query.photo);
                price.push(req.query.price);
            }
            var update = {
                item: item,
                photo: photo,
                price: price
            }
            db.updateOne(Cart, query, update);
        })
    },
    getAddWishlist: function(req,res){
        var item
        var photo
        var price
        var query = {user: req.cookies.userData.email}
        db.findOne(Wishlist, query, null, function(result){
            item = result.item;
            photo = result.photo;
            price = result.price;
                item.push(req.query.item);
                photo.push(req.query.photo);
                price.push(req.query.price);
            var update = {
                item: item,
                photo: photo,
                price: price
            }
            db.updateOne(Wishlist, query, update);
        })
    },
    getProfile: function(req,res) {
        var checker = req.cookies.userData;
        if(!checker)
        {
            res.redirect('/homepage');
        }
        else{
            var query = {
                email: req.cookies.userData.email
            }
            db.findOne(Log, null, null, function(result){
                db.findManySorted(History, query, null, {dateOrd: -1} ,function(hisresult){
                    db.findMany(Transaction, query, null, function(transresult){
                        res.render('profile', {
                            title: 'PROFILE', logged: result.logged, firstname: req.cookies.userData.firstname, lastname: req.cookies.userData.lastname, num: req.cookies.userData.num,
                            email: req.cookies.userData.email, address: req.cookies.userData.address, region: req.cookies.userData.state, photo: req.cookies.userData.photo,
                            transaction: transresult.map(transresult => transresult.toJSON()), history: hisresult.map(hisresult =>hisresult.toJSON())
                    })
                    
                        
                })
                
                
            })
        })
        }
    },
    getCheckId: function(req,res){
        var id = req.query.id;
        var query = {id: id, email: req.cookies.userData.email};
        db.findOne(Transaction, query, null, function(result){
            res.send(result);
        })
    },
    getCheckname: function(req,res){
        var name = req.query.name;
        var dateOrd = req.query.dateOrd;
        var query = {
            email: req.cookies.userData.email,
            name: name,
            dateOrd: dateOrd
        }
        db.findOne(History, query, null, function(result){
            res.send(result);
        })
    },
    getReceive: function(req,res){
        var id = req.query.id;
        var update = {delivered: 1}
        db.updateOne(Transaction, {id: id, email: req.cookies.userData.email}, update);
        db.findOne(Transaction, {id: id, email: req.cookies.userData.email}, null, function(result){
            var dateOrd = result.dateOrd;
            var items = result.items;
            var photos = result.photos
            var prices = result.prices
            var history;
            for(i = 0; i< items.length; i++){
                history = {
                    email: req.cookies.userData.email,
                    name: items[i],
                    photo: photos[i],
                    price: prices[i],
                    dateOrd: dateOrd,
                    quantity: 1,
                    status: 'Delivered'
                }
                db.insertOne(History, history);
            }
        })
    },
    getReturn: function(req,res){
        var name = req.query.name;
        var dateOrd = req.query.date;
        var update = {status: 'Returned'}
        var filter = {
            email: req.cookies.userData.email,
            dateOrd: dateOrd,
            status: "Delivered"
        }
        db.updateOne(History, filter, update)
    },
    getContactUs: function (req, res) {
        var checker = req.cookies.userData;
        if(!checker)
        {
            db.findOne(Log, null, null, function(result){
                res.render('contactus', {
                    title: 'CONTACT US', logged: result.logged
                });
            })
        }
        else{
            db.findOne(Log, null, null, function(result){
                res.render('contactus', {
                    title: 'CONTACT US', logged: result.logged, firstname: req.cookies.userData.firstname
                });
            })
        }
    },
    getUnavailable: function (req, res) {
        var checker = req.cookies.userData;
        if(!checker)
        {
            db.findOne(Log, null, null, function(result){
                res.render('unavailable', {
                    title: 'UNAVAILABLE', logged: result.logged
                });
            })
        }
        else{
            db.findOne(Log, null, null, function(result){
                res.render('unavailable', {
                    title: 'UNAVAILABLE', logged: result.logged, firstname: req.cookies.userData.firstname
                });
            })
        }
    },
    getCategories: function(req,res) {
        var checker = req.cookies.userData;
        var query = {type: {'$regex' : req.query.type, '$options' : 'i'}}
        if(!checker)
        {
            db.findOne(Log, null, null, function(result){
                db.findMany(Product, query, null, function(prodresult){
                    db.findOne(Category, query, null, function(catresult){
                        res.render('categories', {
                            title: catresult.title, logged: result.logged, banners: catresult.banners, count: catresult.count,
                            activebanner: catresult.activebanner, category: catresult.type, gif: catresult.gif, gifclass: catresult.gifclass,
                            activeimg: catresult.activeimg, quote: catresult.quote, actname: catresult.actname, products: prodresult.map(prodresult => prodresult.toJSON())
                    })
            
                })
                
            })
        })
            
        }
        else{
            db.findOne(Log, null, null, function(result){
                db.findMany(Product, query, null, function(prodresult){
                    db.findOne(Category, query, null, function(catresult){
                        res.render('categories', {
                            title: catresult.title, logged: result.logged, banners: catresult.banners, count: catresult.count,
                            activebanner: catresult.activebanner, category: catresult.type, gif: catresult.gif, gifclass: catresult.gifclass,
                            activeimg: catresult.activeimg, quote: catresult.quote, actname: catresult.actname, products: prodresult.map(prodresult => prodresult.toJSON()), firstname: req.cookies.userData.firstname
                    })
            
                })
                
            })
        })
        }
    },
    getPromos: function(req, res){
        var checker = req.cookies.userData;
        var sort = {name: -1};
        if(!checker)
        {
            db.findOne(Log, null, null, function(result){
                db.findManyLimitedSorted(Product, null, null, sort, 5, function(prodresult){
                    res.render('homepage', {
                        title: 'HOME', logged: result.logged, product: prodresult.map(prodresult => prodresult.toJSON())
                    });
                })
                
            })
        }
        else{
            db.findOne(Log, null, null, function(result){
                db.findManyLimitedSorted(Product, null, null, sort, 5, function(prodresult){
                    res.render('homepage', {
                        title: 'HOME', logged: result.logged, firstname: req.cookies.userData.firstname, product: prodresult.map(prodresult => prodresult.toJSON())
                    });
                })
                
            })
        }
    },
    getNewRelease: function(req,res){
        var checker = req.cookies.userData;
        if(!checker)
        {
            db.findOne(Log, null, null, function(result){
                res.render('newrelease', {
                    title: 'NEW RELEASES', logged: result.logged
                });
                
            })
        }
        else{
            db.findOne(Log, null, null, function(result){
                res.render('newrelease', {
                    title: 'NEW RELEASES', logged: result.logged, firstname: req.cookies.userData.firstname
                });
                
            })
        }
    },
    getCart: function(req,res){
        var checker = req.cookies.userData;
        if(!checker)
        {
            res.redirect('/homepage');
        }
        else{
            var query = {
                user: req.cookies.userData.email
            }
            db.findOne(Log, null, null, function(result){
                db.findOne(Cart, query, null, function(cartresult){
                    res.render('cart', {
                        title: 'CART', logged: result.logged, firstname: req.cookies.userData.firstname, item: cartresult.item, price: cartresult.price, photo: cartresult.photo, region: req.cookies.userData.state
                })
                
                
            })
        })
        }
    },
    getWishlist: function(req,res){
        var checker = req.cookies.userData;
        if(!checker)
        {
            res.redirect('/homepage');
        }
        else{
            var query = {
                user: req.cookies.userData.email
            }
            db.findOne(Log, null, null, function(result){
                db.findOne(Wishlist, query, null, function(cartresult){
                    res.render('wishlist', {
                        title: 'WISHLIST', logged: result.logged, firstname: req.cookies.userData.firstname, item: cartresult.item, price: cartresult.price, photo: cartresult.photo, region: req.cookies.userData.state
                })
                
                
            })
        })
        }
    },
    getDeleteCart: function(req,res){
        var proditem= req.query.item;
        db.findOne(Product, {name: proditem}, null, function(prodresult){
            var prodphoto = prodresult.photo;
            var prodprice = prodresult.price
            db.findOne(Cart, {user:req.cookies.userData.email}, null, function(cartresult){
                cartitem = cartresult.item;
                cartphoto = cartresult.photo;
                cartprice = cartresult.price;
                itemindex = cartitem.indexOf(proditem)
                photoindex = cartphoto.indexOf(prodphoto)
                priceindex = cartprice.indexOf(prodprice)
                cartitem.splice(itemindex, 1);
                cartphoto.splice(photoindex, 1);
                cartprice.splice(priceindex, 1);
                var update = {
                    item: cartitem,
                    photo: cartphoto,
                    price: cartprice,
                }
                db.updateOne(Cart, {user:req.cookies.userData.email}, update)

            })
        })
    },
    getDeleteWishlist: function(req,res){
        var proditem= req.query.item;
        db.findOne(Product, {name: proditem}, null, function(prodresult){
            var prodphoto = prodresult.photo;
            var prodprice = prodresult.price
            db.findOne(Wishlist, {user:req.cookies.userData.email}, null, function(cartresult){
                cartitem = cartresult.item;
                cartphoto = cartresult.photo;
                cartprice = cartresult.price;
                itemindex = cartitem.indexOf(proditem)
                photoindex = cartphoto.indexOf(prodphoto)
                priceindex = cartprice.indexOf(prodprice)
                cartitem.splice(itemindex, 1);
                cartphoto.splice(photoindex, 1);
                cartprice.splice(priceindex, 1);
                var update = {
                    item: cartitem,
                    photo: cartphoto,
                    price: cartprice,
                }
                db.updateOne(Wishlist, {user:req.cookies.userData.email}, update)

            })
        })
    },
    getTotal: function(req, res){
        var sub = Number(req.query.sub);
        var total = Number(req.query.total);
        var email = req.cookies.userData.email
        var filter = {email: email}
        var update = {
            subtotal: sub,
            total: total
        }
        db.updateOne(Account, filter, update);
    },
    getCheckPassword: function(req,res){
        var p = req.query.password;
        var query = {email: req.cookies.userData.email};
        var hash = crypto.createHash('md5');
        db.findOne(Account, query, null, function(result){
            var passHash = p + result.salt;
            hash = hash.update(passHash).digest('hex');
            if(hash === result.hash)
            {
                res.send(result);
            }
            else{
                res.send(false)
            }
        })
    },
    postProfile: function(req,res){
        var firstname = req.body.name1;
        var lastname = req.body.name2;
        var num = req.body.phone;
        var email = req.body.email;
        var password = req.body.password;
        var address = req.body.address;
        var state = req.body.region;
        if(firstname == '' || firstname == null)
        firstname = req.cookies.userData.firstname
        if(lastname == '' || lastname == null)
        lastname = req.cookies.userData.lastname;
        if(num =='' || num == null)
        num = req.cookies.userData.num;
        if(email == '' || email == null)
        email = req.cookies.userData.email;
        if(password != "" || password == null)
        {
            var password = req.body.password + req.cookies.userData.salt;
            var hash = crypto.createHash('md5').update(password).digest('hex');
        }
        else{
            var hash = req.cookies.userData.hash
        }
        if(address == '' || address == null)
        address = req.cookies.userData.address
        if(state == '' || state == null)
        state = req.cookies.userData.state

        var update = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            num: num,
            state: state,
            address: address,
            hash: hash
        }
        db.updateOne(Account, {email: req.cookies.userData.email}, update);
        db.findOne(Account, {email:email}, null, function(result){
            res.clearCookie("userData");
            res.cookie('userData', result)
            res.redirect('/profile')
        })
    },
    getCheckout: function(req,res){
        var checker = req.cookies.userData;
        if(checker)
        {
            db.findOne(Log, null, null, function(result){
                var accquery = {email: req.cookies.userData.email}
                db.findOne(Account, accquery, null, function(accresult){
                    if(accresult.subtotal == 0){
                        res.redirect('/homepage');
                    }
                    else{
                        res.render('checkout', {
                            title: 'CHECKOUT', logged: result.logged, firstname: accresult.firstname, total: accresult.total,
                            address: accresult.address, state: accresult.state
                        });
                    }
                })
                
            })
        }
        else
        res.redirect('/homepage');
    },
    getNextday: function(req,res){
        var curdate = req.query.curdate;
        var nextDay = new Date(curdate);
        var n  = nextDay.getDate() + 1;
        nextDay.setDate(n);
        var update = {
            dateToday: nextDay
        }
        db.updateMany(Transaction, null, update)
    },
    postCheckout: function(req,res){
        var id = req.body.rand;
        var email = req.cookies.userData.email;
        var state = req.cookies.userData.state;
        var add;
        if(state == "Metro Manila")
        add = 2
        if(state == "North Luzon")
        add = 3
        if(state == "South Luzon")
        add = 3
        if(state == "Visayas")
        add = 4
        if(state == "Mindanao")
        add = 5
        
        db.findOne(Transaction, null, null, function(result){
        var curdate = result.dateToday;
        var dateOrd = new Date(curdate)
        var dateRec = new Date(curdate);
        var n  = dateRec.getDate() + add;
        dateRec.setDate(n);

        db.findOne(Cart, {user: email}, null, function(cartresult){
            var sum = 0;
            for(var i = 0; i < cartresult.item.length; i++){
                sum += cartresult.price[i];
            }
            var trans = {
                email: email,
                id: id,
                amount: sum,
                items: cartresult.item,
                photos: cartresult.photo,
                prices: cartresult.price,
                dateOrd: dateOrd,
                dateRec: dateRec,
                dateToday: dateOrd
            }
            db.insertOne(Transaction, trans)
                cartitem = cartresult.item;
                cartphoto = cartresult.photo;
                cartprice = cartresult.price;
            var update = {
                item: [],
                photo: [],
                price: [],
            }
            db.updateOne(Cart, {user:req.cookies.userData.email}, update)
        })
        })
        

    }

}

module.exports = controller;
