var $text = (function () {
    var $box = $('#box');
    var $area = $('<div id="area" class="area"></div>');
    var $textarea = $('<textarea class="textarea" spellcheck="false"></textarea>');
  
    function showArea() {
      $area.css('height', window.innerHeight - 27);
      $area.append($textarea);
      $box.append($area);
    }

    var $bar = $('<div id="menu" class="menu"></div>');
      
    var data = [
        {
          title: '文件(F)',
          items: [
            {
              title: '新建(N)',
            },
            {
              title: '新窗口(W)',
            },
            {
              title: '打开(O)',
            },
            {
              title: '保存(S)',
            },
            {
              title: '另存为(A)',
            },
            {
              title: 'hr',
            },
            {
              title: '页面设置(U)',
            },
            {
              title: '打印(P)',
            },
            {
              title: 'hr',
            },
            {
              title: '退出(X)',
            },
          ],
        },
        {
          title: '编辑(E)',
          items: [
            {
              title: '撤销(U)',
            },
            {
              title: 'hr',
            },
            {
              title: '剪切(T)',
            },
            {
              title: '复制(C)',
            },
            {
              title: '粘贴(P)',
            },
            {
              title: '删除(L)',
            },
            {
              title: 'hr',
            },
            {
              title: '使用Bing搜索...',
            },
            {
              title: '查找(F)',
            },
            {
              title: '查找下一个(N)',
            },
            {
              title: '查找上一个(V)',
            },
            {
              title: '替换(R)',
            },
            {
              title: '转到(G)',
            },
            {
              title: '全选(A)',
            },
            {
              title: '时间/日期(D)',
            },
          ],
        },
        {
          title: '格式(O)',
          items: [
            {
              title: '自动换行(W)',
            },
            {
              title: '字体(F)',
            },
          ],
        },
        {
          title: '查看(V)',
          items: [
            {
              title: '缩放(Z)',
            },
            {
              title: '状态栏(S)',
            },
          ],
        },
        {
          title: '帮助(H)',
          items: [
            {
              title: '查看帮助(H)',
            },
            {
              title: '发送反馈(F)',
            },
            {
              title: 'hr',
            },
            {
              title: '关于记事本(A)',
            },
          ],
        },
      ];        
      
    var active = -1;
    var num=0;
    function initTitle() {
        var $titles = $('<ul class="menu-title"></ul>');
        for (var i = 0; i < data.length; i++) {
            var $title = $('<li class="menu-title-items"></li>');
            $title.html(data[i].title);
            $title.attr('menu-title', i);
            $titles.append($title);
            $bar.append($titles);
            var $body = $('body');
              $body.click(function () {
                if(num%2!=0){
                  num++;
                }
              });
            $title.click(function (e) {
                active = $(this).attr('menu-title');
                num++;
                if(num%2===0){
                  hideItems();
                }else{
                  showItems();
                }
                
                e.stopPropagation();
            });
            $title.hover(function () {
                if (active !== -1) {
                    active = $(this).attr('menu-title');
                    showItems();
                }
            });
        }
    }      
      
    function initItems() {
        for (var i = 0; i < data.length; i++) {
            var items = '';
            for(var j = 0; j<data[i].items.length; j++){
                if(data[i].items[j].title === 'hr') {
                    items += '<li class="menu-items-items-hr" menu-items=' + i + '-' + j + '> &nbsp&nbsp—————————</li>';
                }else{
                    items += '<li class="menu-items-items" menu-items=' + i + '-' + j + '>' + data[i].items[j].title + '</li>';
                }
            }
            var $items = $('<ul class="menu-items">' + items + '</ul>');
            if(i===0){$items.css('left', 0);}
            if(i===1){$items.css('left', 67);}
            if(i===2){$items.css('left', 136);}
            if(i===3){$items.css('left', 208);}
            if(i===4){$items.css('left', 279);}
            $bar.append($items);
        }
        active = -1;
        $dlgfont.init();
        $bar.find('[menu-items=\'2-1\']').click(function(){
          $dlgfont.show();
        });
    }    

    function showFont(){
      $textarea.css('font-family', cfg.family);
      $textarea.css('font-size', cfg.size+'px');
      if (cfg.style == '斜体') {
        $textarea.css('font-style', 'italic');
        $textarea.css('font-weight','normal');
      } else if (cfg.style == '粗体') {
        $textarea.css('font-style','normal');
        $textarea.css('font-weight', 'bold');
      } else if (cfg.style == '粗偏斜体') {
        $textarea.css('font-style', 'italic');
        $textarea.css('font-weight', 'bold');
      }else{
        $textarea.css('font-style','normal');
        $textarea.css('font-weight','normal');
      }
    }
    $(window).resize(function(){
      $area.css('height', window.innerHeight - 27);
    });
      
    function showItems() {
        var $items = $('.menu-items');
        $items.css('display', 'none');
        if (active != -1) {
            $items.eq(active).css('display', 'inline-block');

        }
    }
    
    function hideItems() {
        active = -1;
        showItems();
    }
    
    function showMenu() {
        initTitle();
        initItems();
        $box.append($bar);
    }    
      
    return {
        showArea:showArea,
        showMenu:showMenu,
        hideItems: hideItems,
        showFont:showFont
    };
}());
