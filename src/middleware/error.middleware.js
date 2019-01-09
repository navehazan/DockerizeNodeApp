const errorMiddleware = app => {
  app.use(async (err, req, res, next) => {
    if (process.env.ENV !== "LOCAL") {
      console.error(err)
      res.status(500).send("Error occurred!");
    } else {
      res.status(500).send(err);
    }
  });
};
module.exports = errorMiddleware;
