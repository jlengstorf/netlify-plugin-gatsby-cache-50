export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60884927af950a00a6d002f8",
                  title: "Sanity Studio",
                  name: "netlify-plugin-gatsby-cache-50-studio",
                  apiId: "345beec6-0094-4fbb-bea9-e9b0618bd2af",
                },
                {
                  buildHookId: "60884927fa827f00a30ff0c9",
                  title: "Blog Website",
                  name: "netlify-plugin-gatsby-cache-50",
                  apiId: "3590dd37-587d-4b5e-8eee-4c80a01828b2",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jlengstorf/netlify-plugin-gatsby-cache-50",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://netlify-plugin-gatsby-cache-50.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
