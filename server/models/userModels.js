const {findOne, insertMany}=require("./mongodbConnect")

const insertUser=async function(object){
    let result=await insertMany("user",object)
    return result
}

const findUser=async function(userEmail){
    let result=await findOne("user",userEmail)
    return result
}


module.exports={
    findUser,
    insertUser
}