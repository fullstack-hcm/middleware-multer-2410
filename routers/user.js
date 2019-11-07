let express = require('express');
let route   = express.Router();

route.get('/demo', (req, res) => {
    res.json({ message: 'user_router_demo' });
});

route.get('/demo1', (req, res) => {
    res.json({ message: 'user_router_demo' });
});

route.get('/demo2', (req, res) => {
    res.json({ message: 'user_router_demo' });
});

exports.route = route;