

    export const removeFromReducer=(currentList, removingItem)=>{
             const checkExist=currentList.find(item=>item.id===removingItem);

             if(checkExist){
                 const filteredList=currentList.filter(item=>item.id!==removingItem);
                 return filteredList
             }

             return currentList
    }

    export const updateReducer=(currentList, updatingItem)=>{
           const checkExist=currentList.find(item=>item.id===updatingItem.id);

           if(checkExist){
               return currentList
               .map(item=>item.id===updatingItem.id 
                ? {...item, quantity:item.quantity+1} : item);
           }

           return [...currentList, {...updatingItem, quantity:1}]
    }