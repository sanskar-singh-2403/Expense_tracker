export default (state,action)=>{
    if(action.type==='DELETE_TRANSACTION'){
        return({
            ...state,
            transactions:state.transactions.filter((transaction)=>transaction.id!==action.payload)
        })
    }
    else if(action.type==='ADD_TRANSACTION'){
        return({
            ...state,
            transactions:[action.payload,...state.transactions]
        })
    }
    else{
        return state;
    }
}