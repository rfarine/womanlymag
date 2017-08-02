import React from 'react';
import Helmet from 'react-helmet';
import _ from 'lodash';
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import config from '../../../gatsby-config.js';
import style from './article.module.scss';

function getTags(tags) {
  const seoTags = _.flatMap(tags, (tag) => {
    return tag.seoMetaTags;
  });

  const titleTags = _.map(
    _.filter(seoTags, { tagName: 'title' }),
    'content'
  );

  return `${titleTags.join(', ')}`;
};

function renderContent(data) {
  let content = [];

  if (data.images) {
    _.map(data.images, (image) => {
      content.push(
        <img
          src={image.image.url}
          alt={image.image.title}
        />
      );
    });
  }

  if (data.video) {
    content.push(
      <ReactPlayer
        className={style.video}
        url={data.video.url}
        width={550}
      />
    );
  }

  if (data.audio) {
    content.push(
      <ReactAudioPlayer
        className={style.audio}
        src={data.audio}
        controls
      />
    );
  }

  return (
    <div className={style.content}>
      {
        _.map(content, (item) => {
          return (
            <div>
              {item}
            </div>
          );
        })
      }
    </div>
  );
}

const Article = ({ data }) => {
  const article = data.markdownRemark.frontmatter;

  return (
    <div>
      <Helmet
        title={`${article.title} | ${config.siteMetadata.title}`}
      />

      <div className={style.container}>
        {renderContent(article)}

        <div className={style.text}>
          <div className={style.issue}>
            { /* Note to self: For now, hardcoding this: */ }
            Issue 1: Sex Ed
          </div>
          <h1 className={style.title}>{article.title}</h1>
          <h2>{article.author.name}</h2>
          {
            article.text &&
            <p>{article.text}</p>
          }
          <p>{getTags(article.tags)}</p>
        </div>
      </div>
    </div>
  )
};

export default Article;

export const pageQuery = graphql`
  query ArticleBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        type
        slug
        title
        featured
        author {
          name
        }
        tags {
          id
          seoMetaTags {
            tagName
            content
          }
        }
        thumbnail
        images {
          id
          image {
            url
          }
          caption
          title
        }
        video {
          url
          thumbnailUrl
        }
        audio
        text
        resources {
          title
          url
          description
        }
      }
    }
  }
`
