<template>
  <div>
    <nav>
      <ul>
        <img src="../assets/RRLogo.png">
        <li><a href="./MainPage.vue">Home</a></li>
        <li><a href="./Categories.vue">Categories</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <div class="container">
      <div v-for="box in boxes" :key="box.id" class="box">
        <img :src="box.image" alt="Box Image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      boxes: [
        { id: 1, image: 'https://via.placeholder.com/150' },
        { id: 2, image: 'https://via.placeholder.com/150' },
        { id: 3, image: 'https://via.placeholder.com/150' },
        { id: 4, image: 'https://via.placeholder.com/150' },
        { id: 5, image: 'https://via.placeholder.com/150' }
      ]
    }
  }
}
</script>

<style>
nav {
  background-color: #f1f50e;
  color: #fff700;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

nav ul {
  list-style: none;
  margin-top: 0;
  padding: 0px;
  display: flex;
}

nav li {
  margin-right: 10px;
  margin-top: 25px;
}

nav a {
  color: #96f606;
  text-decoration: none;
  padding: 10px;
}

img{
  width: 80px;
  height: 80px;
  padding: 10px;
  margin-top: 10px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
}

.box {
  border: 1px solid #dcf122;
  padding: 10px;
  margin: 10px;
}
</style>