var express = require('express')
var router = express.Router()
const Suggest = require('../dbs/models/suggest')
    //添加建议请求
router.post("/add", async(req, res) => {
    // 将请求体中的信息结构出来
    const { name, tel, sugg, type } = req.body;
    console.log(name, tel, sugg, "xxxxxxxx")
    console.log(Suggest)
    const suggests = new Suggest({ name, tel, sugg, type })
    suggests.save()

})

//查看建议
router.get("/find", async(req, res) => {
    console.log("查看建议");
    // res.send("mmmmmm");
    Suggest.find().then((data) => {
        console.log(data)
        res.send({
            code: 0,
            data,
            total: data.length
        })
    })
})



module.exports = router;