const mongoose = require('mongoose');


const cricketSchema = mongoose.Schema({
      ranking: Number,
      name: String,
      runs: Number,
      balls: Number,
      fours: Number,
      sixes: Number,
      sr: Number,
      team: String,
      opposition: String,
      matchDate: Date
});

const MenRanking = new mongoose.model("MenRanking", cricketSchema);

module.exports = MenRanking;