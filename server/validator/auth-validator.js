const z = require('zod')

//Creating an object schema

const signupSchema = z.object({
    username: z.string({required_error: "Name is required."})
    .trim()
    .min(3,{message :"Name must be of atleast of 3 chars."})
    .max(255,{message: "Name must not be more than 255 characters."}),
    
    email:z
    .string({required_error:"Email is required."})
    .trim()
    .email({message:"Invalid email address."})
    .min(3,{message : "Email must be at least of 3 characters."})
    .max(255,{message: "Email must not be more than 255 characters."}),
   
    phone:z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10,{message : "Phone must be at least of 10 digit."})
    .max(10,{message: "Phone must not be more than 10 digit."}),

    password:z
    .string({required_error:"Password is required"})
    .trim()
    .min(7,{message : "Password must be at least of 7 characters."})
    .max(25,{message: "Password must not be more than 255 characters."}),
})

module.exports = signupSchema;