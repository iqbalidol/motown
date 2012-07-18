Ext.data.JsonP.MT({"tagname":"class","name":"MT","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"code_type":"nop","inheritable":false,"inheritdoc":null,"meta":{},"id":"class-MT","members":{"cfg":[],"property":[{"name":"App","tagname":"property","owner":"MT","meta":{},"id":"property-App"}],"method":[{"name":"apply","tagname":"method","owner":"MT","meta":{},"id":"method-apply"},{"name":"configApp","tagname":"method","owner":"MT","meta":{},"id":"method-configApp"},{"name":"resourceExists","tagname":"method","owner":"MT","meta":{},"id":"method-resourceExists"},{"name":"toURL","tagname":"method","owner":"MT","meta":{},"id":"method-toURL"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"files":[{"filename":"motown.js","href":"motown.html#MT"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/motown.html#MT' target='_blank'>motown.js</a></div></pre><div class='doc-contents'><p>Namespace for Motown library.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-App' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MT'>MT</span><br/><a href='source/motown.html#MT-property-App' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MT-property-App' class='name not-expandable'>App</a><span> : Object</span></div><div class='description'><div class='short'><p>The instance of <a href=\"#!/api/MT.AppController\" rel=\"MT.AppController\" class=\"docClass\">MT.AppController</a> representing the currently running application.</p>\n</div><div class='long'><p>The instance of <a href=\"#!/api/MT.AppController\" rel=\"MT.AppController\" class=\"docClass\">MT.AppController</a> representing the currently running application.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-apply' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MT'>MT</span><br/><a href='source/motown.html#MT-method-apply' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MT-method-apply' class='name expandable'>apply</a>( <span class='pre'>Object dst, Object src</span> ) : Object</div><div class='description'><div class='short'>Copies src's own enumerable properties to dst. ...</div><div class='long'><p>Copies <code>src</code>'s <b>own</b> enumerable properties to <code>dst</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dst</span> : Object<div class='sub-desc'><p>The object copy properties <b>to</b>.</p>\n</div></li><li><span class='pre'>src</span> : Object<div class='sub-desc'><p>The object to copy properties <b>from</b>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The object passes in the <code>dst</code> parameter.</p>\n</div></li></ul></div></div></div><div id='method-configApp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MT'>MT</span><br/><a href='source/motown.html#MT-method-configApp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MT-method-configApp' class='name expandable'>configApp</a>( <span class='pre'>Object config</span> )</div><div class='description'><div class='short'>Entry point function for starting Motown applications. ...</div><div class='long'><p>Entry point function for starting Motown applications.\nThe <code>config</code> parameter is used to construct an instance of <a href=\"#!/api/MT.AppController\" rel=\"MT.AppController\" class=\"docClass\">MT.AppController</a>.\nYou can override any of the template methods in <a href=\"#!/api/MT.AppController\" rel=\"MT.AppController\" class=\"docClass\">MT.AppController</a> such as  <a href=\"#!/api/MT.AppController-method-onCheckpoint\" rel=\"MT.AppController-method-onCheckpoint\" class=\"docClass\">MT.AppController.onCheckpoint</a>\nto suit the needs of your application.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The application configuration</p>\n<ul><li><span class='pre'>name</span> : String (optional)<div class='sub-desc'><p>The application name</p>\n</div></li><li><span class='pre'>namespace</span> : String (optional)<div class='sub-desc'><p>The namespace for the application (defaults to window)</p>\n</div></li><li><span class='pre'>pages</span> : Mixed[]<div class='sub-desc'><p>An array of page definition objects</p>\n</div></li></ul></div></li></ul></div></div></div><div id='method-resourceExists' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MT'>MT</span><br/><a href='source/motown.html#MT-method-resourceExists' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MT-method-resourceExists' class='name expandable'>resourceExists</a>( <span class='pre'>String path</span> ) : Boolean</div><div class='description'><div class='short'>Determines if a file exists at a given path in the running application's app package. ...</div><div class='long'><p>Determines if a file exists at a given path in the running application's app package.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : String<div class='sub-desc'><p>The path to check in the application package (absolute path)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><code>true</code> if the file exists, <code>false</code> otherwise.</p>\n</div></li></ul></div></div></div><div id='method-toURL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MT'>MT</span><br/><a href='source/motown.html#MT-method-toURL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MT-method-toURL' class='name expandable'>toURL</a>( <span class='pre'>String base, Object params</span> ) : String</div><div class='description'><div class='short'>Creates a URL with base and parameter components. ...</div><div class='long'><p>Creates a URL with base and parameter components.\nUse the returned value for calls to WinJS.xhr</p>\n\n<pre><code><a href=\"#!/api/MT-method-toURL\" rel=\"MT-method-toURL\" class=\"docClass\">MT.toURL</a>('http://my.host.net/base', {\n  param1: 'value 1',\n  param2: 2112\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>base</span> : String<div class='sub-desc'><p>The base URI</p>\n</div></li><li><span class='pre'>params</span> : Object<div class='sub-desc'><p>A map of name/value pairs to use as URL parameters</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The full URL, uri-encoded</p>\n</div></li></ul></div></div></div></div></div></div></div>"});