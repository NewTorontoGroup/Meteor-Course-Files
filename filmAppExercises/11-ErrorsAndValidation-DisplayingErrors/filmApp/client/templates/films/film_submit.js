Template.filmSubmit.events({
  'submit form': function (e) {
    e.preventDefault();

    var film = {
      title: $(e.target).find('[name=title]').val(),
      year: $(e.target).find('[name=year]').val(),
      director: $(e.target).find('[name=director]').val(),
      plot: $(e.target).find('[name=plot]').val(),
    };

    Meteor.call('filmInsert', film, function (error, result) {
      if (error)
        return throwError(error.reason);

      if (result.filmExists)
        throwError("This film has already been posted.");

      Router.go('filmPage', {
        _id: result._id
      });
    });
  }
});
