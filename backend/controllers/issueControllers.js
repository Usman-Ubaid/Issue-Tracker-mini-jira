let issues = [];

const getIssues = (req, res) => {
  return res
    .status(200)
    .json({ message: "Issues fetched successfully ", data: issues });
};

const addIssue = (req, res) => {
  const { title, type } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  if (!type) {
    return res.status(400).json({ error: "Type is requried" });
  }

  const issue = {
    issueId: Math.ceil(Math.random() * 100),
    title,
    type,
  };

  issues.push(issue);

  return res.status(201).json({ success: true, data: issues });
};

export { addIssue, getIssues };
