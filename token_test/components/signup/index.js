'use strict';

app.signup = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

(function(parent) {
    var token= null ;
    var signupModel = kendo.observable({
        fields: {
            occupation: '',
            citizenid: '1349900155471',
            birthdate: '',
            mobile: '+66830777936',
            gender: '',
            confirmpassword: 'password',
            password1: 'password',
            lastname: 'lastname',
            firstname: 'firstname',
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
                                              birth_date: kendo.toString(new Date(signupModel.fields.birthdate), "yyyy-M-dd"),  
                                              citizen_id: signupModel.fields.citizenid,
                                              occupation: signupModel.fields.occupation
                                             }),
                        success: function(result) {
                            token = null ;
                            localStorage.clear();
                            localStorage.setItem(token,result.data.access_token);
                            navigator.notification.alert(result.data.access_token);
                            app.mobileApp.navigate('components/home/view.html');
                            
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