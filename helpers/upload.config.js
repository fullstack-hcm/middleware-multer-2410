let { upload } = require('../middleware/multer.middleware');

let uploadSingle = upload.single('avatar');
let uploadArray = upload.array('photos', 5);
let uploadFields = upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'gallery', maxCount: 10 },
])

module.exports = {
    uploadSingle,
    uploadArray,
    uploadFields
}