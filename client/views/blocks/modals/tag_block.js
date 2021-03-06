Template.tag_block.events = {
  'click .add-block-by-tag': function(e) {
  	e.preventDefault();
    var tag = $('#tag').val()
    $('#blockTagModal').modal('hide');

    if (tag) {
      var page = utils.getCurrentPage();
      var zone = Session.get('block-zone');

      // Attach the block to the page
      if (!page.notFound) {
        Pages.update({_id: page._id}, {$addToSet: {blocks: {tag: tag, label: tag, zone: zone, added: Date.now()}}});
      }

      $.pnotify({
        text: 'Blocks with tag "' + tag + '" added to page.',
        type: 'success',
        icon: false
      });
    }
  }
};
