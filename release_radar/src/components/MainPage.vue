<template>
  <div>
    <nav>
      <ul>
        <img src="../assets/RRLogo.png">
        <li><a href="#">Home</a></li>
        <li><a href="./Categories.vue">Categories</a></li>
        <li><a href="#">Platform</a></li>
      </ul>
    </nav>
    
    <div class="container">
      <div v-for="box in topRelease" :key="box.id" class="topRelease">
        <img :src="box.image" alt="Box Image">
      </div>
    </div>

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
      ],

      topRelease:[
          { id: 1, image: 'https://via.placeholder.com/150' }
      ]
    }
  }
}
</script>

<style>
nav {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0px;
  height: 100px;
}

nav ul {
  list-style: none;
  margin-top: 0;
  padding: 0px;
  display: flex;
}

nav li {
  margin-right: 10px;
  margin-top: 40px;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 10px;
}

img{
  width: 80px;
  height: 80px;
  padding: 10px;
  margin-top: 0.5px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px;
}

.box {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}

topRelease{
  border: 2px solid #ccc;
  padding: 10px;
  margin: 10px;
  
}


</style>
