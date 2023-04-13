    const express=require('express');
    const path = require('path');
    const serveFavicon = require('serve-favicon');
    const app=express();

    app.use(serveFavicon(path.join(__dirname,'public','static', 'favicon.ico')));
    const bodyParser = require('body-parser');
    app.use(express.static('public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.get('/',(req,res)=>{
        res.sendFile(__dirname+'/pages/index.html');
    }
    );
    app.get('/contact-us',(req,res)=>{
        res.sendFile(__dirname+'/pages/contact-us.html');
    }
    );
    app.get('/for-partners',(req,res)=>{
        res.sendFile(__dirname+'/pages/for-partners.html');
    }
    );
    app.get('/for-students',(req,res)=>{
        res.sendFile(__dirname+'/pages/for-students.html');
    }
    );
    app.get('/study-in-canada',(req,res)=>{
        res.sendFile(__dirname+'/pages/study-in-canada.html');
    }
    );
    app.get('/study-in-europe',(req,res)=>{
        res.sendFile(__dirname+'/pages/study-in-europe.html');
    }
    );
    app.get('/test-preparation',(req,res)=>{
        res.sendFile(__dirname+'/pages/test-preparation.html');
    }
    );
    app.get('/testimonials',(req,res)=>{
        res.sendFile(__dirname+'/pages/testimonials.html');
    }
    );
    app.get('/thank-you',(req,res)=>{
        res.sendFile(__dirname+'/pages/thank-you.html');
    }
    );
    app.get('/study-in-usa',(req,res)=>{
        res.sendFile(__dirname+'/pages/study-in-usa.html');
    }
    );
    app.get('/study-in-australia',(req,res)=>{
        res.sendFile(__dirname+'/pages/study-in-australia.html');
    }
    );
    app.get('/study-in-ireland',(req,res)=>{
        res.sendFile(__dirname+'/pages/study-in-ireland.html');
    }
    );
    app.get('/study-in-newzealand',(req,res)=>{
        res.sendFile(__dirname+'/pages/study-in-newzealand.html');
    }
    );
    app.get('/study-in-uk',(req,res)=>{
        res.sendFile(__dirname+'/pages/study-in-uk.html');
    }
    );
    app.get('/study-in-asia',(req,res)=>{
        res.sendFile(__dirname+'/pages/study-in-asia.html');
    }
    );
    app.use((req, res, next) => {
        res.status(404).sendFile(__dirname+'/pages/404.html')
    })
    app.listen(process.env.PORT||8000,()=>{
        console.log("Server is running on port 8000");
    }
    );


