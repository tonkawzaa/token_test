'use strict';



app.detailsgifts = kendo.observable({
    
      index : 6666,
      detailsdata: new kendo.data.DataSource({
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: "https://greenapi.odooportal.com/api/v1/gift_by_id",
                            data: JSON.stringify({ id: "3" }),
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (result) {
                                navigator.notification.alert(result);
                            }
                        });
                    }
            },
        schema: {
            data: "data"
        }
    }),
     
        
    
   
    onShow: function(e) {
        
        var item = e.view.params.id;
        
        
        var location = window.location.toString();
        var id = location.substring(location.lastIndexOf('?')+4);
        
        
        var data1= {
            title: item,
            title2:location,
            title3:id,
            
        };
        
        kendo.bind($('#data1Content'),data1, kendo.mobile.ui);
                
        
        
        var data2 = new kendo.observable({
            
            top1 : "top2",
    	});
        kendo.bind($('#dataContent'),data2, kendo.mobile.ui);

    },
    
    
    
    
    
    afterShow: function() {}
});

