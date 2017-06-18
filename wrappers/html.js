import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

const HTMLWrapper = ({ route }) => {
  const page = route.page.data;

  return (
    <div dangerouslySetInnerHTML={{ __html: page.body }} />
  )
};

export default HTMLWrapper;
