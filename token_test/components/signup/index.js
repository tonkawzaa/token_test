'use strict';

app.signup = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_signup
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_signup
(function(parent) {
    var token= null ;
    var signupModel = kendo.observable({
        fields: {
            occupation: '',
            citizenid: '1349900155471',
            birthdate: '',
            mobile: '045281842',
            gender: '',
            confirmpassword: 'password',
            password1: 'password',
            lastname: 'last',
            firstname: 'first',
            email: 'top@gmail.com',
        },
        submit: function() {
             $.ajax({
                        type: "POST",
                        url: "https://greenapi.odooportal.com/api/v1/signup",
                        contentType: "application/json",
                        data: JSON.stringify({ login: signupModel.fields.email,
                                              firstname: signupModel.fields.firstname,
                                              lastname: signupModel.fields.lastname,
                                              password: signupModel.fields.password1,
                                              confirm_password: signupModel.fields.confirmpassword,
                                              mobile: signupModel.fields.mobile,
                                              gender: signupModel.fields.gender,      
                                              birth_date: kendo.toString(signupModel.fields.birthdate, "yyyy-MM-dd"),
                                             // birth_date: "1986-10-05",
                                              citizen_id: signupModel.fields.citizenid,
                                              occupation: signupModel.fields.occupation,
                                             }),
                        success: function(result) {
                            //navigator.notification.alert(result);
                            
                            token = null ;
                            localStorage.clear();
                            localStorage.setItem(token,result.data.access_token);
                            navigator.notification.alert(result.data.access_token);
                            //token = result.data.access_token;
                            
                        },
                        error: function(result) {
                            navigator.notification.alert(result);
                            
                        }
                });
        },
        cancel: function() {}
    });

    parent.set('signupModel', signupModel);
})(app.signup);

// START_CUSTOM_CODE_signupModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_signupModel