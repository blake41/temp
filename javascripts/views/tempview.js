app.TempView = Backbone.View.extend({
  events : {
    "click" : "handleMyClick"
  },
  initialize : function() {
    this.model.on("change", this.modelChangeEvent, this)
    this.render(); 
  },
  render : function() {
    myHtml = "<div>" + this.model.get("key") + "</div>"
    this.$el.html(myHtml);
  },
  handleMyClick : function() {
    this.model.set("key", "we got a click")
  },
  modelChangeEvent : function() {
    this.render();  
  }
})