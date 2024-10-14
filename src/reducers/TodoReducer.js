// function (initialState,action)

export const todoReducer = (initialState,action) => {

    switch(action.type) {
        case "add":            
            return [...initialState, action.payload];
        case "remove":
             return initialState.filter( item => item.id !== action.payload );
        case "toggle":
             return initialState.map( todo => {
                if (todo.id === action.payload ){
                    todo.done = !todo.done;
                    return {...todo }
                }
                return todo;
             });      
        default: 
            return initialState;
    }
}