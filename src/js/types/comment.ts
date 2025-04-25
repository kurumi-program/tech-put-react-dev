export type Comment = {
  id: string;
  userId: string;
  content: string;
  userName: string;
  userEmail: string;
  userAvatarUrl: string | null;
  createdAt: string;
  mention: string;
  mentionUsers: { id: number; username: string }[];
};
