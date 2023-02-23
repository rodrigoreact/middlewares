const {Router} = require('express');
const router = Router();

router.get('/users', (req, res) => {
    //console.log('Esto es un GET a users desde mi servidor');
    res.send('Esto es un GET a users desde mi servidor');
})

router.post('/users', (req, res) => {
    console.log(req.body);
    res.json(req.body);
})


module.exports = router;