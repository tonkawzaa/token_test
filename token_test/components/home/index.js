'use strict';

app.home = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

(function(parent) {
    
    var token= null ;           
    
    var homeModel = kendo.observable({
        
        
        
        data: new kendo.data.DataSource({
            top : localStorage.getItem(token),
            transport: {
                read: function(options) {
                    var header_token = null;
                    var top = null;
            
            		token = null;
        			token = localStorage.getItem(token);
            		header_token =  "Bearer "+token;
                    
                          $.ajax({
                        type: "POST",
                        url: "https://greenapi.odooportal.com/api/v1/points",
                        contentType: "application/json",
                		headers: {'Authorization' : header_token},
                        success: function(result) {
                            
                            navigator.notification.alert(result.data);
                            //localStorage.setItem(top,result.data);
                         
                     
                        },
                        error: function() {
                            navigator.notification.alert("Unfortunately,");
                            
                        }
                });
                    }
            },
        schema: {
            data: "data"
        }
    }),
        
       
        
        showtoken: function() {
            token = null;
        	token = localStorage.getItem(token);
            navigator.notification.alert(token);
        },
        
        logout: function() {
            //localStorage.removeItem(token);
            localStorage.clear();
            
        	token = localStorage.getItem(token);
            navigator.notification.alert(token);
        },
        
        });

    parent.set('homeModel', homeModel);
})(app.home);