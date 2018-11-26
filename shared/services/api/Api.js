import axios from 'axios';

class Api {
  constructor() {
    this.url = 'https://api.github.com';
  }

  async getRepos() {
    const repos = await axios.get(`${this.url}/users/relferreira/repos`);
    return repos.data;
  }
}

export default Api;