(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  angular.module('starter.controllers', []).controller('DashCtrl', function ($scope) {}).controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  }).controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  }).controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
};

},{}],2:[function(require,module,exports){
'use strict';

var _controllers = require('./controllers/');

var _controllers2 = _interopRequireDefault(_controllers);

var _services = require('./services/');

var _services2 = _interopRequireDefault(_services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _controllers2.default)();
(0, _services2.default)();

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services']).run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}).config(function ($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  }).state('tab.chats', {
    url: '/chats',
    views: {
      'tab-chats': {
        templateUrl: 'templates/tab-chats.html',
        controller: 'ChatsCtrl'
      }
    }
  }).state('tab.chat-detail', {
    url: '/chats/:chatId',
    views: {
      'tab-chats': {
        templateUrl: 'templates/chat-detail.html',
        controller: 'ChatDetailCtrl'
      }
    }
  }).state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');
});

},{"./controllers/":1,"./services/":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  angular.module('starter.services', []).factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/ben.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/perry.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'img/mike.png'
    }];

    return {
      all: function all() {
        return chats;
      },
      remove: function remove(chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function get(chatId) {
        for (var i = 0; i < chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      }
    };
  });
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9jb250cm9sbGVycy9pbmRleC5qcyIsImpzL3NjcmlwdC5qcyIsImpzL3NlcnZpY2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2tCQ0FlLFlBQVk7QUFDekIsU0FBTyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLENBQUMsQ0FFdEMsVUFBVSxDQUFDLFVBQVUsRUFBRSxVQUFTLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FFM0MsVUFBVSxDQUFDLFdBQVcsRUFBRSxVQUFTLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7Ozs7OztBQVMvQyxVQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMzQixVQUFNLENBQUMsTUFBTSxHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQzdCLFdBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDcEIsQ0FBQztHQUNILENBQUMsQ0FFRCxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsVUFBUyxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRTtBQUNsRSxVQUFNLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0dBQzlDLENBQUMsQ0FFRCxVQUFVLENBQUMsYUFBYSxFQUFFLFVBQVMsTUFBTSxFQUFFO0FBQzFDLFVBQU0sQ0FBQyxRQUFRLEdBQUc7QUFDaEIsbUJBQWEsRUFBRSxJQUFJO0tBQ3BCLENBQUM7R0FDSCxDQUFDLENBQUM7Q0FDTjs7Ozs7Ozs7Ozs7Ozs7O0FDMUJELDRCQUFhLENBQUM7QUFDZCx5QkFBVTs7Ozs7Ozs7O0FBQUMsQUFVWCxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxrQkFBa0IsQ0FB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ckIsQ0FBQyxDQUFDOztBQUVILFdBQU87QUFDTCxTQUFHLEVBQUUsZUFBVztBQUNkLGVBQU8sS0FBSyxDQUFDO09BQ2Q7QUFDRCxZQUFNLEVBQUUsZ0JBQVMsSUFBSSxFQUFFO0FBQ3JCLGFBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztPQUN0QztBQUNELFNBQUcsRUFBRSxhQUFTLE1BQU0sRUFBRTtBQUNwQixhQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNyQyxjQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQ3BDLG1CQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztXQUNqQjtTQUNGO0FBQ0QsZUFBTyxJQUFJLENBQUM7T0FDYjtLQUNGLENBQUM7R0FDSCxDQUFDLENBQUM7Q0FDTiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGFuZ3VsYXIubW9kdWxlKCdzdGFydGVyLmNvbnRyb2xsZXJzJywgW10pXG5cbiAgICAuY29udHJvbGxlcignRGFzaEN0cmwnLCBmdW5jdGlvbigkc2NvcGUpIHt9KVxuXG4gICAgLmNvbnRyb2xsZXIoJ0NoYXRzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgQ2hhdHMpIHtcbiAgICAgIC8vIFdpdGggdGhlIG5ldyB2aWV3IGNhY2hpbmcgaW4gSW9uaWMsIENvbnRyb2xsZXJzIGFyZSBvbmx5IGNhbGxlZFxuICAgICAgLy8gd2hlbiB0aGV5IGFyZSByZWNyZWF0ZWQgb3Igb24gYXBwIHN0YXJ0LCBpbnN0ZWFkIG9mIGV2ZXJ5IHBhZ2UgY2hhbmdlLlxuICAgICAgLy8gVG8gbGlzdGVuIGZvciB3aGVuIHRoaXMgcGFnZSBpcyBhY3RpdmUgKGZvciBleGFtcGxlLCB0byByZWZyZXNoIGRhdGEpLFxuICAgICAgLy8gbGlzdGVuIGZvciB0aGUgJGlvbmljVmlldy5lbnRlciBldmVudDpcbiAgICAgIC8vXG4gICAgICAvLyRzY29wZS4kb24oJyRpb25pY1ZpZXcuZW50ZXInLCBmdW5jdGlvbihlKSB7XG4gICAgICAvL30pO1xuXG4gICAgICAkc2NvcGUuY2hhdHMgPSBDaGF0cy5hbGwoKTtcbiAgICAgICRzY29wZS5yZW1vdmUgPSBmdW5jdGlvbihjaGF0KSB7XG4gICAgICAgIENoYXRzLnJlbW92ZShjaGF0KTtcbiAgICAgIH07XG4gICAgfSlcblxuICAgIC5jb250cm9sbGVyKCdDaGF0RGV0YWlsQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlUGFyYW1zLCBDaGF0cykge1xuICAgICAgJHNjb3BlLmNoYXQgPSBDaGF0cy5nZXQoJHN0YXRlUGFyYW1zLmNoYXRJZCk7XG4gICAgfSlcblxuICAgIC5jb250cm9sbGVyKCdBY2NvdW50Q3RybCcsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICAgJHNjb3BlLnNldHRpbmdzID0ge1xuICAgICAgICBlbmFibGVGcmllbmRzOiB0cnVlXG4gICAgICB9O1xuICAgIH0pO1xufSIsImltcG9ydCBjb250cm9sbGVycyBmcm9tICcuL2NvbnRyb2xsZXJzLyc7XG5pbXBvcnQgc2VydmljZXMgZnJvbSAnLi9zZXJ2aWNlcy8nO1xuXG5jb250cm9sbGVycygpO1xuc2VydmljZXMoKTtcblxuXG4vLyBJb25pYyBTdGFydGVyIEFwcFxuXG4vLyBhbmd1bGFyLm1vZHVsZSBpcyBhIGdsb2JhbCBwbGFjZSBmb3IgY3JlYXRpbmcsIHJlZ2lzdGVyaW5nIGFuZCByZXRyaWV2aW5nIEFuZ3VsYXIgbW9kdWxlc1xuLy8gJ3N0YXJ0ZXInIGlzIHRoZSBuYW1lIG9mIHRoaXMgYW5ndWxhciBtb2R1bGUgZXhhbXBsZSAoYWxzbyBzZXQgaW4gYSA8Ym9keT4gYXR0cmlidXRlIGluIGluZGV4Lmh0bWwpXG4vLyB0aGUgMm5kIHBhcmFtZXRlciBpcyBhbiBhcnJheSBvZiAncmVxdWlyZXMnXG4vLyAnc3RhcnRlci5zZXJ2aWNlcycgaXMgZm91bmQgaW4gc2VydmljZXMuanNcbi8vICdzdGFydGVyLmNvbnRyb2xsZXJzJyBpcyBmb3VuZCBpbiBjb250cm9sbGVycy5qc1xuYW5ndWxhci5tb2R1bGUoJ3N0YXJ0ZXInLCBbJ2lvbmljJywgJ3N0YXJ0ZXIuY29udHJvbGxlcnMnLCAnc3RhcnRlci5zZXJ2aWNlcyddKVxuXG4ucnVuKGZ1bmN0aW9uKCRpb25pY1BsYXRmb3JtKSB7XG4gICRpb25pY1BsYXRmb3JtLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIC8vIEhpZGUgdGhlIGFjY2Vzc29yeSBiYXIgYnkgZGVmYXVsdCAocmVtb3ZlIHRoaXMgdG8gc2hvdyB0aGUgYWNjZXNzb3J5IGJhciBhYm92ZSB0aGUga2V5Ym9hcmRcbiAgICAvLyBmb3IgZm9ybSBpbnB1dHMpXG4gICAgaWYgKHdpbmRvdy5jb3Jkb3ZhICYmIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMgJiYgd2luZG93LmNvcmRvdmEucGx1Z2lucy5LZXlib2FyZCkge1xuICAgICAgY29yZG92YS5wbHVnaW5zLktleWJvYXJkLmhpZGVLZXlib2FyZEFjY2Vzc29yeUJhcih0cnVlKTtcbiAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5kaXNhYmxlU2Nyb2xsKHRydWUpO1xuXG4gICAgfVxuICAgIGlmICh3aW5kb3cuU3RhdHVzQmFyKSB7XG4gICAgICAvLyBvcmcuYXBhY2hlLmNvcmRvdmEuc3RhdHVzYmFyIHJlcXVpcmVkXG4gICAgICBTdGF0dXNCYXIuc3R5bGVEZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcbn0pXG5cbi5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuXG4gIC8vIElvbmljIHVzZXMgQW5ndWxhclVJIFJvdXRlciB3aGljaCB1c2VzIHRoZSBjb25jZXB0IG9mIHN0YXRlc1xuICAvLyBMZWFybiBtb3JlIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXVpL3VpLXJvdXRlclxuICAvLyBTZXQgdXAgdGhlIHZhcmlvdXMgc3RhdGVzIHdoaWNoIHRoZSBhcHAgY2FuIGJlIGluLlxuICAvLyBFYWNoIHN0YXRlJ3MgY29udHJvbGxlciBjYW4gYmUgZm91bmQgaW4gY29udHJvbGxlcnMuanNcbiAgJHN0YXRlUHJvdmlkZXJcblxuICAvLyBzZXR1cCBhbiBhYnN0cmFjdCBzdGF0ZSBmb3IgdGhlIHRhYnMgZGlyZWN0aXZlXG4gICAgLnN0YXRlKCd0YWInLCB7XG4gICAgdXJsOiAnL3RhYicsXG4gICAgYWJzdHJhY3Q6IHRydWUsXG4gICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvdGFicy5odG1sJ1xuICB9KVxuXG4gIC8vIEVhY2ggdGFiIGhhcyBpdHMgb3duIG5hdiBoaXN0b3J5IHN0YWNrOlxuXG4gIC5zdGF0ZSgndGFiLmRhc2gnLCB7XG4gICAgdXJsOiAnL2Rhc2gnLFxuICAgIHZpZXdzOiB7XG4gICAgICAndGFiLWRhc2gnOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3RhYi1kYXNoLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnRGFzaEN0cmwnXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIC5zdGF0ZSgndGFiLmNoYXRzJywge1xuICAgICAgdXJsOiAnL2NoYXRzJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICd0YWItY2hhdHMnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvdGFiLWNoYXRzLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdDaGF0c0N0cmwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5zdGF0ZSgndGFiLmNoYXQtZGV0YWlsJywge1xuICAgICAgdXJsOiAnL2NoYXRzLzpjaGF0SWQnLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgJ3RhYi1jaGF0cyc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9jaGF0LWRldGFpbC5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnQ2hhdERldGFpbEN0cmwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gIC5zdGF0ZSgndGFiLmFjY291bnQnLCB7XG4gICAgdXJsOiAnL2FjY291bnQnLFxuICAgIHZpZXdzOiB7XG4gICAgICAndGFiLWFjY291bnQnOiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3RhYi1hY2NvdW50Lmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnQWNjb3VudEN0cmwnXG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBpZiBub25lIG9mIHRoZSBhYm92ZSBzdGF0ZXMgYXJlIG1hdGNoZWQsIHVzZSB0aGlzIGFzIHRoZSBmYWxsYmFja1xuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvdGFiL2Rhc2gnKTtcblxufSk7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGFuZ3VsYXIubW9kdWxlKCdzdGFydGVyLnNlcnZpY2VzJywgW10pXG5cbiAgICAuZmFjdG9yeSgnQ2hhdHMnLCBmdW5jdGlvbigpIHtcbiAgICAgIC8vIE1pZ2h0IHVzZSBhIHJlc291cmNlIGhlcmUgdGhhdCByZXR1cm5zIGEgSlNPTiBhcnJheVxuXG4gICAgICAvLyBTb21lIGZha2UgdGVzdGluZyBkYXRhXG4gICAgICB2YXIgY2hhdHMgPSBbe1xuICAgICAgICBpZDogMCxcbiAgICAgICAgbmFtZTogJ0JlbiBTcGFycm93JyxcbiAgICAgICAgbGFzdFRleHQ6ICdZb3Ugb24geW91ciB3YXk/JyxcbiAgICAgICAgZmFjZTogJ2ltZy9iZW4ucG5nJ1xuICAgICAgfSwge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ01heCBMeW54JyxcbiAgICAgICAgbGFzdFRleHQ6ICdIZXksIGl0XFwncyBtZScsXG4gICAgICAgIGZhY2U6ICdpbWcvbWF4LnBuZydcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICdBZGFtIEJyYWRsZXlzb24nLFxuICAgICAgICBsYXN0VGV4dDogJ0kgc2hvdWxkIGJ1eSBhIGJvYXQnLFxuICAgICAgICBmYWNlOiAnaW1nL2FkYW0uanBnJ1xuICAgICAgfSwge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgbmFtZTogJ1BlcnJ5IEdvdmVybm9yJyxcbiAgICAgICAgbGFzdFRleHQ6ICdMb29rIGF0IG15IG11a2x1a3MhJyxcbiAgICAgICAgZmFjZTogJ2ltZy9wZXJyeS5wbmcnXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBuYW1lOiAnTWlrZSBIYXJyaW5ndG9uJyxcbiAgICAgICAgbGFzdFRleHQ6ICdUaGlzIGlzIHdpY2tlZCBnb29kIGljZSBjcmVhbS4nLFxuICAgICAgICBmYWNlOiAnaW1nL21pa2UucG5nJ1xuICAgICAgfV07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFsbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGNoYXRzO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uKGNoYXQpIHtcbiAgICAgICAgICBjaGF0cy5zcGxpY2UoY2hhdHMuaW5kZXhPZihjaGF0KSwgMSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldDogZnVuY3Rpb24oY2hhdElkKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGF0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNoYXRzW2ldLmlkID09PSBwYXJzZUludChjaGF0SWQpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjaGF0c1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSk7XG59Il19
