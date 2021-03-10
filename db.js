const mongoose = require('mongoose');

mongoose
  .connect("mongodb+srv://shub:mongodbpass@cluster0.bqzfc.mongodb.net/phising?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log(`Server is connected to db`))
  .catch(err => console.log(err.message));

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection is disconnected');
});

process.on('SIGNINT', async () => {
  await mongoose.connection.close();
  process.exit(0);
});