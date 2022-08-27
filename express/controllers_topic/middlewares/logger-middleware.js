const loggerMiddelware = (req, res, next) => {
  //   res.send("Application level middleware");
  console.log("application level middleware work on all routes !");
  next();
};

export default loggerMiddelware;

const routerMiddleware = (req, res, next) => {
  console.log("router level middleware");
  next();
};

export { routerMiddleware };
