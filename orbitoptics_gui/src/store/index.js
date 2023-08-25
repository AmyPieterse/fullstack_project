import { createStore } from 'vuex'
import axios from 'axios'
const link = ""


export default createStore({
state: {
users:null,
user:null,
products: null,
product:null,
spinner:false,
token: null,
msg: null,
inputDetails: null
},
  getters: {
  },
  mutations: {
    setUsers(state, users){
      state.users = users
    },
    setUser(state, user){
      state.user = user
    },
    setProducts(state, products){
      state.products = products
    },
    setProduct(state, product){
      state.product = product
    },
    setSpinner(state, value){
      state.spinner = value
    },
    setToken(state, token){
      state.token = token
    },
    setInputs(state, data){
      state.inputDetails = data
    },
    setDelete(state, data){
      state.products = data
    },
    submitUser(state, userForm){
      state.user.push(userForm)
    },
    setMsg(state, value) {
      state.msg = value
    }
  },
  actions: {
    async fetchProducts(context){
      try{
        const {data} = (await axios.get(`${link}products`))
        context.commit("setProducts", data.results)
      } catch(e){
        context.commit("setMsg", "An error occured")
      }
    },
    async deleteProduct(context, prodID){
      try {
        const data = await axios.delete(`${link}products/${prodID}`)
        context.commit('fetchProducts', data)
      } catch ( error ){
        alert( error )
      }
    },
    //  async addProducts(context, productsdata){
    //   try{
    //     const {data} = await axios.post(`${link}products`, productsdata)
    //     const {msg} = await data
    //     if(msg){
    //       context.commit('setMsg', msg)
    //       context.dispatch("fetchProducts")
    //     }
    //   }catch(e){
    //     console.log("An error occured")
    //   }
    // },
    async fetchUsers(context){
      try{
        const {data} = (await axios.get(`${link}users`))
        context.commit("setUsers", data.results)
      } catch(e){
        context.commit("setMsg", "An error occured")
      }
    },
    async submitUser(context, userdata){
      try{
        const {data} = await axios.post(`${link}register`, userdata)
        const {msg} = await data
        if(msg) {
          context.commit('setMsg', msg)
          context.dispatch("fetchUsers")
        }
      } catch(e){
        console.log("An error occured")
      }
    }, 
    async deleteUsers(context, userID){
      try {
        const data = await axios.delete(`${link}users/${userID}`)
        if(data) {
          context.commit('fetchUsers')
        }
      } catch ( error ){
        alert( error )
      }
    },
  },
  modules: {
  }
})
