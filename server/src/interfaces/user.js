var express = require('express');
const user = require('../dbs/models/user');
var router = express.Router()
const User = require('../dbs/models/user')
    // 处理注册请求
router.post("/register", async(req, res) => {
    // 将请求体中的信息结构出来
    const { name, password, tel, email, resource } = req.body;
    // 通过数据库查询方式放入user中
    const user = await User.find({ name })
    if (user.length) {
        res.status(200).json({
            code: -1,
            msg: "用户名已被注册"
        })
        return;

    }
    const users = new User(req.body)
    users.save().then(function(user, err) {
        if (err) {
            res.status(200).json({
                code: -1,
                message: "注册失败"
            })
            return;
        }
        res.status(200).json({
            code: 0,
            message: "注册成功"
        })
        return;
    })
})

//处理登录请求
router.post("/login", async(req, res) => {
    const { username, password } = req.body;
    User.findOne({ username, password }, (error, user) => {
        if (error) {
            res.status(200).json({
                code: -1,
                msg: error.message,
            });
            return;
        } else {
            if (!user) {
                res.status(200).json({
                    code: 1,
                    msg: "账号密码错误",
                });
                return;
            } else {
                // 登录成功后将数据保存到session会话中
                req.session.user = user;
                res.status(200).json({
                    code: 0,
                    message: "登录成功",
                });
            }
        }
    })

})
router.get("/userinfo", (req, res) => {
    if (req.session.user) {
        const { username, password, tel, email } = req.session.user;
        res.status(200).json({
            code: 200,
            message: '获取用户信息成功',
            data: {
                id: 1,
                name: username,
                avatar: '/src/assets/logo.jpg'
            },
        })
    } else {
        res.status(200).json({
            code: -1,
            data: {
                username: "",
                password: "",
                tel: "",
                email: "",
                login: false
            }
        })
    }
})
router.get('/list', (req, res) => {
    User.find().then((data) => {
        res.send({
            code: 0,
            data,
            total: data.length
        })
    })
})

router.get('/delete', (req, res) => {
    User.deleteOne({ id: req.query.id }).then((data) => {
        res.send({
            code: 0,
            data: data
        })
    })
})

router.get('/modify/:id', (req, res) => {
    User.find({ id: req.params.id }).then((data) => {
        res.send({
            code: 0,
            data: data
        })
    })
})

router.post('/update', (req, res) => {
    const data = req.body
    User.findOneAndUpdate({ id: req.body.id }, { $set: data }).then(data => {
        res.send({
            code: 0,
            data
        })
    })
})

router.post('/add', (req, res) => {
    const data = req.body
    const users = new User(data)
    users.save()
    res.send({
        code: 0,
        msg: "添加成功"
    })
})


module.exports = router;