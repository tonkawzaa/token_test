'use strict';

app.formView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_formView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_formView
(function(parent) {
    
    var token= null ;

    
    
    var formViewModel = kendo.observable({
        fields: {
            radio2: '',
            radio: '',
            password: 'admin',
            username: 'admin',
        },
       
        submit: function() {
            
            $.ajax({
                        type: "POST",
                        url: "https://greenapi.odooportal.com/api/v1/login",
                        contentType: "application/json",
                        data: JSON.stringify({ login: formViewModel.fields.username,password: formViewModel.fields.password }),
                        success: function(result) {
                            token = null ;
                            localStorage.setItem(token,result.data.access_token);
                            navigator.notification.alert(result.data.access_token);
                            //token = result.data.access_token;
                        },
                        error: function() {
                            navigator.notification.alert("Unfortunately,");
                            
                        }
                });
            
        },
        cancel: function() {
            token = null;
            token = localStorage.getItem(token);
            //token = localStorage.getItem(token);
            if (token)
        {
            navigator.notification.alert(token);
            //window.location.href = "components/home/view.html";
            app.mobileApp.navigate('components/home/view.html');
        }else{
            navigator.notification.alert("token is null");
        };
           
        },
        logout: function() {
            //localStorage.removeItem(token);
            localStorage.clear();
            
        	token = localStorage.getItem(token);
            navigator.notification.alert(token);
        },
        showtoken: function() {
            //localStorage.removeItem(token);
            token = null;
        	token = localStorage.getItem(token);
            navigator.notification.alert(token);
        },
        viewpoint: function() {
            var point = null;
            var header_token = null;
            
            token = null;
        	token = localStorage.getItem(token);
            header_token =  "Bearer "+token;
            //navigator.notification.alert(header_token);
            $.ajax({
                        type: "POST",
                        url: "https://greenapi.odooportal.com/api/v1/points",
                        contentType: "application/json",
                		headers: {'Authorization' : header_token},
                        success: function(result) {
                            
                            navigator.notification.alert(result.data);
                            
                     
                        },
                        error: function() {
                            navigator.notification.alert("Unfortunately,");
                            
                        }
                });
            
        },
    });

    parent.set('formViewModel', formViewModel);
})(app.formView);

// START_CUSTOM_CODE_formViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_formViewModel