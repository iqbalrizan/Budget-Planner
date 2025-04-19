import { createContext, useReducer } from "react";
import { useEffect } from "react";

const AppReducer = (state, action) => {
    switch (action.type) {
        case "ADD_EXPENSE" :
        return {
            ...state,
            expenses : [...state.expenses, action.payload]

        };
        case "DELETE_EXPENSE" :
            return {
                ...state,
                expenses : state.expenses.filter((expense) => 
                    expense.id !== action.payload
                )
            };
            
        default:
            return state;
    }
}

const initialState = {
    budget : 3000000,
    expenses : [ 
        { id: 12, name : "first expense", cost : 0},
        
    ]
}



export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(
      AppReducer,
      initialState,
      (initial) => {
        const saved = localStorage.getItem("budgetApp");
        return saved ? JSON.parse(saved) : initial;
      }
    );
  
    useEffect(() => {
      localStorage.setItem("budgetApp", JSON.stringify(state));
    }, [state]);
  
    return (
      <AppContext.Provider
        value={{
          budget: state.budget,
          expenses: state.expenses,
          dispatch,
        }}
      >
        {props.children}
      </AppContext.Provider>
    );
  };
  