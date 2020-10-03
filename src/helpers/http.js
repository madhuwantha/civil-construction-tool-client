export const get = (url) => {
  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "http://localhost:3000");

  return new Promise((resolve, reject) => {
    fetch(url, {
      mode: "cors",
      method: "GET",
      headers: headers,
    })
      .then((res) => {
        console.log(res)
        resolve(res.json())})
      .catch((error) => {
        console.log("Authorization failed : " + error);
        reject();
      });
  });
};

export const post = (url, body) => {
  let headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "http://localhost:3000");
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    })
      .then((res) => {
        if (res.status === 200){
          resolve({stated: 200, response: res.json()})
        }else {
          reject({states: res.status, message: res.json()});
        }
      })
      .catch((error) => {
        console.log("Authorization failed : " + error);
        reject(error);
      });
  });
};

export const put = (url, body) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "PUT",
      body: body,
    })
      .then((res) => resolve(res))
      .then((res) => reject(res));
  });
};

export const deleteMethod = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => resolve(res))
      .then((res) => reject(res));
  });
};

// headers.append(
//   "Authorization",
//   "Basic " + base64.encode(username + ":" + password)
// );
