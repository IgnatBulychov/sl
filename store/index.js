export const state = () => ({
    blogPosts: [],
    offers: []
  });
  
  export const mutations = {
    initStore(state, data) {
      state.blogPosts = data.blogPosts;
      state.offers = data.offers;
    },
  };
  
  export const actions = {
    async nuxtServerInit({ commit }) {
      let rawBlogPosts = await require.context('~/assets/content/blog/', false, /\.json$/);
      let rawOffers = await require.context('~/assets/content/offer/', false, /\.json$/);
      
      let blogPosts = rawBlogPosts.keys().map(key => {
        let res = rawBlogPosts(key);
        res.slug = key.slice(2, -5);
        return res;
      });

      let offers = rawOffers.keys().map(key => {
        let res = rawOffers(key);
        res.slug = key.slice(2, -5);
        return res;
      });

      let data = {
        blogPosts: blogPosts,
        offers: offers
      }

      await commit('initStore', { blogPosts, offers });
    },
  };