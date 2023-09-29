var express = require('express');
var router = express.Router();

router.post('/login', (req, res) => {
    // console.log(req.body);
    const data = require('../data');
    // data.forEach((ele)=>{
    //     // req.session.username=req.body.password;
    //     if(ele.username===req.body.username & ele.password===req.body.password){
    //         const userData=require('../userdata');
    //         userData.forEach((item,index)=>{
    //             if(item.name===req.body.username){
    //                 //  res.redirect('/route');
    //                 res.render('user',{title:"Users Details",item:item});
    //                 // res.send("hello,how are you!")
    //             }
    //         })
    //     }  
    // })
    let newarr = data.filter((ele) => {
        if (ele.username === req.body.username & ele.password === req.body.password) {
            return ele;
        }
    })
    if (newarr.length === 1) {
        const userData = require('../userdata');
        userData.forEach((item, index) => {
            if (item.name === req.body.username) {
                //  res.redirect('/route');
                res.render('user', { title: "Users Details", item: item });
                // res.send("hello,how are you!")
            }
        })
    }
    else{
        res.render('errorPage',{title:'Error'});
    }
})


module.exports = router;