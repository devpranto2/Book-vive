const getStoredBook=()=>{

    const storedBookSTR=localStorage.getItem('readlist')
    if(storedBookSTR){
        const storeBookData=JSON.parse(storedBookSTR)
        return storeBookData;
    }else{
        return [];
    }
}

const addToStoreDB=(id)=>{

    const storedBookData=getStoredBook();

    if(storedBookData.includes(id)){
        alert("This book is already exist")
    }else{
        storedBookData.push(id);
        const data=JSON.stringify(storedBookData);
        localStorage.setItem('readlist',data);
        console.log(data)
    }

}

export {addToStoreDB,getStoredBook};