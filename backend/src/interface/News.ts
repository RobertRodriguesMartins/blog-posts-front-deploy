import { RequestHandler } from "express"

export interface News {
  id?: number,
  title: string,
  content: string,
  categoryName: string
}

export default interface NewsEntity<T extends News> {
  findAll(params: T): Promise<T | News[] | void>
  create(params: T): Promise<T | void>
}
