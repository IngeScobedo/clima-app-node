const axios = require("axios");

class Search {
  history = ["Guadalajara", "Aguascalientes", "San Francisco de los Romo"];

  constructor() {
    // Read DB if exists
  }

  get paramsMapbox() { 
      return {
        'access_token' : process.env.MAPBOX_KEY,
        'limit' : 5,
        'language' : 'es'
      }
    }

  async city(place = "") {
    try {
      //http request

      const instance = axios.create({
          baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
          params: this.paramsMapbox
      })
      const res = await instance.get();
      console.log(res.data);
      //return places
      return [];
    } catch (error) {
        return [];
    }
  }
}

module.exports = Search;
