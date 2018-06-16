// singleton pattern
templates = (function(Handlebars, document){

	const TEMPLATE_MIME_TYPE = 'application/x-handlebars-template';

	let compiledTemplates = {};

	return {
		/**
		 * Return a template as function.
		 * @param templateName Name of the template to return (aka. ID of the DOM element containing the template)
		 * @return {*}
		 */
		get : function(templateName){
			let template = compiledTemplates[templateName];
			if(typeof template === 'function'){
				return template;
			}
		},

		/**
		 * Crawls the DOM for script tags with a template type and compiles these templates.
		 * We could also fetch templates from the server here and make the function async.
		 */
		load : function(){
			document
			.querySelectorAll('script[type="' + TEMPLATE_MIME_TYPE + '"]')
			.forEach(function(element){
				compiledTemplates[element.id] = Handlebars.compile(element.innerHTML);
			});
		}
	}
})(Handlebars, window.document);