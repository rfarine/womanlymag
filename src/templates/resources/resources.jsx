import React from 'react';
import _ from 'lodash';
import style from './resources.module.scss';

const Resources = ({ data }) => {
  const resourcesPage = data.markdownRemark.frontmatter;

  const resources = _.map(resourcesPage.resources, (resource) => {
    return (
      <li>
        <a
          href={resource.url}
          title={resource.title}
        >
          {resource.title}
        </a>
        <span>
          {` - ${resource.description}`}
        </span>
      </li>
    );
  });

  return (
    <ul className={style.list}>
      {resources}
    </ul>
  )
};

export default Resources;

export const pageQuery = graphql`
  query ResourcesByType($type: String!) {
    markdownRemark(frontmatter: { type: { eq: $type } }) {
      frontmatter {
        title
        resources {
          description
          url
          title
        }
      }
    }
  }
`
