app.TempView = Backbone.View.extend({
  events : {
    "click" : "handleMyClick"
  },
  initialize : function() {
    this.render(); 
  },
  render : function() {
    myHtml = "<div>blake</div>"
    this.$el.append(myHtml);
  },
  handleMyClick : function() {
    this.model.set("key", "we got a click")
  }
})