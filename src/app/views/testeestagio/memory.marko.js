// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/codigo$1.0.0/src/app/views/testeestagio/memory.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"pt-BR\"><head><title>Teste-Estagio</title></head><body>");

  component_globals_tag({}, out);

  out.w("<header> <h1>Teste de Estágio - Portal do Trader</h1> </header><main><table><tr><td>Memória</td><td>Quantidade</td><td>Unidade</td></tr>");

  var for__12 = 0;

  marko_forEach(data.consumo, function(memo) {
    var keyscope__13 = "[" + ((for__12++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(memo.memoria) +
      "</td><td>" +
      marko_escapeXml(memo.quantidade) +
      "</td><td>" +
      marko_escapeXml(memo.unidade) +
      "</td></tr>");
  });

  out.w("</table> </main> <footer><strong> Todos direitos reservados à Portal do Trader </strong></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "20");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/codigo$1.0.0/src/app/views/testeestagio/memory.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
