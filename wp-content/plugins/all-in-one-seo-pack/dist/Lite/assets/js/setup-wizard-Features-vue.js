(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["setup-wizard-Features-vue"],{"40df":function(e,t,s){},"49e5":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"aioseo-wizard-features"},[s("wizard-header"),s("wizard-container",[s("wizard-body",{scopedSlots:e._u([{key:"footer",fn:function(){return[s("div",{staticClass:"go-back"},[s("router-link",{staticClass:"no-underline",attrs:{to:e.getPrevLink}},[e._v("←")]),e._v(" "),s("router-link",{attrs:{to:e.getPrevLink}},[e._v(e._s(e.strings.goBack))])],1),s("div",{staticClass:"spacer"}),s("base-button",{attrs:{type:"blue",loading:e.loading},on:{click:e.saveAndContinue}},[e._v(e._s(e.strings.saveAndContinue)+" →")])]},proxy:!0}])},[s("wizard-steps"),s("div",{staticClass:"header"},[e._v(" "+e._s(e.strings.whichFeatures)+" ")]),s("div",{staticClass:"description"},[e._v(" "+e._s(e.strings.description)+" ")]),e._l(e.getFeatures,(function(t,i){return s("div",{key:i,staticClass:"feature-grid small-padding medium-margin"},[s("grid-row",[s("grid-column",{attrs:{xs:"11"}},[s("div",{staticClass:"settings-name"},[s("div",{staticClass:"name small-margin"},[e._v(" "+e._s(t.name)+" "),e.needsUpsell(t)?s("core-pro-badge"):e._e()],1),s("div",{staticClass:"aioseo-description-text"},[e._v(" "+e._s(t.description)+" ")])])]),s("grid-column",{attrs:{xs:"1"}},[s("base-checkbox",{class:{"no-clicks":t.required},attrs:{round:"",type:t.required?"green":"blue",value:!!t.required||e.getValue(t)},on:{input:function(s){return e.updateValue(s,t)}},nativeOn:{click:function(s){return function(s){return e.preventUncheck(s,t)}(s)}}})],1)],1)],1)}))],2),e.getPluginsText?s("div",{staticClass:"plugins"},[e._v(" "+e._s(e.getPluginsText)+" ")]):e._e(),s("wizard-close-and-exit")],1)],1)},n=[],a=(s("4de4"),s("c740"),s("caad"),s("a15b"),s("d81d"),s("2532"),s("2909")),r=s("5530"),u=s("9c0e"),l=s("2f62"),d={mixins:[u["q"]],data:function(){return{loading:!1,stage:"features",strings:{whichFeatures:this.$t.__("Which SEO features do you want to enable?",this.$td),description:this.$t.__("We have already selected our recommended features based on your site category, but you can use the following features to fine-tune your site.",this.$td)}}},computed:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(l["e"])(["options"])),Object(l["e"])("wizard",{additionalInformation:"additionalInformation",presetFeatures:"features"})),{},{showPluginsAll:function(){return this.presetFeatures.includes("analytics")&&(this.presetFeatures.includes("image-seo")||this.presetFeatures.includes("news-sitemap")||this.presetFeatures.includes("video-sitemap")||this.presetFeatures.includes("local-seo")||this.presetFeatures.includes("redirects"))},showPluginsAddons:function(){return!this.presetFeatures.includes("analytics")&&(this.presetFeatures.includes("image-seo")||this.presetFeatures.includes("news-sitemap")||this.presetFeatures.includes("video-sitemap")||this.presetFeatures.includes("local-seo")||this.presetFeatures.includes("redirects"))},showPluginsOnly:function(){return this.presetFeatures.includes("analytics")&&!this.presetFeatures.includes("image-seo")&&!this.presetFeatures.includes("news-sitemap")&&!this.presetFeatures.includes("video-sitemap")&&!this.presetFeatures.includes("local-seo")&&!this.presetFeatures.includes("redirects")},getPluginsText:function(){return this.showPluginsOnly?this.$t.sprintf(this.$t.__("The following plugins will be installed: %1$s",this.$td),this.getPluginNames):this.showPluginsAddons?this.$t.sprintf(this.$t.__("The following %1$s addons will be installed: %2$s",this.$td),"AIOSEO",this.getPluginNames):this.showPluginsAll?this.$t.sprintf(this.$t.__("The following plugins and %1$s addons will be installed: %2$s",this.$td),"AIOSEO",this.getPluginNames):null},getPluginNames:function(){var e=[];return this.presetFeatures.includes("analytics")&&e.push("MonsterInsights Free"),this.presetFeatures.includes("image-seo")&&e.push("Image SEO"),this.presetFeatures.includes("local-seo")&&e.push("Local Business SEO"),this.presetFeatures.includes("video-sitemap")&&e.push("Video Sitemap"),this.presetFeatures.includes("news-sitemap")&&e.push("News Sitemap"),this.presetFeatures.includes("redirects")&&e.push("Redirects"),e.join(", ")},getFeatures:function(){var e=this;return this.features.filter((function(e){return"breadcrumbs"!==e.value})).filter((function(e){return"internal-links"!==e.value})).filter((function(e){return"advanced-schema"!==e.value})).map((function(t){return t.selected=!1,e.presetFeatures.includes(t.value)&&(t.selected=!0),t}))}}),methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(l["d"])("wizard",["updateFeatures"])),Object(l["b"])("wizard",["saveWizard"])),{},{preventUncheck:function(e,t){t.required&&(e.preventDefault(),e.stopPropagation())},getValue:function(e){return this.presetFeatures.includes(e.value)},updateValue:function(e,t){var s=Object(a["a"])(this.presetFeatures);if(e)return s.push(t.value),void this.updateFeatures(s);var i=s.findIndex((function(e){return e===t.value}));-1!==i&&this.$delete(s,i),this.updateFeatures(s)},saveAndContinue:function(){var e=this;this.loading=!0,this.saveWizard("features").then((function(){e.$router.push(e.getNextLink)}))}})},o=d,c=(s("eddc"),s("2877")),h=Object(c["a"])(o,i,n,!1,null,null,null);t["default"]=h.exports},eddc:function(e,t,s){"use strict";var i=s("40df"),n=s.n(i);n.a}}]);