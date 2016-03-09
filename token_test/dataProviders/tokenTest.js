'use strict';

(function() {
    var provider = app.data.tokenTest =  new Everlive({
            appId: 'clysxjtxolrzbus3',
            scheme: 'https',
            authentication: {
                persist: true
            }
        }),
        /*
        accessTokenCacheKey = 'tokenTest_access_token',
        providerAuthentication = provider.authentication,
        providerLogin = provider.Users.login,
        */
        authentication = {
            setCachedAccessToken: function setCachedAccessToken(token) {
                if (localStorage) {
                    localStorage.setItem(accessTokenCacheKey, JSON.stringify(token));
                } else {
                    app[accessTokenCacheKey] = token;
                }
            },
            getCachedAccessToken: function getCachedAccessToken() {
                if (localStorage) {
                    return JSON.parse(localStorage.getItem(accessTokenCacheKey));
                    
                } else {
                    return app[accessTokenCacheKey];
                }
            }/*,
            getCacheAccessTokenFn: function getCacheAccessTokenFn(callback) {
                return function cacheAccessToken(data) {
                    if (data && data.result) {
                        authentication.setCachedAccessToken(data.result);
                    }

                    callback(data);
                };
            },
            loadCachedAccessToken: function loadCachedAccessToken() {
                var token = authentication.getCachedAccessToken();

                if (token) {
                    providerAuthentication.setAuthorization(
                        token.access_token,
                        token.token_type,
                        token.principal_id);

                    provider.Users.currentUser(function _currentUserSuccess(data) {
                        if (data.result) {
                            app.user = data.result;
                        } else {
                            authentication.setCachedAccessToken(null);
                            providerAuthentication.clearAuthorization();
                        }
                    }, function _currentUserFailure(err) {
                        authentication.setCachedAccessToken(null);
                        providerAuthentication.clearAuthorization();
                    });
                }
            }*/
        };
    /*

    authentication.loadCachedAccessToken();
    provider.Users.login = function cacheAccessTokenLogin(
        email, password, success, error) {
        providerLogin.call(this, email, password,
            authentication.getCacheAccessTokenFn(success), error);
    };
*/
}());



// START_CUSTOM_CODE_tokenTest
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_tokenTest