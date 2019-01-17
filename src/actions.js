export const increaseAsync = (val) => {
    return {type:'INCREASE',val}
}
export const LoadingAsync =()=>{
    return {type: 'LOADING'}
}
export const increase = val => {
    return dispatch=>{
        dispatch(LoadingAsync())
        setTimeout(()=>{
            dispatch(increaseAsync(val))
        },2000)
    }
}
export const decrease = () => {
    return {type:'DECREASE'}
}