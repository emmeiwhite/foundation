// Our action creator. Once the user clicks on the active list we'll reach here
// we reached here after onClick=this.props.sb(book) was called: in  booklist.js on li
function listClickActionCreator(book){
        // Returning the action that reches the ActiveBookReducer
        console.log("ACTION CREATOR INVOKED")
        return {
            type:'BOOK_CLICKED',
            payload:book
        } 
}
export default listClickActionCreator;