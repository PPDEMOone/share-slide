function transformSource(source) {
  const buildInfo = getModuleBuildInfo(this._module);
  /*
   * 模块构建信息绑定rsc meta
   * 根据正则匹配出对应的actions json
   * 默认是 top level 'use server' 为 false
   */
  buildInfo.rsc = getRSCModuleInformation(source, false);

  // inject source code
  return `${source}`;
}
