import mongoose from "mongoose";
const DBConnection = () => {
  // const url = `mongodb+srv://${process.env.dbUserName}:${process.env.dbPassword}${process.env.dbCluster}.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`;
  const url = process.env.localDb;
  try {
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected !");
  } catch (e) {
    console.error(e);
  }
};
export default DBConnection;
