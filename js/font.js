
nt = (function () {
  var $dlg = $(
    '' +
        '<div  id="font" class="font">' +
        '<div class="font-dlgbox">' +
        '<div class="font-dlgtitle">' +
        '<p class="title">字体</p>' +
        '<span class="close-btn" title="关闭">✖</span>' +
        '</div>' +
        '<div class="font-dlgmain">' +
        '<div class="fontmain-family"><p>字体(F):</p></div>' +
        '<div class="fontmain-style"><p>字形(Y):</p></div>' +
        '<div class="fontmain-size"><p>大小(S):</p></div>' +
        '<fieldset class="sample">' +
        '<legend>示例</legend>' +
        '<p class="sample-txt">AaBbYyZz</p>' +
        '</fieldset>' +
        '<div class="script">' +
        '<label>' +
        '<span>脚本(R):</span>' +
        '<select>' +
        '<option value="西欧语言">西欧语言</option>' +
        '<option value="中文 GB2312">中文 GB2312</option>' +
        '</select>' +
        '</label>' +
        '</div>' +
        '</div>' +
        '<div class="fontB">' +
        '<input class="fontB-ok" type="button" value="确定">' +
        '<input class="fontB-cancel" type="button" value="取消">' +
        '</div>' +
        '</div>' +
        '</div>'
  );

  var $close = $dlg.find('.close-btn');
  var $cancel = $dlg.find('.fontB-cancel');
  var $ok = $dlg.find('.fontB-ok');
  var $family = $dlg.find('.fontmain-family');
  var $style = $dlg.find('.fontmain-style');
  var $size = $dlg.find('.fontmain-size');
  var $sample = $dlg.find('.sample-txt');

  var fonts = ['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'];
  var styles = ['常规', '斜体', '粗体', '粗偏斜体'];
  var sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'];
    
  var config={
    family: 'Arial',
    style: '常规',
    size: '16',
  };
  
  function showList(arr, $box) {
    var $list = $('<ul class="fontmain-list"></ul>');
    var $title = $('<input class="fontmain-list-title" type="text">');
    var $choice = $('<div class="fontmain-box"></div>');
    var boxclass = $box.attr('class');
    for (var i = 0; i < arr.length; i++) {
      var $item = $('<li class="fontmain-list-item"></li');
      var num=0;
      if (boxclass == 'fontmain-family') {
        num=1;
        $item.css('font-family', arr[i]);
        if(arr[i]==cfg.family){
          $item.addClass('use');
        }
        $item.html(arr[i]);
      } else if (boxclass == 'fontmain-style') {
        num=2;
        $item.html(arr[i]);
        if (arr[i] == '斜体') {
          $item.css('font-style', 'italic');
        } else if (arr[i] == '粗体') {
          $item.css('font-weight', 'bold');
        } else if (arr[i] == '粗偏斜体') {
          $item.css('font-style', 'italic');
          $item.css('font-weight', 'bold');
        }
        if(arr[i]==cfg.style){
          $item.addClass('use');
        }
      } else {
        num=3;
          if(arr[i]==cfg.size){
            $item.addClass('use');
          }
          $item.html(arr[i]);
      }
      $list.append($item);
        $item.click(function(){
          if(num===1){$('div.fontmain-family .fontmain-list-item').removeClass('use');
            cfg.family=$(this).html();}
          if(num===2){$('div.fontmain-style .fontmain-list-item').removeClass('use');
            cfg.style=$(this).html();}
          if(num===3){$('div.fontmain-size .fontmain-list-item').removeClass('use');
            cfg.size=$(this).html();}
            $(this).addClass('use');
          title();
          sample();
        });
    }
    $choice.append($title);
    $choice.append($list);
    $box.append($choice);
  }

  function title(){
    $('div.fontmain-family input').val(config.family);
    $('div.fontmain-style input').val(config.style);
    $('div.fontmain-size input').val(config.size);
  }
  function sample(){
    $sample.css('font-family', config.family);
    $sample.css('font-size', config.size+'px');
    if (config.style == '斜体') {
      $sample.css('font-style', 'italic');
      $sample.css('font-weight','normal');
    } else if (config.style == '粗体') {
      $sample.css('font-style','normal');
      $sample.css('font-weight', 'bold');
    } else if (config.style == '粗偏斜体') {
      $sample.css('font-style', 'italic');
      $sample.css('font-weight', 'bold');
    }else{
      $sample.css('font-style','normal');
      $sample.css('font-weight','normal');
    }
  }

  function init() {
    config=cfg;
    $('#box').append($dlg);
    showList(fonts, $family);
    showList(styles, $style);
    showList(sizes, $size);
    title();
    sample();
  }
  $close.click(function () {
    $dlg.css('display', 'none');
  });
  $cancel.click(function () {
    $dlg.css('display', 'none');
  });

  $ok.click(function(){
    $.extend(cfg,config);
    $text.showFont(); 
    $dlg.css('display', 'none');
  });

  function show() {
    $dlg.css('display', 'block');
    console.log('111111')
  }

  $dlg.click(function (e) {
    e.stopPropagation();
  });

  return {
    init: init,
    show: show,
  };
})();
