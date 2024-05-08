loader.pitch = function () {
  if (
    // if it might be excluded/no-op we can't use pitch loader
    !shouldMaybeExclude &&
    // TODO: investigate swc file reading in PnP mode?
    !process.versions.pnp &&
    !EXCLUDED_PATHS.test(this.resourcePath) &&
    this.loaders.length - 1 === this.loaderIndex &&
    isAbsolute(this.resourcePath) &&
    !(await isWasm())
  ) {
    const loaderSpan = this.currentTraceSpan.traceChild("next-swc-loader");
    this.addDependency(this.resourcePath);
    return loaderSpan.traceAsyncFn(() =>
      // swc transform
      loaderTransform.call(this, loaderSpan),
    );
  }
};
