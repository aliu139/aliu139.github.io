var tablet = new Vue({
  el: '#tablet',
  data: {
    message: 'Hello Vue!',
    li: [],
    display: {}
  }
});

var projects = new Vue({
  el: '#projects',
  data: {
    li: [],
    display: {
        "title": "Onyx",
        "description": "Onyx is our attempt at bringing simple and intuitive navigation to the smartwatch market. Instead of displaying complex text directions, our app displays a single arrow that points in the direction of your target. With its companion app for the iPhone, you can tap a point nearby you to start navigating!",
        "url1": "https://devpost.com/software/onyx",
        "url2": "https://github.com/aliu139/onyx",
        "pic": "https://raw.githubusercontent.com/aliu139/Onyx/master/resources/images/logo.jpg"
    },
    counter: 0
  },
  methods: {
    next: function(){
      var next = this.counter + 1;
      if(next < this.li.length){
        this.display = this.li[next];
        this.counter = this.counter+1;
      }
    },
    prev: function(){
      var prev = this.counter - 1;
      if(prev >= 0){
        this.display = this.li[prev];
        this.counter = this.counter-1;
      }
    }
  }
});

var experience = new Vue({
  el: '#experience',
  data: {
    message: 'Hello Vue!',
    li: [],
    display: {
      pic: "http://ieeecornell.org/wp-content/themes/ieeecornell/img/cornell-logo.gif",
      dates: "2014-2018",
      square: false,
      url: "https://www.cornell.edu/"
    }
  }
});

$.getJSON('../res/data.json', function(data) {
    var res = data;

    tablet.$data.li = res.tablet;
    projects.$data.li = res.proj;
    experience.$data.li = res.exp;
     
    console.log("done with data");
});
