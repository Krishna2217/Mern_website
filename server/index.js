const express = require('express')
const app = express()
const router = require('./router/auth-rout')
const connectdb = require('./utils/db')
const port = 5000 || process.env.port

// this is called mouting of router it will go to route localhost:5000/api/auth
//middleware for json
app.use(express.json())
app.use('/api',router)


// app.get('/',(req,res)=>{
//     res.send("Hello world")
// })
// to make cleaning this part we are using router 


//connecting database and server
connectdb().then(
    app.listen(port,()=>{
        console.log(`Server is running on port: localhost:${port}`)
    })
)

