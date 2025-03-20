<template>
  <div>
    <h1>Customer List</h1>
    <table border="1" >
      <thead>
        <tr>
          <th>Customer ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.CustomerID">
          <td>{{ customer.CustomerID }}</td>
          <td>{{ customer.FirstName }}</td>
          <td>{{ customer.LastName }}</td>
          <td>{{ customer.PhoneNumber }}</td>
          <td>{{ customer.Username }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customers: []
    };
  },
  mounted() {
    // ดึงข้อมูลจาก API
    fetch("http://localhost/week11/show_data.php")
      .then((response) => response.json())
      .then((data) => {
        this.customers = data;
      })
      .catch((error) => console.error("Error fetching data:", error));
  }
};
</script>

<style scoped>
table {
  width: 80%;
  border-collapse: collapse;
  margin: auto; /* จัดตำแหน่งกลางหน้าจอ */
}
th, td {
  padding: 8px;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}
</style>