const config = {
  screens: {
    FeaturedDetails: {
      path: 'FeaturedDetails/:id',
      parse: {
        id: id => `${id}`,
      },
    },
    Splash: 'Splash',
  },
};

const linking = {
  prefixes: ['https://buyiteer'],
  config,
};

export default linking;

