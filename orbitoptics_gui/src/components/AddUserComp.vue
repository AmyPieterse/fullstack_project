<template>
<div>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  + User
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add user</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
            <input type="text" :v-model="userForm.firstName" placeholder="firstName">
            <input type="text" :v-model="userForm.lastName" placeholder="lastName">
            <input type="number" :v-model="userForm.userAge" placeholder="userAge">
            <input type="text" :v-model="userForm.gender" placeholder="gender">
            <input type="text" :v-model="userForm.userRole" placeholder="userRole">
            <input type="text" :v-model="userForm.emailAdd" placeholder="emailAdd">
            <input type="text" :v-model="userForm.profileUrl" placeholder="profileUrl">
            <button type="submit" @click.prevent="submitUser">Add</button>
          </form>
        </div>
        <div class="modal-footer">
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
                userForm:{
                    firstName:"",
                    lastName:"",
                    userAge: null,
                    gender:"",
                    userRole:"",
                    emailAdd:"",
                    profileUrl:""
                }
            }
        },
        computed: {
          message() {
            return this.$store.state.msg
          }
        },
        methods:{
            submitUser(){
              this.$store.dispatch('submitUser', this.userForm)
              alert(this.message)
            }
        }
    }
    
</script>

<style scoped>

</style>