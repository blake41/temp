$(function() {
  var shirt = new app.Shirt({key : "blake"});
  var tempView = new app.TempView({model : shirt});
  app.tempView = tempView;
  $("#container").append(tempView.el);
})