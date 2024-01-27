$(document).ready(function () {
  // code goes here
  setInterval(function () {
    let lunchTime = new Date(2025, 0, 1, 0, 0, 0).getTime();
    let now = new Date().getTime();

    let distance = lunchTime - now;
    let day = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $(".day").html(day);
    $(".hours").html(hours);
    $(".minutes").html(minutes);
    $(".seconds").html(seconds);
    if (distance < 0) {
      $(".main-body").empty();
      $(".main-body").append('<div class="new"><h1>Launched</h1></div>');
    }
  }, 1000);
});
