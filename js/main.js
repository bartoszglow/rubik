(function() {
  var MOVES = ['U', 'U\'', 'L', 'L\'', 'R', 'R\'', 'F', 'F\''];
  var intervalID;
  var countDown;

  $('document').ready(function() {
    var initialTimeInterval = 3000;

    randomizeMove(initialTimeInterval);

    intervalID = window.setInterval(randomizeMove.bind(null, initialTimeInterval), initialTimeInterval);
  });

  $('form').on('submit', function(e) {
    e.preventDefault();

    countDown = 3;

    if(intervalID) {
      window.clearInterval(intervalID);
    }

    intervalID = window.setInterval(randomizeMove.bind(null, this.time.value), this.time.value);
  });

  $('form').on('reset', function(e) {
    alert('stop');
  });

  function randomizeMove(timeInterval) {
    var random = Math.floor(Math.random() * MOVES.length);

    $('.random-move').hide(timeInterval / 5, function() {
      $(this).text(countDown || MOVES[random]);
      countDown = countDown > 0 ? countDown - 1 : 0;
    }).show(timeInterval / 10);
  }
}());
