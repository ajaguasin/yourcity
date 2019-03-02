const app = require("../app");
const initDB = require("../config/postgres");
const postgres = initDB(app);

const pgResource = postgres => {
  return {
    async getAllFood() {
      const getFoodQuery = {
        text: "SELECT * FROM food;"
      };

      try {
        const allFood = await postgres.query(getFoodQuery);
        return allFood.rows;
      } catch (error) {
        throw "Food not found";
      }
    },

    async getFoodByQuery(cuisine, type) {
      const getFoodQuery = {
        text: "SELECT * FROM food WHERE food.cuisine = $1 AND food.type = $2;",
        values: [cuisine, type]
      };

      try {
        const allFood = await postgres.query(getFoodQuery);
        return allFood.rows;
      } catch (error) {
        throw "Food not found";
      }
    }
  };
};

postgres.on("error", (err, client) => {
  console.error("Unexpected error on idle postgres client", err);
  process.exit(-1);
});

module.exports = pgResource(postgres);
