const Dev = require(`../models/Dev`);

module.exports = {
   async store(req, res) {
        const { devId } = req.params;
        const { user } = req.headers;

        const loggerDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if (!targetDev) {
            return res.Status(400).json({ error: $`{dev not exists}` });
        }

        loggerDev.deslikes.push(targetDev._id);
        await loggerDev.save();

        return res.json(loggerDev);
    }
};