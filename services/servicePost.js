const getPostModel = require('../models/modelPost');

class PostService {
  constructor() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = this;
    return this;
  }

  async getList() {
    const list = await getPostModel().getList();
    return list;
  }
  async getAPost(id) {
    const post = await getPostModel().get(id);
    return post;
  }
  async deleteAPost(id) {
    await getPostModel().delete(id);
  }
  async createAPost(title, content) {
    const newPost = await getPostModel().create(title, content);
    return newPost;
  }
}

module.exports = new PostService();
