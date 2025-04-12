// Copyright (C) 2012-present, The Authors. This program is free software: you can redistribute it and/or  modify it under the terms of the GNU Affero General Public License, version 3, as published by the Free Software Foundation. This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License for more details. You should have received a copy of the GNU Affero General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.

var Handlebones = require("handlebones");
var OriginalWritingTipsView = require("./writingTips");
var React = require("react");
var ReactDOM = require("react-dom");
var ModernComponents = require("../components/modern");

// Feature flag to toggle between original and modern components
// Set to false to use original components
var USE_MODERN_COMPONENTS = true;

module.exports = Handlebones.View.extend({
  name: "writingTipsWrapper",
  
  initialize: function() {
    console.log('WritingTipsWrapper initialized');
    if (!USE_MODERN_COMPONENTS) {
      console.log('Using original WritingTips component');
      this.originalView = new OriginalWritingTipsView();
    } else {
      console.log('Using modern Chakra UI component');
    }
  },
  
  render: function() {
    console.log('WritingTipsWrapper rendering');
    if (USE_MODERN_COMPONENTS) {
      // Use the modern Chakra UI component
      this.$el.html("<div id='modern-writing-tips'></div>");
      
      // Render the React component
      ReactDOM.render(
        React.createElement(ModernComponents.ModernWritingTips),
        this.$("#modern-writing-tips")[0]
      );
      console.log('ModernWritingTips component mounted in wrapper');
    } else {
      // Use the original component
      this.originalView.render();
      this.$el.html(this.originalView.el);
      console.log('Original WritingTips component mounted in wrapper');
    }
    return this;
  },
  
  remove: function() {
    console.log('WritingTipsWrapper removing');
    if (USE_MODERN_COMPONENTS) {
      // Clean up React component
      var mountNode = this.$("#modern-writing-tips")[0];
      if (mountNode) {
        ReactDOM.unmountComponentAtNode(mountNode);
        console.log('ModernWritingTips component unmounted from wrapper');
      }
    } else if (this.originalView) {
      this.originalView.remove();
      console.log('Original WritingTips component removed from wrapper');
    }
    Handlebones.View.prototype.remove.apply(this, arguments);
  }
});
