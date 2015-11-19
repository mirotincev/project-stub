({
	block: 'page',
	title: 'Hello, World!',
	styles: [
		{ elem: 'css', url: 'index.min.css' },
		'<!--[if IE]>',
			{ elem: 'css', url: 'index.min.ie.css' },
		'<![endif]-->'
	],
	scripts: [
		{ elem: 'js', url: 'index.min.js' }
	],
	content: {
	    block: 'hello',
	    elem: 'my',
        js: true,
	    content: ['привет тебе путник']
	}
});
