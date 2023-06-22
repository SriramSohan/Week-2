

function logBody(jsonBody) {
    console.log(jsonBody);
}

function callbackFn(result){
    result.json().then(logBody);
}

var sendObj= {
    method : "GET"
};

fetch("http://localhost:3000/handleReq?counter=5", sendObj).then(callbackFn)