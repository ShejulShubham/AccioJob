import express, { request } from "express";
import userModel from "../models/uesrModel.js";

const router = express.Router();

router.get("/", async (request, response)=>{
    try {
        const users = await userModel.find().sort({createdAt: -1});
        response.status(200).json(users);
    }catch(error){
        console.log("could not complete request", error);
        response.status(500).json({message: "Server Error"});
    }
});

router.get("/:id", async (request, response)=>{
    try{
        const { id } = request.params;

        const user = await userModel.findById(id);

        if(!user){
            return response.status(400).json({ message: "user does not exist!"});
        }

        response.status(200).json(user);
    }catch(error){
        console.log("SERVER ERROR: ", error);
        response.status(500).json({message: "Server Error"});
    }
});

router.post("/", async (request, response) => {
  try {
    let { name, email, age, role, bio, imageURL } = request.body;

    if (
      !name.trim() ||
      !email.trim() ||
      (!typeof name == "string" && !typeof email == "string")
    ) {
      return response
        .status(400)
        .json({ message: "name and email is not correct!" });
    }

    if (!role.trim()) {
      role = "student";
    }

    const user = await userModel.create({
      name: name.trim(),
      email: email.trim(),
      age: Number(age),
      role: role.trim(),
      bio: bio.trim(),
      imageURL: imageURL.trim(),
    });

    response.status(201).json({
        message: "new user created",
        user: user
    })
  } catch (error) {
    console.log("could not create new user", error);
    response.status(500).json({ message: "Server Error" });
  }
});

router.patch("/:id", async (request, response)=>{
    try {
        const {id} = request.params;

        const user = await userModel.findById(id);

        if(!user){
            response.status(400).json({message: "user does not exist!"});
        }

        let { name, email, age, role, bio, imageURL} = request.body;

        if(!name.trim() || !email.trim() || (!typeof(name) == "string" && !typeof(email) == "string")){
            response.status(400).json({message: "name or email is not correct"});
        }

        if(typeof(name) == "string"){
            user.name = name;
        }

        if(typeof(email) == "string"){
            user.email = email;
        }

        if(typeof(age) == "number"){
            user.age = age;
        }

        if(typeof(role) == "string"){
            user.role = role;
        }

        if(typeof(bio) == "string"){
            user.bio = bio;
        }

        if(typeof(imageURL) == "string"){
            user.imageURL = imageURL;
        }

        const updatedUser = await user.save();

        response.status(200).json({
            message: "user details updated",
            user: updatedUser
        });

    }catch(error){
        console.log("SERVER ERROR ", error);
        response.status(500).json({message: "Server Error"});
    }
});

router.delete("/:id", async (request, response)=>{
    try {
        const { id } = request.params;

        const user = await userModel.findByIdAndDelete(id);

        if(!user){
            response.status(400).json({message: "user does not exist!"});
        }

        response.status(200).json({
            message: "user deleted successfully",
            user: user
        })

    }catch(error){
        console.log("SERVER ERROR ", error);
        response.status(500).json({message: "Server Error"});
    }
})


export default router;