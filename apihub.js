var github;

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
		var repo = github.getRepo(username, reponame);
		repo.show(function(err, repo) {
			var datashow = $("#info-repo");
			datashow.html("<p>Info repository</p>" +
							"<p> Name: " + repo.full_name + "</p>" +
							"<p> Description: " + repo.description + "</p>" +
							"<p> Creation Data: " + repo.created_at + "</p>");
		});
	});
});