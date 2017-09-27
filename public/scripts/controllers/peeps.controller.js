myApp.controller('WhereMyPeeps', function ($http, PeepsService) {
    var vm = this;
    // vm.thePeeps = PeepsService.friends;
    vm.newPeep = function () {
        console.log('in newPeep');
        var peepToAdd = {
            name: vm.nameIn,
            location: vm.locationIn
        }; //end peepToAdd
        PeepsService.peeps.add(peepToAdd);
    }; //end whereMyPeepsAt
    vm.whereMyPeepsAt = function () {
        console.log('in whereMyPeepsAt');
        PeepsService.peeps.get();
        vm.thePeeps = PeepsService.friends;
        // console.log('PeepsService.friends ->', PeepsService.friends);
        console.log('vm.thePeeps ->', vm.thePeeps);
    }; //end whereMyPeepsAt
}); // end controller