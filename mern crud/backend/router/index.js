const Users = require('../module/index')
const router = require('express').Router()

router.get('/', async (req, res) => {
    let users = await Users.find()
    res.send(users)
})

router.post('/', async (req, res) => {
    let users = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    users = await users.save()
    res.status(201).send(users)
})

router.put('/:id', async (req, res) => {
    const users = await Users.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }, { new: true })
    res.status(201).send(users)
})
router.delete('/:id', async (req, res) => {
    const users = await Users.findByIdAndDelete(req.params.id)
    res.status(201).send(users)
})
module.exports = router