if (Meteor.isClient) {
    Template.sections.events({
        'click section': function(e) {
            console.log('Left pane');
            $("body").addClass('active-left').removeClass('active-right');
        }
    });
    Template.left_pane.events({
        'click section': function(e) {
            console.log('Right pane');
            $("body").removeClass('active-left').addClass('active-right');
        }
    });
    Template.right_pane.events({
        'click header': function(e) {
            $("body").removeClass('active-right').addClass('active-left');
        }
    });
    Meteor.startup(function() {
        FastClick.attach(document.body);
    });
}
