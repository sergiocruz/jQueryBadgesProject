$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/185856.json',
    dataType: 'jsonp',
    success: function(data) {
      populateWithCourses(data.courses.completed)
    }
  });

  function populateWithCourses(courses) {

    var $badges = $('#badges');

    courses.forEach(function(course) {

      $column = $('<div />', {
        'class': 'col-sm-4 col-md-3'
      }).appendTo($badges);

      $div = $('<div />', {
        'class': 'course'
      }).appendTo($column);

      $('<h3 />', {
        text: course.title
      }).appendTo($div);

      $('<img />', {
        src: course.badge
      }).appendTo($div);

      $('<a />', {
        'class': 'btn btn-primary',
        target: '_blank',
        href: course.url,
        text: 'See Course'
      }).appendTo($div);

    });

  }

});
