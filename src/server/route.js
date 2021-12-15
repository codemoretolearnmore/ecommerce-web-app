require("dotenv").config();
const express = require("express");
const crypto = require('crypto');
const Razorpay = require("razorpay");
const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
});
const Transaction= require('./../models/transactionSchema');
const Order=require('./../models/orderSchema');
const Cart=require('./../models/cartSchema');
const router = express.Router();
router.post("/orders", async (req, res) => {
    try {
        const options = {
            amount: req.body.amount, // amount in smallest currency unit
            currency: "INR",
            receipt: req.body.receipt,
        };

        const order = await instance.orders.create(options);
        if (!order) return res.status(500).send("Some error occured");
        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/success", async (req, res) => {
    try {
        // getting the details back from our font-end
        const {
            orderCreationId,
            razorpayPaymentId,
            razorpayOrderId,
            razorpaySignature,
            amount, currency,
            userid,productList
        } = req.body;

        // Creating our own digest
        // The format should be like this:
        // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
        const shasum = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);

        shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

        const digest = shasum.digest("hex");
        // comaparing our digest with the actual signature
        if (digest !== razorpaySignature) return res.status(400).json({ msg: "Transaction not legit!" });

        // THE PAYMENT IS LEGIT & VERIFIED
        // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT
        const captureResponse = await instance.payments.capture(
            razorpayPaymentId,
            amount,
            currency
          )
          const newlist=productList.map((product)=>{
              var newproduct=JSON.parse(JSON.stringify(product));
              newproduct.date=Date.now();
              return newproduct;
          })
          Order.findOne({userid})
          .exec((err,result)=>{
              if(err) console.log(err);
              else {
                  console.log('result',result);
                  if(result===null){
                      const order=new Order({userid,products:newlist});
                      order.save((err,doc)=>{
                          if(err) console.log(err);
                          else {
                              console.log(doc);
                          }
                      })
                  }else{
                      Order.update({userid},{$push:{products:{$each:newlist}}},function(err,ans){
                          if(err) console.log(err);
                          else console.log('ans',ans);
                      })
                  }
              }
          });
          const products_id=productList.map((product)=> product._id);
          productList.map((product)=>{
            Cart.update({userid:userid},{$pull:{products:{product_id:product._id}}},function(err,ok){
                console.log('executing');
                if(err) console.log(err);
                else console.log('ok',ok);
            })
          })
          
          var price=parseInt(amount)/100;
          var method=captureResponse.method;
          var txn_id;
          if(method==="netbanking")
          txn_id=captureResponse.acquirer_data["bank_transaction_id"];
          else if(method==="upi")
          txn_id=captureResponse.acquirer_data["upi_transaction_id"];
          var txn_status=captureResponse.captured;
          var transaction=new Transaction({userid,txn_id,amount:price,txn_status,txn_method:method});
          transaction.save((err,result)=>{
              if(err) console.log(err);
              else{
                  console.log(result);
                  res.send({
                    msg: "success",
                    orderId: razorpayOrderId,
                    paymentId: razorpayPaymentId,
                    captureResponse
                });
              }
          })
          
        
    } catch (error) {
        console.log("message",error.message)
        res.status(500).send(error);
    }
});

module.exports = router;