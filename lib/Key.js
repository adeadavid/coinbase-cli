const colors = require("colors");
const Configstore = require("configstore");
class Key {
  constructor() {
    this.store = new Configstore();
  }
  set(value) {
    this.store.set("API-KEY", value);
    console.info("API key has been set".blue);
  }
  get(key) {
    const value = this.store.get(key);
    if (!value) {
      console.info("No API Key was found".red);
      return;
    }
    console.info(value.yellow);
  }
  delete(key) {
    this.store.delete(key);
    console.info("API key has been deleted".blue);
  }
}

module.exports = Key;
