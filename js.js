// function getPerson(id) {
//     for( var i=0;i<personArray.length;i++) {
//         if(personArray[i].id == id)
//             return personArray[i];
//     }  
//         return {
//             id: "",
//             name: "nf",
//             location: "loc"
//         };
    
// }

ngApp.controller('listController',function($scope,$http,$q){
    var deferred = $q.defer();
    $scope.productArray=[];
    $http.get('categories.json').success(function(response){
        $scope.productA=response;
        deferred.resolve($scope.productA);
    });

    ajaxUtils.simulate(function(){
        $scope.$apply(function(){
             deferred.promise.then(function(data){
                
                $scope.productArray=[].concat(data);
            });
            // $scope.personArray = personArray;
        });
        $('ul.ngRepeat').listview('refresh');
    });
});

ngApp.controller('viewController',function($scope, $filter, $routeParams, $location, $http){
    $http({url:'items.json',method:'GET'}).success(function(response){
        $scope.indianProductArray=response.indian.filter(function(item) { return item.product_id == $routeParams.id; });
        $scope.foreignProductArray=response.foreign.filter(function(item) { return item.product_id == $routeParams.id; });
    });

    ajaxUtils.simulate(function(){
        $scope.$apply(function(){
            $scope.indianProducts=[].concat($scope.indianProductArray);
            $scope.foreignProducts=[].concat($scope.foreignProductArray);
        });
     $('ul.ngRepeat').listview('refresh');
    });
});

