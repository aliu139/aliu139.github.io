cheet('m a g i c', {
  next: function (str, key, num, seq) {
    console.log('key pressed: ' + key);
    console.log('progress: ' + num / seq.length);
    console.log('seq: ' + seq.join(' '));
  },

  fail: function () {
    console.log('sequence failed');
  },

  done: function () {
    console.log('+30 lives ;)');
  }
});