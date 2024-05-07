const nextUrl =
  state.nextUrl && hasInterceptionRouteInCurrentTree(state.tree)
    ? state.nextUrl
    : null;

mutable.inFlightServerAction = fetchServerAction(state, nextUrl, action);
