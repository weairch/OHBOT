const router=require("express").Router();

const {
    stores
}=require("../controllers/storeController")

router.route("/store/stores")
    .get(stores)

module.exports=router;