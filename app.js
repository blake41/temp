$(function() {
  var shirt = new app.Shirt();
  var tempView = new app.TempView({model : shirt});
  $("#container").append(tempView.el);
})