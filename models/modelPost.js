const Post = require('./schemas/Post.schema');

class PostModel {
  constructor(db) {
    if (PostModel.instance) return PostModel.instance;
    this.db = db;
    PostModel.instance = this;

    return this;
  }

  async getList() {
    const list = await this.db.find({});
    return list;
  }

  async get(id) {
    const post = await this.db
      .find({_id: id})
      .lean()
      .exec();

    return post;
  }

  async delete(id) {
    await this.db.deleteOne({_id: id});
  }

  async create(title, content) {
    const post = await this.db.create({title, content});
    return post;
  }
}

module.exports = () => new PostModel(Post);
