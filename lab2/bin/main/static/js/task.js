$(document).ready(function() {	
		$("#btn").click(function(){
			var id = $("#num").val();
			var value = parseInt(id);
	    	if(value==1){
			$.ajax({	
		        url: "/task/1"
		    }).then(function(data) {
		    	$("#msg").text(data.id+"  "+data.message);
		    });
	    	}
	    	
	    	else if(value==2){
				$.ajax({	
			        url: "/task/2"
			    }).then(function(data) {
			    	$("#msg").text(data.id+"  "+data.message);
			    });
		    	}
	    	else if(value==3){
				$.ajax({	
			        url: "/task/3"
			    }).then(function(data) {
			    	$("#msg").text(data.id+"  "+data.message);
			    });
		    	}
	    	else if(value==4){
				$.ajax({	
			        url: "/task/4"
			    }).then(function(data) {
			    	$("#msg").text(data.id+"  "+data.message);
			    });
		    	}
	    	else if(value==5){
				$.ajax({	
			        url: "/task/5"
			    }).then(function(data) {
			    	$("#msg").text(data.id+"  "+data.message);
			    });
		    	}
	    	else if(value==6){
				$.ajax({	
			        url: "/task/6"
			    }).then(function(data) {
			    	$("#msg").text(data.id+"  "+data.message);
			    });
		    	}
	    	else if(value==7){
				$.ajax({	
			        url: "/task/7"
			    }).then(function(data) {
			    	$("#msg").text(data.id+"  "+data.message);
			    });
		    	}
	    	else if(value==8){
				$.ajax({	
			        url: "/task/8"
			    }).then(function(data) {
			    	$("#msg").text(data.id+"  "+data.message);
			    });
		    	}
	    	else {
				$.ajax({	
			        url: "/task/1"
			    }).then(function(data) {
			    	$("#msg").text("查不到改任务  ");
			    });
		    	}
		});    
	});