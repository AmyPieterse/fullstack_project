<template>
  <div class="Admin">
    <div class="Products-table">
      <h4>Products</h4>
           <!-- <AddUser/> -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProduct">
  <i class="bi bi-plus-lg"></i> Product
</button>
      <table class="table">
        <thead>
          <tr>
            <th class="text-black">ID</th>
            <th class="text-black">Name</th>
            <th class="text-black">Catorgory</th>
            <th class="text-black">Quntity</th>
            <th class="text-black">Price</th>
            <th class="text-black">Image</th>
            <th class="text-black">Edit</th>
            <th class="text-black">Delete</th>
          </tr>
        </thead>
        <tbody
          id="whereTheyDisplay"
          v-for="item in products"
          :key="item.prodID"
        >                            
          <tr>
            <td>{{ item.prodID}}</td>
            <td>{{ item.prodName}}</td>
            <td>{{ item.category}}</td>
            <td>{{ item.quantity}}</td>
            <td>${{ item.amount}}</td>
            <td>
              <img :src="item.prodURL" alt="" width="10rem" />
            </td>
            <td><button class="edit-btn">Edit</button></td>
            <td>
              <button class="del-btn" @click="deleteProduct(item.prodID) ">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="User-table">
      <h4>Users</h4>
     <!-- <AddUser/> -->
<AddUser/>
     <!-- Button trigger modal -->
      <table class="table">
        <thead>
          <tr>
            <th class="text-black">UserID</th>
            <th class="text-black">FirstName</th>
            <th class="text-black">LastName</th>
            <th class="text-black">UserAge</th>
            <th class="text-black">Gender</th>
            <th class="text-black">UserRole</th>
            <th class="text-black">EmailAdd</th>
            <th class="text-black">userProfile</th>
            <th class="text-black">Actions</th>
          </tr>
        </thead>

        <tbody id="whereTheyDisplay">
          <tr class="tr" v-for="item in users" :key="item.userID">
            <td>{{ item.UserID }}</td>
            <td>{{ item.firstName }}</td>
            <td>{{ item.lastName }}</td>
            <td>{{ item.userAge }}</td>
            <td>{{ item.gender }}</td>
            <td>{{ item.userRole }}</td>
            <td>{{ item.emailAdd }}</td>
            <td>{{ item.userProfile }}</td>
          
              <td>
                <button class="edit-btn">Edit</button>

                <button class="del-btn" @click="deleteUser(item.UserID) ">Delete</button>
            </td>
        
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AddUser from '@/components/AddUserComp.vue';

export default {
  components:{
    AddUser
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    }
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchProducts");
  },
  methods:{
    deleteProduct(prodID){
      this.$store.dispatch('deleteProduct', prodID)
    },
    deleteUsers(userId){
      this.$store.dispatch('deleteUsers', userID)
    },
  }
};
</script>

<style scoped>
table {
  width: 90%;
  text-align: center;

  margin-left: 70px;
}
tr {
  border: 1px solid purple;
}
table tr th {
  border-bottom: 2px solid purple;
}
td {
  text-align: center;
}
th {
  color: white;
}
h4 {
  text-align: center;
  color: white;
}

.edit-btn{
    padding: 10px;
    background-color: rgb(30, 30, 30);
    color: white;
    border: 1px solid rgb(30, 30, 30);
}
.edit-btn:hover{
    color: rgb(30, 30, 30);
    background-color: white
}
.del-btn{
    padding: 10px;
    background-color: rgb(30, 30, 30);
    color: white;
    border: 1px solid rgb(30, 30, 30);
}
.Admin{
  background-image:linear-gradient(to top, #5e3377, #623080, #652d8a, #682a93, #6a269d, #6724a0, #6421a4, #601fa7, #561fa5, #4b2db8, #492a9f, #1f0a87) ;
}

</style>