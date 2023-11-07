const router = require('express').Router();
const { updateUserBalanceCommand } = require('../application/commands/update-user-balance.command');

router.patch('/balance/:id', async (req, res, next) => {
    try {
        await updateUserBalanceCommand({ id: req.params.id, amount: req.body.amount });

        res.status(200).send();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;