const fs = require("fs");
const terminalImage = require("terminal-image");
const path = require("path");
const svg2img = require("svg2img");
const responseView = require("./responseView");
const defaultUrl = "https://www.svgrepo.com/show/89912/coin.svg";

async function convertImage(coin, quoteCurrency) {
  try {
    const findLogo = fs.readFileSync(
      path.join(__dirname, `../assets/${coin.symbol.toLowerCase()}.jpeg`)
    );
    if (findLogo) {
      const coinLogo = await terminalImage.file(
        path.join(__dirname, `../assets/${coin.symbol.toLowerCase()}.jpeg`),
        {
          width: 15,
          height: 15,
          preserveAspectRatio: true,
        }
      );
      responseView(coin, coinLogo, quoteCurrency);
      return;
    }
  } catch (err) {
    svg2img(
      coin.logo_url ? coin.logo_url : defaultUrl,
      async (error, buffer) => {
        await fs.writeFile(
          `./assets/${coin.symbol.toLowerCase()}.jpeg`,
          buffer,
          async () => {
            const coinLogo = await terminalImage.file(
              path.join(
                __dirname,
                `../assets/${coin.symbol.toLowerCase()}.jpeg`
              ),
              {
                width: 15,
                height: 15,
                preserveAspectRatio: true,
              }
            );
            responseView(coin, coinLogo, quoteCurrency);
          }
        );
      }
    );
  }
}
module.exports = convertImage;
