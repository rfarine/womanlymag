import React, { Component } from 'react';
import Helmet from 'react-helmet';
import _ from 'lodash';
import Remarkable from 'remarkable';
import RemarkableReactRenderer from 'remarkable-react';
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import cn from 'classnames';
import config from '../../../gatsby-config.js';
import style from './article.module.scss';

const md = new Remarkable();
md.renderer = new RemarkableReactRenderer();

export class Article extends Component {
  state = {
    hasOneContentItem: 0,
    textLength: 0,
  }

  componentWillMount() {
    const article = this.props.data.markdownRemark.frontmatter;

    this.hasOneContentItem();

    if (article.text) {
      this.setState({
        textLength: article.text.length,
      });
    }
  }

  hasOneContentItem = () => {
    const article = this.props.data.markdownRemark.frontmatter;
    const hasOneImage = article.images && article.images.length === 1 && !article.audio && !article.video;
    const hasOnlyAudio = !article.images && article.audio && !article.video;
    const hasOnlyVideo = !article.images && !article.audio && article.video;

    this.setState({
      hasOneContentItem:
        hasOneImage ||
        hasOnlyAudio ||
        hasOnlyVideo,
    });
  }

  getTags = () => {
    const article = this.props.data.markdownRemark.frontmatter;

    const seoTags = _.flatMap(article.tags, (tag) => {
      return tag.seoMetaTags;
    });

    const titleTags = _.map(
      _.filter(seoTags, { tagName: 'title' }),
      'content'
    );

    return `${titleTags.join(', ')}`;
  }

  renderContent = (data) => {
    const article = this.props.data.markdownRemark.frontmatter;

    let content = [];

    if (article.images) {
      _.map(article.images, (image) => {
        content.push(
          <img
            className={style.image}
            src={image.image.url}
            alt={image.image.title}
          />
        );
      });
    }

    if (article.video) {
      content.push(
        <ReactPlayer
          className={style.video}
          url={article.video.url}
          width="100%"
          height="auto"
        />
      );
    }

    if (article.audio) {
      content.push(
        <ReactAudioPlayer
          className={style.audio}
          src={article.audio}
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

  render() {
    const article = this.props.data.markdownRemark.frontmatter;

    const paragraphClasses = cn({
      [style.largeText]: this.state.hasOneContentItem &&
        this.state.textLength <= 200
    });

    return (
      <div>
        <Helmet
          title={`${article.title} | ${config.siteMetadata.title}`}
        />

        <div className={style.container}>
          {this.renderContent()}

          <div className={style.text}>
            <div className={style.issue}>
              { /* Note to self: For now, hardcoding this: */ }
              Issue 1: Sex Ed
            </div>
            <h1 className={style.title}>{article.title}</h1>
            <h2>{article.author.name}</h2>
            <p className={paragraphClasses}>
              {md.render(article.text)}
            </p>
            <p>
              <strong>Tags: </strong>
              {this.getTags()}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

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
