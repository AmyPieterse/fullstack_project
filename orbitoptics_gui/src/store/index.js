import { createStore } from 'vuex'
import axios from 'axios'
const link = "https://node-eomp-4a72.onrender.com/"


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
        const res = await axios.delete(`${link}products/${prodID}`)
        // this.$store.dispatch('fetchProducts')
        context.commit('setDelete', res)
      } catch ( error ){
        alert( error )
      }
    },
    async fetchUsers(context){
      try{
        const {data} = (await axios.get(`${link}register`))
        context.commit("setUsers", data.results)
      } catch(e){
        context.commit("setMsg", "An error occured")
      }
    },
    async addUsers(context, userForm){
      try{
        const res = await axios.post(`${link}users`, userForm)
        context.commit('setInputs', res.data)
        console.log(res.data);
        // const {msg, err} = await res.data
        // if(msg){
        //   context.commit('setInputs', res.data)
        // }
        // if(err){
        //   console.log("An error has occured")
        // }
      } catch(e){
        console.log("An error occured")
      }
    }, 

    // *****************************
  },
  modules: {
  }
})
