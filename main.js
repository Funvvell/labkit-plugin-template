/* LabKit 工具扩展示例（classic script，零构建）
   kind = "tool"：只允许注册工具，调用 registerWidget 会被类型门禁拒绝。
   契约见主仓库 docs/PLUGIN_DEV.md；视觉 token 见 docs/DESIGN_SYSTEM.md。 */
(function () {
  'use strict';

  LabKit.registerTool(
    {
      id: 'hello',
      name: '示例：倍数计算',
      group: '社区插件',
      desc: '输入的数字乘以 2 —— 演示工具注册与统一壳层',
      py: 'bsjs beishu jisuan',
      help: '输入任意数字，点「计算」得到二倍值。仅演示扩展契约，无科研用途。',
      source: 'LabKit 工具扩展示例（MIT）',
      persist: true,
    },
    function (host) {
      host.innerHTML =
        '<div class="tfield">输入数字<input id="starterX" class="native-input" type="number" value="21"></div>' +
        '<button class="btn pri" id="starterGo" style="margin-top:10px">计算</button>' +
        '<pre id="starterOut" class="tnote" style="margin-top:10px">结果：—</pre>';
      host.querySelector('#starterGo').onclick = function () {
        var v = Number(host.querySelector('#starterX').value || 0);
        host.querySelector('#starterOut').textContent = '结果：' + (v * 2);
      };
      host.__lkExample = function () {
        host.querySelector('#starterX').value = '21';
        host.querySelector('#starterGo').click();
      };
    }
  );
})();
