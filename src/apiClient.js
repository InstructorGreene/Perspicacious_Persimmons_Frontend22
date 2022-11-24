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
        console.log(error);
        return Promise.reject();
      } else {
        return Promise.resolve();
      }
    });
  }

  addUser(firstName, lastName, email, mobileNumber, password, role, token) {
    return this.authenticatedCall("post", `${url}user`, {
      firstName,
      lastName,
      email,
      mobileNumber,
      password,
      role,
      token,
    });
  }

  getUserById(id) {
    return this.authenticatedCall("get", `${url}user/${id}`);
  }
  getUserByEmail(email) {
    return this.authenticatedCall("get", `${url}user/${email}`);
  }

  async login(email, password) {
    // console.log(email, password);
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

  addBooking(
    businessName,
    mobileNumber,
    stallType,
    comments,
    status,
    date,
    userid
  ) {
    return this.authenticatedCall("post", url, {
      businessName,
      mobileNumber,
      stallType,
      comments,
      status,
      date,
      userid,
    });
  }

  removeBooking(id) {
    return this.authenticatedCall("delete", `${url}${id}`);
  }

  updateBooking(booking, id) {
    return this.authenticatedCall("put", `${url}${id}`, { ...booking });
  }
}
