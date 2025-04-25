export type Notice = {
  id: string;
  message: string;
  createdAt: string;
  senderId: string;
  senderName: string;
  senderUserName: string;
  senderUserAvatarUrl: string | null;
  likeSenderName: string;
  read: boolean;
  postId: string;
  commentId: string;
};
