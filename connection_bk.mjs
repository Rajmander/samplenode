import mongoose from "mongoose";

// const conn = async () => {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/rajdb");
//     console.log("Connection successful");
//   } catch (err) {
//     console.log("Database connection failed:", err);
//   }
// };

    const conn =  mongoose.connect("mongodb://127.0.0.1:27017/rajdb").then(()=>{
    console.log("Hi");
    }).catch(()=>{
        console.log("bye");
    })

export default conn;

/**
 * connection 
 * routers
 * cruds
 * file u
 * 
 */