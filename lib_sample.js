var imported = document.createElement('script');
imported.src = 'jquery-1.9.1.min.js';
document.head.appendChild(imported);

LibName = window.LibName || {};

LibName = function () {

    var yourVar1;
    var yourVar2;

  
    publicFunc1 = function (a,b) {
        debugger
        //var doc_id = document.getElementById(a.id).value;
        var doc_id = a.id;
        if (doc_id == 'inpt1') {
            $('#' + b).load('Default2.aspx');
        }
        else if(doc_id=='inpt2'){
            $('#' + b).load('Default3.aspx');
        }
        
        //alert('Hello from ' + name + ' Library function'+a.className);
        
    };

 
    return {
        "ShowModal": publicFunc1
    }

}();


LibName1 = window.LibName1 || {};

LibName1 = function () {

   

    publicFunc2 = function () {
        var name = 'daksh';
        alert('Hello from ' + name + ' Library function1');
    };

  


    return {
        "publicFuncName1": publicFunc2
    }

}();