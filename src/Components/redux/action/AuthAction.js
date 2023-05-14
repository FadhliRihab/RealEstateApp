import axios from 'axios';
import {
  GET_CURRENT,
  LOGIN,
  LOGOUT,
  REGISTER,
  UPDATE_PROFILE,
  DELETE_PROFILE
} from '../actionTypes/AuthTypes';
import { alert_error } from './ErrorAction';

// Register user
export const register = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post('/', data);
    dispatch({ type: REGISTER, payload: res.data });
    navigate('/properties');
  } catch (error) {
    error.response.data.errors.forEach((element) => {
      dispatch(alert_error(element.msg));
    });
  }
};

// Login user
export const login = (data, navigate) => async (dispatch) => {
  try {
    const res = await axios.post('/login', data);
    dispatch({ type: LOGIN, payload: res.data });
    navigate('/properties');
  } catch (error) {
    error.response.data.errors.forEach((element) => {
      dispatch(alert_error(element.msg));
    });
  }
};

// Get current user profile
export const get_current=()=>async(dispatch)=>{
    const config={
        headers:{token:localStorage.getItem('token')}
    }
    try {
        const res=await axios.get('/current',config)
        dispatch({type:GET_CURRENT,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}

// Update user profile
export const update_profile = (data) => async (dispatch) => {
  const config = {
    headers: { token: localStorage.getItem('token') },
  };
  try {
    const res = await axios.put('/update', data, config);
    dispatch({ type: UPDATE_PROFILE, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

// Delete user profile
export const delete_profile = () => async (dispatch) => {
  const config = {
    headers: { token: localStorage.getItem('token') },
  };
  try {
    await axios.delete('/delete', config);
    dispatch({ type: DELETE_PROFILE });
  } catch (error) {
    console.log(error);
  }
};

// Logout user
export const logout = () => {
  return { type: LOGOUT };
};
