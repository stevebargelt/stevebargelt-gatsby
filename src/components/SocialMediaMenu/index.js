import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { SocialMediaMenuWrapper, SocialMediaLink, ImageWrapper } from "./style";
import { GatsbyImage } from "gatsby-plugin-image";

const SocialMediaMenu = () => {
  const result = useStaticQuery(graphql`
    fragment socialMediaLinkData on ContentfulSocialMediaLink {
      id
      name
      socialMediaUrl
      socialMediaLogo {
        title
        gatsbyImageData(width: 32, placeholder: BLURRED)
      }
    }

    query SocialMediaMenuQuery {
      contentfulSocialMediaMenu {
        socialMediaLink {
          ...socialMediaLinkData
        }
      }
    }
  `);

  return (
    <SocialMediaMenuWrapper>
      {/* {console.log(result)} */}
      {result.contentfulSocialMediaMenu.socialMediaLink.map(
        (socialMediaMenuItem) => (
          <SocialMediaLink key={socialMediaMenuItem.id}>
            <Link to={`${socialMediaMenuItem.socialMediaUrl}`} target="blank">
              <ImageWrapper>
                <GatsbyImage
                  alt={socialMediaMenuItem.socialMediaLogo.title}
                  image={socialMediaMenuItem.socialMediaLogo.gatsbyImageData}
                />
              </ImageWrapper>
            </Link>
          </SocialMediaLink>
        )
      )}
    </SocialMediaMenuWrapper>
  );
};

export default SocialMediaMenu;
