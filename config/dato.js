module.exports = (dato, root, i18n) => {
  // Issues
  root.directory('src/pages/', (publishedDir) => {

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
            title: dato.pageAbout.title,
            contributors: dato.pageAbout.contributors.toMap(),
          },
        }
      );
    }

    if (dato.pageGlossary) {
      publishedDir.createPost(
        'glossary.md', 'yaml', {
          frontmatter: {
            type: 'glossary',
            path: `${dato.pageGlossary.slug}`,
            title: dato.pageGlossary.title,
            definitions: dato.pageGlossary.definitions.toMap(),
          },
        }
      );
    }

    if (dato.moduleFooter) {
      publishedDir.createPost(
        'components/footer.md', 'yaml', {
          frontmatter: {
            type: 'footer',
            path: 'components/footer',
            links: dato.moduleFooter.links.toMap(),
            socialMediaLinks: dato.moduleFooter.socialMediaLinks.toMap(),
            contactForm: dato.moduleFooter.contactForm.toMap(),
          },
        }
      );
    }

    if (dato.moduleNavigation) {
      publishedDir.createPost(
        'components/navigation.md', 'yaml', {
          frontmatter: {
            type: 'navigation',
            path: 'components/navigation',
            links: dato.moduleNavigation.links.toMap(),
          },
        }
      );
    }

    if (dato.pageIssueList) {
      publishedDir.createPost(
        'issues.md', 'yaml', {
          frontmatter: {
            type: 'issues',
            path: `${dato.pageIssueList.slug}`,
            title: dato.pageIssueList.title,
            issues: dato.pageIssueList.issues.map(issue => {
              return {
                number: issue.number,
                position: issue.position,
                featured: issue.featured,
                title: issue.title,
              };
            }),
          },
        }
      );
    }

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
