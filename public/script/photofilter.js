let filesrc,wo,c_w,c_h,col,image,cot,ho,canvas=document.getElementById("filter-canvas"),iscropped=!1,filtervalue={brightness:100,contrast:100,saturation:100,hue:0,grayscale:0,invert:0,opacity:100,blur:0,sepia:0},ctx=canvas.getContext("2d");function filterimgupload(e){image=new Image,$(".activefilter").attr("class",""),$("#brightness-filter").attr("class","activefilter"),$("#filter-name").text("brightness(100%)"),$("#camrange").val(50),$("#camrange-div").show(),$("#cropper-grid").hide(),$("#cropper-sieve").hide(),$("#custom-div").hide(),image.src=URL.createObjectURL(e.files[0]),iscropped=!1,filesrc=image.src,filtervalue={brightness:100,contrast:100,saturation:100,hue:0,grayscale:0,invert:0,opacity:100,blur:0,sepia:0},canvas.width=$("#webcam").width(),canvas.height=400,image.onload=function(){let e=image.width,t=image.height;400*e/t>canvas.width?canvas.height=t*canvas.width/e:canvas.width=400*e/t,wo=canvas.width,ho=canvas.height,ctx.drawImage(image,0,0,canvas.width,canvas.height)},$("#canvas-cropper").css("width",canvas.width+"px"),$("#canvas-cropper").css("height",canvas.height+"px"),$("#cropper-sieve").css("width",canvas.width+"px"),$("#cropper-sieve").css("height",canvas.height+"px"),$("#cropper-sieve").click()}function decode(e,t){switch(t){case"brightness":case"contrast":case"saturation":return $("#filter-name").text(t+"("+filtervalue[t]+"%)"),e-50;case"hue":return $("#filter-name").text(t+"("+filtervalue[t]+"deg)"),e+100;case"sepia":case"grayscale":case"opacity":case"invert":return $("#filter-name").text(t+"("+filtervalue[t]+"%)"),2*e;case"blur":return $("#filter-name").text(t+"("+filtervalue[t]+"px)"),50*e}}function convert(e){return 1===e.length?"0"+e:e}function adjustHead(e){cb;let t=document.getElementById("expcanvas"),a=t.getContext("2d"),r=[];r[0]=r[1]=r[2]=0;let i=document.getElementById("spinnerbg");i.src=e,i.onload=function(){t.width=i.naturalWidth,t.height=i.naturalHeight,a.drawImage(i,0,0);var e=a.getImageData(0,0,t.width,t.height);for(i=0;i<e.data.length;i+=4)r[0]+=4*e.data[i]/e.data.length,r[1]+=4*e.data[i+1]/e.data.length,r[2]+=4*e.data[i+2]/e.data.length;r[0]>240&&r[1]>240&&r[2]>240&&(r[0]=r[1]=r[2]=127),r[0]=parseInt(r[0]),r[1]=parseInt(r[1]),r[2]=parseInt(r[2]),$("#head").css("background-color","rgb("+r.join(",")+")"),changechatColor({value:`#${convert(r[0].toString(16))}${convert(r[1].toString(16))}${convert(r[2].toString(16))}`}),$("#chatroom").css("background-color","rgb("+r.join(",")+")"),r[3]=0.8,$("#replytomsg").css("background","rgba("+r.join(",")+")"),r[3]=0.6,$("#replytomsg").css("border-left","3px solid rgba("+r.join(",")+")"),r[3]=231,$("#message").css("background",`#${convert(r[0].toString(16))}${convert(r[1].toString(16))}${convert(r[2].toString(16))}${convert(r[3].toString(16))}`),$("#srch").css("background",`#${convert(r[0].toString(16))}${convert(r[1].toString(16))}${convert(r[2].toString(16))}${convert(r[3].toString(16))}`),r[3]=153,$("#msg-sender i").each(function(){$(this).css("background-color",`#${convert(r[0].toString(16))}${convert(r[1].toString(16))}${convert(r[2].toString(16))}${convert(r[3].toString(16))}`)})}}function drawim(){if(iscropped){ctx.filter="brightness("+filtervalue.brightness/100+") contrast("+filtervalue.contrast/100+") saturate("+filtervalue.saturation/100+") hue-rotate("+filtervalue.hue+"deg) grayscale("+filtervalue.grayscale/100+") invert("+filtervalue.invert/100+") opacity("+filtervalue.opacity/100+") blur("+filtervalue.blur+"px) sepia("+filtervalue.sepia/100+")",ctx.drawImage(image,0,0,canvas.width,canvas.height);let e=ctx.getImageData(col,cot,c_w,c_h);ctx.clearRect(0,0,canvas.width,canvas.height),canvas.width=c_w,canvas.height=c_h,ctx.putImageData(e,0,0)}else ctx.filter="brightness("+filtervalue.brightness/100+") contrast("+filtervalue.contrast/100+") saturate("+filtervalue.saturation/100+") hue-rotate("+filtervalue.hue+"deg) grayscale("+filtervalue.grayscale/100+") invert("+filtervalue.invert/100+") opacity("+filtervalue.opacity/100+") blur("+filtervalue.blur+"px) sepia("+filtervalue.sepia/100+")",ctx.drawImage(image,0,0,canvas.width,canvas.height)}$("#custom-div-flip").click(function(){ctx.clearRect(0,0,canvas.width,canvas.height),ctx.save(),ctx.translate(canvas.width/2,canvas.height/2),ctx.rotate(Math.PI/2),ctx.drawImage(image,-canvas.width/2,-canvas.height/2,canvas.width,canvas.height),ctx.restore()}),$("#filteroption div").click(function(){$(".activefilter").attr("class",""),$(this).attr("class","activefilter");let e=this.id.split("-filter")[0];switch(e){case"crop":$("#camrange-div").hide(),$("#custom-div").hide(),ctx.clearRect(0,0,canvas.width,canvas.height),canvas.width=wo,canvas.height=ho,ctx.filter="brightness("+filtervalue.brightness/100+") contrast("+filtervalue.contrast/100+") saturate("+filtervalue.saturation/100+") hue-rotate("+filtervalue.hue+"deg) grayscale("+filtervalue.grayscale/100+") invert("+filtervalue.invert/100+") opacity("+filtervalue.opacity/100+") blur("+filtervalue.blur+"px) sepia("+filtervalue.sepia/100+")",ctx.drawImage(image,0,0,wo,ho),$("#cropper-grid").css("width","80px"),$("#cropper-tools").css("display","flex"),$("#cropper-grid").css("height","60px"),$("#cropper-grid").css("left",$("#filter-canvas").offset().left-1+($("#webcam").width()-80)/2+"px"),$("#cropper-grid").css("top",48+$("#filter-canvas").offset().top+"px"),$("#cropper-grid").css("max-width",$("#filter-canvas").width()+$("#filter-canvas").offset().left-Number($("#cropper-grid").css("left").split("px")[0])-1+"px"),$("#cropper-grid").css("max-height",$("#filter-canvas").height()+$("#filter-canvas").offset().top-Number($("#cropper-grid").css("top").split("px")[0])-2+"px"),$("#cropper-grid").css("position","fixed"),$("#cropper-grid").show(),$("#canvas-cropper").css("width",canvas.width+"px"),$("#canvas-cropper").css("height",canvas.height+"px"),$("#canvas-cropper").css("left",($("#webcam").width()-canvas.width)/2+"px"),$("#cropper-sieve").css("position","absolute"),$("#cropper-sieve").css("width",canvas.width+"px"),$("#cropper-sieve").css("height",canvas.height+"px"),$("#cropper-sieve").css("top",0),$("#cropper-sieve").css("left",0),$("#cropper-sieve").show(),localStorage.getItem("sieve-instruction")||(Renderconfirm("Click anywhere on photo to move cropper and drag the bottom-right corner of cropper to make it cover bigger\ngot it?",!0),localStorage.setItem("sieve-instruction",!0));break;case"custom":$("#camrange-div").hide(),$("#cropper-grid").hide(),$("#cropper-tools").hide(),$("#cropper-sieve").hide(),$("#custom-div").css("display","flex");break;default:$("#camrange-div").show(),$("#custom-div").hide(),$("#cropper-tools").hide(),$("#cropper-grid").hide(),$("#cropper-sieve").hide(),$("#camrange").val(decode(filtervalue[e],e))}}),$("#done-cropping").click(function(){col=$("#cropper-grid").offset().left-$("#filter-canvas").offset().left,cot=$("#cropper-grid").offset().top-$("#filter-canvas").offset().top;let e=ctx.getImageData(-$("#filter-canvas").offset().left+$("#cropper-grid").offset().left,$("#cropper-grid").offset().top-$("#filter-canvas").offset().top,$("#cropper-grid").width(),$("#cropper-grid").height());ctx.clearRect(0,0,canvas.width,canvas.height),canvas.width=c_w=$("#cropper-grid").width(),canvas.height=c_h=$("#cropper-grid").height(),console.log(-$("#filter-canvas").offset().left+$("#cropper-grid").offset().left,"col->",col),ctx.filter="brightness("+filtervalue.brightness/100+") contrast("+filtervalue.contrast/100+") saturate("+filtervalue.saturation/100+") hue-rotate("+filtervalue.hue+"deg) grayscale("+filtervalue.grayscale/100+") invert("+filtervalue.invert/100+") opacity("+filtervalue.opacity/100+") blur("+filtervalue.blur+"px) sepia("+filtervalue.sepia/100+")",iscropped=!0,ctx.putImageData(e,0,0),$("#brightness-filter").click()}),document.getElementById("cropper-sieve").addEventListener("click",function(e){$("#canvas-cropper").css("width",canvas.width+"px"),$("#canvas-cropper").css("height",canvas.height+"px"),$("#canvas-cropper").css("left",($("#webcam").width()-$(this).width())/2+"px"),$("#cropper-sieve").css("width",canvas.width+"px"),$("#cropper-sieve").css("height",canvas.height+"px"),$("#cropper-sieve").css("position","absolute"),$("#cropper-sieve").css("top",0),$("#cropper-sieve").css("left",0);let t=e.clientX,a=e.clientY;$("#cropper-grid").css("position","fixed"),$("#cropper-grid").css("left",(t>=$("#filter-canvas").offset().left?t:$("#filter-canvas").offset().left-1)+"px"),$("#cropper-grid").css("top",(a>=$("#filter-canvas").offset().top?a:$("#filter-canvas").offset().top-4)+"px"),$("#cropper-grid").css("max-width",$("#filter-canvas").width()+$("#filter-canvas").offset().left-Number($("#cropper-grid").css("left").split("px")[0])-1+"px"),$("#cropper-grid").css("max-height",$("#filter-canvas").height()+$("#filter-canvas").offset().top-Number($("#cropper-grid").css("top").split("px")[0])-4+"px")},{passive:!0}),$("#send-filter-img").click(function(){if(confirm("Are u sure to share?")){generateid();UploadFilteredImage(canvas),ctx.clearRect(0,0,canvas.width,canvas.height),$("#webcam").hide()}}),$("#cancel-filter-img").click(function(){$("#webcam").hide()}),$("#camrange").change(function(){let e=document.querySelectorAll(".activefilter")[0].id;switch(canvas.width=wo,canvas.height=ho,ctx.clearRect(0,0,canvas.width,canvas.height),e){case"brightness-filter":filtervalue.brightness=parseInt(this.value)+50,$("#filter-name").text("brightness("+filtervalue.brightness+"%)"),drawim();break;case"contrast-filter":filtervalue.contrast=parseInt(this.value)+50,$("#filter-name").text("contrast("+filtervalue.contrast+"%)"),drawim();break;case"saturation-filter":filtervalue.saturation=parseInt(this.value)+50,$("#filter-name").text("saturate("+filtervalue.saturation+"%)"),drawim();break;case"hue-filter":filtervalue.hue=parseInt(this.value)-100,$("#filter-name").text("hue("+filtervalue.hue+"deg)"),drawim();break;case"sepia-filter":filtervalue.sepia=parseInt(this.value)/2,$("#filter-name").text("sepia("+filtervalue.sepia+"%)"),drawim();break;case"grayscale-filter":filtervalue.grayscale=parseInt(this.value)/2,$("#filter-name").text("grayscale("+filtervalue.grayscale+"%)"),drawim();break;case"invert-filter":filtervalue.invert=parseInt(this.value)/2,$("#filter-name").text("invert("+filtervalue.invert+"%)"),drawim();break;case"opacity-filter":filtervalue.opacity=parseInt(this.value)/2,$("#filter-name").text("opacity("+filtervalue.opacity+"%)"),drawim();break;case"blur-filter":filtervalue.blur=parseInt(this.value)/50,$("#filter-name").text("blur("+filtervalue.blur+"px)"),drawim()}});