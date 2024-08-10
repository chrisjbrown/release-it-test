const version = "${version}";
const packageName = process.env.npm_package_name;

module.exports = {
  plugins: {
    "release-it-pnpm": {},
  },
  git: {
    commitMessage: "chore: release ${version}",
  },
};
