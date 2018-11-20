 export function Delete(id,data) {  
     console.log("in-action", id, data);
    return {
        type: 'remove_Data',
        id,
        data
    };
}






