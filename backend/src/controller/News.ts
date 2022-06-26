import { Request, Response, NextFunction } from 'express';
import { News } from '../interface/News';
import NewsService from '../service/News';

class NewsController {
  private service: NewsService = new NewsService();

  public create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { title, content, categoryName } = req.body as News;
      const data = await this.service.create({title, content, categoryName});
      
      res.status(200).json(data);
      return
    } catch (e) {
      res.sendStatus(500);
      return
    }
  }
  public findAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await this.service.findAll();
      if(data.length < 1) {
        res.status(200).json([]);
        return
      }

      res.status(200).json(data);
      return
    } catch (e) {
      res.sendStatus(500);
      return
    }
  }

  public findById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = Number(req.params.id);
      const valid = await this.service.exists(id);

      if(!valid) {
        res.status(404).json({ message: 'Noticia não encontrada!' })
        return
      }

      const newsLetter = await this.service.findById(id);

      res.status(200).json(newsLetter);
      return
    } catch (e) {
      res.sendStatus(500);
      return
    }
  }
}

export default NewsController;