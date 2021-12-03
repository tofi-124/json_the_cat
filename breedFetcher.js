let argv = process.argv;
argv = argv.splice(2);

const request = require("request");

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${argv[0]}`,
  async(error, response, body) => {
    const data = JSON.parse(body);

    try {
      console.log(`Description: ${data[0]["description"]}`);
    } catch (e) {
      if (e instanceof TypeError) console.log("Return value is: [] or undefined");
    }
  }
);
