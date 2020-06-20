module.exports = {

    head: {
      title: 'ELP',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '{{ escape description }}' },
       
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/elp.ico' }
      ]
    },

    loading: { color: '#3B8070' },
  
      
    buildModules: [
      '@nuxtjs/axios',
      '@nuxtjs/tailwindcss',
      '@neneos/nuxt-animate.css'
    ],

    modules: [
      '@nuxtjs/markdownit',
      [
        'nuxt-fontawesome', {
          component: 'fa', 
          imports: [
           {
             set: '@fortawesome/free-solid-svg-icons',
             icons: ['fas']
           },
           {
             set:'@fortawesome/free-brands-svg-icons',
             icons: ['fab']
           }
         ]
        }
      ]
    ],

    markdownit: {
      injected: true,
    },

    axios: {
        baseURL: 'http://elp-back.herokuapp.com',
    },

    generate: {
      routes: function() {
        const fs = require('fs');
        const path = require('path');
        return fs.readdirSync('./assets/content/blog').map(file => {
          return {
            route: `/blog/${path.parse(file).name}`, // Return the slug
            payload: require(`./assets/content/blog/${file}`),
          };
        });
      },
    },

}