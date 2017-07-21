module.exports = (dato, root, i18n) => {
  // Issues
  root.directory('src/pages/', (publishedDir) => {
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

    dato.articles.forEach((article) => {
      publishedDir.createPost(
        `articles/${article.slug}.md`, 'yaml', {
          frontmatter: {
            type: 'article',
            path: `articles/${article.slug}`,
            slug: article.slug,
            title: article.title,
            featured: article.featured,
            tags: article.tags.toMap(),
            thumbnail: article.thumbnail.url(),
            images: article.images.toMap(),
            video: article.video,
            audio: article.audio.url(),
            text: article.text,
            resources: article.resources.toMap(),
          },
        }
      );
    });
  });
};
