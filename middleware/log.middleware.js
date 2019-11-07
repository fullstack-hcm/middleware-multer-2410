const logMiddleware = (req, res, next) => {
    // console.log(Date.now());
    console.log(`aaa`);
    next()
    // let { username } = req.query;
    // if (username === 'aaa') {
    //     req.user = {
    //         username: 'abc'
    //     }
    //     next();
    // } else {
    //     res.json({ error: 'ko_du_quyen' }) 
    // }

}

const logMiddleware2 = (req, res, next) => {
    // console.log(Date.now());
    console.log(`bbb`);
    next()
    // let { username } = req.query;
    // if (username === 'aaa') {
    //     req.user = {
    //         username: 'abc'
    //     }
    //     next();
    // } else {
    //     res.json({ error: 'ko_du_quyen' }) 
    // }

}

exports.logMiddleware = logMiddleware;
exports.logMiddleware2 = logMiddleware2;