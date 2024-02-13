const authConfig = {
    authority: 'https://shibboleth.umich.edu/.well-known/openid-configuration',
    client_id: '4d9cbf8b-41fb-41bc-8fb8-a633f40e512b',
    redirect_uri: 'https://tech-consulting.it.umich.edu/redirect_uri',
    response_type: 'code id_token token',
    scope: 'openid info profile email address phone eduperson_affiliation',
    post_logout_redirect_uri: 'https://tech-consulting.it.umich.edu/',
    userinfo_endpoint: 'https://shibboleth.umich.edu/idp/profile/oidc/userinfo',
  };

 export default authConfig;