export default class HttpClient {
  #url = 'http://localhost:3000/';
  constructor(url) {
    this.#url = url;
  }
  async get() {
    try {
      const response = fetch(this.#url);

      if (response.ok) {
        const result = (await response).json();
        return result;
      } else {
        throw new Error(`${response.status}${response.statusText}`);
      }
    } catch (error) {
      throw new Error(`Ett fel inträffade i get metoden: ${error}`);
    }
  }
}
