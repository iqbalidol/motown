Ext.data.JsonP.MT_AppController({"tagname":"class","name":"MT.AppController","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"code_type":"assignment","inheritable":false,"inheritdoc":null,"meta":{},"id":"class-MT.AppController","members":{"cfg":[],"property":[],"method":[{"name":"constructor","tagname":"method","owner":"MT.AppController","meta":{},"id":"method-constructor"},{"name":"_loadPage","tagname":"method","owner":"MT.AppController","meta":{"private":true},"id":"method-_loadPage"},{"name":"findParent","tagname":"method","owner":"MT.AppController","meta":{"private":true},"id":"method-findParent"},{"name":"init","tagname":"method","owner":"MT.AppController","meta":{"template":true},"id":"method-init"},{"name":"onCheckpoint","tagname":"method","owner":"MT.AppController","meta":{"template":true},"id":"method-onCheckpoint"},{"name":"onResume","tagname":"method","owner":"MT.AppController","meta":{"template":true},"id":"method-onResume"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"files":[{"filename":"motown.js","href":"motown.html#MT-AppController"}],"html_meta":{},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/motown.html#MT-AppController' target='_blank'>motown.js</a></div></pre><div class='doc-contents'><p>This class provides an abstraction for the currently running Motown application.\nRefer to: <a href=\"#!/api/MT-property-App\" rel=\"MT-property-App\" class=\"docClass\">MT.App</a> in your application.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MT.AppController'>MT.AppController</span><br/><a href='source/motown.html#MT-AppController-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/MT.AppController-method-constructor' class='name expandable'>MT.AppController</a>( <span class='pre'>Object element, Object config</span> ) : Object</div><div class='description'><div class='short'>Creates a new AppController instance. ...</div><div class='long'><p>Creates a new AppController instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : Object<div class='sub-desc'><p>The top level DOM element of the application</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The configuration object passed to <a href=\"#!/api/MT-method-configApp\" rel=\"MT-method-configApp\" class=\"docClass\">MT.configApp</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_loadPage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MT.AppController'>MT.AppController</span><br/><a href='source/motown.html#MT-AppController-method-_loadPage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MT.AppController-method-_loadPage' class='name expandable'>_loadPage</a>( <span class='pre'>String name</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Loads the page's view and controller, returns the controller. ...</div><div class='long'><p>Loads the page's view and controller, returns the controller.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The name of the page to load.</p>\n</div></li></ul></div></div></div><div id='method-findParent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MT.AppController'>MT.AppController</span><br/><a href='source/motown.html#MT-AppController-method-findParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MT.AppController-method-findParent' class='name expandable'>findParent</a>( <span class='pre'>Object startEl</span> ) : Object<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>startEl</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MT.AppController'>MT.AppController</span><br/><a href='source/motown.html#MT-AppController-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MT.AppController-method-init' class='name expandable'>init</a>( <span class='pre'></span> )<strong class='template signature'>template</strong></div><div class='description'><div class='short'>Override this method to initialize any application-scoped state or to perform any other one-time\ninitialization tasks. ...</div><div class='long'><p>Override this method to initialize any application-scoped state or to perform any other one-time\ninitialization tasks. This method is called after the DOMContentLoaded event fires but\nbefore any page navigation occurs.</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n</div></div></div><div id='method-onCheckpoint' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MT.AppController'>MT.AppController</span><br/><a href='source/motown.html#MT-AppController-method-onCheckpoint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MT.AppController-method-onCheckpoint' class='name expandable'>onCheckpoint</a>( <span class='pre'>Object event</span> )<strong class='template signature'>template</strong></div><div class='description'><div class='short'>Override this method to perform an action before your application transitions from \"running\" to \"suspended\". ...</div><div class='long'><p>Override this method to perform an action before your application transitions from \"running\" to \"suspended\".</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'><p>The event passed to <a href=\"http://msdn.microsoft.com/en-us/library/windows/apps/br229839.aspx\">WinJS.Application.oncheckpoint</a></p>\n</div></li></ul></div></div></div><div id='method-onResume' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MT.AppController'>MT.AppController</span><br/><a href='source/motown.html#MT-AppController-method-onResume' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MT.AppController-method-onResume' class='name expandable'>onResume</a>( <span class='pre'>Object event</span> )<strong class='template signature'>template</strong></div><div class='description'><div class='short'>Override this method to respond to your application transitioning from \"suspended\" to \"running\". ...</div><div class='long'><p>Override this method to respond to your application transitioning from \"suspended\" to \"running\".</p>\n      <div class='signature-box template'>\n      <p>This is a <a href=\"#!/guide/components\">template method</a>.\n         a hook into the functionality of this class.\n         Feel free to override it in child classes.</p>\n      </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'><p>The event passed to <a href=\"http://msdn.microsoft.com/en-us/library/windows/apps/windows.ui.webui.webuiapplication.resuming.aspx\">Windows.UI.WebUI.WebUIApplication.onresuming</a></p>\n</div></li></ul></div></div></div></div></div></div></div>"});