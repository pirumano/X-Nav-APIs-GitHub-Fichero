var github;
var repo;

$(document).ready(function(){
	$("#token-button").click(function(){
		var tokenSelf = $("#info-token").val();
		github = new Github({
 	 		token: tokenSelf,
  			auth: "oauth"
		});
		$("#repo").css({"display": "block"});
	});
	$("#search").click(function(){
		var username = $("#user").val();
		var reponame = $("#repository").val();
		repo = github.getRepo(username, reponame);
		repo.show(function(err, repo) {
			if(err != undefined)
				alert("ERROR to get repository info");
			else{
			var datashow = $("#info-repo");
				datashow.html("<p>Info repository</p>" +
								"<p> Name: " + repo.full_name + "</p>" +
								"<p> Description: " + repo.description + "</p>" +
								"<p> Creation Data: " + repo.created_at + "</p>");
				$("#write-file").css({"display": "block"});
			}
		});
	});
	$("#writer").click(function(){
		var name = $("#name-file").val();
		var content = $("#content-file").val();
		repo.write('master', name, 
					content, "Updated by HTML", function(err) {
						if(err != undefined)
							alert("ERROR to write file");
					});
	});
})