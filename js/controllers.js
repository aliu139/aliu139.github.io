var controllers = angular.module("ctrls", ['ngAnimate']);

controllers.controller('main.ctrl', ["$scope", function($scope){
	$scope.test = "derpderp";
}]);

controllers.controller('about.ctrl', ["$scope", function($scope){

}]);

controllers.controller('contact.ctrl', ["$scope", "$location", function($scope, $location){
	$scope.count = 0;
	$scope.secret = function(){
		$scope.count = $scope.count + 1;
		// console.log($scope.count);
		if ($scope.count == 8) {
			$location.url('/whatdoyouseek');
		}
	};
}]);

controllers.controller('experience.ctrl', ["$scope", function($scope){
	$scope.show = 0
	
	$scope.pos = [
		{"title" : "Sponsorship Chair for BigRed//Hacks",
		 "desc" : "I will be working as the sponsorship chair for BigRed//Hacks 2016. To be updated.",
		 "img" : "https://pbs.twimg.com/profile_images/597794910155210752/yCf0aPVL.png",
		 "link" : "http://www.bigredhacks.com/"},
		{"title" : "E-Board for Splash! at Cornell",
		 "desc" : "After teaching Confusion with Cards: Fundamentals of Card Magic and Manipulation for three semesters, I am now serving as part of the eboard for Splash! Spring 2016",
		 "img" : "https://pbs.twimg.com/profile_images/540545667744014336/O2te7LAN.png",
		 "link" : "https://cornell.learningu.org/"},
		{"title" : "Vice President of Marketing for Cornell Ascend",
		 "desc" : "I am currently serving as the Vice President for Cornell Ascend. In addition to managing the Cornell Ascend Facebook Page and website, I produce all marketing materials used in our fundraising and public outreach events and coordinate with the other eboard members. We are focused on helping members build stronger interpersonal and professional relationships throughout their careers.",
		 "img" : "http://www.ascendleadership.org/graphics/logo.png",
		 "link" : "http://ascendcornell.com/"},
		{"title" : "Vice President and Co-Founder of Cornell Street Magic",
		 "desc" : "I am currently the Vice President of Cornell Street Magic. Our goal on campus is to remind people that magic still exists in all sorts of forms. In addition to holding weekly teaching sessions, we perform casually around campus and occassionally at shows around campus. I am in charge of maintaining our website, Facebook page, and public outreach.",
		 "img" : "https://raw.githubusercontent.com/cornellstreetmagic/cornellstreetmagic.github.io/master/resources/img/logos/v2-whites.gif",
		 "link" : "http://cornellstreetmagic.github.io/"}
	];

	$scope.prev = [
		{"title" : "Intern Developer at CommVault",
		 "date" : "Spring 2014 & Summer 2015",
		 "desc" : "Used C++ to create an option to capture user-mode crash dumps and redesign the deduplication tab in their program Simpana 10. Used AngularJS and Twitter Bootstrap to redesign the GUI for WebConsole for the NAS component of Simpana 11",
		 "img" : "https://media.glassdoor.com/sqll/16184/commvault-squarelogo-1438876368138.png",
		 "link" : "http://www.commvault.com/"}
	];

	$scope.hack = [
		{"hackathon" : "AngelHacks Manhattan",
		 "date" : "July 2015",
		 "proj" : "Nourritour", 
		 "desc" : "An iPhone app designed to create the perfect culinary adventure using your position (built with Swift + IBM Bluemix)",
		 "img" : "https://cdn.evbuc.com/eventlogos/88244245/angelhacklogoblk.png",
		 "link" : "http://angelh.wpengine.com/hackathon/manhattan-2015/"},
		{"hackathon" : "CommVault Hackathon",
		 "date" : "July 2015",
		 "proj" : "CV-Groups",
		 "desc" : "A social media network (specifically for CommVault employees) built using the MEAN stack",
		 "img" : "https://media.glassdoor.com/sqll/16184/commvault-squarelogo-1438876368138.png",
		 "link" : "http://www.commvault.com/"},
		{"hackathon" : "BigRed//Hacks",
		 "date" : "October 2015",
		 "proj" : "Onyx",
		 "desc" : "A Pebble Application seeking to bring simple and intuitive navigation to the smartwatch market",
		 "img" : "https://pbs.twimg.com/profile_images/597794910155210752/yCf0aPVL.png",
		 "link" : "http://www.bigredhacks.com/"} 
	];

	$scope.skills = [
		"Java",
		"HTML/CSS/JavaScript",
		"AngularJS",
		"Python",
		"C++",
		"NodeJS",
		"OCaml",
		"C#"
	];

	$scope.other = [
		"Microsoft Office Suite",
		"LaTeX",
		"Git",
		"Adobe Photoshop/GIMP"
	]
}]);

controllers.controller('projects.ctrl', ["$scope", function($scope){
	$scope.projects = [
	{"link" : "http://devpost.com/software/onyx", 
	 "img" : "https://raw.githubusercontent.com/aliu139/Onyx/master/resources/images/logo.jpg",
	 "title" : "Onyx",
	 "text" : "A Pebble Application seeking to bring simple and intuitive navigation to the smartwatch market"},
	 {"link" : "http://www.hackathon.io/nourritour", 
	 "img" : "http://hackathon.io.s3.amazonaws.com/profiles/images/000/048/236/thumb/Logo_Prototype_IV.png?1436704964",
	 "title" : "NourriTour",
	 "text" : "An iPhone app designed to create the perfect culinary adventure using your current position (built with Swift and IBM Bluemix)"},
	 {"link" : "https://github.com/mahsu/CV-Groups", 
	 "img" : "https://media.glassdoor.com/sqll/16184/commvault-squarelogo-1438876368138.png",
	 "title" : "CV-Groups",
	 "text" : "A social media network (specifically for CommVault employees) built using the MEAN stack"},
	 {"link" : "https://github.com/cornellstreetmagic/cornellstreetmagic.github.io", 
	 "img" : "https://raw.githubusercontent.com/cornellstreetmagic/cornellstreetmagic.github.io/master/resources/img/logos/v2-whites.gif",
	 "title" : "Cornell Street Magic",
	 "text" : "A website built for Cornell Street Magic using AngularJS, Backand, and Bootstrap"},
	 {"link" : "https://github.com/MattLi96/CardsAgainstOcaml", 
	 "img" : "https://raw.githubusercontent.com/MattLi96/CardsAgainstOcaml/master/res/cards.png",
	 "title" : "Cards Against OCaml",
	 "text" : "Cards Against Humanity: In OCaml. Need I say anymore? (Built for CS3110)"}
	];
}]);

controllers.controller("secret.ctrl", ["$scope", "$location", "Auth", function($scope, $location, Auth){
	$scope.user = "";
	$scope.pass = "";
	$scope.auth = Auth;

	$scope.authenticate = function(user,pass){
		return $scope.auth.$authWithPassword({
        	"email": user,
            "password": pass
        }).then(function(authData){
        	console.log('Login Successful');
        	$location.url('/redpill');
      	}).catch(function(error) {
            console.error("Authentication failed");
        });
	};

	$scope.magic = function(){
		$location.url('/magic');
	}
}]);

controllers.controller("redpill.ctrl", ["$scope", "Auth", function($scope, Auth){
	$scope.auth = Auth;
	$scope.user = $scope.auth.$getAuth();

	$scope.displayName = "";
	$scope.displayLoc = "";
	$scope.displayDate = "";

	var ref = new Firebase("https://glowing-fire-6134.firebaseio.com/");

	ref.on("value", function(snapshot) {
		var values = $scope.user.password.email.split("@");
  		$scope.displayName = snapshot.val().redPill[values[0]].name;
  		$scope.displayLoc = snapshot.val().redPill[values[0]].location;
  		$scope.displayDate = snapshot.val().redPill[values[0]].date;
	}, function (errorObject) {
  		console.log("The read failed: " + errorObject.code);
	});
}]);

controllers.controller("magic.ctrl", ["$scope", function($scope){
	$scope.insta = [
		{"pic" : "https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/11266582_1421306231532126_1940468876_n.jpg",
		 "vid" : "http://scontent.cdninstagram.com/hphotos-xaf1/t50.2886-16/11726234_362372757307354_823013899_n.mp4"},
		{"pic": "https://scontent.cdninstagram.com/hphotos-xta1/t51.2885-15/e15/12080613_192321011100492_1685209699_n.jpg",
		 "vid": "http://scontent.cdninstagram.com/hphotos-xat1/l/t50.2886-16/12143738_622596031212393_289499918_n.mp4"},
		{"pic": "https://scontent.cdninstagram.com/hphotos-xat1/t51.2885-15/e15/11351725_887139511340709_1702037038_n.jpg",
		"vid": "http://scontent.cdninstagram.com/hphotos-xtf1/t50.2886-16/11937690_1021906631187560_1608551802_n.mp4"},
		{"pic": "https://scontent.cdninstagram.com/hphotos-xpt1/t51.2885-15/e15/11375246_989632064414784_213152242_n.jpg",
		"vid": "http://scontent.cdninstagram.com/hphotos-xpt1/t50.2886-16/11828918_1631682687043857_883700810_n.mp4"}
	];
}]);