import { User } from "../types/auth";

type Props = {
  currentUser: User | undefined;
};

export const getCurrentUserDisplayName = ({ currentUser }: Props) => {
  return currentUser?.name || currentUser?.email?.split("@")[0] || "unknown";
};
