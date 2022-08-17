var express = require('express');
const product = require('../dbs/models/product');
var router = express.Router()
const Product = require('../dbs/models/product')

router.get('/list', (req, res) => {
    Product.find().then((data) => {
        console.log(data);
        res.send({
            code: 0,
            data,
            total: data.length
        })
    })
})

router.get('/delete', (req, res) => {
    Product.deleteOne({ id: req.query.id }).then((data) => {
        res.send({
            code: 0,
            data: data
        })
    })
})

router.get('/modify/:id', (req, res) => {
    console.log(req);
    Product.find({ id: req.params.id }).then((data) => {
        res.send({
            code: 0,
            data: data
        })
    })
})

router.post('/update', (req, res) => {
    const data = req.body
    Product.findOneAndUpdate({ id: req.body.id }, { $set: data }).then(data => {
        res.send({
            code: 0,
            data
        })
    })
})

router.post('/add', (req, res) => {
    const data = req.body
    const products = new Product(data)
    products.save()
    res.send({
        code: 0,
        msg: "添加成功"
    })
})


module.exports = router;