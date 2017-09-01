import React, { Component } from 'react';
import Helmet from 'react-helmet';
import _ from 'lodash';
import Remarkable from 'remarkable';
import RemarkableReactRenderer from 'remarkable-react';
import Lightbox from 'react-image-lightbox';
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import cn from 'classnames';
import config from '../../../gatsby-config.js';
import style from './article.module.scss';

const md = new Remarkable();
md.renderer = new RemarkableReactRenderer();

export class Article extends Component {
  state = {
    hasOneContentItem: false,
    images: [],
    lightboxOpen: false,
    photoIndex: 0,
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

    if (article.images) {
      const imageUrls = _.map(article.images, (image) => {
        return image.image.url;
      });

      this.setState({
        images: imageUrls,
      });
    }
  }

  toggleLightbox = () => {
    this.setState({
      lightboxOpen: !this.state.lightboxOpen,
    });
  }

  onPrevImage = () => {
    const { images, photoIndex } = this.state;

    this.setState({
      photoIndex: (photoIndex + images.length - 1) % images.length,
    });
  }

  onNextImage = () => {
    const { images, photoIndex } = this.state;

    this.setState({
      photoIndex: (photoIndex + 1) % images.length,
    })
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

  onClickImage = (image) => {
    const imageUrl = image.image.url;

    this.setState({
      photoIndex: this.state.images.indexOf(imageUrl),
    }, () => {
      this.toggleLightbox();
    });
  }

  renderContent = (data) => {
    const article = this.props.data.markdownRemark.frontmatter;

    let content = [];

    if (article.images) {
      _.map(article.images, (image) => {
        const onClickImage = this.onClickImage.bind(this, image);
        content.push(
          <div onClick={onClickImage}>
            <img
              className={style.image}
              src={image.image.url}
              alt={image.image.title}
            />
          </div>
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

    if (!article.audio && !article.video && article.images.length === 0) {
      return null;
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
    const { images, photoIndex } = this.state;
    const authors = article.author.map(author => author.name);

    const containerClasses = cn(style.container, {
      [style.textOnLeft]: article.textOnLeft,
    });

    const paragraphClasses = cn({
      [style.largeText]: this.state.hasOneContentItem &&
        this.state.textLength <= 200
    });

    return (
      <div>
        <Helmet
          title={`${article.title} | ${config.siteMetadata.title}`}
        />

        <div className={containerClasses}>
          {this.renderContent()}

          <div className={style.text}>
            <div className={style.issue}>
              { /* Note to self: For now, hardcoding this: */ }
              Issue 1: Sex Ed
            </div>
            <h1 className={style.title}>{article.title}</h1>
            <h2>{authors.join(', ')}</h2>
            <p className={paragraphClasses}>
              {md.render(article.text)}
            </p>
            <p>
              <strong>Tags: </strong>
              {this.getTags()}
            </p>
          </div>
        </div>

        {
          this.state.lightboxOpen &&
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={this.toggleLightbox}
            onMovePrevRequest={this.onPrevImage}
            onMoveNextRequest={this.onNextImage}
          />
        }
      </div>
    );
  }
}

export default Article;


// TODO: Add back 'audio'
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
        text
        resources {
          title
          url
          description
        }
        textOnLeft
      }
    }
  }
`
