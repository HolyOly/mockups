/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ICollections {
  total: number;
  total_pages: number;
  results: ICollectionItem[];
}

export interface ICollectionItem {
  cover_photo: ICoverPhoto;
  curated: boolean;
  description: null | string;
  featured: boolean;
  id: string;
  last_collected_at: string;
  links: any;
  preview_photos: any[];
  private: boolean;
  published_at: string;
  share_key: string;
  tags: any[];
  title: string;
  total_photos: number;
  updated_at: string;
  user: any;
}

export interface ICoverPhoto {
  id: string;
  created_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  user: any;
  urls: IUrls;
}

export interface IUrls {
  full: string;
  raw: string;
  small: string;
  small_s3: string;
  thumb: string;
  regular: string;
}

export const makeUrl = (query: string, page = 1, perPage = 12) => {
  return `https://api.unsplash.com/search/collections?client_id=${process.env.REACT_APP_API_KEY_COLLECTION}&query=${query}&page=${page}&per_page=${perPage}`;
};
