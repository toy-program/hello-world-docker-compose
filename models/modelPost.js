const Post = require('./schemas/Post.schema');

class PostModel {
  constructor(db) {
    if (PostModel.instance) return PostModel.instance;
    this.db = db;
    PostModel.instance = this;

    return this;
  }

  async getPostList() {
    const list = await this.db.find({});
    return list;
  }
}

module.exports = () => new PostModel(Post);
