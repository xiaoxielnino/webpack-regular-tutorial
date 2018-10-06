import Regular from 'regularjs';

const extend = Regular.util.extend;
const User = Regular.extend({
  template:`
    Hello, { username}
  `,
  name: 'User',
  config(data){
    extend(data, {
      username: 'chenguanxi'
    })
  }
})

export default User;