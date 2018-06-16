Router = (function(window){
	// factory function to create a new router
	// we don't use prototype function to better better control opject and method visibility
	return function (rootElement) {
		let routes = {};

		let self = this;

		function _route(route){
			let controller = routes[route];
			if (typeof controller === 'function') {
				controller(rootElement); // add route parameters here
			}
		}

		this.navigate = function(route) {
			_route(route);
			window.history.pushState(null /*any state object*/, null /*new page title*/, route);
		};

		this.register = function(route, controller) {
			routes[route] = controller;
			return this;
		};

		this.start =function(route) {
			window.onpopstate = function (event) {
				_route(document.location.pathname);
			};
			self.navigate(route);
		}
	}
})(window);