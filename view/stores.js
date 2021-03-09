const storeAll=async function(){
    
    let url="/api/1.0/store/getStores";
    let getStoreAll=await fetch(url);
    let stores=await getStoreAll.json();

    let storeName=document.getElementById("storeName");
    let storeAddress=document.getElementById("storeAddress");
    let storePhone=document.getElementById("storePhone");
    let storeOwner=document.getElementById("storeOwner");

    storeName.innerHTML="";
    storeAddress.innerHTML="";
    storePhone.innerHTML="";
    storeOwner.innerHTML="";


    //storeName
    for(let i=0;stores.length>i;i++){
        let div=document.createElement("div");
        div.innerHTML=stores[i].店家名稱;
        storeName.appendChild(div);
        if (stores.length == i+1){
            let br=document.createElement("br");
            storeName.appendChild(br);
        }
    }

    //storeAddress
    for(let i=0;stores.length>i;i++){
        let div=document.createElement("div");
        div.innerHTML=stores[i].店家住址;
        storeAddress.appendChild(div);
        if (stores.length == i+1){
            let br=document.createElement("br");
            storeAddress.appendChild(br);
        }
    }
    
    //storePhone
    for(let i=0;stores.length>i;i++){
        let div=document.createElement("div");
        div.innerHTML=stores[i].店家電話;
        storePhone.appendChild(div);
        if (stores.length == i+1){
            let br=document.createElement("br");
            storePhone.appendChild(br);
        }
    }

    //storeOwner
    for(let i=0;stores.length>i;i++){
        let div=document.createElement("div");
        div.innerHTML=stores[i].店家負責人;
        storeOwner.appendChild(div);
        if (stores.length == i+1){
            let br=document.createElement("br");
            storeOwner.appendChild(br);
        }
    }
};


const insert=async function (){
    let nameValue=document.getElementById("insertStoreNameValue").value;
    let addressValue=document.getElementById("insertStoreAddressValue").value;
    let phoneValue=document.getElementById("insertStorePhoneValue").value;
    let ownerValue=document.getElementById("insertStoreOwnerValue").value;


    if (!nameValue || !addressValue || !phoneValue || !ownerValue){
        alert("Please enter the correct content");
    }

    let data={nameValue,addressValue,phoneValue,ownerValue};
    let insertConfig={
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type": "application/json"
        }
    };

    let insertStore=await fetch("/api/1.0/store/addStore",insertConfig);
    let result=await insertStore.json();
    if (result.message === "Success"){
        storeAll();
    }

};

const update=async function (){
    let selectOption=document.getElementById("select").value;
    let dataOld=document.getElementById("dataOld").value;
    let dataNew=document.getElementById("dataNew").value;

    if (!dataOld || !selectOption || !dataNew){
        alert("Please enter the correct content");
        return;
    }

    let data={dataOld,dataNew,selectOption};

    let updateConfig={
        method:"PATCH",
        body:JSON.stringify(data),
        headers:{
            "Content-Type": "application/json"
        }
    };
    let updateStore=await fetch("/api/1.0/store/updateStore",updateConfig);
    let result=await updateStore.json();
    let message=result.message;
    if (message){
        alert(message);
    }

    storeAll();
};

const remove=async function (){
    let deleteStoreName=document.getElementById("deleteStoreName").value;
    let data={deleteStoreName};

    let deleteConfig={
        method:"DELETE",
        body:JSON.stringify(data),
        headers:{
            "Content-Type": "application/json"
        }
    };

    let deleteStore=await fetch("/api/1.0/store/deleteStore",deleteConfig);
    let result=await deleteStore.json();
    let message=result.message;
    if (message){
        alert(message);
    }
    storeAll();
};


storeAll();
