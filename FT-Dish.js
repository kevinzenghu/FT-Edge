if (Meteor.isClient) {
    Template.sections.events({
        'mousedown section, touchstart section': function(e) {
            $(e.currentTarget).addClass('active');
        },
        'mouseup section, touchend section': function(e) {
            console.log('Right pane');
            $(e.currentTarget).removeClass('active');
            $("div#left-pane, div#right-pane").addClass('active');
        },
        'mouseup div#back, touchend div#back': function(e) {
            console.log ('Left pane')
            $("div#left-pane, div#right-pane").removeClass('active');
        }
    });
    Meteor.startup(function() {
    });
}