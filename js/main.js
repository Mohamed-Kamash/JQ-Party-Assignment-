// menu section
let sideMenuSize = $('#sideMenu').innerWidth()

$('#sideMenu').animate({"left":-sideMenuSize},500)

$('#closeBtn').click(()=>{
    $('#sideMenu').animate({"left":-sideMenuSize},500)
})

$('#openBtn').click(()=>{
    $('#sideMenu').animate({"left":0},500)
})

$('#sideMenu li a ').click((e)=>{
  let currentLink = $(e.target).attr('href')
  let contactSection = $(currentLink).offset().top
  $('html , body').animate({'scrollTop':contactSection},1000)
})

// end menu section

// singers section
let allPanels = $(".accordion p").hide();
$(".accordion h1").click(function (e) {
  allPanels.slideUp();
  $(e.target).next().slideDown();
});
// end singers section

// counter section
let second=60;
let min = 44;
let secondCountDown=setInterval(()=>{
  second--
  $('#seconds').text(second)
  if (second==0) {
    min--
    $('#min').text(min)
    second=60
  }
},1000)
// end counter section

// contact section
let textArea = $("#textArea");
let remainingAfterDelete = 0;

textArea.keydown((e) => {
  if (e.key != "Backspace") {
    let letterTypped = textArea.val().length;
    let remaining = 99 - letterTypped;
    $("#reamining").text(remaining);
    remainingAfterDelete = remaining;
  }
});

textArea.keydown((e) => {
  if (e.key == "Backspace" && textArea.val().length > 0) {
    $("#reamining").text(++remainingAfterDelete);
  }
});
// end contact section


