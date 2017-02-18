if (annyang) {
    function typeToScreen(text) {
        $('#tabletType').typeIt({
            strings: [text],
            speed: 20,
        });
    }

    var commands = {
        'hello': function () {
            window.alert("hello");
        },
        'type *stuff': typeToScreen
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
}