const crudMessages = Object.freeze({
  errors: {
    created: "Unable to create doc(s)",
    get: "No results found",
    updated: "Unable to update doc(s)",
    deleted: "Unabled to delete doc(s)",
    updateAvatar: "Avatar must be a JPG, JPEG, or PNG file",
    escaped: "Invalid data sent in a request was sanitised",
  },
  success: {
    created: "Document(s) created successfully",
    getAll: "Data fetched from all documents successfully",
    getOne: "Data fetched from one document successfully",
    updated: "Updated document(s) successfully",
    deleted: "Document(s) deleted successfully",
  },
});

export default crudMessages;
