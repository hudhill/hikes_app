use hikes;
db.dropDatabase();

db.hikes.insertMany([
  {
    name: "The Cobbler",
    startPointCoordinates: [56.205738, -4.751430],
    distance: {km: 11, miles: 6.75},
    time: "4-6 hours", 
    elevationGain: "920m",
    difficulty: "moderate"
  },
  {
    name: "Beinn an Lochain",
    startPointCoordinates: [56.239100, -4.851200],
    distance: {km: 5.5, miles: 3.5},
    time: "3-5 hours",
    elevationGain: "720m",
    difficulty: "strenuous"
  },
  {
    name: "Schiehallion",
    startPointCoordinates: [56.675800, -4.036030],
    distance: {km: 10, miles: 6.25},
    time: "4-6 hours",
    elevationGain: "731m",
    difficulty: "moderate"
  },
  {
    name: "Loch Morlich",
    startPointCoordinates: [57.168000, -3.700400],
    distance: {km: 6, miles: 3.75},
    time: "1.5-2 hours",
    elevationGain: "50m",
    difficulty: "easy"
  },
  {
    name: "Cairn Gorm",
    startPointCoordinates: [57.134000, -3.671200],
    distance: {km: 11, miles: 6.75},
    time: "5-6 hours",
    elevationGain: "775m",
    difficulty: "moderate"
  },
]);