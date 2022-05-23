import axios from "axios"

// login and signup

export const userAuth = (url, data, cb) => {
    return axios.post(`${process.env.REACT_APP_MAIN_API_URL}/${url}`, data, {
            withCredentials: true
        })
        .then(response => {
            if (response.status === 200) {
                cb();
            }
        })
        .catch(err => {
            alert(err.response.data.message)
        })
}

// create station

export const addStation = (url, data, cb) => {
    return axios.post(`${process.env.REACT_APP_MAIN_API_URL}/${url}`, data, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (response.status === 200 && response.data?._id) {
        cb();
      }
    })
    .catch((err) => {
      alert(err.response.data.message);
    });

}

// fetch all station

export const fetchAllStation = (url, cb) => {
    return axios.get(`${process.env.REACT_APP_MAIN_API_URL}/${url}`)
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

export const updateStation = (url, data, cb) => {
  return axios.put(`${process.env.REACT_APP_MAIN_API_URL}/${url}`, data, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
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

export const deleteStation = (url, cb) => {
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
