import { setData } from "./store/DataSlice";
import usersData from "./data.json";

export const fetchData = () => {
    return (dispatch) => {
      try {
        dispatch(setData(usersData));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  };