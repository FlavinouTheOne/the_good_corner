import { gql } from "@apollo/client";

export const queryAllAds = gql`
    query AllAds($skip: Float, $take: Float, $where: AdsWhere) {
        allAds(skip: $skip, take: $take, where: $where) {
        title
        description
        id
        owner
        price
        picture
        location
        createdAt
        category {
            id
            name
        }
        tags {
            id
            name
        }
        }
        allAdsCount(where: $where)
    }
`;

export const mutationCreateAd = gql`
    mutation CreateAd($data: AdCreateInput!) {
        createAd(data: $data) {
            id
            title
            description
            owner
            price
            picture
            location
            createdAt
            category {
                id
            }
        }
    }
`;

export const mutationUpdateAd = gql`
    mutation UpdateAd($data: AdUpdateInput!, $updateAdId: ID!) {
        updateAd(data: $data, id: $updateAdId) {
            id
            title
            description
            owner
            price
            picture
            location
            createdAt
            category {
                id
                name
            }
        }
    }
`;

export const mutationDeleteAd = gql`
    mutation DeleteAd($deleteAdId: ID!) {
        deleteAd(id: $deleteAdId) {
        id
        title
        description
        }
    }
`;

export const queryAllCategories = gql`
    query Query {
        allCategories {
        id
        name
        }
  }
`;

export const mutationCreateCategory = gql`
    mutation CreateCategory($data: CategoryCreateInput!) {
        createCategory(data: $data) {
        name
        id
        }
    }
`

export const mutationUpdateCategory = gql`
    mutation UpdateCategory($data: CategoryUpdateInput!, $updateCategoryId: ID!) {
        updateCategory(data: $data, id: $updateCategoryId) {
        id
        name
        }
    }
`;

export const mutationCreateTag = gql`
    mutation CreateTag($data: TagCreateInput!) {
        createTag(data: $data) {
        id
        name
        }
    }
`

export const mutationUpdateTag = gql`
    mutation UpdateTag($data: TagUpdateInput!, $updateTagId: ID!) {
        updateTag(data: $data, id: $updateTagId) {
        id
        name
        }
    }
`;