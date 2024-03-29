const { Client, EmbedBuilder } = require("discord.js");
const fetch = require("node-fetch");
const UrlsConfig = require(`${process.cwd()}/src/database/UrlsConfig`);

module.exports = async (projects, client) => {
  projects.forEach(async (url) => {
    UrlsConfig.findOne({
      link: url,
    }, async function(err, doc) {
      // let pinged = doc.pinged || doc.get("pinged");
      let errors = false;
      try {
        await fetch(url);
      } catch (e) {
        errors = true;
        UrlsConfig.findOneAndUpdate(
          { link: url },
          {
            error: true,
            errorText: e.message,
          },
          { new: true }
        );
      } finally {
        if (!errors) {
          // pinged++;
          await UrlsConfig.findOneAndUpdate(
            { link: url },
            {
              error: false,
              // pinged,
            },
            { new: true }
          );
        }
      }
    })
  });
};
