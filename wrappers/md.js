import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

const MarkdownWrapper = ({ route }) => {
  const post = this.props.route.page.data;

  return (
    <div className="markdown">
      <Helmet
        title={`${config.siteTitle} | ${post.title}`}
      />
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  )
};
