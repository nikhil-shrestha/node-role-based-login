const Role = require('utils/role');

exports.getAll = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getById = async (req, res) => {
  const currentUser = req.user;
  const id = req.params.id;

  // only allow admins to access other user records
  if (id !== currentUser.id && currentUser.role !== Role.Admin) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};
