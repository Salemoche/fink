// slug is required

module.exports = {
    GET_FRONT_PAGE: `
        query {
            wpPage(isFrontPage: {eq: true}) {
                slug
                id
                title
                acfStart {
                    landingVideo {
                        mediaItemUrl
                    }
                    partnersTitle
                    partners {
                        link
                        logo {
                            link
                            altText
                            localFile {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                    }
                    projects {
                        ... on WpPost {
                            title
                            id
                            slug
                            excerpt
                            acfProject {
                                projectMetaLine
                                homeImageNoTexture {
                                    altText
                                    localFile {
                                        childImageSharp {
                                        gatsbyImageData
                                        }
                                    }
                                }
                                homeImageTexture {
                                    altText
                                    localFile {
                                        childImageSharp {
                                        gatsbyImageData
                                        }
                                    }
                                }
                            }
                            categories {
                                nodes {
                                    id
                                    name
                                    slug
                                }
                            }
                        }
                    }
                }
            }
        }
    `,
    GET_ABOUT_PAGE: `
        query {
            wpPage(slug: {eq: "about"}) {
                slug
                id
                title
                acfAbout {
                    fieldGroupName
                    aboutText
                    aboutTitle
                    aboutImage {
                        altText
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                    contact {
                        contactItem
                    }
                    pressText
                    pressTitle
                    pressImage {
                        altText
                        localFile {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    `,
    GET_WORK_PAGE: `
        query {
            wpPage(slug: {eq: "work"}) {
                slug
                id
                title
                acfWork {
                    extraTile
                    projects {
                        ... on WpPost {
                            title
                            id
                            slug
                            acfProject {
                                projectMetaLine
                                homeImageNoTexture {
                                    altText
                                    localFile {
                                        childImageSharp {
                                        gatsbyImageData
                                        }
                                    }
                                }
                                homeImageTexture {
                                    altText
                                    localFile {
                                        childImageSharp {
                                        gatsbyImageData
                                        }
                                    }
                                }
                                projectOverviewImageTexture {
                                    altText
                                    localFile {
                                        childImageSharp {
                                        gatsbyImageData
                                        }
                                    }
                                }
                                projectOverviewImageNoTexture {
                                    altText
                                    localFile {
                                        childImageSharp {
                                        gatsbyImageData
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `,
    GET_POSTS: `
        query {
            allWpPost(limit: 100) {
                edges {
                    node {
                        id
                        title
                        content
                        slug
                        uri
                        acfProject {
                            homeImageNoTexture {
                                altText
                                localFile {
                                    childImageSharp {
                                    gatsbyImageData
                                    }
                                }
                            }
                            homeImageTexture {
                                altText
                                localFile {
                                    childImageSharp {
                                    gatsbyImageData
                                    }
                                }
                            }
                            projectDetailImage {
                                altText
                                localFile {
                                    childImageSharp {
                                    gatsbyImageData
                                    }
                                }
                            }
                            projectOverviewImageTexture {
                                altText
                                localFile {
                                    childImageSharp {
                                    gatsbyImageData
                                    }
                                }
                            }
                            projectOverviewImageNoTexture {
                                altText
                                localFile {
                                    childImageSharp {
                                    gatsbyImageData
                                    }
                                }
                            }
                        }

                        acfContent {
                            sections {
                                content {
                                    ... on WpPost_Acfcontent_sections_Content_TextLayout {
                                        fieldGroupName
                                        text
                                    }
                                    ... on WpPost_Acfcontent_sections_Content_ImageLayout {
                                        fieldGroupName
                                        imageCaption
                                        image {
                                            altText
                                            caption
                                            localFile {
                                                childImageSharp {
                                                    gatsbyImageData
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `,
    GET_PAGES: `
        query {
            allWpPage {
                edges {
                    node {
                        title
                        uri
                        slug
                        id
                        content
                    }
                }
            }
        }
    `,
    GET_ALL: `
        query {
            wpPage(isFrontPage: {eq: true}) {
                slug
                id
                title
                acfStart {
                    partnersTitle
                    partners {
                        link
                        logo {
                            altText
                            localFile {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                    }
                    projects {
                        ... on WpPost {
                            title
                            id
                            slug
                            acfProject {
                                projectMetaLine
                                homeImageNoTexture {
                                    altText
                                    localFile {
                                        childImageSharp {
                                        gatsbyImageData
                                        }
                                    }
                                }
                                homeImageTexture {
                                    altText
                                    localFile {
                                        childImageSharp {
                                        gatsbyImageData
                                        }
                                    }
                                }
                            }
                            categories {
                                nodes {
                                    id
                                    name
                                    slug
                                }
                            }
                        }
                    }
                }
            }
            allWpPost(limit: 100) {
                edges {
                    node {
                        id
                        title
                        content
                        slug
                        uri
                        acfProject {
                            homeImageNoTexture {
                                altText
                                localFile {
                                    childImageSharp {
                                    gatsbyImageData
                                    }
                                }
                            }
                            homeImageTexture {
                                altText
                                localFile {
                                    childImageSharp {
                                    gatsbyImageData
                                    }
                                }
                            }
                            projectDetailImage {
                                altText
                                localFile {
                                    childImageSharp {
                                    gatsbyImageData
                                    }
                                }
                            }
                            projectOverviewImage {
                                altText
                                localFile {
                                    childImageSharp {
                                    gatsbyImageData
                                    }
                                }
                            }
                        }

                        acfContent {
                            sections {
                                content {
                                    ... on WpPost_Acfcontent_sections_Content_TextLayout {
                                        fieldGroupName
                                        text
                                    }
                                    ... on WpPost_Acfcontent_sections_Content_ImageLayout {
                                        fieldGroupName
                                        image {
                                            altText
                                            caption
                                            localFile {
                                                childImageSharp {
                                                    gatsbyImageData
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            allWpPage {
                edges {
                    node {
                        title
                        uri
                        slug
                        id
                        content
                    }
                }
            }
        }
    `
}