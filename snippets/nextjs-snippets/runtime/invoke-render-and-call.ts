function invokeRender(){
	const initResult = await renderServer?.instance?.initialize(...);
	await initResult?.requestHandler(req, res)
}

function requestHandler() {
	const app = new NextServer()
	requestHandler = app.getRequestHandler();
  upgradeHandler = app.getUpgradeHandler();
}
// NextServer
app.getRequestHandler = () => {
	return super.(...).getRequestHandler.bind(this)
}

// BaseServer
super.(...).getRequestHandler = () => {
	function handleRequest() {
		this.handleRequestImpl() -> 
			app.handleCatchallRenderRequest(req, res, parsedUrl) -> 
				app.render() // 调用app对应render实现
	}

  this.handleRequest.bind(this) // trigger Render
}