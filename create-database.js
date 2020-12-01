const faunadb = require("faunadb");
const q = faunadb.query;

(async () => {
  const client = new faunadb.Client({
    secret: "fnAD8ATydQACAEuPVesaa87txgiZK3NsYdERgEvy",
  });

  try {
    const result = await client.query(q.CreateDatabase({ name: 'gatsbyapp' }));
    console.log("Result: ", result);
  } catch (error) {
    console.log(error);
    // if (
    //   error.requestResult.statusCode === 400 &&
    //   error.message === "instance already exist"
    // ) {
    //   console.log("Database with this name already exist");
    // } else {
    //   console.log("Unknown Error: ");
    //   console.log(error);
    // }
  }
})();
