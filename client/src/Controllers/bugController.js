import bugModel from '../Models/bugModel'

export function retrieveBugs() {
  let data = []

  data.push(new bugModel({
    _id: 32098,
    name: "Crash on Load",
    details: "Crashes after 3 seconds",
    steps: "Open application and it crashes",
    version: "v2.0",
    assigned: "Mike",
    created: "Mark Blogger",
    priority: 1,
    time: "23:38",
    status: "Assigned"
  }))
  data.push(new bugModel({
    _id: 345632,
    name: "Typo in header",
    details: "markd should be marked",
    steps: "none",
    version: "v2.0",
    assigned: "Mike",
    created: "Mark Blogger",
    priority: 3,
    time: "23:52",
    status: "Assigned"
  }))
  data.push(new bugModel({
    _id: 456345,
    name: "Link not working properly",
    details: "Contact link takes you to about page",
    steps: "click contact link",
    version: "v2.0",
    assigned: "Mike",
    created: "Mark Blogger",
    priority: 2,
    time: "22:15",
    status: "Assigned"
  }))

  let sorted = data.sort((a, b) => { return a.priority - b.priority })
  return sorted

}