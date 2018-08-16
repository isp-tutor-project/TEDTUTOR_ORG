angular.module('tedweb', ['ngAnimate', 'ui.router', 'ui.bootstrap'])
    
    .controller('headerController', function ($scope, $state) {

        $scope.goHome = function() {
           $state.go('home');
        //  $location.path('/');
        };    
    
        $scope.goTedTutor = function() {
            window.location = "http://go.tedtutor.org";
        };    
    })

    .controller('radioController', function ($scope, $state) {

      $scope.radioModel = 'overview';

      $scope.goToOverview = function () {
          $state.go('research.overview');
      };
      
      $scope.goToFindings = function () {
          $state.go('research.findings');
      };
      
      $scope.goToResearchers = function () {
          $state.go('research.researchers');
      };
      
      $scope.goToPublications = function () {
          $state.go('research.pubs.papers');
      };
      
    })
    
    .controller('literatureController', function ($scope, $state) {

      $scope.litModel = 'papers';

      $scope.goToPapers = function () {
          $state.go('research.pubs.papers');
      };
      
      $scope.goToBackground = function () {
          $state.go('research.pubs.background');
      };
      
      $scope.goToProjects = function () {
          $state.go('research.pubs.projects');
      };
    })
    
    .controller('mainController', function ($scope, $state, $location) {
    
    $scope.tedIntro = function() {
        
        /* 	
		If the lightbox window HTML already exists show it
		
		If the lightbox window HTML doesn't exists, create it and insert it.
		*/

        if ($('#lightbox').length > 0) { // #lightbox exists

            //show lightbox window - you could use .show('fast') for a transition
            $('#lightbox').show();
            $("#playerbox").css("margin-top", (window.innerHeight - 568) / 2);
            player.playVideo();

        } else { //#lightbox does not exist - create and insert (runs 1st time only)

            //create HTML markup for lightbox window
            var lightbox =
                '<div id="lightbox" class="lightbox-animation">' +
                    '<p>Click to close</p>' +
                    '<div id="playerbox">' +
                        '<div id="player"></div>' +
                        '<div id="closeButton"><img id="closeButtonIcn" src="assets/closeButton.png" ></div>' +
                    '</div>' +
                '</div>';

            //insert lightbox HTML into page
            $('body').append(lightbox);

            $("#playerbox").css("margin-top", (window.innerHeight - 568) / 2);

            player = new YT.Player('player', {
                height: '480',
                width: '787',
                videoId: 'IRZz2VPv-j8',
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }
                                   
        //Click anywhere on the page to get rid of lightbox window
        $('#lightbox').on('click', function () {
            player.pauseVideo();
            $('#lightbox').hide();
        });
            
        function onPlayerReady(event) {
            event.target.playVideo();
        }

        function onPlayerStateChange(event) {}

        function stopVideo() {}        
      }
        
      $scope.goToPortal = function() {
        $state.go('portal');
        //  $location.path('/portal');
      };    
    
      $scope.goToResearch = function() {
        $state.go('research.overview');
        //  $location.path('/portal');
      };    
    
    
      $scope.goToManual = function() {
          
        /* 	
		If the lightboxB window HTML already exists show it
		
		If the lightboxB window HTML doesn't exists, create it and insert it.
		*/

        if ($('#lightboxB').length > 0) { // #lightbox exists

            //show lightbox window - you could use .show('fast') for a transition
            $('#lightboxB').show();

        } else { //#lightboxB does not exist - create and insert (runs 1st time only)

            //create HTML markup for lightbox window
            var lightbox =
                '<div id="lightboxB" class="lightbox-animationB">' +
                '<p>Click to close</p>' +
                '<div id="playerboxB">' +
                '<div id="closeButtonB"><img id="closeButtonIcn" src="assets/closeButton.png" ></div>' +
                '<div id="CaptivateContent"></div>' +                                
                '</div>';
            
            //insert lightbox HTML into page
            $('body').append(lightbox);

            $("#playerboxB").css("margin-top", (window.innerHeight - 568) / 2);

            var so = new SWFObject("DocMod/Documentation_Module.swf", "Captivate", "1010", "568", "10", "#FFF");
            so.addParam("quality", "high");
            so.addParam("name", "Captivate");
            so.addParam("id", "Captivate");
            so.addParam("wmode", "window");
            so.addParam("bgcolor","#fff");
            so.addParam("seamlesstabbing","false");
            so.addParam("menu", "false");
            so.addParam("AllowScriptAccess","always");
            so.addVariable("variable1", "value1");
            
            so.setAttribute("redirectUrl", "http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash");
            so.write("CaptivateContent");

            $('Captivate').focus();            
            
        }

        //Click anywhere on the page to get rid of lightbox window
        $('#lightboxB').on('click', function () {            
            $('#lightboxB').hide();
        });                     
      };    
    
      $scope.goToRequirements = function() {
        $state.go('requirements');
        //  $location.path('/portal');
      };    
    
      $scope.goToRegister = function() {
        window.location = "http://go.tedtutor.com/#home=pubPortal;pubPortal=Create_Account";
      };    
    
      $scope.goToDemo = function() {
        window.location = "http://go.tedtutor.com/#home=pubPortal;pubPortal=Demo_Main";
      };    
    
    })


    // configuring our routes 
    // =============================================================================
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
             function($stateProvider, $urlRouterProvider, $locationProvider) {

            // route to show our basic form (/form)
        $stateProvider.state('home', {
                url: '/',
                templateUrl: 'templates/main.html',
                controller: 'mainController',
            });
    
        $stateProvider.state('portal', {
                url: '/portal',
                templateUrl: 'templates/portal.html',
                controller: 'mainController',
            });

        $stateProvider.state('requirements', {
                url: '/requirements',
                //templateUrl: 'templates/requirements.html',
                templateUrl: 'templates/underconstruction.html',
            });

        $stateProvider.state('research', {
                //url: '/research',
                templateUrl: 'templates/research.html',
                controller: 'radioController',
            });
                 
            <!-- RESEARCH ELEMENTS -->
            $stateProvider.state('research.overview', {
                    url: '/research/overview',
                    templateUrl: 'templates/research.overview.html',
                });

            $stateProvider.state('research.findings', {
                    url: '/research/findings',
                    templateUrl: 'templates/research.findings.html',
                });

            $stateProvider.state('research.pubs', {
                    //url: '/research/publications',
                    templateUrl: 'templates/research.pubs.html',
                    controller: 'literatureController',            
                });

                <!-- PUBLICATION ELEMENTS -->
                $stateProvider.state('research.pubs.papers', {
                        url: '/research/publications/papers',
                        templateUrl: 'templates/research.pubs.papers.html',
                    });

                $stateProvider.state('research.pubs.background', {
                        url: '/research/publications/background',
                        templateUrl: 'templates/research.pubs.background.html',
                    });

                $stateProvider.state('research.pubs.projects', {
                        url: '/research/publications/projects',
                        templateUrl: 'templates/research.pubs.projects.html',
                    });

            $stateProvider.state('research.researchers', {
                    url: '/research/researchers',
                    templateUrl: 'templates/research.people.html',
                });

        // catch all route
        // send users to the form page 
        $urlRouterProvider.otherwise('/');
    
        $locationProvider.html5Mode(true);
    
    }]);
