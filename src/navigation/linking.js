const config = {
  screens: {
    FeaturedDetails: {
      path: 'FeaturedDetails/:id',
      parse: {
        id: id => `${id}`,
      },
    },
    Notifications: 'notifications',
    Settings: 'settings',
  },
};

const linking = {
  prefixes: ['https://buyiteer.com'],
  config,
};

export default linking;
