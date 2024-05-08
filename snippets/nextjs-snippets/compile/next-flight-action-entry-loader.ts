function nextFlightActionEntryLoader() {
	// Map action 映射关系
	const actions = getOptions();
	
	const individualActions = for actions {
		generateActionId(path, name)
	}
	
	async function endpoint(id, ...args) {
	  const action = await actions[id]()
	  return action.apply(null, args)
	}
	
	return `${
		// 通过actionId 映射对应的模块方法, 注入到源码中，供执行调用
		for individualActions {
			id: endpoint(id)
		}
	}`
	 
}