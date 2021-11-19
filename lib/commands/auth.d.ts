/// <reference types="amazon-cognito-identity-js" />
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
    }) => Promise<{
        signedUp: void | import("amazon-cognito-identity-js").ISignUpResult;
    }>;
    confirmSignUp: ({ user, code }: {
        user: any;
        code?: string;
    }) => Promise<{
        confirmed: void;
    }>;
    checkUser: () => void;
};
