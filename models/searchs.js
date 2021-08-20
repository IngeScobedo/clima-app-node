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

  async city(place_search = "") {
    try {
      //http request

      const instance = axios.create({
          baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place_search}.json`,
          params: this.paramsMapbox
      })
      const res = await instance.get();
      //return places

      //return - id - place_name - center[]

      return res.data.features.map( place => ({
        id: place.id,
        place_name: place.place_name,
        lng: place.center[0],
        lat: place.center[1]
      }) )

    } catch (error) {
        return [];
    }
  }
}

module.exports = Search;
