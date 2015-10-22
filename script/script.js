$(document).ready(function() {

	$('#new').click(function(){
		// var i=1;
		$("#col1").append('<button class="b">This One?</button>');
	});

	$(".b").click(function(){
		$('#col1').append('<button>I am not sure.</button>');
	});

	$('#pic').click(function(){

	})


	// var feed = new Instafeed({
 //        get: 'tagged',
 //        tagName: 'adventure',
 //        clientId: 'fd33cb88efc848bc85794a650947bf63'
 //        // resolution: standard_resolution
 //    });
   
    
    var userFeed = new Instafeed({
    get: 'user',
    userId: 343082456,
    accessToken: '343082456.1677ed0.a609fb3b39794a7082c919b0753ddb42',
    // resolution: 'low_resolution',
    limit: '4',
	}); 
	$("#pic").click(function(){
    	userFeed.run();
    })

    $("#long").hide();
    $("#shy").click(function(){
    	$("#long").toggle();
    })
	
})