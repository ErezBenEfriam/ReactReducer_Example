export const addCount = (amount)=>{
    return {type: 'ADD_COUNT',payload: amount}
}
export const customCount = (amount)=>{
    return {type: 'CUSTOM_COUNT',payload: amount}
}