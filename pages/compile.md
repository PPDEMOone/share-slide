## 编译

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
	/* .slidev-code-wrapper {
		max-height: 300px !important;
    overflow-y: scroll !important;
	} */
	/* .slidev-code-wrapper {
		max-height: 400px  !important;
	} */
</style>
<div class="grid grid-rows-2 mt-[10px]">

<div  class=" w-full">

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

<div class="relative">

<div v-click="[1,2]" class="absolute w-full">

[packages/next/src/build/webpack/loaders/next-swc-loader.ts](vscode://file///Users/ppdemoer/work/next.js/packages/next/src/build/webpack/loaders/next-swc-loader.ts)

<<< @/snippets/nextjs-snippets/compile/next-swc-loader.ts {all}{lines:true,maxHeight:'200px'}

</div>

<div v-click="[2,3]" class="absolute w-full">

[packages/next/src/build/webpack/loaders/next-flight-client-module-loader.ts](vscode://file///Users/ppdemoer/work/next.js/packages/next/src/build/webpack/loaders/next-flight-client-module-loader.ts)

<<< @/snippets/nextjs-snippets/compile/next-flight-client-module-loader.ts {all}{lines:true,maxHeight:'200px'}

</div>

<div v-click="[3,4]" class="absolute w-full">

[packages/next/src/build/webpack/plugins/flight-client-entry-plugin.ts](vscode://file///Users/ppdemoer/work/next.js/packages/next/src/build/webpack/plugins/flight-client-entry-plugin.ts)

<<< @/snippets/nextjs-snippets/compile/flight-client-entry-plugin.ts {all}{lines:true,maxHeight:'200px'}

</div>

<div v-click="4" class="absolute w-full">

[packages/next/src/build/webpack/loaders/next-flight-action-entry-loader.ts](vscode://file///Users/ppdemoer/work/next.js/packages/next/src/build/webpack/loaders/next-flight-action-entry-loader.ts)

<<< @/snippets/nextjs-snippets/compile/next-flight-action-entry-loader.ts {all}{lines:true,maxHeight:'200px'}

</div>

</div>

</div>
