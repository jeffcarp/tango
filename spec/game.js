var expect = require('chai').expect;
var Game = require("../js/game");

describe('Game', function() {

  var game;
  var lastEmittedKey;
  var lastEmittedData;
  beforeEach(function() {
    game = new Game({
      map: {
        place: function() {},
        activeCells: function() {
          return [];
        }
      },
      bus: {
        on: function() {},
        emit: function(key, data) {
          lastEmittedKey = key;
          lastEmittedData = data;
        }
      }
    });
  });

  it('begins unstarted', function() {
    expect(game.running).to.be.false;
  });

  it('begins at age 0', function() {
    expect(game.age).to.equal(0);
  });

  describe('#toggle', function() {
    it('starts the game if off', function() {
      game.toggle();
      expect(game.running).to.be.true;
    });
    it('stops the game if on', function() {
      game.start();
      game.toggle();
      expect(game.running).to.be.false;
    });
  });

  describe('#start', function() {
    it('starts the game', function() {
      game.start();
      expect(game.running).to.be.true;
    });
    it('emits "game start"', function() {
      game.start();
      expect(lastEmittedKey).to.equal('game start');
    });
  });

  describe('#stop', function() {
    it('stops the game', function() {
      game.stop();
      expect(game.running).to.be.false;
    });
    it('emits "game stop"', function() {
      game.stop();
      expect(lastEmittedKey).to.equal('game stop');
    });
  });

  describe('#tickAllCells', function() {

    it('should increase the age by one', function() {
      game.tickAllCells();
      expect(game.age).to.equal(1);
    });

    it('should emit "end tick when done"', function() {
      game.tickAllCells();
      expect(lastEmittedKey).to.equal('end tick');
    });

    it('should pass the cell to the ai tick function');
  });

});
