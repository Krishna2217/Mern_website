const express = require('express')

const router = express.Router()
const {home,register} = require('../controllers/auth-con')

// router.get('/auth1',(req,res) =>{
//     res.send("Hello from router")
// })
//we will make this by using router.route so we can chain it 

// router.route('/auth2').get((req,res)=>{
//     res.send("Hello from chain router")
// })
// .post().put...chaining

//now you see it is same way disorganized as index.js would be we will use controller
router.route('/home').get(home)
router.route('/register').post(register)
module.exports = router