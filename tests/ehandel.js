const expect = require("expect");
const { noBlocklistDomains } = require("wecrunner/assertions/blocklistproject");
const { checkAllowedDomains } = require("wecrunner/assertions/");

module.exports = {
  name: "E-handel websites",

  collect: {
    urls: [
      /*
      "https://www.bog-ide.dk",
      "https://amalo.dk",
      "https://eyda.com", */

      "https://gastrotools.dk",
      "https://roccamore.com",
      "https://royalcopenhagen.com",

      "https://matas.dk",
      "https://rains.com",
      "https://shapingnewtomorrow.com",
      "https://sostrenegrene.com",
    ],
  },

  test: {
    config: {
      allowed: [
        "myfonts.net",
        "cookieinformation.com",
        "typekit.net",
        "akamaihd.net",
        "azureedge.net",
        "www.googletagmanager.com",
        "unpkg.com",
        "usercentrics.eu",
      ],
    },
    cases: {
      "Website sets not cookies from blocklist tracker list": (
        data,
        config
      ) => {
        noBlocklistDomains(data, "cookies");
      },

      "Website loads no beacons from blocklist tracker list": (
        data,
        config
      ) => {
        noBlocklistDomains(data, "beacons");
      },

      "Website sets no 3rd party cookies": (data, config) => {
        checkAllowedDomains(data, "cookies", config.allowed);
      },
    },
  },
};
