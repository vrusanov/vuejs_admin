<template>
  <div id="app">
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <a class="navbar-brand" href="#">Vue cli app</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                      <router-link class="nav-link" to="/">
                          Home
                      </router-link>
                  </li>
                  <li class="nav-item">

                      <router-link class="nav-link" to="/users">
                       Users
                      </router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" to="/edit">
                          Edit
                      </router-link>
                  </li>
              </ul>
          </div>
      </nav>

      <main role="main" class="container">
          <div class="jumbotron">



              <router-view></router-view>
          </div>
      </main>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
