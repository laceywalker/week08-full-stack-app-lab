const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Bucketlist = function(url) {
  this.url = url;
  this.request = new RequestHelper(this.url)
};


Bucketlist.prototype.bindEvents = function () {
  PubSub.subscribe('BucketlistView:wish-delete-clicked', (evt) => {
    this.deleteWish(evt.detail);
  });
  
  PubSub.subscribe('BucketlistFormView:New Wish Submit', (evt) => {
    this.postWish(evt.detail);
  })
};

Bucketlist.prototype.getData = function () {
  this.request.get()
    .then((wishes) => {
      PubSub.publish('BucketlistGridView:data-loaded', wishes);
    })
    .catch(console.error);
};

Bucketlist.prototype.postWish = function (wishID) {
  this.request.post(wishID)
    .then((wishes) => {
      PubSub.publish('BucketlistGridView:data-loaded', wishes);
    })
    .catch(console.error);
};

Bucketlist.prototype.deleteWish = function (wishId) {
  this.request.delete(wishId)
    .then((wishes) => {
      PubSub.publish('BucketlistGridView:data-loaded', wishes);
    })
    .catch(console.error);
  };




module.exports = Bucketlist;
