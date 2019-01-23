const PubSub = require('../helpers/pub_sub.js');

const BucketlistView = function(container) {
  this.container = container;
}

BucketlistView.prototype.render = function (enteredWish) {

  const wishesContainer = document.createElement('div');
  wishesContainer.id = 'newwishes';

  // const newWish = this.createDetail(enteredWish.wish);
  // wishesContainer.appendChild(newWish);

  const deleteButton = this.createDeleteButton(enteredWish._id);
  wishesContainer.appendChild(deleteButton);


  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.name = "name";
  checkbox.value = "value";
  checkbox.id = "id";
  wishesContainer.appendChild(checkbox);

  const label = document.createElement('label')
  label.htmlFor = "id";
  label.textContent = (enteredWish.wish)

  wishesContainer.appendChild(label);


  this.container.appendChild(wishesContainer);


};


// BucketlistView.prototype.createDetail = function (text) {
//   const detail = document.createElement('p');
//   detail.textContent = text;
//   return detail;
// };

BucketlistView.prototype.createDeleteButton = function (wishId) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = wishId;

  button.addEventListener('click', (evt) => {
    PubSub.publish('BucketlistView:wish-delete-clicked', evt.target.value);
  });

  return button;
};





module.exports = BucketlistView;
