function startServer() {
  const server = http.createServer(requestListener);

  server.on("listening", () => {
    const initResult = await getRequestHandlers({
      ...options,
    });
    requestHandler = initResult[0];
    upgradeHandler = initResult[1];
  });

  let requestHandler = null;
  const requestListener = () => {
    if (handlersPromise) {
      await handlersPromise;
      handlersPromise = undefined;
    }
    await requestHandler(req, res);
  };
}
