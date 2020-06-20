export const state = () => ({
    offers: [],
    categories: []
  });
  
  export const mutations = {
    initStore(state, data) {
      state.offers = data.offers;
      state.categories = data.categoriesWithItems;
    },
  };
  
  export const actions = {
    async nuxtServerInit({ commit }) {
      let rawOffers = await require.context('~/assets/content/offers/', false, /\.json$/);
      let rawCategories = await require.context('~/assets/content/categories/', false, /\.json$/);
      let rawItems = await require.context('~/assets/content/items/', false, /\.json$/);

      let offers = rawOffers.keys().map(key => {
        let res = rawOffers(key);
        res.slug = key.slice(2, -5);
        return res;
      });

      let categories = rawCategories.keys().map(key => {
        let res = rawCategories(key);
        res.slug = key.slice(2, -5);
        return res;
      });


      let items = rawItems.keys().map(key => {
        let res = rawItems(key);
        res.slug = key.slice(2, -5);
        return res;
      });
      
let categoriesWithItems = []

      categories.forEach(function(category, i, arr) {
        
        let filter = items.filter(function(item) {
          return category.title == item.category ;
        });

        categoriesWithItems.push(
          {
            "title": category.title,
            "items": filter
          }
        )
      });
      
     
      await commit('initStore', { offers, categoriesWithItems });
    },
  };