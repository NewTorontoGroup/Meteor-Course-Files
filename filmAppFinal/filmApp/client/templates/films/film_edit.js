Template.filmEdit.onCreated(function () {
  Session.set('filmEditErrors', {});
});

Template.filmEdit.helpers({
  errorMessage: function (field) {
    return Session.get('filmEditErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('filmEditErrors')[field] ? 'has-error' : '';
  }
});

Template.filmEdit.events({
  'submit form': function (e) {
    e.preventDefault();
    var currentFilmId = this._id;

    var filmProperties = {
      title: $(e.target).find('[name=title]').val(),
      year: $(e.target).find('[name=year]').val(),
      director: $(e.target).find('[name=director]').val(),
      plot: $(e.target).find('[name=plot]').val()
    };

    var errors = validateFilm(filmProperties);
    if (!_.isEmpty(errors)) {
      return Session.set('filmEditErrors', errors);
    }

    Films.update(currentFilmId, {
      $set: filmProperties
    }, function (error) {
      if (error) {
        throwError(error.reason);
      } else {
        Router.go('filmPage', {
          _id: currentFilmId
        });
      }
    });
  },

  'click .delete': function (e) {
    e.preventDefault();

    if (confirm("Delete this film?")) {
      var currentFilmId = this._id;
      Films.remove(currentFilmId);
      Router.go('filmsList');
    }
  }
});


Template.filmEdit.onCreated(function () {
  Session.set('filmSubmitErrors', {});
});
