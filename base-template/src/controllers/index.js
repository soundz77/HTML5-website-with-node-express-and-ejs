const index = (req, res) => {
  const title = "Basic Express App";
  res.status(200).render("index", { title });
};

export default index;
