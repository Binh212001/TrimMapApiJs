const userRouter = require("./user.route");
// const scheduleRouter = require("./schedule.route");
// const bookingRouter = require("./booking.route");
// const hotelRouter = require("./hotel.route");
// const destinationRouter = require("./destination.route");
// const catalogRouter = require("./catalog.route");

const initRouter = (app) => {
  app.use("/user", userRouter);
  //   app.use("/hotel", hotelRouter);
  //   app.use("/destination", destinationRouter);
  //   app.use("/schedule", scheduleRouter);
  //   app.use("/booking", bookingRouter);
  //   app.use("/catalog", catalogRouter);
};

module.exports = initRouter;
