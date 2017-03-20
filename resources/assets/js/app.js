$.fn.editable.defaults.mode = 'inline';

$.fn.editable.defaults.ajaxOptions = {
  type: 'PUT'
};

$(document).ready(function() {
  $('.set-guide-number').editable();
  $('.set-status').editable({
    source: [
      {
        value: 'created',
        text: 'Created'
      },
      {
        value: 'sent',
        text: 'Sent'
      },
      {
        value: 'received',
        text: 'Received'
      }
    ]
  });
});