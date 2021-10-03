
// Use local Storage as your Database 
const getDb = ()=> localStorage.getItem("shopping_cart")
const setDb = cart =>{
    localStorage.setItem('shopping_cart', JSON.stringify(cart))
}

const addToDb = id => {
    const exits = getDb();
    let shopping_cart = {};
    if(!exits){
        shopping_cart[id] = 1;
    }else{
        shopping_cart = JSON.parse(exits);
        if(shopping_cart[id]){
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount;
        }else{
            shopping_cart[id] = 1;
        }
    }
    setDb(shopping_cart);
}

// Remove Database info 
const removeDb = id =>{
    const exits = getDb();
    if(!exits){

    }else{
        const shopping_cart = JSON.parse(exits);
        delete shopping_cart[id];
        setDb(shopping_cart)
    }
}

const clearTheCart = () =>{
    localStorage.removeItem('shopping_cart');
}

// Get Stored data from Local Storage

const getStoredCart = () =>{
    const exits = getDb();
    return exits ? JSON.parse(exits) : {};
}

export {addToDb, getStoredCart, removeDb, clearTheCart }