const router=require("express").Router();

const {
    signIn
}=require("../controllers/userController")


router.route("/user/signin")
    .post(signIn);


module.exports=router;