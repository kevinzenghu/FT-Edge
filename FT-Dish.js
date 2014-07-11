if (Meteor.isClient) {
    Template.sections.events({
        'touchend section': function(e) {
            console.log('Left pane');
            $("div#left-pane, div#right-pane").removeClass('active');
        },
        'mousedown section, touchstart section': function(e) {
            $(e.currentTarget).addClass('active');
        },
        'click section': function(e) {
            console.log('Right pane');
            $(e.currentTarget).removeClass('active');
            $("div#left-pane, div#right-pane").addClass('active');
        },

    });

    Meteor.startup(function() {
        FastClick.attach(document.body);
    });
}
