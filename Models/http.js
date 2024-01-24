export default class HttpClient {
  #url = '';

  constructor(url) {
    this.#url = url;
  }
  async get() {
    try {
      const response = fetch(this.#url);

      if (response.ok) {
        const result = (await response).json();
      } else {
        throw new Error(`${response.status}${await response.statusText}`);
      }
    } catch (error) {
      throw new Error(`Ett fel inträffade i get metoden: ${error}`);
    }
  }
}
