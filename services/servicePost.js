class PostService {
  constructor() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = this;
    return this;
  }

  async getList() {}
  async getAPost(id) {}
  async deleteAPost(id) {}
  async createAPost(title, content) {}
}

module.exports = new PostService();
