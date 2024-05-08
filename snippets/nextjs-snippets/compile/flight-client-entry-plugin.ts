function plugin() {
	compiler.hooks.finishMake.tapPromise(PLUGIN_NAME, (compilation) =>
		// plugin finishMake被触发
    this.createClientEntries(compiler, compilation)
  )
  compiler.hooks.make.tap(PLUGIN_NAME, (compilation) => {
	  ... ->
		  // 创建映射关系供执行过程调用使用
		  this.createActionAssets(compilation, assets)
  })
  
  function createClientEntries() {
	  ...
	  // 拿到对应的模块对象，拿到先前绑定的rsc对象上的actions
	  const actions = getActions(mod)
	  
	  for {
		  this.injectActionEntry(actions) ->
			  // 添加入口依赖处理 生成实际调用的源码
				const actionLoader = `next-flight-action-entry-loader?${stringify({
					// 序列化，actions的映射关系 actionId -> module path
		      actions: JSON.stringify(actionsMap),
		      __client_imported__: fromClient,
		    })}!`
		    const actionEntryDep = webpack.EntryPlugin.createDependency(actionLoader, {
		      name: bundlePath,
		    })
				// addEntry后会再次触发下compiler.hooks.make的钩子
				compilation.hooks.addEntry.call(actionEntryDep, options)
	  }
  }
}