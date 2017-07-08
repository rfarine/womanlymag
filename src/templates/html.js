import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

const HTMLWrapper = () => {
  return (
    <body>
      <div
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: this.props.body }}
      />
      {this.props.postBodyComponents}
    </body>
  )
};

export default HTMLWrapper;
