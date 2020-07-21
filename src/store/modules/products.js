const state = {
  products: [{
    name:"Zampa insgnia",
    price:'5000',
    description:'There is a red wine Grover serves',

  },
  {
    name:"Fratelli Sette",
    price:'1800',
    description:'Mosst premium and vintage brand'
  },
  {
    name:"Vijay Amritraj",
    price:'1450',
    description:'inspired by vijay Amritaj'
  }
]
};
const getters = {
  allProducts: state => state.products
};
const actions = {
  async getProducts({ commit }) {
    let allprod=state.products
//alert(JSON.stringify(allprod))
    commit("setProducts", allprod);
  },
  
  async deleteProduct({ commit }, name) {
    alert(name)
    commit("removeProduct", name);
  },
  async addProduct({ commit }, product) {
    alert(JSON.stringify(product))
    commit("newProduct", product);
  }

};

const mutations = {
  setProducts: (state, products) => (state.products = products),
  newProduct: (state, product) => state.products.unshift(product),
  removeProduct: (state, name)  =>{
     // alert(index)
      alert(name)
      state.products.splice(name, 1);
    }
    

};

export default {
  state,
  getters,
  actions,
  mutations
};
