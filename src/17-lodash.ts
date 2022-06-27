import _ from 'lodash';

const data = [
  {
      username: 'nico',
      role: 'admin'
  },
  {
      username: 'Valentina',
      role: 'seller'
  },
  {
      username: 'Zulema',
      role: 'seller'
  },
  {
      username: 'Santiago',
      role: 'seller'
  }
]

const grupos = _.groupBy(data, (i) => i.role);
console.log(grupos);
