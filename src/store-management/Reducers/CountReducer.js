export const countReducer =(count =0,action)=>{

switch (action.type){
    case 'ADD_COUNT':
    return count+action.payload;
    case 'CUSTOM_COUNT':
        return action.payload;
    default:
        return count;
}
}