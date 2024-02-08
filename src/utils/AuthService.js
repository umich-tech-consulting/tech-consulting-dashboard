import { IDENTITY_CONFIG } from "./AuthConst";
import { UserManager, WebStorageStateStore, Log, User } from "oidc-client-ts";

class AuthService {
    constructor() {
        this.userManager = new UserManager({
            ...IDENTITY_CONFIG,
            userStore: new WebStorageStateStore({ store: window.sessionStorage })
        });
    }

    signinRedirectCallback = () => {
        this.userManager.signinRedirectCallback().then(() => {
            // Your callback logic here
        });
    }
}

export default AuthService;
