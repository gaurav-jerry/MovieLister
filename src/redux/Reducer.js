import { types } from "./Action";
export const initialState = {
  movieData: {
    title: '',
    pageNum: 0,
    pageSize: 0,
    content: []
  }
}
 const  reducer =  (state = initialState , action) => {
    switch (action.type) {
      case types.GET_DATA:
        return {
            movieData: action.payload
        };
      default:
        return state;
    }
  };

  export default reducer;