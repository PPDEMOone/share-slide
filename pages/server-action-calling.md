## 编译、过程执行

<style>
  *::-webkit-scrollbar {
    display: none;
  }
	:root {
		--prism-font-size: 0.8em !important;
	}
	div[class*='language-'], pre[class*='language-'], code[class*='language-'] {
		--prism-font-size: 0.8em !important;
	}
	.slidev-code-wrapper {
		max-height: 300px !important;
    overflow-y: scroll !important;
	}
	/* .slidev-code-wrapper {
		max-height: 400px  !important;
	} */
</style>
<p v-click.hidden="[1,2]">
  ⛓️ 实现Server Action的RPC调用，有两个步骤，分别是 <span class="text-yellow-300">编译</span>、<span class="text-yellow-300">过程执行</span>
</p>

<div class="grid grid-cols-2 gap-3 translate-y-[-40px] " >
  <div v-click="[2,12]">

```mermaid

graph RL

subgraph client["client side"]
direction TB
saveData-->|"actionArgs"|createServerReference["createServerReference(actionId, actionArgs)"]
createServerReference-->callServer
style createServerReference fill: yellow,color: red, stroke: #f66,stroke-dasharray: 5 5
subgraph actionContext["ActionQueueContext"]
direction TB
dispatchAction-->|case|serverActionReducer
serverActionReducer-->fetchServerAction
fetchServerAction-->encodeReply["encodeReply(args)"]
style encodeReply fill: yellow,color: red, stroke: #f66,stroke-dasharray: 5 5
encodeReply-->request
end
callServer-->actionContext
end

subgraph server["server side"]
direction TB
requestListener-->handleCatchallRenderRequest[invokeRender->handleCatchallRenderRequest]
handleCatchallRenderRequest-->render
subgraph render["server render"]
direction TB
renderToResponse-->module.render[doRender->module.render]
module.render-->handleAction
handleAction-->decodeReply["decodeReply(req, serverModuleMap)"]
style decodeReply fill: yellow,color: red, stroke: #f66,stroke-dasharray: 5 5
decodeReply-->res[calling and responce]
end
end

%%dispatchAction-->client

server<===>|"
rsc request
rsc responce
"|client

```

  </div>
<div class="relative">
  <div v-click="[3,4]" class="absolute w-full">

<div class=" text-[12px]">

[packages/next/src/client/app-call-server.ts](vscode://file///Users/ppdemoer/work/next.js/packages/next/src/build/webpack/loaders/next-metadata-image-loader.ts)

</div>

<<< @/snippets/nextjs-snippets/runtime/call-server.ts{all}{lines:true}

  </div>
  <div v-click="[2,3]" class="absolute w-full">

<div class=" text-[12px]">

[packages/next/src/build/webpack/loaders/next-flight-loader/action-client-wrapper.ts](vscode://file///Users/ppdemoer/work/next.js/packages/next/src/build/webpack/loaders/next-flight-loader/action-client-wrapper.ts)

</div>

<<< @/snippets/nextjs-snippets/runtime/action-client-wrapper.ts{all}{lines:true}

  </div>
	  <div v-click="[4,5]" class="absolute w-full">

<div class=" text-[12px]">

[packages/next/src/shared/lib/router/action-queue.ts](vscode://file///Users/ppdemoer/work/next.js/packages/next/src/shared/lib/router/action-queue.ts)

</div>

<<< @/snippets/nextjs-snippets/runtime/action-queue.ts {4,10}{lines:true}

  </div>
<div v-click="[5,6]" class="absolute w-full">

<div class=" text-[12px]">

[packages/next/src/client/components/router-reducer/reducers/server-action-reducer.ts](vscode://file///Users/ppdemoer/work/next.js/packages/next/src/client/components/router-reducer/reducers/server-action-reducer.ts)

</div>

<<< @/snippets/nextjs-snippets/runtime/sever-action-reducer.ts {6}{lines:true}

  </div>
<div v-click="[6,7]" class="absolute w-full">

<div class=" text-[12px]">

[packages/next/src/client/components/router-reducer/reducers/server-action-reducer.ts](vscode://file///Users/ppdemoer/work/next.js/packages/next/src/client/components/router-reducer/reducers/server-action-reducer.ts)

</div>

<<< @/snippets/nextjs-snippets/runtime/fetch-server-action.ts {6,12}{lines:true}

  </div>
<div v-click="[7,8]" class="absolute w-full">

<div class=" text-[12px]">

[packages/next/src/server/lib/start-server.ts](vscode://file///Users/ppdemoer/work/next.js/packages/next/src/server/lib/start-server.ts)

</div>

<<< @/snippets/nextjs-snippets/runtime/start-server.ts {2,5,6,7,8,18}{lines:true}

  </div>
<div v-click="[8,9]" class="absolute w-full">

<div class=" text-[12px]">

[packages/next/src/server/lib/router-server.ts](vscode://file///Users/ppdemoer/work/next.js/packages/next/src/server/lib/router-server.ts)

</div>

<<< @/snippets/nextjs-snippets/runtime/invoke-render-and-call.ts {2,3,8,18-22,24}{lines:true}

  </div>
<div v-click="[9,10]" class="absolute w-full">

<div class=" text-[12px]">

[packages/next/src/server/base-server.ts](vscode://file///Users/ppdemoer/work/next.js/packages/next/src/server/base-server.ts)

</div>

<<< @/snippets/nextjs-snippets/runtime/do-render.ts {7,12,18,19,22,23}{lines:true}

  </div>
<div v-click="[10,11]" class="absolute w-full">

<div class=" text-[12px]">

[packages/next/src/server/future/route-modules/app-page/module.ts](vscode://file///Users/ppdemoer/work/next.js/packages/next/src/server/future/route-modules/app-page/module.ts)

[packages/next/src/server/app-render/app-render.tsx](vscode://file///Users/ppdemoer/work/next.js/packages/next/src/server/app-render/app-render.tsx)

</div>

<<< @/snippets/nextjs-snippets/runtime/renderToHTMLOrFlight.ts {2,4-11,14-18,22-28}{lines:true}

  </div>
<div v-click="[11,12]" class="absolute w-full">

<div class=" text-[12px]">

[packages/next/src/server/app-render/action-handler.ts](vscode://file///Users/ppdemoer/work/next.js/packages/next/src/server/app-render/action-handler.ts)

</div>

<<< @/snippets/nextjs-snippets/runtime/handleAction.ts {all}{lines:true}

  </div>
</div>
</div>
<div class="grid grid-cols-2 gap-3 w-full translate-y-[-400px]" v-click="[12,13]">
<div>
	
```mermaid
sequenceDiagram
	autonumber
	client-->server: encodeReply
	client->>server: rsc request
	server-->client: decodeReply
	server->>client: rsc responce
```
</div>
	<div>
		<img src="assets/rpc-calling.webp"/>
	</div>
</div>

<div v-click="13" class="translate-y-[-700px] w-full">

```mermaid
flowchart LR
	subgraph "next-swc-loader"
		subgraph pitch
            transform["
                swc code transform
            "]

     end
	end

	subgraph "flight-client-entry-plugin"
		direction LR
		subgraph finishMake
      subgraph createClientEntries
        collectClientActionsFromDependencies-->getActions
      end
		end
		subgraph make
			createAssets
		end
	end

	subgraph "next-flight-client-module-loader"
		rsc["webpack.Module.buildInfo.rsc = getRSCModuleInformation(source code)"]
	  rsc-.-|buildInfo.rsc.actions|getActions
    rsc-.-|generate assets by buildInfo.rsc.actions|createAssets
		callServerNoop["inject callServer noop"]
	end

	subgraph "next-flight-action-entry-loader"
		injectModule["
            inject endpoint
            export actions module"]
	end

	START-->next-swc-loader

	START---flight-client-entry-plugin

	next-swc-loader-->|curb|next-flight-client-module-loader

  transform-.-|source code|rsc

	next-flight-client-module-loader-.->next-flight-action-entry-loader

	next-flight-client-module-loader~~~flight-client-entry-plugin

  getActions-.-|add entry by actionEntryDep|injectModule

  getActions-.-|"provides pluginState.serverActions when createAssets be called"|createAssets

  next-flight-action-entry-loader-->createAssets

  createAssets-.->json[
   server-reference-manifest.js
   server-reference-manifest.json
  ]

	flight-client-entry-plugin---END

	next-flight-action-entry-loader-->END

  injectModule-.->sourcecode
```

</div>
