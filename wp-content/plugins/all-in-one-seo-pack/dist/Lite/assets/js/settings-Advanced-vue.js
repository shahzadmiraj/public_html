(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["settings-Advanced-vue"],{"5eb7":function(s,t,e){"use strict";var n=e("9313"),i=e.n(n);i.a},"5ee0":function(s,t,e){"use strict";e.r(t);var n=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"aioseo-advanced"},[e("core-card",{attrs:{slug:"advanced","header-text":s.strings.advanced}},[e("core-settings-row",{attrs:{name:s.strings.truSeo},scopedSlots:s._u([{key:"content",fn:function(){return[e("base-toggle",{model:{value:s.options.advanced.truSeo,callback:function(t){s.$set(s.options.advanced,"truSeo",t)},expression:"options.advanced.truSeo"}}),e("div",{staticClass:"aioseo-description"},[s._v(" "+s._s(s.strings.truSeoDescription)+" ")])]},proxy:!0}])}),e("core-settings-row",{attrs:{name:s.strings.postTypeColumns},scopedSlots:s._u([{key:"content",fn:function(){return[e("base-checkbox",{attrs:{size:"medium"},model:{value:s.options.advanced.postTypes.all,callback:function(t){s.$set(s.options.advanced.postTypes,"all",t)},expression:"options.advanced.postTypes.all"}},[s._v(" "+s._s(s.strings.includeAllPostTypes)+" ")]),s.options.advanced.postTypes.all?s._e():e("core-post-type-options",{attrs:{options:s.options.advanced,type:"postTypes"}}),e("div",{staticClass:"aioseo-description"},[s._v(" "+s._s(s.strings.selectPostTypes)+" "),e("span",{domProps:{innerHTML:s._s(s.$links.getDocLink(s.$constants.GLOBAL_STRINGS.learnMore,"selectPostTypesColumns",!0))}})])]},proxy:!0}])}),e("core-settings-row",{scopedSlots:s._u([{key:"name",fn:function(){return[s._v(" "+s._s(s.strings.taxonomyColumns)+" "),s.isUnlicensed?e("core-pro-badge"):s._e()]},proxy:!0},{key:"content",fn:function(){return[s.isUnlicensed?e("base-checkbox",{attrs:{disabled:"",size:"medium",value:!0}},[s._v(" "+s._s(s.strings.includeAllTaxonomies)+" ")]):s._e(),s.isUnlicensed?s._e():e("base-checkbox",{attrs:{size:"medium"},model:{value:s.options.advanced.taxonomies.all,callback:function(t){s.$set(s.options.advanced.taxonomies,"all",t)},expression:"options.advanced.taxonomies.all"}},[s._v(" "+s._s(s.strings.includeAllTaxonomies)+" ")]),s.options.advanced.taxonomies.all||s.isUnlicensed?s._e():e("core-post-type-options",{attrs:{options:s.options.advanced,type:"taxonomies"}}),e("div",{staticClass:"aioseo-description"},[s._v(" "+s._s(s.strings.selectTaxonomies)+" "),e("span",{domProps:{innerHTML:s._s(s.$links.getDocLink(s.$constants.GLOBAL_STRINGS.learnMore,"selectTaxonomiesColumns",!0))}})]),s.isUnlicensed?e("core-alert",{staticClass:"inline-upsell",attrs:{type:"blue"}},[e("div",{domProps:{innerHTML:s._s(s.strings.taxonomyColumnsUpsell)}})]):s._e()]},proxy:!0}])}),e("core-settings-row",{attrs:{align:""},scopedSlots:s._u([{key:"name",fn:function(){return[s._v(" "+s._s(s.strings.adminBarMenu)+" "),s.isUnlicensed?e("core-pro-badge"):s._e()]},proxy:!0},{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{disabled:s.isUnlicensed,name:"adminBarMenu",options:[{label:s.$constants.GLOBAL_STRINGS.hide,value:!1,activeClass:"dark"},{label:s.$constants.GLOBAL_STRINGS.show,value:!0}]},model:{value:s.adminBarMenu,callback:function(t){s.adminBarMenu=t},expression:"adminBarMenu"}}),e("div",{staticClass:"aioseo-description"},[s._v(" "+s._s(s.strings.adminBarMenuDescription)+" ")]),s.isUnlicensed?e("core-alert",{staticClass:"inline-upsell",attrs:{type:"blue"}},[e("div",{domProps:{innerHTML:s._s(s.strings.adminBarMenuUpsell)}})]):s._e()]},proxy:!0}])}),e("core-settings-row",{attrs:{align:""},scopedSlots:s._u([{key:"name",fn:function(){return[s._v(" "+s._s(s.strings.dashboardWidget)+" "),s.isUnlicensed?e("core-pro-badge"):s._e()]},proxy:!0},{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{disabled:s.isUnlicensed,name:"dashboardWidget",options:[{label:s.$constants.GLOBAL_STRINGS.hide,value:!1,activeClass:"dark"},{label:s.$constants.GLOBAL_STRINGS.show,value:!0}]},model:{value:s.dashboardWidget,callback:function(t){s.dashboardWidget=t},expression:"dashboardWidget"}}),e("div",{staticClass:"aioseo-description"},[s._v(" "+s._s(s.strings.dashboardWidgetDescription)+" ")]),s.isUnlicensed?e("core-alert",{staticClass:"inline-upsell",attrs:{type:"blue"}},[e("div",{domProps:{innerHTML:s._s(s.strings.dashboardWidgetUpsell)}})]):s._e()]},proxy:!0}])}),e("core-settings-row",{attrs:{name:s.strings.announcements,align:""},scopedSlots:s._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"announcements",options:[{label:s.$constants.GLOBAL_STRINGS.hide,value:!1,activeClass:"dark"},{label:s.$constants.GLOBAL_STRINGS.show,value:!0}]},model:{value:s.options.advanced.announcements,callback:function(t){s.$set(s.options.advanced,"announcements",t)},expression:"options.advanced.announcements"}}),e("div",{staticClass:"aioseo-description"},[s._v(" "+s._s(s.strings.announcementsDescription)+" ")])]},proxy:!0}])}),s.$isPro?e("core-settings-row",{attrs:{align:""},scopedSlots:s._u([{key:"name",fn:function(){return[s._v(" "+s._s(s.strings.automaticUpdates)+" ")]},proxy:!0},{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"autoUpdates",options:[{label:s.strings.all,value:"all"},{label:s.strings.minor,value:"minor"},{label:s.strings.none,value:"none",activeClass:"dark"}]},model:{value:s.options.advanced.autoUpdates,callback:function(t){s.$set(s.options.advanced,"autoUpdates",t)},expression:"options.advanced.autoUpdates"}}),e("div",{staticClass:"aioseo-description"},["all"===s.options.advanced.autoUpdates?e("span",[s._v(s._s(s.strings.allDescription))]):s._e(),"minor"===s.options.advanced.autoUpdates?e("span",[s._v(s._s(s.strings.minorDescription))]):s._e(),"none"===s.options.advanced.autoUpdates?e("span",[s._v(s._s(s.strings.noneDescription))]):s._e()])]},proxy:!0}],null,!1,89936591)}):s._e(),s.$isPro?s._e():e("core-settings-row",{scopedSlots:s._u([{key:"name",fn:function(){return[s._v(" "+s._s(s.strings.usageTracking)+" "),e("core-tooltip",{scopedSlots:s._u([{key:"tooltip",fn:function(){return[e("div",{domProps:{innerHTML:s._s(s.strings.usageTrackingTooltip)}})]},proxy:!0}],null,!1,1886299547)},[e("svg-circle-question-mark")],1)]},proxy:!0},{key:"content",fn:function(){return[e("base-toggle",{model:{value:s.options.advanced.usageTracking,callback:function(t){s.$set(s.options.advanced,"usageTracking",t)},expression:"options.advanced.usageTracking"}}),e("div",{staticClass:"aioseo-description"},[s._v(" "+s._s(s.strings.usageTrackingDescription)+" ")])]},proxy:!0}],null,!1,309685458)}),e("core-settings-row",{attrs:{name:s.strings.uninstallAioseo},scopedSlots:s._u([{key:"content",fn:function(){return[e("base-toggle",{model:{value:s.options.advanced.uninstall,callback:function(t){s.$set(s.options.advanced,"uninstall",t)},expression:"options.advanced.uninstall"}}),e("div",{staticClass:"aioseo-description"},[s._v(" "+s._s(s.strings.uninstallAioseoDescription)+" ")])]},proxy:!0}])})],1)],1)},i=[],o=e("5530"),a=e("2f62"),r={data:function(){return{strings:{advanced:this.$t.__("Advanced Settings",this.$td),truSeo:this.$t.__("TruSEO Score & Content",this.$td),truSeoDescription:this.$t.__("Enable our TruSEO score to help you optimize your content for maximum traffic.",this.$td),seoAnalysis:this.$t.__("SEO Analysis",this.$td),postTypeColumns:this.$t.__("Post Type Columns",this.$td),includeAllPostTypes:this.$t.__("Include All Post Types",this.$td),selectPostTypes:this.$t.sprintf(this.$t.__("Select which Post Types you want to use the %1$s columns with.",this.$td),"AIOSEO"),usageTracking:this.$t.__("Usage Tracking",this.$td),adminBarMenu:this.$t.__("Admin Bar Menu",this.$td),adminBarMenuDescription:this.$t.sprintf(this.$t.__("This adds %1$s to the admin toolbar for easy access to your SEO settings.",this.$td),"AIOSEO"),dashboardWidget:this.$t.__("Dashboard Widget",this.$td),dashboardWidgetDescription:this.$t.__("This displays an SEO News widget on the dashboard.",this.$td),announcements:this.$t.__("Announcements",this.$td),announcementsDescription:this.$t.__("This allows you to hide plugin announcements and update details.",this.$td),automaticUpdates:this.$t.__("Automatic Updates",this.$td),all:this.$t.__("All (recommended)",this.$td),allDescription:this.$t.__("You are getting the latest features, bugfixes, and security updates as they are released.",this.$td),minor:this.$t.__("Minor Only",this.$td),minorDescription:this.$t.__("You are getting bugfixes and security updates, but not major features.",this.$td),none:this.$t.__("None",this.$td),noneDescription:this.$t.__("You will need to manually update everything.",this.$td),usageTrackingDescription:this.$t.__("By allowing us to track usage data we can better help you because we know with which WordPress configurations, themes and plugins we should test.",this.$td),usageTrackingTooltip:this.$t.sprintf(this.$t.__("Complete documentation on usage tracking is available %1$shere%2$s.",this.$td),this.$t.sprintf('<strong><a href="%1$s" target="_blank">',this.$links.getDocUrl("usageTracking")),"</a></strong>"),adminBarMenuUpsell:this.$t.sprintf(this.$t.__("This Admin Bar feature is only available for licensed %1$s users. %2$s",this.$td),"<strong>".concat("AIOSEO"," Pro</strong>"),this.$links.getUpsellLink("general-settings-advanced",this.$constants.GLOBAL_STRINGS.learnMore,"admin-bar-menu",!0)),dashboardWidgetUpsell:this.$t.sprintf(this.$t.__("The Dashboard Widget feature is only available for licensed %1$s users. %2$s",this.$td),"<strong>".concat("AIOSEO"," Pro</strong>"),this.$links.getUpsellLink("general-settings-advanced",this.$constants.GLOBAL_STRINGS.learnMore,"dashboard-widget",!0)),taxonomyColumns:this.$t.__("Taxonomy Columns",this.$td),includeAllTaxonomies:this.$t.__("Include All Taxonomies",this.$td),selectTaxonomies:this.$t.sprintf(this.$t.__("Select which Taxonomies you want to use the %1$s columns with.",this.$td),"AIOSEO"),taxonomyColumnsUpsell:this.$t.sprintf(this.$t.__("This feature is only for licensed %1$s users. %2$s",this.$td),"<strong>".concat("AIOSEO"," Pro</strong>"),this.$links.getUpsellLink("general-settings-advanced",this.$constants.GLOBAL_STRINGS.learnMore,"taxonomy-columns",!0)),uninstallAioseo:this.$t.sprintf(this.$t.__("Uninstall %1$s",this.$td),"AIOSEO"),uninstallAioseoDescription:this.$t.sprintf(this.$t.__("Check this if you would like to remove ALL %1$s data upon plugin deletion. All settings and SEO data will be unrecoverable.",this.$td),"AIOSEO")}}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(a["c"])(["settings","isUnlicensed"])),Object(a["e"])(["options"])),{},{adminBarMenu:{get:function(){return!!this.isUnlicensed||this.options.advanced.adminBarMenu},set:function(s){this.options.advanced.adminBarMenu=s}},dashboardWidget:{get:function(){return!!this.isUnlicensed||this.options.advanced.dashboardWidget},set:function(s){this.options.advanced.dashboardWidget=s}}})},l=r,d=(e("5eb7"),e("2877")),c=Object(d["a"])(l,n,i,!1,null,null,null);t["default"]=c.exports},9313:function(s,t,e){}}]);