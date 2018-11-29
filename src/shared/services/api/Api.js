/* @flow */
import axios from 'axios';

type Url = string;

class Api {
  url: Url;

  constructor(url: Url = 'https://api.github.com') {
    this.url = url;
  }

  async getRepos() {
    const repos = await axios.get(`${this.url}/users/relferreira/repos`);
    return repos.data;
  }
}

export default Api;