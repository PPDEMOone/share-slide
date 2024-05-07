function createMutableActionQueue(): AppRouterActionQueue {
  const actionQueue: AppRouterActionQueue = {
    state: null,
    dispatch: (payload: ReducerActions, setState: DispatchStatePromise) =>
      dispatchAction(actionQueue, payload, setState),
    action: async (state: AppRouterState, action: ReducerActions) => {
      if (state === null) {
        throw new Error("Invariant: Router state not initialized");
      }
      const result = reducer(state, action);
      return result;
    },
    pending: null,
    last: null,
  };

  return actionQueue;
}
