$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/185856.json',
    dataType: 'jsonp',
    success: function(response) {
      buildDom(response.courses.completed);
    }
  });

  function buildDom(courses) {
    var $badges = $('#badges');

    courses.forEach(function(course) {
      var $div = $('<div />', {
        'class': 'course'
      });

      $badges.append($div);

      $div.append($('<h3 />', {
        text: course.title
      }));

      $div.append($('<img />', {
        src: course.badge
      }));

      $div.append($('<a />', {
        href: course.url,
        target: '_blank',
        'class': 'btn btn-primary',
        text: 'See Course'
      }));
    });
  }

});
