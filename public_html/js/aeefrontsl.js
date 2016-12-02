/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




function aeeFrontSlide(){
     var tSlide, 
         tFon, 
         tSlogo,
         tStext;
          
 
     
     this.animate=function(){
          $(tSlogo).animate({top:'25%'}, 3000); 
          $(tStext).animate({top:'45%'}, 4000);   
     };
  
     this.animatedo=function(){
          $(tSlogo).animate({top:'200%'}, 3000); 
          $(tStext).animate({top:'-200%'}, 4000);   
     };
     
    
     this.addTeg =function(vSlide,vFon,vLogo,vText){
        tSlide=document.getElementById(vSlide);
        tFon= document.getElementById(vText); 
        tSlogo=document.getElementById(vLogo);
        tStext = document.getElementById(vText);
     };
     
     this.init=function(){
         $(tSlogo).css({"top":"-200%"});
         $(tStext).css({"top":"200%"});
     };
};
//------------------------------------------------------------------------------

function aeefrontgorsl(){
     var self=this ;
     var timers;
     var tSliderLine;
     var tSlide= new Array();
     var linePosition=0;
     var lineCount=0;
     var lineInterval=100;
     var imgActive='./img/grbtn2.png';
     var imgPasive='./img/grbtn1.png';
//------------------------------------------------------------------------------

     this.toLeftslide=function(){
        var btnName='';
        var telName='';
        if (lineCount<5) lineCount++;   
        if (lineCount>3) lineCount=0; 
         for (var i=1;i<=4;i++){
         btnName='aee-gor-btn'+i.toString() ;  
         if (lineCount===i-1 ){
              telName=document.images[btnName];
               telName.src=imgActive ;
               this.setLine();
               tSlide[i-1].animate();
         } else{
               telName=document.images[btnName];
               telName.src=imgPasive;
               tSlide[i-1].animatedo();
           };   
                    
        };    
     };
//-------------------------------------------------------------------
     this.startTimer=function(){
          timers =  setInterval( 
                         function(){
                            
                         self.toLeftslide();          
                            
                        }, 15000 );
     };
//------------------------------------------------------------------------------     
     this.clerTimer=function(){
           clearTimeout(timers) ;  
     };
//------------------------------------------------------------------------------
     this.setLine=function(){
         linePosition=-1*((lineInterval)*lineCount);
         $(tSliderLine).animate({left:linePosition+'%'}, 2000);   
           this.clerTimer() ;
         this.startTimer();
         
     } ;

//------------------------------------------------------------------------------     
     this.init=function(){
         var nSlide='aee-front-slide', nFon='aee-front-slide-fon', nLogo='aee-front-slide-logo', nText='aee-front-slide-text';
         tSliderLine=document.getElementById("aee-front-slide-line");
         document.images['aee-gor-btn1'].src=imgActive ;
         
         for (var i=1; i<=4;i++){
   
         
            tSlide[i-1]=new aeeFrontSlide() ;
            tSlide[i-1].addTeg(nSlide+i,nFon+i,nLogo+i,nText+i);   
            tSlide[i-1].init();
         };  
         
         this.startTimer();
     };
     
//------------------------------------------------------------------------------
     
     this.onClickLR=function(aVal){
         
          var btnName='';
          var telName='';
          this.clerTimer() ;
         if (aVal==='left'){
           if (lineCount<5) lineCount++;   
           if (lineCount>3) lineCount=0; 
         };
         
         if (aVal==='right'){
           if (lineCount>0) lineCount--;    
         };   
         
          for (var i=1;i<=4;i++){
              btnName='aee-gor-btn'+i.toString() ;  
                if (lineCount===i-1 ){
                    telName=document.images[btnName];
                    telName.src=imgActive ;
                    this.setLine();
                    tSlide[i-1].animate();
                } else{
                    telName=document.images[btnName];
                    telName.src=imgPasive;
                    tSlide[i-1].animatedo();
                };   
                    
          };  
  };
//------------------------------------------------------------------------------
    this.onHorClick=function(aVar){
          var btnName='';
          var telName='';
          this.clerTimer() ;
          for (var i=1;i<=4;i++){
              btnName='aee-gor-btn'+i.toString() ;  
                if (btnName===aVar){
                    lineCount=i-1;  
                    this.setLine();
           
                    telName=document.images[btnName];
                    telName.src=imgActive ;
                    tSlide[i-1].animate();
                } else{
                    telName=document.images[btnName];
                    telName.src=imgPasive ; 
                    tSlide[i-1].animatedo();
                };
           };
          
    };
    
 };
 
 var aeefrontSl=new aeefrontgorsl() ;
 
