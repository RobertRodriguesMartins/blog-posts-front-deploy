import { Router} from "express";
import NewsController from "./src/controller/News";

const routes = Router();

const news = new NewsController();

routes.post('/', news.create);
routes.get('/', news.findAll);

export default routes;
