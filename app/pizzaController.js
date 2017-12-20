app.controller('pizzaController', [
    '$scope',
    function($scope) {
        $scope.model = {
            title: 'Pizza Builder',
            availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken',
                'Mushrooms', 'Onion', 'Olives', 'Green Peppers'
            ],
            toppings: [],
            sAlert: false,
            sNoResult: true
        };
        $scope.closeAlert = function() {
            $scope.model.sAlert = false;
            $scope.model.sNoResult = false;
        };
        $scope.addTopping = function(topping) {
            $scope.model.toppings.push(topping);
            $scope.model.search = null;
            $scope.model.sAlert = true;
            $scope.model.sNoResult = false;
        };
        $scope.$watch('filtered', function(newValue, oldValue, scope) {
            //Do anything with $scope.letters
            if (newValue == undefined)
                $scope.model.sNoResult = false;
            else {
                $scope.model.sNoResult = (newValue.length < 1) && ($scope.model.search);
                //console.log(n)
            }
        });
    }
]);