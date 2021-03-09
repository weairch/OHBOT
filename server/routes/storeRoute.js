const router=require("express").Router();

const {
    stores,
    addStore,
    patchStore,
    deleteStore
}=require("../controllers/storeController")

router.route("/store/getStores")
    .get(stores)

router.route("/store/addStore")
    .post(addStore)

router.route("/store/updateStore")
    .patch(patchStore)

router.route("/store/deleteStore")
    .delete(deleteStore)

module.exports=router;