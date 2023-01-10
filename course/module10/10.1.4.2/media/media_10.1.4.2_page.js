loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var mainMovieClip;

(Animation = function(control,id){		
	var manifest = [
		{src:"images/_101421_resizing_tiles_animated.png", id:"_101421_resizing_tiles_animated"},
		{src:"images/_101422_creating_folders_animated.png", id:"_101422_creating_folders_animated"},
		{src:"images/Bitmap10.png", id:"Bitmap10"},
		{src:"images/Bitmap100.png", id:"Bitmap100"},
		{src:"images/Bitmap101.png", id:"Bitmap101"},
		{src:"images/Bitmap102.png", id:"Bitmap102"},
		{src:"images/Bitmap103.png", id:"Bitmap103"},
		{src:"images/Bitmap104.png", id:"Bitmap104"},
		{src:"images/Bitmap105.png", id:"Bitmap105"},
		{src:"images/Bitmap106.png", id:"Bitmap106"},
		{src:"images/Bitmap107.png", id:"Bitmap107"},
		{src:"images/Bitmap108.png", id:"Bitmap108"},
		{src:"images/Bitmap109.png", id:"Bitmap109"},
		{src:"images/Bitmap11.png", id:"Bitmap11"},
		{src:"images/Bitmap110.png", id:"Bitmap110"},
		{src:"images/Bitmap111.png", id:"Bitmap111"},
		{src:"images/Bitmap112.png", id:"Bitmap112"},
		{src:"images/Bitmap113.png", id:"Bitmap113"},
		{src:"images/Bitmap114.png", id:"Bitmap114"},
		{src:"images/Bitmap115.png", id:"Bitmap115"},
		{src:"images/Bitmap116.png", id:"Bitmap116"},
		{src:"images/Bitmap117.png", id:"Bitmap117"},
		{src:"images/Bitmap118.png", id:"Bitmap118"},
		{src:"images/Bitmap119.png", id:"Bitmap119"},
		{src:"images/Bitmap12.png", id:"Bitmap12"},
		{src:"images/Bitmap120.png", id:"Bitmap120"},
		{src:"images/Bitmap121.png", id:"Bitmap121"},
		{src:"images/Bitmap122.png", id:"Bitmap122"},
		{src:"images/Bitmap123.png", id:"Bitmap123"},
		{src:"images/Bitmap124.png", id:"Bitmap124"},
		{src:"images/Bitmap125.png", id:"Bitmap125"},
		{src:"images/Bitmap126.png", id:"Bitmap126"},
		{src:"images/Bitmap127.png", id:"Bitmap127"},
		{src:"images/Bitmap128.png", id:"Bitmap128"},
		{src:"images/Bitmap129.png", id:"Bitmap129"},
		{src:"images/Bitmap13.png", id:"Bitmap13"},
		{src:"images/Bitmap130.png", id:"Bitmap130"},
		{src:"images/Bitmap131.png", id:"Bitmap131"},
		{src:"images/Bitmap132.png", id:"Bitmap132"},
		{src:"images/Bitmap133.png", id:"Bitmap133"},
		{src:"images/Bitmap134.png", id:"Bitmap134"},
		{src:"images/Bitmap135.png", id:"Bitmap135"},
		{src:"images/Bitmap136.png", id:"Bitmap136"},
		{src:"images/Bitmap137.png", id:"Bitmap137"},
		{src:"images/Bitmap138.png", id:"Bitmap138"},
		{src:"images/Bitmap139.png", id:"Bitmap139"},
		{src:"images/Bitmap14.png", id:"Bitmap14"},
		{src:"images/Bitmap140.png", id:"Bitmap140"},
		{src:"images/Bitmap141.png", id:"Bitmap141"},
		{src:"images/Bitmap142.png", id:"Bitmap142"},
		{src:"images/Bitmap143.png", id:"Bitmap143"},
		{src:"images/Bitmap144.png", id:"Bitmap144"},
		{src:"images/Bitmap145.png", id:"Bitmap145"},
		{src:"images/Bitmap146.png", id:"Bitmap146"},
		{src:"images/Bitmap147.png", id:"Bitmap147"},
		{src:"images/Bitmap148.png", id:"Bitmap148"},
		{src:"images/Bitmap149.png", id:"Bitmap149"},
		{src:"images/Bitmap15.png", id:"Bitmap15"},
		{src:"images/Bitmap150.png", id:"Bitmap150"},
		{src:"images/Bitmap151.png", id:"Bitmap151"},
		{src:"images/Bitmap152.png", id:"Bitmap152"},
		{src:"images/Bitmap153.png", id:"Bitmap153"},
		{src:"images/Bitmap154.png", id:"Bitmap154"},
		{src:"images/Bitmap155.png", id:"Bitmap155"},
		{src:"images/Bitmap156.png", id:"Bitmap156"},
		{src:"images/Bitmap157.png", id:"Bitmap157"},
		{src:"images/Bitmap158.png", id:"Bitmap158"},
		{src:"images/Bitmap159.png", id:"Bitmap159"},
		{src:"images/Bitmap16.png", id:"Bitmap16"},
		{src:"images/Bitmap160.png", id:"Bitmap160"},
		{src:"images/Bitmap161.png", id:"Bitmap161"},
		{src:"images/Bitmap162.png", id:"Bitmap162"},
		{src:"images/Bitmap163.png", id:"Bitmap163"},
		{src:"images/Bitmap164.png", id:"Bitmap164"},
		{src:"images/Bitmap165.png", id:"Bitmap165"},
		{src:"images/Bitmap166.png", id:"Bitmap166"},
		{src:"images/Bitmap167.png", id:"Bitmap167"},
		{src:"images/Bitmap168.png", id:"Bitmap168"},
		{src:"images/Bitmap169.png", id:"Bitmap169"},
		{src:"images/Bitmap17.png", id:"Bitmap17"},
		{src:"images/Bitmap170.png", id:"Bitmap170"},
		{src:"images/Bitmap171.png", id:"Bitmap171"},
		{src:"images/Bitmap172.png", id:"Bitmap172"},
		{src:"images/Bitmap173.png", id:"Bitmap173"},
		{src:"images/Bitmap174.png", id:"Bitmap174"},
		{src:"images/Bitmap175.png", id:"Bitmap175"},
		{src:"images/Bitmap176.png", id:"Bitmap176"},
		{src:"images/Bitmap177.png", id:"Bitmap177"},
		{src:"images/Bitmap178.png", id:"Bitmap178"},
		{src:"images/Bitmap179.png", id:"Bitmap179"},
		{src:"images/Bitmap18.png", id:"Bitmap18"},
		{src:"images/Bitmap180.png", id:"Bitmap180"},
		{src:"images/Bitmap181.png", id:"Bitmap181"},
		{src:"images/Bitmap182.png", id:"Bitmap182"},
		{src:"images/Bitmap183.png", id:"Bitmap183"},
		{src:"images/Bitmap187.png", id:"Bitmap187"},
		{src:"images/Bitmap188.png", id:"Bitmap188"},
		{src:"images/Bitmap189.png", id:"Bitmap189"},
		{src:"images/Bitmap19.png", id:"Bitmap19"},
		{src:"images/Bitmap190.png", id:"Bitmap190"},
		{src:"images/Bitmap191.png", id:"Bitmap191"},
		{src:"images/Bitmap192.png", id:"Bitmap192"},
		{src:"images/Bitmap193.png", id:"Bitmap193"},
		{src:"images/Bitmap194.png", id:"Bitmap194"},
		{src:"images/Bitmap195.png", id:"Bitmap195"},
		{src:"images/Bitmap196.png", id:"Bitmap196"},
		{src:"images/Bitmap197.png", id:"Bitmap197"},
		{src:"images/Bitmap198.png", id:"Bitmap198"},
		{src:"images/Bitmap199.png", id:"Bitmap199"},
		{src:"images/Bitmap20.png", id:"Bitmap20"},
		{src:"images/Bitmap200.png", id:"Bitmap200"},
		{src:"images/Bitmap201.png", id:"Bitmap201"},
		{src:"images/Bitmap202.png", id:"Bitmap202"},
		{src:"images/Bitmap203.png", id:"Bitmap203"},
		{src:"images/Bitmap204.png", id:"Bitmap204"},
		{src:"images/Bitmap205.png", id:"Bitmap205"},
		{src:"images/Bitmap206.png", id:"Bitmap206"},
		{src:"images/Bitmap207.png", id:"Bitmap207"},
		{src:"images/Bitmap208.png", id:"Bitmap208"},
		{src:"images/Bitmap209.png", id:"Bitmap209"},
		{src:"images/Bitmap21.png", id:"Bitmap21"},
		{src:"images/Bitmap210.png", id:"Bitmap210"},
		{src:"images/Bitmap211.png", id:"Bitmap211"},
		{src:"images/Bitmap212.png", id:"Bitmap212"},
		{src:"images/Bitmap213.png", id:"Bitmap213"},
		{src:"images/Bitmap214.png", id:"Bitmap214"},
		{src:"images/Bitmap215.png", id:"Bitmap215"},
		{src:"images/Bitmap216.png", id:"Bitmap216"},
		{src:"images/Bitmap217.png", id:"Bitmap217"},
		{src:"images/Bitmap218.png", id:"Bitmap218"},
		{src:"images/Bitmap219.png", id:"Bitmap219"},
		{src:"images/Bitmap22.png", id:"Bitmap22"},
		{src:"images/Bitmap220.png", id:"Bitmap220"},
		{src:"images/Bitmap221.png", id:"Bitmap221"},
		{src:"images/Bitmap222.png", id:"Bitmap222"},
		{src:"images/Bitmap223.png", id:"Bitmap223"},
		{src:"images/Bitmap224.png", id:"Bitmap224"},
		{src:"images/Bitmap225.png", id:"Bitmap225"},
		{src:"images/Bitmap226.png", id:"Bitmap226"},
		{src:"images/Bitmap227.png", id:"Bitmap227"},
		{src:"images/Bitmap228.png", id:"Bitmap228"},
		{src:"images/Bitmap229.png", id:"Bitmap229"},
		{src:"images/Bitmap23.png", id:"Bitmap23"},
		{src:"images/Bitmap230.png", id:"Bitmap230"},
		{src:"images/Bitmap231.png", id:"Bitmap231"},
		{src:"images/Bitmap232.png", id:"Bitmap232"},
		{src:"images/Bitmap233.png", id:"Bitmap233"},
		{src:"images/Bitmap234.png", id:"Bitmap234"},
		{src:"images/Bitmap235.png", id:"Bitmap235"},
		{src:"images/Bitmap236.png", id:"Bitmap236"},
		{src:"images/Bitmap237.png", id:"Bitmap237"},
		{src:"images/Bitmap238.png", id:"Bitmap238"},
		{src:"images/Bitmap239.png", id:"Bitmap239"},
		{src:"images/Bitmap24.png", id:"Bitmap24"},
		{src:"images/Bitmap240.png", id:"Bitmap240"},
		{src:"images/Bitmap241.png", id:"Bitmap241"},
		{src:"images/Bitmap242.png", id:"Bitmap242"},
		{src:"images/Bitmap25.png", id:"Bitmap25"},
		{src:"images/Bitmap26.png", id:"Bitmap26"},
		{src:"images/Bitmap27.png", id:"Bitmap27"},
		{src:"images/Bitmap28.png", id:"Bitmap28"},
		{src:"images/Bitmap29.png", id:"Bitmap29"},
		{src:"images/Bitmap30.png", id:"Bitmap30"},
		{src:"images/Bitmap31.png", id:"Bitmap31"},
		{src:"images/Bitmap32.png", id:"Bitmap32"},
		{src:"images/Bitmap33.png", id:"Bitmap33"},
		{src:"images/Bitmap34.png", id:"Bitmap34"},
		{src:"images/Bitmap35.png", id:"Bitmap35"},
		{src:"images/Bitmap36.png", id:"Bitmap36"},
		{src:"images/Bitmap37.png", id:"Bitmap37"},
		{src:"images/Bitmap38.png", id:"Bitmap38"},
		{src:"images/Bitmap39.png", id:"Bitmap39"},
		{src:"images/Bitmap40.png", id:"Bitmap40"},
		{src:"images/Bitmap41.png", id:"Bitmap41"},
		{src:"images/Bitmap42.png", id:"Bitmap42"},
		{src:"images/Bitmap43.png", id:"Bitmap43"},
		{src:"images/Bitmap44.png", id:"Bitmap44"},
		{src:"images/Bitmap45.png", id:"Bitmap45"},
		{src:"images/Bitmap46.png", id:"Bitmap46"},
		{src:"images/Bitmap47.png", id:"Bitmap47"},
		{src:"images/Bitmap48.png", id:"Bitmap48"},
		{src:"images/Bitmap49.png", id:"Bitmap49"},
		{src:"images/Bitmap5.png", id:"Bitmap5"},
		{src:"images/Bitmap50.png", id:"Bitmap50"},
		{src:"images/Bitmap51.png", id:"Bitmap51"},
		{src:"images/Bitmap52.png", id:"Bitmap52"},
		{src:"images/Bitmap53.png", id:"Bitmap53"},
		{src:"images/Bitmap54.png", id:"Bitmap54"},
		{src:"images/Bitmap55.png", id:"Bitmap55"},
		{src:"images/Bitmap56.png", id:"Bitmap56"},
		{src:"images/Bitmap57.png", id:"Bitmap57"},
		{src:"images/Bitmap58.png", id:"Bitmap58"},
		{src:"images/Bitmap59.png", id:"Bitmap59"},
		{src:"images/Bitmap6.png", id:"Bitmap6"},
		{src:"images/Bitmap60.png", id:"Bitmap60"},
		{src:"images/Bitmap61.png", id:"Bitmap61"},
		{src:"images/Bitmap62.png", id:"Bitmap62"},
		{src:"images/Bitmap63.png", id:"Bitmap63"},
		{src:"images/Bitmap64.png", id:"Bitmap64"},
		{src:"images/Bitmap65.png", id:"Bitmap65"},
		{src:"images/Bitmap66.png", id:"Bitmap66"},
		{src:"images/Bitmap67.png", id:"Bitmap67"},
		{src:"images/Bitmap68.png", id:"Bitmap68"},
		{src:"images/Bitmap69.png", id:"Bitmap69"},
		{src:"images/Bitmap7.png", id:"Bitmap7"},
		{src:"images/Bitmap70.png", id:"Bitmap70"},
		{src:"images/Bitmap71.png", id:"Bitmap71"},
		{src:"images/Bitmap72.png", id:"Bitmap72"},
		{src:"images/Bitmap73.png", id:"Bitmap73"},
		{src:"images/Bitmap74.png", id:"Bitmap74"},
		{src:"images/Bitmap75.png", id:"Bitmap75"},
		{src:"images/Bitmap76.png", id:"Bitmap76"},
		{src:"images/Bitmap77.png", id:"Bitmap77"},
		{src:"images/Bitmap78.png", id:"Bitmap78"},
		{src:"images/Bitmap79.png", id:"Bitmap79"},
		{src:"images/Bitmap8.png", id:"Bitmap8"},
		{src:"images/Bitmap80.png", id:"Bitmap80"},
		{src:"images/Bitmap81.png", id:"Bitmap81"},
		{src:"images/Bitmap82.png", id:"Bitmap82"},
		{src:"images/Bitmap83.png", id:"Bitmap83"},
		{src:"images/Bitmap84.png", id:"Bitmap84"},
		{src:"images/Bitmap85.png", id:"Bitmap85"},
		{src:"images/Bitmap86.png", id:"Bitmap86"},
		{src:"images/Bitmap87.png", id:"Bitmap87"},
		{src:"images/Bitmap88.png", id:"Bitmap88"},
		{src:"images/Bitmap89.png", id:"Bitmap89"},
		{src:"images/Bitmap9.png", id:"Bitmap9"},
		{src:"images/Bitmap90.png", id:"Bitmap90"},
		{src:"images/Bitmap91.png", id:"Bitmap91"},
		{src:"images/Bitmap92.png", id:"Bitmap92"},
		{src:"images/Bitmap93.png", id:"Bitmap93"},
		{src:"images/Bitmap94.png", id:"Bitmap94"},
		{src:"images/Bitmap95.png", id:"Bitmap95"},
		{src:"images/Bitmap96.png", id:"Bitmap96"},
		{src:"images/Bitmap97.png", id:"Bitmap97"},
		{src:"images/Bitmap98.png", id:"Bitmap98"},
		{src:"images/Bitmap99.png", id:"Bitmap99"}	];

		return manifest;	
});
