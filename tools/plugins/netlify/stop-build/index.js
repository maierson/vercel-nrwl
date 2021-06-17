module.exports = {
  onPreBuild: () => {
    console.log('Hello world from the plugin!');
    console.log('Dir', process.cwd());
  },
};
