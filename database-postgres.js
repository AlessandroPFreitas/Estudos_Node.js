import { randomUUID } from "node:crypto"
import knex from "./db/db.js"
import { title } from "node:process"

export class DatabasePostgres {
  async list(search) {
    let videos = knex("videos").select("*")
    if (search) {
      videos = videos.whereLike("title", `%${search}%`)
    }
    return await videos
  }

  async create(video) {
    const id = randomUUID()
    await knex("videos").insert({
      id,
      title: video.title,
      description: video.description,
      duration: video.duration,
    })

    return id
  }

  async update(id, video) {
    await knex("videos").where({ id }).update({
      title: video.title,
      description: video.description,
      duration: video.duration,
    })
  }

  async delete(id) {
    await knex("videos")
    .where({ id })
    .del()
  }
}
