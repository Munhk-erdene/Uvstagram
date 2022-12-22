import User from "../model/User.js";
export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  if (!users) throw Error("not found", 400);
  res.send({
    data: users,
  });
};

export const createUser = async (req, res) => {
  const user = await User.create(req.body);
  if (!user) throw Error("not found", 400);
  res.send({
    data: user,
  });
};
export const user = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) throw new Error("User not found", 400);
  res.send({
    data: user,
  });
};
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate({ _id: id });
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndRemove({ _id: id });
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
