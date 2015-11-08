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
            return '' +
            '<div class="example">' +
              descr +
              '<div>' +
                '<pre><code style="language-markup">' +
                  blk.body.trim().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;') +
                '</code></pre>' +
                '<div class="preview">' +
                  blk.body.trim() +
                '</div>' +
              '</div>' +
            '</div>';
          }
        }
    }
};
