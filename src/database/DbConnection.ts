import mongoose from "mongoose";

class DatabaseConfig {
  static initializeDb() {
    mongoose.connection.on("open", () => {
      console.log("DATABASE WAS CONNECT");
    });
    mongoose.connect(process.env.DATABASE_URL as string);
  }
}

export { DatabaseConfig };