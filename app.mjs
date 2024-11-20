import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 9600;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import dbConnect from "./db.mjs";
dbConnect();

import User from "./user_model.mjs";

app.post("/user", async (request, response) => {
  try {
    const {
      email,
      username,
      password,
      country,
      city,
      mobile,
      monthly_income,
      age,
    } = request.body;
    const createdUser = await new User({
      email,
      username,
      password,
      country,
      city,
      mobile,
      monthly_income,
      age,
    }).save();

    response.status(201).json({
      status: "success",
      error: "",
      message: "User added successfully",
      errorDetails: "",
      httpStatusCode: 201,
      data: {
        id: createdUser._id,
        username: createdUser.username,
        email: createdUser.email,
        age: createdUser.age,
        mobile: createdUser.mobile,
        country: createdUser.country,
        city: createdUser.city,
        monthly_income: createdUser.monthly_income,
      },
    });
  } catch (error) {
    response.status(500).json({
      status: "failed",
      error: error.message,
      message: "Error while user creation",
      errorDetails: "",
      httpStatusCode: 500,
      data: [],
    });
  }
});

app.patch("/user", async (request, response) => {
  const { username, email } = request.body;
  const updatedData = await User.findByIdAndUpdate(
    "672786844c1e4ee6e20022c7",
    { $set: { username: username, isActive: true, age: 21 } },
    { new: true }
  );

  response.status(200).json({ data: updatedData });
});

// app.get("/users", async (request, response) => {
//   try {
//     const data = await User.find({}, {}, { sort: { username: 1 } }); //.select("username -_id");

//     response.json(data);
//     return;

//     const count = await User.countDocuments();
//     console.log(count);
//     if (count) {
//       const page = request.query.page > 0 ? request.query.page : 1;
//       const limit = parseInt(request.query.limit) || 3;

//       console.log(">>>>>", typeof limit);

//       if (typeof limit === "number") {
//         console.log("Pages", page);
//         // return;

//         // page no and limit and string pass kardi ya kuch bhi utla pulta pass kara diya pagination query string mein to kya?

//         console.log("Page = ", page, "Limit = ", limit);

//         const offset = (page - 1) * limit;

//         const data = await User.find().skip(offset).limit(limit);
//         if (data.length > 0) {
//           return response.status(200).json({ data: data });
//         } else {
//           return response.status(200).json({ msg: "Record not found" });
//         }
//       }
//     } else {
//       return response.status(200).json({ msg: "Record not found" });
//     }
//   } catch (error) {
//     console.log("Record not found");
//   }
// });

app.get("/api/users", (request, response) => {
  
});
app.listen(PORT, () => {
  console.log(`Server is running on port no. ${PORT}`);
});

// File upload karna hai single and multiple both
