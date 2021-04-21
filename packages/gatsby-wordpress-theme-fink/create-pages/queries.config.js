// slug is required

module.exports = {
    GET_FRONT_PAGE: `
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
        }
    `,
    GET_WORK_PAGE: `
        query {
            wpPage(slug: {eq: "work"}) {
                slug
                id
                title
                acfWork {
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
                    }
                }
            }
        }
    `
}