import axios from 'axios';
import { serviceURL } from '../api';

export const loadService = () => async (dispatch) => {
  const serviceData = await axios.get(serviceURL);
  dispatch({
    type: "FETCH_SERVICE",
    payload: {
      service: serviceData.contents,
    }
  })
}