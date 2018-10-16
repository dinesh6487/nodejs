angular.module('TestApp',[]);

angular.module('TestApp')
        .controller('MainController',ctrlFunction);

function ctrlFunction(){
    this.people = clientPeople;
};