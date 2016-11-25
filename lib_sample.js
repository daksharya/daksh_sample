
LibName = window.LibName || {};

LibName = function () {

    var yourVar1;
    var yourVar2;

  
    publicFunc1 = function (a) {
        var name = 'daksh';
        document.getElementById(a.id).value='Input from lib function';
        //alert('Hello from ' + name + ' Library function'+a.className);
    };

    privateFunc2 = function () {

    };


    return {
        "publicFuncName": publicFunc1
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