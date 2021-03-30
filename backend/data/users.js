import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin user',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'kiki',
    email: 'dd@exam.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'sab',
    email: 'dds@exam.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users