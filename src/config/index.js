/* Main Website Config, customize options and add any and all API Keys here, also contains social media and google resources */
module.exports = {
  db: 'mongodb://localhost/tdella_db',
  port: 4005,
  secret: 'tracy',
  hostname:'dev.tdella.com',
  environment: 'development',
  website: {
    name: 'tdella.com',
    developer: 'ghaptonstall@gmail.com',
    social: {
      facebook: '',
      twitter: '',
      gplus: '',
      instagram: ''
    },
    google: {
      api: '',
      font: '',
      maps: {
        key: '',
        lat: 0, 
        lng: 0
      }, 
    },
    keys: {
      facebook: '',
      instagram: ''
    },
    orders: {
      paytypes: [
        'visa',
        'wallet',
        'cash'
      ],
      prices: {
        small: '25',
        medium: '50',
        large: '100',
        boxes: '200',
        custom: '300'
      },
      support: {
        email: '',
        address: '',
        city: 'Las Vegas',
        state: 'NV',
        zipcode: ''
      }
    }
  }
}
