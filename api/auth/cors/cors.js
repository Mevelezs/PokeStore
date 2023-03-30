// const whiteList = ['http://localhost:3000', 'https://my_app.com'];

const corsOptions = {
  // origin: (origin, callback) => {
  //   const url = whiteList.includes(origin);
  //   console.log(origin);
  //   if (url) {
  //     callback(null, true);
  //   } else {
  //     callback(new Error('Not allowed by CORS'));
  //   }
  // },
  origin: 'http://localhost:5173',
};

module.exports = corsOptions;
