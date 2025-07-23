import mongoose from "mongoose";

export class ConnectToDb {
  connectionUrl: string;

  constructor(dbUrl: string) {
    this.connectionUrl = dbUrl;
  }

  connect() {
    mongoose
      .connect(this.connectionUrl)
      .then(() => console.log("connected to db"))
      .catch((e) => console.log("error connecting to db" + e));
  }
}


