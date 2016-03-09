'use strict';

app.signup = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_signup
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_signup
(function(parent) {
    var signupModel = kendo.observable({
        fields: {
            occupation: '',
            citizenid: '',
            birthdate: '',
            mobile: '',
            gender: '',
            confirmpassword: '',
            password1: '',
            lastname: '',
            firstname: '',
            login: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('signupModel', signupModel);
})(app.signup);

// START_CUSTOM_CODE_signupModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_signupModel