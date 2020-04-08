var cfg = {
  family: 'Arial',
  style: '常规',
  size: '16',
};
$(function () {
    $text.showMenu();
    $text.showArea();
    var $body = $('body');
    $body.click(function () {
      $text.hideItems();
    });
  });
