cheet('m a g i', {
  next: function (str, key, num, seq) {
    console.log('Keystroke: ' + key);
    secret.$data.value = (num+1) / seq.length * 100;
  },

  fail: function () {
    console.log('Maybe the word that you were looking for is [m a g i]?');
    secret.$data.value = 0;
  },

  done: function () {
    secret.$data.display = "Magi (n.): plural of magus (a magician, sorcerer, or astrologer)";
    secret.$data.url = "//youtu.be/vaRiu7mNPS8";
    cheet.disable('m a g i');
  }
});

cheet('c a r d i s t r y', {
  next: function (str, key, num, seq) {
    console.log('Keystroke: ' + key);
    secret.$data.value = (num+1) / seq.length * 100;
  },

  fail: function () {
    console.log('Maybe the word that you were looking for is [c a r d i s t r y]?');
    secret.$data.value = 0;
  },

  done: function () {
    secret.$data.display = "Cardistry (n.): the art of card flourishing";
    secret.$data.url = "//youtu.be/JQG9mUKrufo";
    cheet.disable('c a r d i s t r y');
  }
});

cheet('l s', {
  next: function (str, key, num, seq) {
    console.log('Keystroke: ' + key);
  },

  fail: function () {
    console.log('Maybe the command that you were looking for is [l s]?');
  },

  done: function () {
    window.location.href = "res/term/term.html";
  }
});
