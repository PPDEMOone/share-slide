async function fetchServerAction(
  state: ReadonlyReducerState,
  nextUrl: ReadonlyReducerState["nextUrl"],
  { actionId, actionArgs }: ServerActionAction,
): Promise<FetchServerActionResult> {
  const body = await encodeReply(actionArgs);

  const res = await fetch("", {
    method: "POST",
    headers: {
      Accept: RSC_CONTENT_TYPE_HEADER,
      [ACTION]: actionId,
      [NEXT_ROUTER_STATE_TREE]: encodeURIComponent(JSON.stringify(state.tree)),
      ...(process.env.NEXT_DEPLOYMENT_ID
        ? {
            "x-deployment-id": process.env.NEXT_DEPLOYMENT_ID,
          }
        : {}),
      ...(nextUrl
        ? {
            [NEXT_URL]: nextUrl,
          }
        : {}),
    },
    body,
  });
}
