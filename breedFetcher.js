const request = require("request");
const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      const data = JSON.parse(body);

      try {
        callback(null, `${data[0]["description"]}`);
      } catch (e) {
        if (e instanceof TypeError) {
          callback("Given name/id not found!", null);
        }
      }
    }
  );
};
module.exports = { fetchBreedDescription };
