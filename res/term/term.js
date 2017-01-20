const github = "//api.github.com";
const mySite = "aliu139.github.io";

var commands = {
    "help": {
        "help": "Displays all the commands and their usages"
    },
    "ghpages": {
        "help": "Displays a list of GitHub Repositories with gh-pages associated. (If a username is supplied, it will list the repositories of that user. Else, it will default to aliu139.) \nEx. <ghpages techlover10> will display all repositories of that user"
    }
}

jQuery(function($, undefined) {
    $('#terminal').terminal(function(command, term) {
        if (command !== '') {
            command = command.trim();

            let args = command.split(" ");

            switch(args[0]){
                case "ghpages":
                    if(args.length > 1){
                        ghPages(args[1], term);
                    }
                    else{
                        ghPages('aliu139', term);
                    }
                    break;
                case "help":
                    showHelp(term);
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
        completion: Object.keys(commands)
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

var showHelp = function(term){
    Object.keys(commands).forEach(function(el){
        term.echo(el + " : " + commands[el].help + "\n");
    });
}