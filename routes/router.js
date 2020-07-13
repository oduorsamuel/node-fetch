var express = require('express');
var router = express.Router();
const fetch   = require('node-fetch');
const request = require('request-promise');


router.get('/', function (req, res) {
    var url = '';
     
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.data)
        for(const obj of data.data){
            console.log(obj)
        }
        res.send({ data });
    })
    .catch(err => {
        res.send(err);
    });
});

router.post('/', function(req, res){
    console.log(req.body);
    const options = {
        method: 'POST',
        uri: '',
        body: req.body,
        json: true,
        headers: {
            'Content-Type': 'application/json',
        }
    }
    
    request(options).then(function (response){
        res.status(200).json(response);
    })
    .catch(function (err) {
        console.log(err);
    })
    
})

module.exports = router;