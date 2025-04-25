export type Profile = {
  id: string;
  userId: string;
  userName: string;
  userUserName: string;
  email: string;
  bio: string;
  avatarUrl: string | null;
  postCount: string;
  hasLikedPosts: boolean;
  likedCount: number;
  hasPosts: boolean;
  followingsCount: number;
  followersCount: number;
};
