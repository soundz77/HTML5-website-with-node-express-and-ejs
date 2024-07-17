const validateRequest = Object.freeze({
  errors: {
    rejected: "Bad request",
    required: "Missing required field",
    NaN: "NaN",
    dataType: "Invalid data type",
    unknown: "Unknown data type",
    noID: "No ID provided",
    invalidID: "Invalid ID provided",
  },
});

export default validateRequest;
