const express = require('express')
var bodyParser= require('body-parser')
const app = express()
const port = 3000


//app.use(middleware1);
app.use(bodyParser.json());


function Sum(counter){
    var sum=0;
    for(var i=0;i<=counter;i++){
        
        sum+= i;
    }
    return sum;
}



function handleFirstReq(req,res){
    

    var value=req.query.counter;
    
    var ans=Sum(value);
   
    var answerObject = {
        sum: ans,
       
    }

    res.send(answerObject);
}



app.get('/handleReq', handleFirstReq)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});







 

