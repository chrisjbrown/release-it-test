const version = "${version}";
const packageName = process.env.npm_package_name;

module.exports = {
  plugins: {
    "release-it-pnpm": {},
    "@release-it/conventional-changelog": {
      path: ".",
      infile: "CHANGELOG.md",
      preset: "conventionalcommits",
      gitRawCommitsOpts: {
        path: ".",
      },
    },
  },
  git: false,
};
