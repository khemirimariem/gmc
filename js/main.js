function bold() {
  document.getElementById('text').style.fontWeight = "bold"
}

function italic() {
  document.getElementById('text').style.fontStyle = "italic";
}

function underline() {
  document.getElementById('text').style.textDecoration = "underline";
}

function fontsize() {

  var text = document.getElementById("text");
  var size = document.getElementById("fonts");
  text.style.fontSize = size.options[size.selectedIndex].text;
}

function fontFamily() {

  var text = document.getElementById("text");
  var Family = document.getElementById("fontss");
  text.style.fontFamily = Family.options[Family.selectedIndex].text;
}


$(".course1").hover(function () {
  $(".btnCourses1").toggleClass('btnCourses1Hover')
})

$(".course2").hover(function () {
  $(".btnCourses2").toggleClass('btnCourses2Hover')
})

$(".course3").hover(function () {
  $(".btnCourses3").toggleClass('btnCourses3Hover')
})

$(".course4").hover(function () {
  $(".btnCourses4").toggleClass('btnCourses4Hover')
})

$(".course5").hover(function () {
  $(".btnCourses5").toggleClass('btnCourses5Hover')
})

$(".course6").hover(function () {
  $(".btnCourses6").toggleClass('btnCourses6Hover')
})

$(".course7").hover(function () {
  $(".btnCourses7").toggleClass('btnCourses7Hover')
})

$(".course8").hover(function () {
  $(".btnCourses8").toggleClass('btnCourses8Hover')
})

$(".course9").hover(function () {
  $(".btnCourses9").toggleClass('btnCourses9Hover')
})


$(".open").on("click", function () {
  $(".popup, .popup-content").addClass("active");
});

$(".close, .popup").on("click", function () {
  $(".popup, .popup-content").removeClass("active");
});

$(".course1").click(function () {
  $("#fade").modal({
    fadeDuration: 100
  });
})

$(".course2").click(function () {
  $("#fade").modal({
    fadeDuration: 100
  });
})

$(".course3").click(function () {
  $("#fade").modal({
    fadeDuration: 100
  });
})
$(".course4").click(function () {
  $("#fade").modal({
    fadeDuration: 100
  });
})
$(".course5").click(function () {
  $("#fade").modal({
    fadeDuration: 100
  });
})
$(".course6").click(function () {
  $("#fade").modal({
    fadeDuration: 100
  });
})
$(".course7").click(function () {
  $("#fade").modal({
    fadeDuration: 100
  });
})
$(".course8").click(function () {
  $("#fade").modal({
    fadeDuration: 100
  });
})
$(".course9").click(function () {
  $("#fade").modal({
    fadeDuration: 100
  });
})

function modalShow() {
  $('#ex1').modal('open');
}



