const getIndex = (req, res) => {
  const tiles = [
    {
      image: "pic01.jpg",
      title: "Magna",
      description:
        "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style1",
    },
    {
      image: "pic02.jpg",
      title: "Lorem",
      description:
        "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style2",
    },
    {
      image: "pic03.jpg",
      title: "Feugiat",
      description:
        "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style3",
    },
    {
      image: "pic04.jpg",
      title: "Tempus",
      description:
        "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style4",
    },
    {
      image: "pic05.jpg",
      title: "Aliquam",
      description:
        "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style5",
    },
    {
      image: "pic06.jpg",
      title: "Veroeros",
      description:
        "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style6",
    },
    {
      image: "pic07.jpg",
      title: "Ipsum",
      description:
        "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style7",
    },
    {
      image: "pic08.jpg",
      title: "Dolor",
      description:
        "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style8",
    },
    {
      image: "pic09.jpg",
      title: "Nullam",
      description:
        "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style9",
    },
    {
      image: "pic10.jpg",
      title: "Ultricies",
      description:
        "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style10",
    },
    {
      image: "pic11.jpg",
      title: "Dictum",
      description:
        "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style11",
    },
    {
      image: "pic12.jpg",
      title: "Pretium",
      description:
        "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style12",
    },
  ];

  res.status(200).render("index", { title: "Home", tiles });
};

export default getIndex;
