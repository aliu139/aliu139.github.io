const github = "//api.github.com";
const mySite = "aliu139.github.io";

jQuery(function($, undefined) {
    $('#terminal').terminal(function(command, term) {
        if (command !== '') {
            command = command.trim();
            switch(command){
                case "ghpages":
                    ghPages('aliu139', term);
                    break;
                default:
                    term.echo("Command not recognized. Please try again!");
                    break;
            }
        }
    }, {
        greetings: 'Welcome to the Terminal! (aliu139.github.io)\nType \'help\' for more information \n \n',
        name: 'aliu139.terminal',
        prompt: 'js> ',
        completion: [
            'help',
            'ghpages'
        ]
    });
});

var ghPages = function(username, term){
    $.ajax(
        {
            url: github+"/users/" + username + "/repos",
            success: function(res){
                res.forEach(function(el){
                    if(el.has_pages){
                        term.echo(el.name);
                        term.echo(el.description);
                        if(el.has_pages){
                            term.echo(showGHLink(el.name));
                        }
                        term.echo('\n');
                        term.echo("Fork it at: " + el.html_url);
                        term.echo('\n');
                    }

                });
                console.log(res);
            }
        }
    );
}

var showGHLink = function(repoName){
    if(repoName.includes(mySite)){
        return "https://" + mySite;
    }
    else{
        return "https://" + mySite + "/" + repoName;
    }
}