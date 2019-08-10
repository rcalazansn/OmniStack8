const express = require(`express`);
const devController = require(`./controllers/devController`);
const likeController = require(`./controllers/LikeController`);
const deslikeController = require(`./controllers/DeslikeController`);

const routes = express.Router();

//routes.get(`/`, (req, res) => {
 //   return res.json({ message: `aaa ${req.query.name}` });
//});

routes.post(`/devs`, devController.store);
routes.post(`/devs/:devId/likes`, likeController.store);
routes.post(`/devs/:devId/deslikes`, deslikeController.store);
routes.post(`/devs`, deslikeController.store);


module.exports = routes;
