<template>
    <div class="addProduct">
        <div>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  + Products
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Products</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
            <input type="text" v-model="productAdd.prodName" placeholder="prodName">
            <input type="text" v-model="productAdd.catergory" placeholder="catergory">
            <input type="number" v-model="productAdd.qauntity" placeholder="qauntity">
            <input type="text" v-model="productAdd.amount" placeholder="amount">
            <input type="number" v-model="productAdd.prodURL" placeholder="prodURL">
            <button type="submit" @click.prevent="productAdd">Add</button>
          </form>
        </div>
        <div class="modal-footer">
      </div>
    </div>
  </div>
</div>
</div>
    </div>
</template>

<script>
 export default {
        data(){
            return{
                productAdd:{
                    prodName:"",
                    catergory:"",
                    qauntity: null,
                    amount:"",
                    prodURL:"",
                
                }
            }
        },
        computed: {
          message() {
            return this.$store.state.msg
          }
        },
        methods:{
            productAdd(){
              this.$store.dispatch('productAdd', this.productAdd)
              alert(this.message)
            }
        }
    }
    
     
</script>

<style scoped>

</style>