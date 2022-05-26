import axios from "axios"

import Cookies from 'js-cookie'

// interface
import { StationItem } from '../../types';
import { AuthFormData } from '../../types';
import { StationFormData } from '../../types';



// login and signup

export const userAuth = (url:string, data: AuthFormData, successCb:()=>void, errorCb:(message:string)=> void ) => {
    return axios.post(`${process.env.REACT_APP_MAIN_API_URL}/${url}`, data)
        .then(response => {
          if (response.status === 200) {
              Cookies.set("token", response.data?.token)
              successCb();
            }
        })
        .catch(err => {
          errorCb(err.response.data?.message)
        })
}

// create station

export const addStation = (url:string, data:StationFormData, cb:()=>void) => {
  const token = Cookies.get('token');
  
    return axios.post(`${process.env.REACT_APP_MAIN_API_URL}/${url}`, data, {
      headers: {
        "Authorization": `Bearer ${token}`
      },
    })
    .then((response) => {
      if (response.status === 200 && response.data?._id) {
        cb();
      }
    })
    .catch((err) => {
      // alert(err.response.data.message);
      console.log(err);
      
    });
}

// fetch all station

export const fetchAllStation = (url:string, cb: (value: StationItem[]) => void) => {
  const token = Cookies.get('token');
    return axios.get(`${process.env.REACT_APP_MAIN_API_URL}/${url}`,{
      headers: {
        "Authorization": `Bearer ${token}`
      },
    })
    .then((response) => {
      if (response.status === 200) {
        cb(response.data);
      }
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
}

// update station

export const updateStation = (url:string, data:{ name:string; frequency:number|string }, cb:(value: StationItem)=> void) => {
  const token = Cookies.get('token');
  return axios.put(`${process.env.REACT_APP_MAIN_API_URL}/${url}`, data, {
    headers: {
      "Authorization": `Bearer ${token}`
    },
  })
  .then((response) => {
    if (response.status === 200) {
          cb(response.data);
    }
  })
  .catch((err) => {
    alert(err.response.data.message);
  });
}


// delete station

export const deleteStation = (url:string, cb:(value: StationItem)=> void) => {
  return axios.delete(`${process.env.REACT_APP_MAIN_API_URL}/${url}`,{ withCredentials: true })
  .then((response) => {
    if (response.status === 200) {
          cb(response.data);
    }
  })
  .catch((err) => {
    alert(err.response.data.message);
  });
}
