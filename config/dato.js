module.exports = (dato, root, i18n) => {
  root.directory('src/pages/', (publishedDir) => {

    if (dato.pageHome) {
      publishedDir.createPost(
        'index.md', 'yaml', {
          frontmatter: {
            type: 'index',
            path: '/',
            heroImage: dato.pageHome.heroImage.url(),
            issue: dato.pageHome.issue.toMap(),
          },
        }
      );
    }

    if (dato.issues) {
      dato.issues.forEach((issue) => {
        publishedDir.createPost(
          `issues/${issue.number}.md`, 'yaml', {
            frontmatter: {
              type: 'issue',
              path: `issues/${issue.number}`,
              number: issue.number,
              title: issue.title,
              featured: issue.featured,
              articles: issue.articles.toMap()
            },
          }
        );
      });
    }

    if (dato.articles) {
      dato.articles.forEach((article) => {
        publishedDir.createPost(
          `articles/${article.slug}.md`, 'yaml', {
            frontmatter: {
              type: 'article',
              path: `articles/${article.slug}`,
              author: article.author.toMap(),
              slug: article.slug,
              title: article.title,
              featured: article.featured,
              tags: article.tags.toMap(),
              thumbnail: article.thumbnail.url(),
              images: article.images && article.images.toMap(),
              video: article.video,
              audio: article.audio && article.audio.url(),
              text: article.text,
              resources: article.resources && article.resources.toMap(),
              textOnLeft: article.textOnLeft,
            },
          }
        );
      });
    }

    if (dato.pageAbout) {
      publishedDir.createPost(
        'about.md', 'yaml', {
          frontmatter: {
            type: 'about',
            path: `${dato.pageAbout.slug}`,
            slug: dato.pageAbout.slug,
            title: dato.pageAbout.title,
            text: dato.pageAbout.text,
            contributors: dato.pageAbout.contributors.toMap(),
          },
        }
      );
    }

    // No glossary for now.
    // if (dato.pageGlossary) {
    //   publishedDir.createPost(
    //     'glossary.md', 'yaml', {
    //       frontmatter: {
    //         type: 'glossary',
    //         path: `${dato.pageGlossary.slug}`,
    //         title: dato.pageGlossary.title,
    //         definitions: dato.pageGlossary.definitions.toMap(),
    //       },
    //     }
    //   );
    // }

    if (dato.pageResourceList) {
      publishedDir.createPost(
        'resources.md', 'yaml', {
          frontmatter: {
            type: 'resources',
            path: `${dato.pageResourceList.slug}`,
            title: dato.pageResourceList.title,
            resource: dato.pageResourceList.resources.toMap(),
          },
        }
      );
    }
  });
};
