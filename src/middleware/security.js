import helmet from 'helmet'
import hpp from 'hpp'

export default (app) => {
	// Don't expose any software information to hackers.
	app.disable('x-powered-by')

	// Express middleware to protect against HTTP Parameter Pollution attacks
	app.use(hpp())

	// The X-Frame-Options header tells browsers to prevent your webpage from being put in an iframe.
	app.use(helmet.frameguard({ action: 'sameorigin' }))

	// Cross-site scripting, abbreviated to “XSS”, is a way attackers can take over webpages.
	app.use(helmet.xssFilter())

	// Sets the X-Download-Options to prevent Internet Explorer from executing
	// downloads in your site’s context.
	// @see https://helmetjs.github.io/docs/ienoopen/
	app.use(helmet.ieNoOpen())

	// Don’t Sniff Mimetype middleware, noSniff, helps prevent browsers from trying
	// to guess (“sniff”) the MIME type, which can have security implications. It
	// does this by setting the X-Content-Type-Options header to nosniff.
	// @see https://helmetjs.github.io/docs/dont-sniff-mimetype/
	app.use(helmet.noSniff())
}
