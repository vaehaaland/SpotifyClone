<template>
  <div class="bg-dark h-screen">
    <div class="flex" style="height: 88vh;">
      <!-- sidebar -->
      <div class="w-56 bg-black h-full flex-none">
        <div class="p-6">
          <img src="../public/Spotify_Logo_RGB_Green.png" class="h-10" style="filter: brightness(0) invert(1);"/>
        </div>
        <div class="mx-2 mb-5">
          <button v-for="page in pages" v-bind:key="page" @click="setID = page.id" :class="`w-full text-sm font-semibold rounded px-3 py-2 flex items-center justify-start ${setID === page.id ? 'bg-light text-white' : 'text-lightest'}`">
            <font-awesome-icon :icon="['fas', page.icon]" class="mr-3"/>
            <p> {{ page.name }} </p>
          </button>
        </div>
        <div class="mx-5">
          <h1 class="mb-3 text-xs text-lightest tracking-widest uppercase">Playlists</h1>
          <button class="flex items-center justify-start opacity-75 hover:opacity-100 mb-2">
            <div class="bg-white h-8 w-8 mr-3">
              <font-awesome-icon icon='plus' class="h-5 w-5" style="padding: 0.45vh;"/>
            </div>
            <p class="text-sm text-white font-semibold">Add New</p>
          </button>
          <button class="flex items-center justify-start opacity-75 hover:opacity-100">
            <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-8 w-8 mr-3">
              <font-awesome-icon icon='heart' class="h-5 w-5" style="padding: 0.45vh;"/>
            </div>
            <p class="text-sm text-white font-semibold">Liked Songs</p>
          </button>
        </div>
      </div>
      <!-- main -->
      <div class="w-full h-full relative">
        <!-- header -->
        <div class="w-full sticky top-0 p-2">

        </div>
      </div>
    </div>
    <!-- play bar -->
    <div class="w-full bg-light" style="height: 12vh;">

    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function() {
    return {
      pages: [
        {id: 'home', name: 'Home', icon: 'house'},
        {id: 'search', name: 'Search', icon: 'magnifying-glass'},
        {id: 'library', name: 'Your Library', icon: 'chart-simple'}
      ],
      setID: 'home'
    };
  },

  methods: {

  }
};
</script>

<style>

</style>
