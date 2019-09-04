'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('signin', 'signin.html'),
            new Route('signup', 'signup.html'),
            new Route('listings', 'listings.html', true),
            new Route('item', 'item.html')
        ]);
    }

    init();
}());
