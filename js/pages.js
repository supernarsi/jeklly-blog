/*
* JS翻页插件
* author：huangxiangchao
* 
* Version 1.0  -  2012-12-06 
* 
*/

(function($){
    $.fn.pages = function(options){
        defaults = {
            pernum : 10,            //每页显示条数，默认10条
            pages : 3,              //显示页码数量，默认3页
            extremity : true,       //是否显示首尾页，默认显示
            total: true,            //是否显示总页数，默认显示
        };
        
        var opts = $.extend(defaults, options);
        $element = $(this).selector;
        
        return $(this).ready(function(){
            $element = $($element);
            $num_total = $element.size();                   //获取总条数
            $pernum = opts.pernum;                          //获取每页显示条数
            $pages_shownum = opts.pages;                    //获取显示页码数
            $pages_total = Math.ceil($num_total/$pernum);   //计算总页码数
            
            //如果设置显示页码数大于总页数
            if($pages_total < $pages_shownum){
                $pages_shownum = $pages_total;
            }
            //默认显示第一页
            $cur_page = 1;
            show_pages($cur_page);
            
            //显示页码函数
            function show_pages($page){
                //显示第n页内容
                $element.hide();
                var $start = ($page-1) * $pernum + 1;
                for(var i = $start-1; i < $pernum+$start-1; i++){
                    //alert('ok')
                    $element.eq(i).show();
                }
                
                //显示页码
                var $page_container = $("<div id='jquery_pages_content'></div>");
                var $page_content = $("<span></span>");
                $(".page_post_preview ul").append($page_container.html($page_content));
                var $page_content_html = "<span class='pages_total'>共" + $pages_total + "页</span> ";
                $page_content_html += "<span class='jquery_pages_first'><a href='javascript:void(0)' class='jquery_pages_first'>首页</a></span> ";
                $page_content_html += "<a href='javascript:void(0)' class='jquery_pages_prevpage'>上一页</a> ";
                //前几页的样式
                if($cur_page < Math.ceil($pages_shownum/2)){
                    for(var i = 1; i < $pages_shownum+1; i++){
                        if(i == $cur_page){
                            $page_content_html += "<span class='current_page'>" + $page + "</span>";
                            continue;
                        }
                        $page_content_html += " <a href='javascript:void(0)' class='to_page'>" + parseInt(i) + "</a> ";
                    }
                }
                //后几页的样式
                else if($cur_page > $pages_total-Math.floor($pages_shownum/2)){
                    for(var i = $pages_total-$pages_shownum+1; i < $pages_total+1; i++){
                        if(i == $cur_page){
                            $page_content_html += "<span class='current_page'>" + $page + "</span>";
                            continue;
                        }
                        $page_content_html += " <a href='javascript:void(0)' class='to_page'>" + parseInt(i) + "</a> ";
                    }
                }
                //中间页的样式
                else{
                    var $page_start = $cur_page-(Math.ceil($pages_shownum/2)-1);
                    var $page_end = $cur_page+(Math.floor($pages_shownum/2));
                    for(var i = $page_start; i < $page_end+1; i++){
                        if(i == $cur_page){
                            $page_content_html += "<span class='current_page'>" + $page + "</span>";
                            continue;
                        }
                        $page_content_html += " <a href='javascript:void(0)' class='to_page'>" + parseInt(i) + "</a> ";
                    }
                }
                $page_content_html += "<a href='javascript:void(0)' class='jquery_pages_nextpage'>下一页</a> ";
                $page_content_html += "<span class='jquery_pages_last'> <a href='javascript:void(0)' class='jquery_pages_last'>尾页</a></span>";
                $page_content.html($page_content_html);
                //隐藏显示总页数首页尾页
                if(!opts.extremity){
                    $(".jquery_pages_first").hide();
                    $(".jquery_pages_last").hide();
                }
                if(!opts.total){
                    $(".pages_total").hide();
                }
            }
            
            //下一页跳转
            $(".jquery_pages_nextpage").live('click', function(){
                $("#jquery_pages_content").remove();
                $cur_page = parseInt($cur_page);
                if($cur_page < $pages_total){
                    $cur_page += 1;
                }
                return show_pages($cur_page);
            })
            //上一页跳转
            $(".jquery_pages_prevpage").live('click', function(){
                $("#jquery_pages_content").remove();
                if($cur_page > 1){
                    $cur_page -= 1;
                }
                return show_pages($cur_page);
            })
            //首页跳转
            $(".jquery_pages_first").live('click', function(){
                $("#jquery_pages_content").remove();
                $cur_page = 1;
                return show_pages(1);
            })
            //尾页跳转
            $(".jquery_pages_last").live('click', function(){
                $("#jquery_pages_content").remove();
                $cur_page = $pages_total;
                return show_pages($pages_total);
            })
            //第n页跳转
            $(".to_page").live('click', function(){
                var $cp = parseInt($(this).html());
                if($cp > $pages_total || $cp < 1){
                    return false;
                }
                $cur_page = $cp;
                $("#jquery_pages_content").remove();
                return show_pages($cp);
            })
        })
    }
})(jQuery);