import jwt from "jsonwebtoken";

export default function auth(req, res, next){
    const token = req.cookies.token;

    try {
        jwt.verify(token, process.env.JWT_SECRET);
        next();
    }catch(error){
        res.json({success: false, message: "invalid token"});
    }
}