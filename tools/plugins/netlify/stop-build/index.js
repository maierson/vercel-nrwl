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
    console.log('Dirs dist:', fs.readdirSync(`${process.cwd()}/dist`));
    console.log(
      'Dirs: dist/apps',
      fs.readdirSync(`${process.cwd()}/dist/apps`)
    );
    console.log(
      'Dirs dist/app/vercel-deploy:',
      fs.readdirSync(`${process.cwd()}/dist/apps/vercel-deploy`)
    );
    console.log(
      'Dirs dist/app/vercel-deploy/.next:',
      fs.readdirSync(`${process.cwd()}/dist/apps/vercel-deploy/.next`)
    );
  },
};
