<template>
    <div class="Admin">
        <table>
        <tr>
          <th>Name </th>
          <th>Price</th>
          <th>Image</th>
          <th>edit</th>
          <th>delete</th>
        </tr>
        
        <tbody id="whereTheyDisplay">
        </tbody>
      </table>
     

`
    <tr class="tr">
    <td></td>
    <td></td>
    <td></td>
    <td><img src="${item.products_image }" alt="" width="50px" heigth="50px"></td>
    <td><button class="edit-btn">Edit</button></td>
    <td><button class="del-btn" onclick="deleteProduct() ">Delete</button></td>
    </tr>
    `

      
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>




</style>