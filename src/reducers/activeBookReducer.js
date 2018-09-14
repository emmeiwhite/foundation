function activeBookReducer(state=null,action){
        switch(action.type){
            case "BOOK_CLICKED":
                return {
                    activeBook:action.payload
                }
            default:
                return state;    
        }
        


}

export default activeBookReducer;