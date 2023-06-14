<template>
  <div>
    <nav>
      <ul>
        <img src="../assets/RRLogo.png">
        <li><a href="./MainPage.vue">Home</a></li>
        <li><a href="./Categories.vue">Categories</a></li>
        <div class="dropdown">
  <button class="dropdown-btn">Kategorien</button>
  <ul class="dropdown-content">
    <li><a href="#">Option 1</a></li>
    <li><a href="#">Option 2</a></li>
    <li><a href="#">Option 3</a></li>
    <!-- Weitere Optionen -->
  </ul>
</div>
        <li><a href="#">Platform</a></li>
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

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-btn {
  background-color: #f1f1f1;
  color: black;
  padding: 8px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

</style>