import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState={
  transactions:[]
};

// create context
export const GlobalContext=createContext(initialState);

//provider component
export const GlobalProvider=({children})=>{
  const [state,dispatch]=useReducer(AppReducer,initialState);

  //Actions
  function deleteTransaction(id){
    dispatch({
      type:'DELETE_TRANSACTION',
      payload:id
    });
  }

  function addTransaction(transaction){
    dispatch({
      type:'ADD_TRANSACTION',
      payload:transaction
    });
  }
  //returning provideer with values of state and actions
  return (
    <GlobalContext.Provider
      value={{transactions:state.transactions,
      deleteTransaction,
      addTransaction}}>
      {children}
    </GlobalContext.Provider>
  );

}