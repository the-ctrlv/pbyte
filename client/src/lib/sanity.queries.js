import { groq } from 'next-sanity';

export const legalTextQuery = groq`
    *[_type == "legal" && slug.current == $slug][0]{
        title,
        body,
        updatedAt,
        publishedAt,
        "lastModified": _updatedAt,
    }
`;

export const navigationQuery = groq`
    *[_type == "navigation"]{
  ...
}
`;
export const nicheQuery = groq`
    *[_type == 'niche'] | order(title asc){
        title,
    }
`;
export const projectQuery = groq`
    *[_type == "project"]{
    title,
    site,
    client,
    "hasCaseStudy": caseStudyConditional,
    displayOnWebsite,
    "tags": tags[]->,
    "category": category->title,
    "overview": overview[0],
    "clientLogo": clientLogo.asset->{
            altText,
            url,
            description,
            title
        },
    "coverImage": coverImage.asset->{
            altText,
            url,
            description,
            title
        },
    "slug": slug.current,
    duration,
    "id": _id,
    "type": _type
    }
`;

export const servicesQuery = groq`
    *[_type == 'service'] | order(title asc){
        title,
        "slug": slug.current,
        excerpt,
        "body": body[].children[].text,
    }
`;

export const servicesPageQuery = groq`
*[_type == 'page' && slug.current == 'services'][0]{
    title,
    description,
    "slug": slug.current,
    _id,
    _type,
    "pageSections": {
        "hero": pageSection[0],
        "services": pageSection[1] {
            "servicesList": references[]->{
                title,
                "slug": slug.current,
                excerpt,
                _id,
                _type
            },
        },
        "cta": pageSection[2]
    }
}
`;

export const serviceDocBySlugQuery = groq`
*[_type == 'service' && slug.current == $slug][0]{
    title,
    excerpt,
    "slug": slug.current,
    "description": body[].children[0],
    "id": _id,
    "type": _type,
}`;
export const serviceBySlugQuery = groq`
*[_type == 'page' && slug.current == $slug][0]{
    title,
    "parent": parent->slug.current,
    description,
    "slug": slug.current,
    "id": _id,
    "type": _type,
    siteIndex,
    "seo": seo{
      "title": seoTitle,
      "description": seoDescription,
      "ogImage": openGraph.ogImage.asset->,
      "url": openGraph.url
    },
    "pageSections": {
        "hero": pageSection[0] {
          title,
          "key": _key,
          "type": _type,
          "header": {
            "heading": heading.heading,
            "codeHeading": heading.codeHeading.code,
            "enableHtmlHeader": heading.conditionalHeading,
          },
          "subHeader": subHeading,
          "tagline": tagline[0],
        },
        "niches": pageSection[1] {
          title,
          "id": id.current,
          "header": {
            "heading": heading.heading,
            "codeHeading": heading.codeHeading.code,
            "enableHtmlHeader": heading.conditionalHeading,
          },
          "subHeader": subHeading,
          "tagline": tagline[0],
          "nicheList": references[]->{
             title,
          },
        },
        "ourSteps": pageSection[2] {
            title,
            "id": id.current,
            "header": {
                "heading": heading.heading,
                "codeHeading": heading.codeHeading.code,
                "enableHtmlHeader": heading.conditionalHeading,
            },
            "subHeader": subHeading,
            "tagline": tagline[0],
            "columns": columns[]{
                ...
            }
        },
        "ourProjects": pageSection[3] {
            title,
            "id": id.current,
            "header": {
                "heading": heading.heading,
                "codeHeading": heading.codeHeading.code,
                "enableHtmlHeader": heading.conditionalHeading,
            },
            "subHeader": subHeading,
            "tagline": tagline[0],
            "projects": references[]->{
            ...,
            client,
            "slug": slug.current,
            "coverImage": coverImage.asset->{
                altText,
                url,
                description,
                title
            },
            "tags": tags[]->,
            "category": category->title,
            duration,
            overview,
          },
        },
        
    }
}
`;

const postFields = groq`
    "id": _id,
    title,
    publishedAt,
    excerpt,
    "body": body[]{
        ...,
        listItem
    },
    "tags": tags[]->,
    "category": category->title,
    "author": author->name, 
    "coverImage": coverImage.asset->{
        altText,
        url,
        description,
        title
    },
    "slug": slug.current,
    "seo": seo{
      "title": seoTitle,
      "description": seoDescription,
      "ogImage": openGraph.ogImage.asset->,
      "url": openGraph.url
    },
`;

export const postsQuery = groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
        ${postFields}
    }
`;

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;
