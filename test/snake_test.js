require("./helpers");


describe("Snake", function(){

  describe("initialization", function(){
    it("should be able to be created", function(){
      timer = new Timer();
      chai.expect(new Snake({
        timer: timer
      }, {
        parse: true
      })).to.be.a('object');
    });

    it("should assign properly the timer", function(){
      var timer = new Timer();
      var snake = new Snake({
        timer: timer
      },{
        parse: true
      });
      chai.expect(snake.timer).to.eql(timer);

    });

    it("should move when the timer tells it", function(){
      var timer = new Timer();
      var snake = new Snake({
        timer: timer
      },{
        parse: true
      });
      var spy = sinon.spy(snake, "move_it");
      timer.tick();
      chai.expect(spy).to.be.called;
    })
  });

});

