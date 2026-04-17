export const PAGE_QUERY = `{
  "settings": *[_type == "siteSettings"][0],
  "page": *[_type == "homePage"][0]
}`;
