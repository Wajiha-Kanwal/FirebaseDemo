/**
 * Created by WajihaKanwal on 4/21/2015.
 */

angular.module('scheduleApp', ['firebase'])
    .controller('mainController', function($scope, $firebase, $firebaseObject){
        var ref = new Firebase('https://fire-base-in-action.firebaseio.com');
        var fb = ref.child('days');
        var syncObject = $firebaseObject(fb);

        var dataObj =  {
            monday: {
                name: 'Monday',
                slots: {
                    '0900': {
                        time: '9:00 am',
                        booked: false
                        },
                    '1100': {
                        time: '11:00 am',
                        booked: false
                    }
                }
            },
            tuesday: {
                name: 'Tuesday',
                slots: {
                    '0900': {
                        time: '9:00 am',
                        booked: false
                        },
                    '1100': {
                        time: '11:00 am',
                        booked: false
                    }
                }
            },
            wednesday: {
                name: 'Wednesday',
                slots: {
                    '0900': {
                        time: '9:00 am',
                        booked: false
                        },
                    '1100': {
                        time: '11:00 am',
                        booked: false
                    }
                }
            },
            thursday: {
                name: 'Thursday',
                slots: {
                    '0900': {
                        time: '9:00 am',
                        booked: false
                        },
                    '1100': {
                        time: '11:00 am',
                        booked: false
                    }
                }
            },
            friday: {
                name: 'Friday',
                slots: {
                    '0900': {
                        time: '9:00 am',
                        booked: false
                        },
                    '1100': {
                        time: '11:00 am',
                        booked: false
                    }
                }
            },
            saturday: {
                name: 'Saturday',
                slots: {
                    '0900': {
                        time: '9:00 am',
                        booked: false
                        },
                    '1100': {
                        time: '11:00 am',
                        booked: false
                    }
                }
            },
            sunday: {
                name: 'Sunday',
                slots: {
                    '0900': {
                        time: '9:00 am',
                        booked: false
                        },
                    '1100': {
                        time: '11:00 am',
                        booked: false
                    }
                }
            }
        };
        syncObject.$bindTo($scope, 'days');

        $scope.reset = function () {
            fb.set(dataObj, $scope.onComplete);
        };

        $scope.onComplete = function(error) {
            if (error) {
                console.log('Synchronization failed');
            } else {
                console.log('Synchronization succeeded');
            }
        };
    });