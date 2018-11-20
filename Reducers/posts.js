
const initialState = [
  {
    "id": "1",
    "name": "sushant",
    "phone": "4562155",
    "Address": "jkjkayudg",
    "Empcode":452
  },
  {
    "id": "2",
    "name": "yuvraj",
    "phone": "5895",
    "Address": "ksidhsoa",
    "Empcode":639
  },
  {
    "id": "3",
    "name": "karan",
    "phone": "23145",
    "Address": "bvncjdi",
    "Empcode":256
  },
  {
    "id": "4",
    "name": "Akash",
    "phone": "79802",
    "Address": "klnioz",
    "Empcode":798

  },
  {

    "id": "5",
    "name": "Joban",
    "phone": "5526",
    "Address": "kldhjj",
    "Empcode":857
  },
  {
    "id": "6",
    "name": "Shikha",
    "phone": "89565",
    "Address": "makkajsi",
    "Empcode":693
  }
];
export const loginReducer = (state = initialState, action)=>{
  

  switch (action.type) {
    case 'Enter_Details':
    let newState = [ ...state ];
      let obj = {
        "id":action.index,
        "name": action.dataform.Name,
        "phone": action.dataform.Phone,
        "Address": action.dataform.Address,
        "Empcode":action.dataform.Empcode
      };
      newState.push(obj);
      return newState;
      
      case 'remove_Data':
     let valueState=[...action.data];
     return valueState.filter((record)=>{
       return record.id !== action.id
     })
    case 'edit_Data':
    return action.edata;
      default:
      return state;
  }

};

