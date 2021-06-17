// this is needed by the @netlify/nextjs plugin
// at the root of the project in order to find
// the .next dist folder
module.exports = {
  target: 'serverless',
  distDir: 'dist/apps/vercel-deploy/.next',
};
