module.exports = {
  getName(req, res) {
    return res.status(200).json(me.name)
  },
  getLocation(req, res) {

  },
  getOccupations(req, res) {

  },
  getLatestOccupation(req, res) {

  },
  getHobbies(req, res) {

  },
  getHobbyByType(req, res) {

  }
}

const me = {
  name: {"name": "Brian Hudson"},
  location: {"location": "Dallas"},
  occupation: {"occupations": ["Retail Sales Clerk", "Legal Assistant", "Teacher"]},
  hobbies: {"hobbies": [
    {"name": "Reading", "type": "current"},
    {"name": "Traveling", "type": "past"},
    {"name": "Hiking", "type": "past"},
    {"name": "Tennis", "type": "past"}
  ]}
}
