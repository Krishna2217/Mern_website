//await schema.parseAsync(req.body)


const validate =(schema) => async (req,res,next)=>{
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body=parseBody;
        next();
    } catch (err) {
        console.log(err);
        const errmsg = err.issues[0].message;
        res.status(400).json({msg:errmsg}); 
    }
}

module.exports = validate