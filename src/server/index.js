const express=require('express');
var app=express();
var router=express.Router();
var bodyParser=require('body-parser');
var cors=require('cors');
const ejs = require("ejs");
require("dotenv").config();
const userController=require('./../controllers/userController');
const productController=require('./../controllers/productController');
const cartController=require('./../controllers/cartControllers');
const orderController=require('./../controllers/orderController');
const {initPayment, responsePayment} = require("./paytm/services/index");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
const port=8080;
app.use(cors());
app.post('/register/',userController.create);
app.post('/login/',userController.login);
app.post('/getUser/',userController.getUser);
app.post('/products/',productController.add);
app.get('/fetchProduct/',productController.fetch);
app.post('/product/actions/',productController.action);
app.post('/getProduct/',productController.view);
app.post('/cart/',cartController.add);
app.get('/cart/',cartController.view);
app.post('/cart/actions',cartController.action);
app.post('/orders/',orderController.view);
app.use("/payment", require("./route"));
app.post("/user/edits/",userController.edit);

app.listen(port,()=>{
    console.log(`The server has started listening on port number:${port}`);
})
