function handleAction({
	req,  
	sevrerMoudle
}) {
	// 反序列化参数方法
	bound = decodeReply(req.body, sevrerMoudle)
	// 根据actionId以及actionModuleId 调用执行对应的方法
	const returnVal = await actionHandler.apply(null, bound)
	
	res(
		... calling 
		// 响应flightMetaData
		generateFlight({ ..., generateFlight})
	)
}