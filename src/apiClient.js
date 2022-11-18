import axios from "axios";
const url = "http://localhost:3001/";
// const url = "https://carnival-backend.onrender.com";

export class ApiClient {
  constructor(tokenProvider, logoutHandler) {
    this.tokenProvider = tokenProvider;
    this.logoutHandler = logoutHandler;
  }

  authenticatedCall(method, url, data) {
    return axios({
      method,
      url,
      headers: {
        authorization: this.tokenProvider(),
      },
      data,
    }).catch((error) => {
      if (error.response.status === 403) {
        return Promise.reject();
      } else {
        throw error;
      }
    });
  }

  addUser(firstName, lastName, userEmail, password, role) {
    return this.authenticatedCall("post", `${url}/user`, {
      firstName,
      lastName,
      userEmail,
      password,
      role,
    });
  }

  getUserById(id) {
    return this.authenticatedCall("get", `${url}/user/${id}`);
  }

  async login(email, password) {
    console.log(email, password);
    return axios({
      method: "post",
      url: `${url}auth`,
      data: {
        email,
        password,
      },
    }).catch((error) => {
      throw error;
    });
  }

  getBooking() {
    return this.authenticatedCall("get", url);
  }

  addBooking(businessName, mobileNumber, stallType, comments, status, date) {
    return this.authenticatedCall("post", url, {
      businessName,
      mobileNumber,
      stallType,
      comments,
      status,
      date,
    });
  }

  removeBooking(id) {
    return this.authenticatedCall("delete", `${url}${id}`);
  }

  updateBooking(booking, id) {
    return this.authenticatedCall("put", `${url}${id}`, { ...booking });
  }
}
