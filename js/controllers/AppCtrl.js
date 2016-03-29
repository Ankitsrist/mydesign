app.controller('AppCtrl', function ($scope, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }

    var fab = document.getElementById('fab');
    fab.addEventListener('click', function () {
        //location.href = 'https://twitter.com/satish_vr2011';
        window.open('https://twitter.com/satish_vr2011', '_blank');
    });

    // .fromTemplate() method
    $ionicPopover.fromTemplateUrl('templates/popover.html', {
        scope: $scope
    }).then(function (popover) {
        $scope.popover = popover;
    });

    $scope.openPopover = function ($event) {
        $scope.popover.show($event);
    };
    $scope.closePopover = function () {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.popover.remove();
    });
});