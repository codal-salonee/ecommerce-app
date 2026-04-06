export const FRAGMENT_LINK = `
  label,
  linkType,
  internalLink->{ slug { current } },
  externalUrl
`;

export const FRAGMENT_HERO_BANNER = `
    _type == "heroBanner" => {
      leftBanner {
        image,
        link {
          ${FRAGMENT_LINK}
        }
      },
      rightBanner {
        image,
        link {
          ${FRAGMENT_LINK}
        }
      }
    }
`;

export const FRAGMENT_CATEGORY_ICON_LIST = `
    _type == "categoryIconList" => {
     categories[]->{
       name,
       slug,
     }
    }
`;

export const FRAGMENT_PRODUCTS_SECTION = `
    _type == "productsSection" => {
      title,
      viewAllLink {
        ${FRAGMENT_LINK}
      },
      products[]->{
        _id,
        price,
        name,
        "slug": slug.current,
        images,
        productCategory[]->{
          name
        }
      }
    }

`;

export const FRAGMENT_QUICK_DELIVERY = `
    _type == "quickDelivery" => {
      title,
      subtitle,
      deliveryText,
      banners[]{
        title,
        image,
        link {
          ${FRAGMENT_LINK}
        }
      }
    }
`;

export const FRAGMENT_BANNERS = `
    _type == "banners" => {
        banner[]{
          image,
          link {
            ${FRAGMENT_LINK}
          }
        }
    }
`;

export const FRAGMENT_TESTIMONIAL = `
     _type == "testimonial" => {
        title,
        viewAllReviews {
          ${FRAGMENT_LINK}
        },
        testimonials[]{
          _key,
          author,
          details,
          review
        }
    }
`;

export const FRAGMENT_FAQS = `
    _type == "faqs" => {
        description[],
        questions[]{
          _key,
          question,
          answer
        }
    }
`;

export const FRAGMENT_PAGE_DETAILS = `
  sections[]{
    _type,
    _key,
    ${FRAGMENT_HERO_BANNER},
    ${FRAGMENT_CATEGORY_ICON_LIST},
    ${FRAGMENT_PRODUCTS_SECTION},
    ${FRAGMENT_QUICK_DELIVERY},
    ${FRAGMENT_BANNERS},
    ${FRAGMENT_TESTIMONIAL},
    ${FRAGMENT_FAQS}
  }
`;
