(function () {
    'use strict';

    angular
        .module('app', [      ])
        .controller('myctrl', myctrl);


    function myctrl() {
        var vm = this;
        vm.items = [
                     {name: 'Item 1'},
                     {name: 'Item 2'}
                  ];

    }
})();