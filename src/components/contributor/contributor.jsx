import React from 'react';
import style from './contributor.module.scss';

function renderSocialMediaLinks(socialMediaLinks) {
  if (socialMediaLinks) {
    const links = socialMediaLinks.map((link, key) => {
      return (
        <li key={key}>
          <a
            href={link.url}
            title={link.service}
            target="_blank"
          >
            {link.service}
          </a>
        </li>
      );
    });

    return (
      <ul className={style.links}>
        {links}
      </ul>
    );
  }

  return false;
}

const Contributor = ({
  bio,
  imageUrl,
  name,
  socialMediaLinks,
  title,
}) => {
  return (
    <span className={style.component}>
      <span>
        <span
          className={style.image}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </span>
      <span className={style.text}>
        <span className={style.name}>
          {name}
        </span>
        <span className={style.title}>
          ({title})
        </span>
        <p className={style.bio}>
          {bio}
        </p>
        {renderSocialMediaLinks(socialMediaLinks)}
      </span>
    </span>
  );
}

export default Contributor;
