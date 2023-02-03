/**
 * A jQuery wrapper for formatting JSON text in a friendly way.
 */

const formatJSON = require('@lumjs/formatting/json');
const Plugin = require('@lumjs/jquery-plugins/plugin');

module.exports = new Plugin(
{
  formatJSON()
  {
    const $ = Plugin.$;
    return this.each(function ()
    {
      var mytype = this.nodeName.toLowerCase(); // The element name.
      var $this = $(this); // A jQuery wrapper to the element.
      var oldval = '';
      if (mytype == "textarea")
        oldval = $this.val();
      else if (mytype == "pre")
        oldval = $this.text();
      else
        return; // We currently only support <textarea/> and <pre/>.

      var newval = formatJSON(oldval);

      if (mytype == "textarea")
        $this.val(newval);
      else
        $this.text(newval);
    });
  },
});
