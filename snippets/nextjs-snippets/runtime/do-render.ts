NextNodeServer.prototype = Object.create(BaseServer.prototype);
NextNodeServer.prototype.constructor = BaseServer;

// NextNodeServer
function NextNodeServer() {
	const render = (...args) => {
		BaseServer.render(...args)
	}
} 
// BaseServer
function BaseServer() {
	const render = () => {
		this.renderImpl() -> 
			this.renderToResponse() -> 
				this.renderToResponseImpl() ->
					this.renderPageComponent()
				...
				this.renderToResponseWithComponentsImpl()
	}
	
	const renderToResponseWithComponentsImpl = () => {
		doRender() -> // 内部方法
			module.render() // 调用路由render，真正的渲染逻辑开始。。。
	}
}