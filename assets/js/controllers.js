var Controller = {
    getController: function () {
        if ($('body').attr('data-controller')) {
            eval('Controller.' + $('body').attr('data-controller') + '();');
        }
    },
    global: function () {

    },   
    home: function () {
      
    }      
};

$(document).ready(function (){
    Controller.getController(); 
    Controller.global();    
});
      
      