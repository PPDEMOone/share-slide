// 在编译阶段为每个访问路由注入该实例，并提供render方法
module.render = new AppPageRouteModule().render
function AppPageRouteModule(){
	const render = () => {
		return renderToHTMLOrFlight(
      req,
      res,
      context.page,
      context.query,
      context.renderOpts
    )
	}
}
const renderToHTMLOrFlight = () => {
	... 
  // in app-render
	const sevrerMoudle = createServerModuleMap() // 创建sevrer moudle映射表, 数据源在编译时注入
	handleAction({..., sevrerMoudle }) // 处理server action 请求
}

// app-render.tsx 
// 返回一些有关rsc的元数据
const renderToHTMLOrFlight: (
  req: IncomingMessage,
  res: ServerResponse,
  pagePath: string,
  query: NextParsedUrlQuery,
  renderOpts: RenderOpts
) => Promise<RenderResult<AppPageRenderResultMetadata>>