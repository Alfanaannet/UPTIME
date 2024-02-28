const urlsConfig = require(`${process.cwd()}/src/database/UrlsConfig`),
  userConfig = require(`${process.cwd()}/src/database/UserConfig`),
  fetchProjects = require(`${process.cwd()}/src/functions/fetchProjects`);
module.exports = {
  async execute(client) {
    try {
      let pros = await urlsConfig.find();
      client.projectsSize = 0;
      client.projects = pros.map(p => p.link);
      urlsConfig.countDocuments({}, async (err, total) => {
        client.projectsSize = total;
        fetchProjects(client.projects, client);
      });
      setInterval(async () => {
        fetchProjects(client.projects, client);
      }, 4000);
    } catch (e) {
      console.log(String(e))
    }
  }
}
