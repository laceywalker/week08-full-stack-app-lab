const BucketlistFormView = require('./views/bucketlist_form_view.js');
const BucketlistGridView = require('./views/bucketlist_grid_view.js');
const Bucketlist = require('./models/bucketlist.js');


document.addEventListener('DOMContentLoaded', () => {
  const bucketlistForm = document.querySelector('#wishes-form');
  const bucketlistFormView = new BucketlistFormView(bucketlistForm);
  bucketlistFormView.bindEvents();


  const url = 'http://localhost:3000/api/bucketlist';
  const wishes = new Bucketlist(url);
  wishes.getData();

});
