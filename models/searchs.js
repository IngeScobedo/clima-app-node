const axios = require("axios");

class Search {
  history = ["Guadalajara", "Aguascalientes", "San Francisco de los Romo"];

  constructor() {
    // Read DB if exists
  }
  async city(place = "") {
    try {
      //http request
      const res = await axios.get("https://reqres.in/api/users?page=2");
      console.log(res.data);
      //return places
      return [];
    } catch (error) {}
  }
}

module.exports = Search;
