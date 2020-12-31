// import path, router and everything in apiRoutes folder
// const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./apiRoutes');


// routes for API
router.use('/api', apiRoutes);

// if not API routes are found, send the index.html from React App
// router.use((req, res) => {
//     res.sendFile(path.join(__dirname, '../client/public/index.html'))
// });

// export router from index.js
module.exports = router;