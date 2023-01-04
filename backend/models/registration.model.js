const validator = require("validator");
module.exports = (mongoose) => {
  var registrationSchema = mongoose.Schema({
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    gender: String,
    birthdate: String,
    email: {
      type: String,
      required: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid!");
        }
      },
    },
    password: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isLength(value, { min: 8 })) {
          throw new Error("Min length of password is 8");
        }
      },
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: String,
    zip: {
      type: Number,
      required: true,
    },
  });
  const Registration = mongoose.model("registration", registrationSchema);
  return Registration;
};
