const { User } = require('../../../models/user');
const { sequelize } = require('../../../models');

exports.updateUserBalanceCommand = async ({ id, amount }) => {
    const userId = parseInt(id, 10);
    const t = await sequelize.transaction();

    const user = await User.findByPk(userId, { transaction: t });

    if (!user) {
        throw new Error(`Пользователь с id ${userId} не найден!`);
    }

    try {
        await user.increment({ balance: amount }, { transaction: t });

        await t.commit();
    } catch (e) {
        await t.rollback();
        if (e.original.constraint === 'non_negative_integer_check') {
            throw new Error('Баланс не может быть меньше 0!');
        } else {
            throw e;
        }
    }
};
