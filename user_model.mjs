import mongoose from "mongoose";
const schema = mongoose.Schema;
const userSchema = new schema({
  username: { type: String, required: true },
  mobile: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  gender: { type: Number, default: 1 }, // 1=Male, 2=Female
  country: { type: String },
  city: { type: String },
  //address:{},
  monthly_income: { type: Number },
  age: { type: Number },
  isActive: { type: Boolean, default: true },
  verifiedStatus: { type: String, default: "Pending" }, // Pending Cancelled Completed
  isDeleted: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  last_login: { type: Date, default: Date.now },
});
// userSchema.index({ email: 1 }, { unique: true });
// userSchema.index({ mobile: 1 }, { unique: true });

export default mongoose.model("users", userSchema);
