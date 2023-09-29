const express=require('express');
const assign=express();
const bodyparser=require('body-parser');
// const session=require('express-session');
// const {v4:uuidv4}=require('uuid');
// const UserData=require('./public/user');
const userRoute=require('./routes/users');
const router = require('./routes/users');

assign.set('view engine','ejs');

assign.get('/route',(req,res)=>{
    // let userData={
    //     name:'arjun',
    //     email:'singharjun05718@gmail.com',
    //     phone:'9389055826',
    //     skills:["Html","css","Javascript","Reactjs","Nodejs","Corejava","sql","Mangodb","GitHub"]
    // }
    // console.log(req.body.index);
    res.render('user',{userData})
})

assign.use(bodyparser.json());
assign.use(bodyparser.urlencoded({extended:true}));

assign.use('/',express.static(__dirname+'/public'));
assign.use('/profile',express.static(__dirname+"/public/profile.html"));
console.log(express.static(__dirname+'/public'));

// assign.use(session({
//     secret:uuidv4(),
//     resave:'false',
//     saveUninitialized:true
// }))

// assign.use('/route',router)
// assign.use('/userAlldetails',UserData);

assign.use('/user',userRoute);

assign.use('/home',(req,res)=>{
    console.log('request has came')
    res.send('<h2>this my server that is created using the expreee</h2>');
})

assign.listen(3400,()=>{
    console.log('server is running on port no 3400')
})