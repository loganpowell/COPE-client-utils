export declare const checkUser: () => void;
export declare const signUp: ({ user, pass }: {
    user: any;
    pass: any;
}) => Promise<void>;
export declare const confirmSignUp: ({ user, code }: {
    user: any;
    code?: string;
}) => Promise<void>;
export declare const logIn: ({ user, pass, code }: {
    user: any;
    pass: any;
    code?: string;
}) => Promise<{
    payload: any;
}>;
