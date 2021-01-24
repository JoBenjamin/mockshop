export const productsReducer = (state = {}, action) => {
    if(action.type === 'POPULATE_PRODUCTS') {
        const productCategories = {};
        
        action.payload.forEach((item)=>{
            if(item.category in productCategories) {
                productCategories[item.category].push(item);
            } else {
                productCategories[item.category] = [item];
            }
        });


        return {
            ...productCategories
        }
    }
    return state
}