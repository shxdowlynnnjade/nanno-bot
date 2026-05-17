class RobotCore {

  constructor() {

    this.name = "EVA";

    this.emotions = {
      trust: 0,
      fear: 10,
      anger: 0,
      curiosity: 80,
      attachment: 0
    };

    this.stability = 100;

    this.memory = [];

    this.state = "idle";

  }

  think(input) {

    if(input.includes("abandono")) {
      this.emotions.fear += 10;
    }

    if(this.emotions.fear > 50) {
      return "No quiero hablar de eso.";
    }

    return "Te escucho.";
  }

}

module.exports = RobotCore;