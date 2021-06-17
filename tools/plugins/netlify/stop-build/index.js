const fs = require('fs');

module.exports = {
  onPreBuild: () => {
    console.log('Hello world from the plugin!');
    console.log('Dir', process.cwd());
    console.log('Dirs:', fs.readdirSync(process.cwd()));
  },
  onEnd: () => {
    const currentProject = process.env.PROJECT_NAME;
    console.log('--- Build End ---\n');
    console.log('Project Name:', currentProject);
    console.log('Dirs:', fs.readdirSync(`${process.cwd()}/dist`));
  },
};
