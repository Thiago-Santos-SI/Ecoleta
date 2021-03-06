import express from "express";

import PointController from "../controllers/PointController";
import ItemsController from "../controllers/ItemsController";

const routes = express.Router()
const pointController = new PointController();
const itemsController = new ItemsController()

routes.get('/items', itemsController.index);

routes.get('/points/:id', pointController.show);
routes.post('/points', pointController.create)
routes.get('/points', pointController.index)

export default routes;