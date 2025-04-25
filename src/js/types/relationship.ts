export type Relationship = {
  id: string;
  name: string;
  username: string;
  bio: string;
  followingsCount: number;
  followersCount: number;
  email: string;
  avatarUrl: string | null;
  isFollowed: boolean;
};
