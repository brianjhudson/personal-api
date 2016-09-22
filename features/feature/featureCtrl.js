module.exports = {
  getName(req, res) {
    return res.status(200).json(me.name)
  },
  getLocation(req, res) {
    return res.status(200).json(me.location);
  },
  getOccupations(req, res) {
    console.log("Main Occupations");
    return res.status(200).json(me.occupations);
  },
  getSortedOccupations(req, res) {
    console.log("Sorted Occupations");
    let sortedList = [];
    if (req.query.order === "asc") sortedList = me.occupations.occupations.sort();
    else if (req.query.order === "desc") sortedList = me.occupations.occupations.reverse();
    return res.status(200).json({"occupations": sortedList});
  },
  getLatestOccupation(req, res) {
    let latestOccupation = me.occupations.occupations[me.occupations.occupations.length-1];
    return res.status(200).json(latestOccupation);
  },
  getHobbies(req, res) {
    return res.status(200).json(me.hobbies);
  },
  getHobbyByType(req, res) {
    return res.status(200).json(me.hobbies.hobbies.filter(hobby => req.params.type === hobby.type))
  }
}

const me = {
  name: {"name": "Brian Hudson"},
  location: {"location": "Dallas"},
  occupations: {"occupations": ["Retail Sales Clerk", "Legal Assistant", "Teacher"]},
  hobbies: {"hobbies": [
    {"name": "Reading", "type": "current"},
    {"name": "Traveling", "type": "past"},
    {"name": "Hiking", "type": "past"},
    {"name": "Tennis", "type": "past"}
  ]}
}
