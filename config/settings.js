// You will need to change the DB name to match the required DB name in the assignment specs!
// export const mongoConfig = {
//   serverUrl: "mongodb://127.0.0.1:27017/",
//   database: "Final_Project_MJ_DEV",
// };

export const mongoConfig = {
  serverUrl: process.env.MONGO_URL || "mongodb://127.0.0.1:27017/",
  database: "meetup",
};