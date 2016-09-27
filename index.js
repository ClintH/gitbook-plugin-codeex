var escape = require('escape-html');
module.exports = {
blocks: {
  codeEx: {
      process: function(blk) {
          var descr = blk.args.length == 1 ? blk.args[0] : "";
          var language = blk.kwargs.language ? blk.kwargs.language : "markup";

          return "<div class=\"example\">" +
                    descr + "<br />" +
                    "<code class=\"language-" + language + "\">" +
                      blk.body.trim() +
                    "</code>" +
                "</div>";
      }
  },
  markupEx: {
    process: function(blk) {
      var descr = "";
      if (blk.args && blk.args.length > 0) descr = blk.args[0];
      // For some reason the body comes in sort-of already escaped, so we have to unescape it
      var fixedBlock = blk.body.split("&gt;").join(">");
      fixedBlock = fixedBlock.split("&lt;").join("<");
      fixedBlock = fixedBlock.split("\\#").join("#");

      fixedBlock = fixedBlock.trim();
      var escapedBlock = escape(fixedBlock);
      return '' +
      '<div class="example">' +
        descr +
        '<div>' +
          '<pre><code style="language-markup">' +
            escapedBlock +
          '</pre></code>' +
          '<div class="preview">' +
            fixedBlock +
          '</div>' +
        '</div>' +
      '</div>';
    }
  }
}
};
