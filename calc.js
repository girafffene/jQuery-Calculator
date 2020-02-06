$(document).ready(function() {
  $("numButton").on("click", function(e) {
    e.preventDefault()
    var val = $(this).html()
    $("#numBox").html(val)
  })

  // $("#numBox").html() +

  $("#clear").on("click", function(e) {
    e.preventDefault()
    $("#numBox").html($(""))
  })

  $("#add").on("click", function(e) {
    e.preventDefault()
    $("#numBox").html($(num1 + num2))
  })

  $("#subtract").on("click", function(e) {
    e.preventDefault()
    $("#numBox").html($(num1 - num2))
  })

  $("#multiply").on("click", function(e) {
    e.preventDefault()
    $("#numBox").html($(num1 * num2))
  })

  $("#divide").on("click", function(e) {
    e.preventDefault()
    $("#numBox").html($(num1 / num2))
  })
})
