
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(_container,_id)
{
		
	
btnXPos=13.50;
btnYPos=97.55;
var textContainer;

  var hit = new createjs.Shape();
		hit.graphics.beginFill("#000000").drawRect(0,0,680,490);
		hit.alpha=0.4;
		 _container.addChild(hit);
		 hit.visible=false;

var container=new createjs.Container()
_container.addChild(container);
container.cursor="pointer";


  

btn = getCJSElement("IMAGE",{x:btnXPos,y:btnYPos,width:43,height:43,src:"trans_btn.png",});
container.addChild(btn);


btn1 = getCJSElement("IMAGE",{x:btnXPos,y:btnYPos,width:43,height:43,src:"trans_btn_over.png",});
container.addChild(btn1);
btn1.visible=false;


btn2 = getCJSElement("IMAGE",{x:btnXPos,y:btnYPos,width:43,height:43,src:"cross.png",});
container.addChild(btn2);
btn2.visible=false;



		ID_txt01 = getCJSElement("TEXT",{x:45.35,y:141,compId:"ID_txt01",width:109,height:40.2,color:"#ffffff",bgColor:"#000000",align:"left",expand:"down",bgWithoutBorder:"true",corner:3,size:"11"});
        _container.addChild(ID_txt01);
		ID_txt01.visible=false;
		
		ID_txt02 = getCJSElement("TEXT",{x:313.6,y:131,compId:"ID_txt02",width:112,height:43,color:"#ffffff",bgColor:"#000000",align:"left",expand:"down",bgWithoutBorder:"true",corner:3,size:"11"});
        _container.addChild(ID_txt02);
		ID_txt02.visible=false;
		
		ID_txt03 = getCJSElement("TEXT",{x:427.55,y:131,compId:"ID_txt03",width:98.95,height:43,color:"#ffffff",bgColor:"#000000",align:"left",expand:"down",bgWithoutBorder:"true",corner:3,size:"11"});
        _container.addChild(ID_txt03);
		ID_txt03.visible=false;
		
		ID_txt04 = getCJSElement("TEXT",{x:532.60,y:131,compId:"ID_txt04",width:101.95,height:43,color:"#ffffff",bgColor:"#000000",align:"left",expand:"down",bgWithoutBorder:"true",corner:3,size:"11"});
        _container.addChild(ID_txt04);
		ID_txt04.visible=false;
		
		ID_txt05 = getCJSElement("TEXT",{x:432.55,y:235.8,compId:"ID_txt05",width:132.85,height:24.15,color:"#ffffff",bgColor:"#000000",align:"left",expand:"down",bgWithoutBorder:"true",corner:3,size:"11"});
        _container.addChild(ID_txt05);
		ID_txt05.visible=false;
		
		ID_txt06 = getCJSElement("TEXT",{x:411.55,y:286,compId:"ID_txt06",width:108.85,height:29.90,color:"#ffffff",bgColor:"#000000",align:"left",expand:"down",bgWithoutBorder:"true",corner:3,size:"11"});
        _container.addChild(ID_txt06);
		ID_txt06.visible=false;		
		
		ID_txt07 = getCJSElement("TEXT",{x:517.55,y:330.95,compId:"ID_txt07",width:111.85,height:45.05,color:"#ffffff",bgColor:"#000000",align:"left",expand:"down",bgWithoutBorder:"true",corner:3,size:"11"});
        _container.addChild(ID_txt07);
		ID_txt07.visible=false;
		
	
		
		

     


container.addEventListener("click", handlerMethod);
container.addEventListener("mouseover", handlerOverMethod);
container.addEventListener("mouseout", handlerOutMethod);
//var btn2 = getCJSElement("TEXTBOX",{x:405.95,y:96,width:234.75,height:287,size:11,titleId:bubbleTitleArr[i],bodyId:bubbleTextArr[i]});
//_container.addChild(btn2);


	 function handlerMethod(event) {
		
		ID_txt02.visible=!(ID_txt02.visible);
		ID_txt01.visible=!(ID_txt01.visible);
		ID_txt03.visible=!(ID_txt03.visible);
		ID_txt04.visible=!(ID_txt04.visible);
		ID_txt05.visible=!(ID_txt05.visible);
		ID_txt06.visible=!(ID_txt06.visible);
		ID_txt07.visible=!(ID_txt07.visible);
		btn2.visible=!(btn2.visible);
		
		hit.visible=!(hit.visible);
		
		
	   
 }
 
 function handlerOverMethod(event)
 {

	btn1.visible=true;
	

 }
  function handlerOutMethod(event)
 {
	btn1.visible=false;
	}

});