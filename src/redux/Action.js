export const types = {
    GET_DATA : 'GET_DATA',
}
export const getMovies = (data) => {
    
    return (dispatch) => {
      dispatch({
                type: types.GET_DATA,
                payload: data
            });
    }
       
  };
