import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { SocialMediaMenuWrapper, SocialMediaLink } from './style';

const SocialMediaMenu = () => {
  const result = useStaticQuery(graphql`
query SocialMediaMenuQuery {
  contentfulSocialMediaMenu {
    id
    socialMediaLink {
      id
      name
      socialMediaUrl
      logoFileName
    }
  }
}  `)    

    return (
              <SocialMediaMenuWrapper>
              {result.contentfulSocialMediaMenu.socialMediaLink.map((socialMediaLink) => (
                <SocialMediaLink key={socialMediaLink.id}>
                  <Link to={`${socialMediaLink.socialMediaUrl}`}>
                      {socialMediaLink.name}
                  </Link>
                </SocialMediaLink>
              ))}
            </SocialMediaMenuWrapper>
    )
}

export default SocialMediaMenu;