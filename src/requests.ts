// import { ObjectId } from "mongodb";

const createRequest = (method:string, data:any):RequestInit =>{return {
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  }}

// Example POST method implementation:
export const postData = async (url = "", data = {}) => {
    // Default options are marked with *
    const response = await fetch(url, createRequest("POST", data));
    return response.json(); // parses JSON response into native JavaScript objects
}

export const updateData = async (url:string, data:any) => {
  const response = await fetch(url, createRequest("PUT", data))
  return response.json()
}

export const deleteData = async (url:string, data:any) => {
  console.log("fetch - deleteData", data._id)
  // const reqBody = {_id: new ObjectId(data._id)}
  const reqBody = {_id: data._id}
  const response = await fetch(url, createRequest("DELETE", reqBody))
  return response.json()
}