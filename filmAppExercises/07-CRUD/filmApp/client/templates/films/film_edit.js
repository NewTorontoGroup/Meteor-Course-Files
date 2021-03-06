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

    Films.update(currentFilmId, {
      $set: filmProperties
    }, function (error) {
      if (error) {
        alert(error.reason);
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
