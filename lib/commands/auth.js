import { __awaiter } from "tslib";
import { Auth } from "@aws-amplify/auth";
const checkUser = () => {
    Auth.currentAuthenticatedUser().then(user => console.log({ user })).catch(err => console.log(err));
};
const signUp = ({ user, pass }) => __awaiter(void 0, void 0, void 0, function* () {
    const signedUp = yield Auth.signUp({
        username: user.toLowerCase(),
        password: pass
    }).catch(signedUpError => console.warn({ signedUpError }));
});
const confirmSignUp = ({ user, code = "000000" }) => __awaiter(void 0, void 0, void 0, function* () {
    const confirmed = yield Auth.confirmSignUp(user, code, {
        forceAliasCreation: true
    })
        .then(data => console.log({ data }))
        .catch(confirmationError => console.log({ confirmationError }));
});
const logIn = ({ user, pass, code = "000000" }) => __awaiter(void 0, void 0, void 0, function* () {
    const userSignedIn = yield Auth.signIn(user.toLowerCase(), pass)
        .then(userSigned => {
        if (userSigned.challengeName === "NEW_PASSWORD_REQUIRED") {
            Auth.completeNewPassword(userSigned, pass).then(userChallenged => {
                console.log({ userChallenged });
            });
        }
        return userSigned;
    })
        .catch(logInError => {
        console.warn({ logInError });
        switch (logInError.code) {
            case "UserNotFoundException":
                console.warn("Signing up...");
                return signUp({ user, pass });
            case "UserNotConfirmedException":
                console.warn("Confirming...");
                return confirmSignUp({ user, code });
            case "NotAuthorizedException":
                console.warn("User not authorized to perform this action");
                return;
            case "PasswordResetRequiredException":
                console.warn("Please reset your password");
            default:
                return;
        }
    });
    return { payload: userSignedIn.signInUserSession.idToken.payload };
});
export const auth = {
    logIn,
    signUp,
    confirmSignUp,
    checkUser
};
