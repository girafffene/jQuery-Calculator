$(document).ready(function() {
  $("#add").on("click", function(e) {
    e.preventDefault()
    var val = Number($("#num1").val())
    var val2 = Number($("#num2").val())

    $("#answer").val(val + val2)
  })

  $("#subtract").on("click", function(e) {
    e.preventDefault()
    var val = Number($("#num1").val())
    var val2 = Number($("#num2").val())

    $("#answer").val(val - val2)
  })

  $("#multiply").on("click", function(e) {
    e.preventDefault()
    var val = Number($("#num1").val())
    var val2 = Number($("#num2").val())

    $("#answer").val(val * val2)
  })

  $("#divide").on("click", function(e) {
    e.preventDefault()
    var val = Number($("#num1").val())
    var val2 = Number($("#num2").val())

    $("#answer").val(val / val2)
  })
})
