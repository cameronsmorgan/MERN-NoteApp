import ratelimit from "../config/upstash.js";


const rateLimiter = async (req, res, next) => {
    try{
        const {success} = await ratelimit.limit("my-rate-limit")
        

        if(!success){
            return res.status(429).json({message:"TOO MANY REQUESTS. TRY AGAIN LATER"})
        }

        next();

    } catch(error){
        console.error("RATE LIMIT ERROR", error);
        next(error);
    }
}

export default rateLimiter;