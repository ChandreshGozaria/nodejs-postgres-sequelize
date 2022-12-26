const models = require('../database/models');

const createUser = async (req, res) => {
    try {
        let userData = req.body;
        userData['created_at'] = new Date();
        userData['updated_at'] = new Date();
        const user = await models.User.create(userData);
        return res.status(201).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await models.User.findAll({});
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        let userData = req.body;
        userData['updated_at'] = new Date();
        const [updated] = await models.User.update(userData, {
            where: { id: userId }
        });
        if (updated) {
            const updatedUser = await models.User.findOne({ where: { id: userId } });
            return res.status(200).json({ user: updatedUser });
        }
        throw new Error('User not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const deleted = await models.User.destroy({
            where: { id: userId }
        });
        if (deleted) {
            return res.status(200).send("User deleted");
        }
        throw new Error("User not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    createUser,
    updateUser,
    getAllUsers,
    deleteUser
}