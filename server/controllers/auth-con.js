//-------------------**
//*logic for home route*
//--------------------**
const home = async (req,res)=>{
    try{
        res.send("Hello home from controllers")
    }catch(err){
        console.log(err)
    }
}
//-------------------**
//*logic for register route*
//--------------------**
const register = async (req,res) =>{
    try{
        console.log(req.body)
        res.status(200).json(req.body)        
    }catch(err){
        console.log(err)
    }
}
module.exports ={home,register}