function oCopy(obj){
    try{
        obj.select();
        js=obj.createTextRange();
        js.execCommand("Copy")
        alert("复制成功!");
    }catch(e){}
}
function selectChannel(obj)
{
    var aid = obj.id;
    var qzui = aid.substring(0,aid.length-1);
    var num = 3,selClass = 'nav_selected';
    if(arguments.length == 2){
        num = arguments[1];
    }else if(arguments.length == 3){
        num = arguments[1];
        selClass = arguments[2];
    }
    if(selClass == obj.className){return;}
    var aIdArr = [], htmlIdArr = [];
    for(var i=1; i<num+1; i++){
        aIdArr.push(document.getElementById(qzui+i));
        htmlIdArr.push(document.getElementById(qzui+i+'_html'));
    }
    var htmlId = aid+'_html';
    for(i=0;i<num;i++)
    {
        if((qzui+(i+1))==aid){
            obj.className = selClass;
            htmlIdArr[i].style.display='block';
        }else{
        	try{
        		aIdArr[i].className='';
        		htmlIdArr[i].style.display='none';
        	}catch(e){
        		break;
        	}
        }
    }
}


function selectChage(obj)
{
    var aid = obj.id;
    var qzui = aid.substring(0,aid.length-1);
    var num = 3,selClass = 'tj001';
    if(arguments.length == 2){
        num = arguments[1];
    }else if(arguments.length == 3){
        num = arguments[1];
        selClass = arguments[2];
    }
    if(selClass == obj.className){return;}
    var aIdArr = [], htmlIdArr = [];
    for(var i=1; i<num+1; i++){
        aIdArr.push(document.getElementById(qzui+i));
        htmlIdArr.push(document.getElementById(qzui+i+'_html'));
    }
    var htmlId = aid+'_html';
    for(i=0;i<num;i++)
    {
        if((qzui+(i+1))==aid){
            obj.className = selClass;
            htmlIdArr[i].style.display='block';
        }else{
        	try{
        		aIdArr[i].className='hot001';
        		htmlIdArr[i].style.display='none';
        	}catch(e){
        		break;
        	}
        }
    }
}

function so(frm){
	var v = $.trim(frm.k.value);
	if(v == "" || v=="输入关键字,查找适合你的项目") {
		$(".input_search_key").animate({backgroundColor: '#fdad5e'},
		 200, 
		function(){
		$(".input_search_key").animate({'backgroundColor': '#FFFFFF'}, 200, 
		function(){
		$(".input_search_key").animate({'backgroundColor': '#fdad5e'}, 200, 
		function(){
		$(".input_search_key").animate({'backgroundColor': '#FFFFFF'}, 200);
				});
				});
				});	
        return false;
    }
	window.location = $config.domain+'so?k='+encodeURIComponent(v)+'&special=1021';
	return false;
}

function collAdd(proid,type){
	$.post($config.domain+"ajaxdo/collectionAdd",{proid:proid,type:type},function(){
		
	});
}