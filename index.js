let express = require('express');
let app     = express();
let bodyParser = require('body-parser');
let { route: routeUser } = require('./routers/user');

let { logMiddleware, logMiddleware2 } = require('./middleware/log.middleware');
let { upload } = require('./middleware/multer.middleware');
let { uploadSingle,
    uploadArray,
    uploadFields } = require('./helpers/upload.config');
// use middleware
// app.use();
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(logMiddleware);
app.use('/user', routeUser);

app.get('/', (req, res) => {
    res.json({
        message: __dirname
    })
});

app.post('/upload-single', uploadSingle, (req, res) => {
    let file = req.file;
    console.log({ file });
}); 

app.post('/upload-arr', uploadArray, (req, res) => {
    let files = req.files;
    console.log({ files });
});

app.post('/upload-fields', uploadFields, (req, res) => {
    let { avatar, gallery } = req.files;
    console.log({ avatar, gallery });
});

let PORT = 3000;
app.listen(PORT, () => {
    console.log(`server start at port ${PORT}`);
})