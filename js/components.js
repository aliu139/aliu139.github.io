var tablet = new Vue({
  el: '#tablet',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    checkScreen: function(){
      return ($(window).width() > 768);
    }
  }
});

var projects = new Vue({
  el: '#projects',
  data: {
    li: [],
    display: {
        "title": "Onyx",
        "description": "Onyx is our attempt at bringing simple and intuitive navigation to the smartwatch market. Instead of displaying complex text directions, our app displays a single arrow that points in the direction of your target. With its companion app for the iPhone, you can tap a point nearby you to start navigating!",
        "url1": "//devpost.com/software/onyx",
        "url2": "//github.com/aliu139/onyx",
        "pic": "//raw.githubusercontent.com/aliu139/Onyx/master/resources/images/logo.jpg"
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
      pic: "../res/exp/cornell.gif",
      dates: "2014-2018",
      square: false,
      url: "//www.cornell.edu/"
    }
  }
});

$.getJSON('../res/data.json', function(data) {
    var res = data;

    projects.$data.li = res.proj;
    experience.$data.li = res.exp;
     
    //console.log("done with data");
});
