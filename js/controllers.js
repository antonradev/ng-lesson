NGLesson.controller('DefaultData', ['$scope', function ($scope) {
        $scope.appDefaults = {
            appName: 'ng-lessons',
            appVersion: '0.0.1'
        };
    }]);

NGLesson.controller('Navigation', ['$scope', function ($scope) {
        $scope.navLinks = [
            {pageURI: 'home', pageName: 'Home'},
            {pageURI: 'about', pageName: 'About'},
            {pageURI: 'search', pageName: 'Search'},
            {pageURI: 'gallery', pageName: 'Gallery'}
        ];
        $scope.selectLink = function (navLink) {
            $scope.selectedLink = navLink;
        };

    }]);





NGLesson.controller('Pages_Contents', ['$scope', function ($scope) {
        $scope.homePage =
                {
                    pageURI: 'home',
                    pageName: 'Home',
                    pageDescription: 'This is the home page. Basicly it contains nothing much to show as a content',
                    pageContent: 'And here is the so called content in the Homepage, so Welcome here is this section'
                };
        $scope.aboutPage =
                {
                    pageURI: 'about',
                    pageName: 'About',
                    pageDescription: 'It appears that some about introduction should be placed here',
                    pageContent: 'So in few words, this is basic AngularJS application showup for my personal lessons'
                };
        $scope.searchPage =
                {
                    pageURI: 'search',
                    pageName: 'Search',
                    pageDescription: 'You can search something uhmm not sure where and what yet',
                    pageContent: 'But if I had the luck to create some input fields with search-like functionality I hope it can be used to type-and-submit something silly.'
                };
    }]);







NGLesson.controller('Home_Page', ['$scope', function ($scope) {
        $scope.pageContents =
                {
                    pageURI: 'home',
                    pageName: 'Home',
                    pageDescription: 'This is the home page. Basicly it contains nothing much to show as a content',
                    pageContent: 'And here is the so called content in the Homepage, so Welcome here is this section'
                };
    }]);

NGLesson.controller('About_Page', ['$scope', function ($scope) {
        $scope.pageContents =
                {
                    pageURI: 'about',
                    pageName: 'About',
                    pageDescription: 'It appears that some about introduction should be placed here',
                    pageContent: 'So in few words, this is basic AngularJS application showup for my personal lessons'
                };
    }]);

NGLesson.controller('Search_Page', ['$scope', function ($scope) {
        $scope.pageContents =
                {
                    pageURI: 'search',
                    pageName: 'Search',
                    pageDescription: 'You can search something uhmm not sure where and what yet',
                    pageContent: 'But if I had the luck to create some input fields with search-like functionality I hope it can be used to type-and-submit something silly.'
                };
    }]);

NGLesson.controller('Gallery_Page', ['$scope', function ($scope) {
        $scope.pageContents =
                {
                    pageURI: 'gallery',
                    pageName: 'Gallery',
                    pageDescription: 'I suppose I will put some pictures here and it will look like a gallery',
                    pageContent: 'So have a nice time and click the pictures below. I hope there are some :)'
                };
    }]);