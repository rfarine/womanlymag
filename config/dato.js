module.exports = (dato, root, i18n) => {
  // Issues
  root.directory('pages/issues', (publishedDir) => {
    dato.issues.forEach((issue) => {
      publishedDir.createPost(
        `${issue.number}.md`, 'yaml', {
          frontmatter: {
            number: issue.number,
            title: issue.title,
            featured: issue.featured,
            articles: issue.articles.toMap()
          },
        }
      );
    });
  });
};
