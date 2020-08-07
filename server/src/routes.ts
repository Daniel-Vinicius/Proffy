import express from "express";
import ClassesControler from "./controllers/ClassesController";
import ConnectionsControllers from "./controllers/ConnectionsController";

const routes = express.Router();
const classesControllers = new ClassesControler();
const connectionsControllers = new ConnectionsControllers();

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

routes.get("/connections", connectionsControllers.index);
routes.post("/connections", connectionsControllers.create);

export default routes;
