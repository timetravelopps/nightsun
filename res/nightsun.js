$(document).ready(function() {
    $('html').bind("touchmove", {}, function(event){
  event.preventDefault();
});
    
    currentTrigger = 0;
    noauto = true;
    nolyrics = false;
    
    if (location.hash == '#nolyrics') {
        nolyrics = true;
    }
    
    if (location.hash == '#noauto' || noauto == true) {
        
        $("#jpId").jPlayer( {
        ready: function () {
            $(this).jPlayer("setMedia", {
                mp3: "music/NightSunMIX2.mp3", 
                oga: "music/NightSunMIX2.ogg" 
            });
        },
        volume: 0.9,
        supplied: "mp3, oga",
        swfPath: "./music/"
    });
    
    noauto = true;
        
    }
    else {
        $("#jpId").jPlayer( {
        ready: function () {
          $(this).jPlayer("setMedia", {
            mp3: "music/NightSunMIX2.mp3", 
            oga: "music/NightSunMIX2.ogg" 
          }).jPlayer("play");
        },
        volume: 0.9,
        supplied: "mp3, oga",
        swfPath: "./music/"
        });
    }
    
  
  
  $('#credits').click(function () {
      if ($(this).text() == 'Credits') {
          $('#creditsbox').fadeIn(500);
          $(this).text('Hide Credits');
      }
      else {
          $('#creditsbox').fadeOut(500);
          $(this).text('Credits');
      }
  })
  
 $("#bigplaybutton").touchstart( function() {
  $("#jpId").jPlayer('play');
});
 
 $("#bigpause").touchstart( function() {
 
            if($("#jpId").data("jPlayer").status.paused) {
               $("#jpId").jPlayer("play");
            } else {
               $("#jpId").jPlayer("pause");
            }

});
 
   //  $('#stop').click(function() {
//     $('#jpId').jPlayer('stop');
//     $('#play').text('PLAY');
//     });
//     
//     $('#play').click(function() {
//     $('#jpId').jPlayer('play');
//     });
//   
//  $('#pause').click(function() {
//     $('#jpId').jPlayer('pause');
// $('#play').text('APLY');
//     });
// 
//   $('#jpId').bind($.jPlayer.event.playing, function(event) {
//      $('#play').text('PLAY');
//      
//   });
//   $('#jpId').bind($.jPlayer.event.loadstart, function(event) {
//      $('#play').text('loading...');
//   });
//   $('#jpId').bind($.jPlayer.event.suspend, function(event) {
//      $('#play').text('PLAY');
//   });
// 
//   
//   $('#jpId').bind($.jPlayer.event.ended, function(event) {
//      $('#jpId').jPlayer('play');
//      $('#play').text('>');
//   });
  
  $('#jpId').bind($.jPlayer.event.timeupdate, function(event) {
     $('#time').html($.jPlayer.convertTime(event.jPlayer.status.currentTime));
     
     if (event.jPlayer.status.currentTime >= timings[currentTrigger] && nolyrics != true) {
         fireTrigger(currentTrigger);
         currentTrigger++;
     }
     
     
  });
  
  // start key binding
 //  
//  $(document.documentElement).keydown(function(event) {
//         event.preventDefault();
//         if(event.which === 32) {
//             if($("#jpId").data("jPlayer").status.paused) {
//                $("#jpId").jPlayer("play");
//             } else {
//                $("#jpId").jPlayer("pause");
//             }
//         }
//         
//     });
// end key binding
  
function startLyrics () {
$('#container').hide().css('fontSize', '');
    $('#line1').hide().css('fontSize', '');
    $('#line2a').hide().css('fontSize', '');
	$('#line2b').hide().css('fontSize', '');
	$('#line3a').hide().css('fontSize', '');
	$('#line3b').hide().css('fontSize', '');
	$('#line3c').hide().css('fontSize', '');
	$('#line4a').hide().css('fontSize', '');
	$('#line4b').hide().css('fontSize', '');
	$('#line5a').hide().css('fontSize', '');
	$('#line5b').hide().css('fontSize', '');
	$('#line6a').hide().css('fontSize', '');
	$('#line7a').hide().css('fontSize', '');
    currentTrigger = 0;
}



function fireTrigger(trigger) {
    switch (trigger) {
            
            case 0:
            $('html, body').animate({ scrollTop: 0 }, 000, function() {
    startLyrics ()
});// 
// $('#line1').html(lyrics[0]).addClass('titlefade').fadeIn(500).delay(2000).fadeOut(1000);
$('#index').fadeOut(1500);
$('#container').fadeIn(1500).removeClass('p2 p3 p4 p5 p6 p7 p8 end');


                		break;
                
			case 1: 
				$('#line1').html(lyrics[0]).addClass('her2').fadeIn(000);
				break;
                
            case 2:
                $('#line2a').html(lyrics[1]).addClass('her2').fadeIn(1000);
                break;
                
            case 3:
                $('#line3a').html(lyrics[2]).addClass('her2').fadeIn(1000);
                $('#line3b').html(lyrics[3]).addClass('her2').fadeIn(1000);
                break;
                
            case 4:
                
                $('#line4a').html(lyrics[4]).addClass('her2').fadeIn(1000);
				break;
			
			case 5:
                $('#line5a').html(lyrics[5]).addClass('her2').fadeIn(00);
				break;
			
			case 6:
                $('#line6a').html(lyrics[6]).addClass('her2').fadeIn(1000);
				break;
				
			case 7:
                $('#line1').fadeOut(1000);
                $('#line2a').fadeOut(1000);
                $('#line3a').fadeOut(1000);
                $('#line3b').fadeOut(1000);
                $('#line4a').fadeOut(1000);
                $('#line5a').fadeOut(1000);
                $('#line6a').fadeOut(1000);
                				break;	
                				
                				case 8:
                $('#container').addClass('p2').fadeIn(1000);
				break;
        		
        		case 9:
                $('#line1').html(lyrics[7]).addClass('her2').fadeIn(1000);
                $('#line2a').html(lyrics[50]).addClass('her2').fadeIn(1000);

				break;
			case 10:
                $('#line3a').html(lyrics[8]).addClass('her2').fadeIn(1000);
				break;
            case 11:
                $('#line4a').html(lyrics[9]).addClass('her2').fadeIn(1000);
				break;                        
			case 12:
                $('#line5a').html(lyrics[10]).addClass('her2').fadeIn(1000);
				break;
			case 13:
                $('#line6a').html(lyrics[11]).addClass('her2').fadeIn(1000);
                $('#line7a').html(lyrics[51]).addClass('her2').fadeIn(1000);
				break;
			case 14:
                $('#line1').fadeOut(1000);
                $('#line2a').fadeOut(1000);
                $('#line3a').fadeOut(1000);
                $('#line4a').fadeOut(1000);
                $('#line5a').fadeOut(1000);
                $('#line6a').fadeOut(1000);
                $('#line7a').fadeOut(1000);
				break;	
				
				case 15:
                $('#container').addClass('p3').fadeIn(1000);
				break;
				
			case 16:
                $('#line1').html(lyrics[12]).addClass('her2').fadeIn(1000);
                                 				break;
			case 17:
                $('#line2a').html(lyrics[13]).addClass('her2').fadeIn(1000);
				break;
			case 18:
                $('#line3a').html(lyrics[14]).addClass('her2').fadeIn(1000);
				break;
			case 19:
                $('#line4a').html(lyrics[15]).addClass('her2').fadeIn(1000);
				break;	
			case 20:
                $('#line1').fadeOut(1000);
                $('#line2a').fadeOut(1000);
                $('#line3a').fadeOut(1000);
                $('#line4a').fadeOut(1000);
                				break;
            
            case 21:
                $('#container').addClass('p4').fadeIn(1000);
				break;

			case 22:
                $('#line1').html(lyrics[16]).addClass('her2').fadeIn(1000);
                				break;
			case 23:
                $('#line1b').html(lyrics[17]).addClass('her2').fadeIn(1000);
				break;
			case 24:
                $('#line2a').html(lyrics[18]).addClass('her2').fadeIn(1000);
				break;
			case 25:
                $('#line3a').html(lyrics[19]).addClass('her2').fadeIn(1000);
				break;	
			case 26:
                $('#line4a').html(lyrics[20]).addClass('her2').fadeIn(1000);
				break;		
			case 27:
                $('#line1').fadeOut(1000);
                $('#line1b').fadeOut(1000);
                $('#line2a').fadeOut(1000);
                $('#line3a').fadeOut(1000);
                $('#line4a').fadeOut(1000);
				break;	
				
				 case 28:
                $('#container').addClass('p5').fadeIn(1000);
				break;

			case 29:
                $('#line1').html(lyrics[21]).addClass('her2').fadeIn(1000);
                				break;
			case 30:
                $('#line2a').html(lyrics[22]).addClass('her2').fadeIn(000);
				break;
			case 31:
                $('#line3a').html(lyrics[23]).addClass('her2').fadeIn(1000);
				break;
			case 32:
                $('#line4a').html(lyrics[24]).addClass('her2').fadeIn(1000);
				break;	
			case 33:
                $('#line5a').html(lyrics[25]).addClass('her2').fadeIn(1000);
				break;		
			case 34:
                $('#line6a').html(lyrics[26]).addClass('her2').fadeIn(1000);
				break;
			case 35:
                $('#line1').fadeOut(1000);
                $('#line5a').fadeOut(1000);
                $('#line2a').fadeOut(1000);
                $('#line3a').fadeOut(1000);
                $('#line4a').fadeOut(1000);
                $('#line6a').fadeOut(1000);

				break;	
						
			case 36:
                $('#container').addClass('p6').fadeIn(1000);
				break;

			case 37:
                $('#line1').html(lyrics[27]).addClass('her2').fadeIn(1000);
                				break;
			case 38:
                $('#line2a').html(lyrics[28]).addClass('her2').fadeIn(1000);
                $('#line3a').html(lyrics[52]).addClass('her2').delay(1500).fadeIn(1000);
                
				break;
			case 39:
                $('#line4a').html(lyrics[29]).addClass('her2').fadeIn(1000);
				break;
			case 40:
                $('#line5a').html(lyrics[30]).addClass('her2').fadeIn(1000);
				break;	
			case 41:
                $('#line6a').html(lyrics[31]).addClass('her2').fadeIn(1000);
				break;		
			
			case 42:
                $('#line1').fadeOut(1000);
                $('#line2a').fadeOut(1000);
                $('#line3a').fadeOut(1000);
                $('#line3b').fadeOut(1000);
                $('#line3c').fadeOut(1000);
                $('#line4a').fadeOut(1000);
                $('#line5a').fadeOut(1000);
                $('#line6a').fadeOut(1000);
				break;								
					
			case 43:
                $('#container').addClass('p7').fadeIn(1000);
				break;
				
			case 44:
                $('#line1').html(lyrics[32]).addClass('her2').fadeIn(1000);
				break;
			case 45:
                $('#line2a').html(lyrics[33]).addClass('her2').fadeIn(1000);
				break;
			case 46:
                $('#line3a').html(lyrics[34]).addClass('her2').fadeIn(1000);
				break;
			case 47:
                $('#line4a').html(lyrics[35]).addClass('her2').fadeIn(1000);
				break;	
			case 48:
                $('#line5a').html(lyrics[36]).addClass('her2').fadeIn(1000);
				break;
			case 49:
                $('#line5b').html(lyrics[37]).addClass('her2').fadeIn(1000);
				break;		
			case 50:
                $('#line1').fadeOut(1000);
                $('#line2a').fadeOut(1000);
                $('#line3a').fadeOut(1000);
                $('#line4a').fadeOut(1000);
                $('#line5a').fadeOut(1000);
                $('#line5b').fadeOut(1000);

				break;		
					
			case 51:
                $('#container').addClass('p8').fadeIn(1000);
				break;
			case 52:
                $('#line1').html(lyrics[38]).addClass('her2').fadeIn(1000);
				break;
			case 53:
                $('#line2a').html(lyrics[39]).addClass('her2').fadeIn(1000);
				break;						
			case 54:
                $('#line3a').html(lyrics[40]).addClass('her2').fadeIn(1000);
				break;
			case 55:
                $('#line4a').html(lyrics[41]).addClass('her2').fadeIn(1000);
				break;
			case 56:
                $('#line4b').html(lyrics[42]).addClass('her2').fadeIn(000);
				break;
			case 57:
                $('#line5a').html(lyrics[43]).addClass('her2').fadeIn(1000);
				break;	
			case 58:
                $('#line6a').html(lyrics[44]).addClass('her2').fadeIn(1000);
				break;	
			case 59:
                $('#line7a').html(lyrics[45]).addClass('her2').fadeIn(1000);
				break;		
			
			case 60:
                $('#line1').fadeOut(2000);
                $('#line2a').fadeOut(2000);
                $('#line3a').fadeOut(2000);
                $('#line4a').fadeOut(2000);
                $('#line4b').fadeOut(2000);
                $('#line5a').fadeOut(2000);
                $('#line6a').fadeOut(2000);
                $('#line7a').fadeOut(2000);

				break;
				
			case 61: 
			$('#container').addClass('end');		
			$('html, body').animate({ scrollTop: 0 }, 000, function() {
    location.reload();
});																					
            default:
                break;
        }
}
  
  timings = new Array();
  timings[0] = 0.1; // 
  timings[1] = 10.5; // The clouds hang heavy over the city.
  timings[2] = 15.25; // The sun has been gone for weeks.
  timings[3] = 20.1; // An occasional window will glow with the light from candles,
  timings[4] = 25; // or a wind-up lamp,
  timings[5] = 29.6; // but mostly the city is dark.
  timings[6] = 35.5; //  I can't find him anywhere.
  timings[7] = 38.8; // CLEAR SCREEN
  timings[8] = 39.8; // new image p2
  timings[9] = 41.5; // When the dark first came, people thought it was temporary.
  timings[10] = 45; // Everything went on as it always had, 
  timings[11] = 47.5; // The city still had its noises, 
  timings[12] = 50.5; //its happenings. 
  timings[13] = 53.5; // We couldn't have known that it would last this long.
  timings[14] = 58; //   CLEAR SCREEN 
  timings[15] = 59; // new image p3
  timings[16] = 60; // In these un-lit streets I kick at pavements, 
  timings[17] = 66; // scratch my soles across the gravel,
  timings[18] = 69.7; // and try to remember
  timings[19] = 72; // that it wasn't always like this.
  timings[20] = 75.5; //  CLEAR SCREEN
  timings[21] = 76.5; // new image p4
  timings[22] = 78; // My first memory of us happens here,
  timings[23] = 81.5; // in these streets.
  timings[24] = 84; //  Back then, there was the orange wash of streetlights and a sky full of stars.
  timings[25] = 91; // He snuck his hand into mine 
  timings[26] = 93.5; // and told me we would always be okay.
  timings[27] = 98; // CLEAR SCREEN
  timings[28] = 99; // new image p5
  timings[29] = 99.5; // There are secret places.
  timings[30] = 102.5; // There are always secret places
  timings[31] = 104.5; // The places only he and I know. 
  timings[32] = 107; // I would seek them out
  timings[33] = 107; // but he was my map
  timings[34] = 110.5; // and in this darkness i have no way of finding my way there.
  timings[35] = 114.5; // CLEAR SCREEN
  timings[36] = 115.5; // new image p6
  timings[37] = 117.5; // So I try to remember the feel of the streets
  timings[38] = 122; // let my feet trace the heiroglyphs below
  timings[39] = 126.5; // They lead me through small dark spaces
  timings[40] = 129; // under beams and past doorways
  timings[41] = 131; // until I find a hopscotch of windows brightly lit
  timings[42] = 134; // CLEAR SCREEN
  timings[43] = 135; // new image p7  
  timings[44] = 137.5; // Rain falls soft, sporadic
  timings[45] = 141; // a tin roof melody catches my breath
  timings[46] = 133; // and I look up 
  timings[47] = 146; // The warmest yellow smatters a window
  timings[48] = 149.5; // and I remember
  timings[49] = 153; // this is the place
  timings[50] = 156; // CLEAR SCREEN
  timings[51] = 157; // new image p8
  timings[52] = 159.5; // At night these streets are
  timings[53] = 159.5; // the end of the world
  timings[54] = 164.5; // but as I watch the lights dance 
  timings[55] = 167.5; // watch the windows glitter
  timings[56] = 169.5; // flicker
  timings[57] = 171; // I know the world has only changed 
  timings[58] = 174.5; // and all I have to do is wait now
  timings[59] = 179.5; // it won't be long before I'm found
  timings[60] = 188; // CLEAR SCREEN
  timings[61] = 196; // RESET/CREDITS
  /*
   *  

   */

    lyrics = new Array();
    lyrics[0] = '<p>The clouds hang heavy over the city.';
    lyrics[1] = '<p>The sun has been gone for weeks.';
	lyrics[2] = '<p>An occasional window will glow with the';
	lyrics[3] = "<p>light from candles,&nbsp;";
	lyrics[4] = "<p>or a wind-up lamp, ";
	lyrics[5] = "<p>but mostly the city is dark.";
    lyrics[6] = "<p>I can't find him anywhere.";
    lyrics[7] = '<p>When the dark first came, people thought';
    lyrics[8] = '<p>Everything went on as it always had, ';
	lyrics[9] = '<p>The city still had its noises,&nbsp;';
	lyrics[10] = "<p>its happenings. ";
	lyrics[11] = "<p>We couldn't have known that it would";
	lyrics[12] = "<p>In these un-lit streets I kick at pavements,";
    lyrics[13] = "<p>scratch my soles across the gravel,";
    lyrics[14] = "<p>and try to remember&nbsp;";
  	lyrics[15] = "<p>that it wasn't always like this.";
	lyrics[16] = "<p>My first memory of us happens here,&nbsp;";
	lyrics[17] = "<p>in these streets.";
	lyrics[18] = "<p>Back then, there was the orange wash of streetlights and a sky full of stars.";
	lyrics[19] = "<p>He snuck his hand into mine";			
	lyrics[20] = "<p>and told me we would always be okay.";
	lyrics[21] = '<p>There are secret places.';
	lyrics[22] = '<p>There are always secret places.';
	lyrics[23] = '<p>The places only he and I know.';
	lyrics[24] = '<p>I would seek them out,'; 
	lyrics[25] = '<p>but he was my map,';
	lyrics[26] = '<p>and in this darkness I have no way of finding my way there.'; 
	lyrics[27] = '<p>So I try to remember the feel of the streets,';
	lyrics[28] = '<p>let my feet trace the hieroglyphs below:'; 
	lyrics[29] = '<p>They lead me through small dark spaces,'; 
	lyrics[30] = '<p>under beams and past doorways';
	lyrics[31] = '<p>until I find a hopscotch of windows, brightly lit.';
	lyrics[32] = '<p>Rain falls soft, sporadic,';
	lyrics[33] = '<p>a tin-roof melody catches my breath';
	lyrics[34] = '<p>and I look up.';
	lyrics[35] = '<p>The warmest yellow smatters a window,';
	lyrics[36] = '<p>and I remember:';
	lyrics[37] = 'this is the place.';
	lyrics[38] = '<p>At night these streets are';
	lyrics[39] = '<p>the end of the world';
	lyrics[40] = '<p>But as I watch the lights dance,';
	lyrics[41] = '<p>watch the windows glitter,';
	lyrics[42] = 'flicker,';
	lyrics[43] = '<p>I know the world has only changed.';
	lyrics[44] = '<p>And all I have to do now is wait.';
	lyrics[45] = "<p>It won't be long before I'm found.";
	lyrics[50] = '<p>it was temporary.';
	lyrics[51] = '<p>last this long.';
	lyrics[52] = '<p>cobbles, concrete, kerbs.';
	
});
