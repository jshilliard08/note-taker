const path = require('path');
const router = require('express').Router();

//Routing
router.get('/notes', (req, res) => {res.sendFile(path.join(__dirname, '../public/notes.html'));
})
//Permanent route
router.get('*', (req, res) => {res.sendFile(path.join(__dirname, '../public/index.html'));
})


module.exports = router;
