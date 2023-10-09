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

// const path = "http://localhost:5000/bookings"
const path = "/bookings"

// Example POST method implementation:
export const postData = async (data:any) => {
    // Default options are marked with *
    const response = await fetch(path, createRequest("POST", data));
    return response.json(); // parses JSON response into native JavaScript objects
}

export const updateData = async ( data:any) => {
  const response = await fetch(path, createRequest("PUT", data))
  return response.json()
}

export const deleteData = async (data:any) => {
  const reqBody = {_id: data._id}
  const response = await fetch(path, createRequest("DELETE", reqBody))
  return response.json()
}