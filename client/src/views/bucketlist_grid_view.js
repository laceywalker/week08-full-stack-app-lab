const PubSub = require('../helpers/pub_sub.js');
const BucketlistView = require('./bucketlist_view.js');

const BucketlistGridView = function(container) {
  this.container = container;
};

BucketlistGridView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketlistGridView:data-loaded', (evt)=> {
    console.log(evt)
    this.render(evt.detail);
  })
};

BucketlistGridView.prototype.render = function (form) {
  this.container.innerHTML = '';
  const bucketListView = new BucketlistView(this.container);
  form.forEach((wish) => bucketListView.render(wish));
  console.log(wish)
};



module.exports = BucketlistGridView;
