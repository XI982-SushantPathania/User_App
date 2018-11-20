export function editDetails(edata){
   console.log("in action",edata)
    return{
        type: 'edit_Data',
        edata,
        }
}
