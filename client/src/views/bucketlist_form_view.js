const PubSub = require('../helpers/pub_sub.js');

const BucketlistFormView = function(container) {
  this.container = container;
};

BucketlistFormView.prototype.bindEvents = function () {
  this.container.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

BucketlistFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newWish = this.createWish(evt.target);
  PubSub.publish('BucketlistFormView:New Wish Submit', newWish);
  evt.target.reset();
};

BucketlistFormView.prototype.createWish = function (container) {
  const newWish = {
    wish: container.wish.value
  }
  return newWish;
};



module.exports = BucketlistFormView;
