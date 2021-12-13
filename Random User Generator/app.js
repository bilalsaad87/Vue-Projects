const app = Vue.createApp({
    data() {
      return {
        firstName: 'John',
        lastName: 'Doe',
        address: 'Spain',
        email: 'john@gmail.com',
        phone: '012-345-6789',
        gender: 'male',
        picture: 'https://randomuser.me/api/portraits/men/10.jpg',
      }
    },
    methods: {
      async getUser() {
        const res = await fetch('https://randomuser.me/api')
        const { results } = await res.json()

        this.firstName = results[0].name.first
        this.lastName = results[0].name.last
        this.address = results[0].location.country
        this.email = results[0].email
        this.phone = results[0].cell
        this.gender = results[0].gender
        this.picture = results[0].picture.large
      },
    },
  })
  
  app.mount('#app')
  