import NewsEntity, { News } from '../interface/News';
import connection from '../model/db/connection';
import NewsModel from '../model/News';

class NewsService implements NewsEntity<News> {
  private newsModel: NewsModel = new NewsModel(connection);

  public create = async (notice: News): Promise<News | void> => {
    return this.newsModel.create(notice);
  }

  public findAll = async (): Promise<News[]> => {
    return this.newsModel.findAll();
  }

  public exists = async (id: number): Promise<boolean> => {
    return this.newsModel.exists(id);
  }

  public findById = async (id: number): Promise<News> => {
    return this.newsModel.findById(id);
  }
}

export default NewsService;