const BIRTH_DATE = new Date(1989, 10, 30)
const DAY_IN_MS = 24 * 60 * 60 * 1000
const ONE_YEAR = 365

const decimalDateDiff = (initial, other) => (other - initial) / DAY_IN_MS

const LOCATION = {
  city: 'Chicago',
  state: 'IL',
  country: 'USA',
  latitude: 41.8996881,
  longitude: -87.674467,
}

const WORK_HISTORY = [
  {
    company: 'Garmentier',
    website: 'https://www.garmentier.co',
    title: 'Head of Engineering',
    start: '03/2020',
    end: null,
  },
  {
    company: 'LandscapeHub',
    website: 'https://www.landscapehub.com',
    title: 'Senior Software Engineer',
    start: '01/2018',
    end: '03/2020',
  },
  {
    company: 'Trunk Club',
    website: 'https://www.trunkclub.com',
    title: 'Senior Software Engineer',
    start: '09/2013',
    end: '01/2018',
  },
]

const INTERNSHIPS = [
  {
    company: 'Picplum',
    website: '<inactive>',
    title: 'Technical Design Intern',
    start: '06/2012',
    end: '08/2012',
  },
  {
    company: 'Shure',
    website: 'https://www.shure.com',
    title: 'Web Design Intern',
    startDate: '06/2011',
    endDate: '08/2011',
  },
  {
    company: 'Shure',
    website: 'https://www.shure.com',
    title: 'Web Design Intern',
    startDate: '06/2010',
    endDate: '08/2010',
  },
]

const EDUCATION = [
  {
    school: 'Carnegie Mellon University',
    graduatingYear: '2013',
    degree: "Master's",
    program: 'Human-Computer Interaction',
  },
  {
    school: 'Rose-Hulman Institute of Technology',
    graduatingYear: '2012',
    degree: 'BS',
    program: 'Mechanical Engineering',
    other: [
      { type: 'minor', program: 'Computer Science' },
      { type: 'certificate', program: 'Robotics' },
    ],
  },
]

const INTERESTS = [
  'movies',
  'DIY projects',
  'immersive theatre',
  'escape rooms',
  'coffee',
  'theatre',
  'cooking',
]

module.exports = (req, res) => {
  const data = {
    firstName: 'Jason',
    lastName: 'Block',
    email: 'jason@jasontheblock.com',
    website: 'jasontheblock.com',
    description:
      'Software generalist interested in helping startups in interesting niches, with a focus on engaging user experiences and full-stack development',
    age: decimalDateDiff(BIRTH_DATE, Date.now()) / ONE_YEAR,
    location: LOCATION,
    workHistory: WORK_HISTORY,
    internships: INTERNSHIPS,
    education: EDUCATION,
    interests: INTERESTS,
  }
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(data, null, 2))
}
