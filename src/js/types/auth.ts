// サインアップ
export type LoginParams = {
  email: string;
  password: string;
  passwordConfirmation?: string;
};

//パスワード再設定
export type ResetPassParams = {
  password: string;
  passwordConfirmation: string;
  resetPasswordToken: string;
};

// ユーザー
export type User = {
  id: number;
  uid: string;
  provider: string;
  email: string;
  name: string;
  nickname?: string;
  image?: string;
  allowPasswordChange: boolean;
  created_at: Date;
  updated_at: Date;
};

//googleログイン
export type GoogleLoginParams = {
  credential: string;
};
