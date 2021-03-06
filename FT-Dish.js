if (Meteor.isClient) {
    Template.sections.events({
        'click section': function(e) {
            console.log('Left pane');
            $("body").addClass('active-left').removeClass('active-right');
        },
        'click section#starters': function(e) {
            Session.set('currentPane', 'starters');
        },
        'click section#substance': function(e) {
            Session.set('currentPane', 'substance');
        },
        'click section#a-drink-with': function(e) {
            Session.set('currentPane', 'drink');
        },
        'click section#the-scoop': function(e) {
            Session.set('currentPane', 'scoop');
        },
    });
    Template.left_pane.events({
        'click section': function(e) {
            console.log('Right pane');
            $("body").removeClass('active-left').addClass('active-right');
        },
        'click #lang': function(e) {
          $("body").toggleClass("chinese");
        }
    });
    Template.right_pane.events({
        'click header': function(e) {
            $("body").removeClass('active-right').addClass('active-left');
        }
    });

    Template.right_pane.helpers({
        starters: function(e) {
            return Session.equals('currentPane', 'starters')
        },
        substance: function(e) {
            return Session.equals('currentPane', 'substance')
        },
        drink: function(e) {
            return Session.equals('currentPane', 'drink')
        },
        scoop: function(e) {
            return Session.equals('currentPane', 'scoop')
        },
    })

    Meteor.startup(function() {
        FastClick.attach(document.body);
        $("#splash").addClass('animate');
        setTimeout(function() {
            $("#splash div.ft-icon-logo").fadeIn();
        }, 800);
        setTimeout(function() {
            $("#splash div.dish").fadeIn();
        }, 1600);
        setTimeout(function() {
            $("#splash").fadeOut();
        }, 200);  // 2800
    });
}
