import { AuthConsumer } from "./AuthProvider";

const Callback = () => (
    <AuthConsumer>
        {({ signinRedirectCallback }) => {
            signinRedirectCallback();
            return <span>Loading</span>
        }}
    </AuthConsumer>
)

export default Callback