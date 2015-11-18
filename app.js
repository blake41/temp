var app = app || {};
$(function() {
  var tempView = new app.TempView()
  $("#container").append(tempView.el)
})