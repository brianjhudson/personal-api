module.exports = {
  getName(req, res) {
    return res.status(200).json(me.name)
  },

  getLocation(req, res) {
    return res.status(200).json(me.location);
  },

  getOccupations(req, res) {
    if (req.query.order) {
      let sortedList = [];
      if (req.query.order === "asc") sortedList = me.occupations.occupations.sort();
      else if (req.query.order === "desc") sortedList = me.occupations.occupations.reverse();
      return res.status(200).json({"occupations": sortedList});
    }
    return res.status(200).json(me.occupations);
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
  },

  setName(req, res) {
    me.name.name = req.body;
    return res.status(200).json(me.name);
  },

  setLocation(req, res) {
    me.location.location = req.body;
    return res.status(200).json(me.location);
  },

  addHobby(req, res) {
    me.hobbies.hobbies.push(req.body);
    return res.status(200).json(me.hobbies);
  },

  addOccupation(req, res) {
    me.occupations.occupations.push(req.body.occupation);
    return res.status(200).json(me.occupations);
  },

  getSkills(req, res) {
    if (req.query.experience) {
      const skillsByExperience = me.skills.skills.filter(skill => skill.experience.toLowerCase() === req.query.experience.toLowerCase());
      return res.status(200).json(skillsByExperience);
    }
    return res.status(200).json(me.skills);
  },

  generateId(req, res, next) {
    req.body.id = me.skills.skills.length + 1;
    next();
  },

  addSkill(req, res) {
    me.skills.skills.push(req.body);
    return res.status(200).json(me.skills);
  },

  verifyUser(req, res, next) {
    if (req.params.username === me.secrets.username && req.params.pin === me.secrets.pin) next();
    return res.status(500).json({"error": "Incorrect username and pin"});
  },

  getSecrets(req, res) {
    return res.status(200).json(me.secrets.secrets)
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
  ]},
  skills: {"skills": [
    {
      "id": 1,
      "name": "Javascript",
      "experience": "Intermediate"
    },
    {
      "id": 2,
      "name": "Python",
      "experience": "Beginner"
    },
    {
      "id": 3,
      "name": "MySQL",
      "experience": "Intermediate"
    },
    {
      "id": 4,
      "name": "C++",
      "experience": "Beginner"
    }
  ]},
  secrets: {
    "username": "bhud",
    "pin": "13",
    "secrets": ["1", "2", "3"]
  }
}
