/* Main Website Config, customize options and add any and all API Keys here, also contains social media and google resources */
module.exports = {
  db: 'mongodb://localhost/tdella_db',
  port: 4005,
  secret: 'tracy',
  devname: 'http://localhost:4005',
  hostname: 'tdella.com',
  environment: 'production',
  website: {
    name: 'tdella.com',
    developer: 'ghaptonstall@gmail.com',
    social: {
      facebook: 'https://www.faacebook.com/tdellacreations',
      youtube: '',
      gplus: ''
    },
    google: {
      fonts: {
        droid: 'http://fonts.googleapis.com/css?family=Droid+Serif:400,700',
        grand: 'http://fonts.googleapis.com/css?family=Grand+Hotel'
      },
      maps: {
        key: 'AIzaSyBygXxRQ9G2Zw8zHWdBcg9GpoyxCOvehfM',
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
      }
    },
    support: {
      email: 'support@tdella.com',
      sales: 'sales@tdella.com',
      address: '1623 Emerald',
      city: 'Las Vegas',
      state: 'NV',
      zipcode: ''
    }
  }
}
