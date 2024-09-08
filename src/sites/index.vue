<script>
</script>
<template>
  
   <header>
      <h1>哼，谁说异世界魔法师不能用科学了！（名称待定）</h1>
   </header>
   <nav>

      <ul>
        
      </ul>
   </nav>
   <main>

      <section id="home">
         <h2>首页</h2>
         <p>欢迎来到卡斯提拉大陆。</p>
      </section>
      <section id="about">
         <h2>关于</h2>
         <p>这里是关于我们的内容。</p>
      </section>
   </main>
   <footer>

      <p>&copy; Copyright Kasitila 2024</p>
   </footer>

</template>
<script>
export default {
  name: 'App'
}
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background: #f4f4f4;
}
header {
  background: #0056b3;
  color: #ffffff;
  padding: 20px 0;
  text-align: center;
}
header h1 {
  margin: 0;
}
nav ul {
  padding: 0;
  list-style: none;
  background: #333;
  text-align: center;
}
nav ul li {
  display: inline;
}
nav ul li a {
  text-decoration: none;
  color: white;
  padding: 10px 20px;
  display: inline-block;
}
nav ul li a:hover {
  background: #555;
}
main {
  padding: 20px;
  background: #ffffff;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
footer {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
}
footer p {
  margin: 0;
}
</style>