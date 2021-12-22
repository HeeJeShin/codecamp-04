module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "heeje",
  exportPathMap: () => ({
    '/':{page: "/"},
    "/boards": { page: "/boards"},
    "/404": { page: "/404" },
  }),
}
