const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Bucketlist = function(url) {
  this.url = url;
  this.request = new RequestHelper(this.url)
};

Bucketlist.prototype.getData = function () {
  this.request.get()
    .then((wishes) => {
      PubSub.publish('BucketlistGridView:data-loaded', wishes);
    })
    .catch(console.error);
};




module.exports = Bucketlist;
