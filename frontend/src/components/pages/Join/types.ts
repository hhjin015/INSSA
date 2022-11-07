export interface AccountValueTypes {
  [key: string]: string;
  name: string;
  studentNumber: string;
  email: string;
  validationToken: string;
  emailAgain: string;
  password: string;
  passwordAgain: string;
}

export interface FailToJoin {
  message: string;
}

export interface JoinReturnData {
  status: boolean;
  message: string;
}
