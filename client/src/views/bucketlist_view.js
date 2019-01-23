const PubSub = require('../helpers/pub_sub.js');

const BucketlistView = function(container) {
  this.container = container;
}

BucketlistView.prototype.render = function (enteredWish) {
  const wishesContainer = document.createElement('div');
  wishesContainer.id = 'bucketlist';

  const newWish = this.createDetail(enteredWish.wish);
  wishesContainer.appendChild(newWish);

  this.container.appendChild(wishContainer);
};


BucketlistView.prototype.createDetail = function (text) {
  const detail = document.createElement('p');
  detail.textContent = text;
  return detail;
};


module.exports = BucketlistView;
