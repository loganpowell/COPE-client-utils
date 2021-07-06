export declare const auth: {
    logIn: ({ user, pass, code }: {
        user: any;
        pass: any;
        code?: string;
    }) => Promise<{
        payload: any;
    }>;
    signUp: ({ user, pass }: {
        user: any;
        pass: any;
    }) => Promise<void>;
    confirmSignUp: ({ user, code }: {
        user: any;
        code?: string;
    }) => Promise<void>;
    checkUser: () => void;
};
