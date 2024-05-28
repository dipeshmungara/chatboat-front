<template>
    <div>
      <div class="w-full mb-12">
        <img src="../../assets/images/profile-banner-2.jpg" class="w-full h-40 object-fill shadow-sm rounded-2xl" alt="Profile hero image">
      </div>
      <div class="flex flex-col lg:flex-row">
        <!-- Left Sidebar -->
        <div class="p-4 lg:w-1/4">
          <div class="bg-white shadow-lg rounded-lg px-6 py-4">
            <div class="flex items-center mb-4">
              <img class="h-16 w-16 rounded-full object-cover mr-4" :src="user.profilePicture" alt="Profile Picture">
              <div class="text-left">
                <h1 class="text-lg font-semibold">{{ user.name }}</h1>
                <p class="text-sm">{{ user.position }}</p>
              </div>
            </div>
            <div class="border-t-2 border-primary-light pt-5 dark:border-secondary-dark pb-5">
              <ul>
                <li class="flex items-center mb-2">
                  <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <a href="#" class="pl-2 hover:text-blue-700">Menu Item 1</a>
                </li>
                <li class="flex items-center mb-2">
                  <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <a href="#" class="pl-2 hover:text-blue-700">Menu Item 2</a>
                </li>
                <li class="flex items-center mb-2">
                  <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <a href="#" class="pl-2 hover:text-blue-700">Menu Item 3</a>
                </li>
                <li class="flex items-center mb-2">
                  <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <a href="#" class="pl-2 hover:text-blue-700">Menu Item 4</a>
                </li>
                <li class="flex items-center mb-2">
                  <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <a href="#" class="pl-2 hover:text-blue-700">Menu Item 5</a>
                </li>
              </ul>
            </div>
            <router-link to="/">
              <button class="bg-gray-500 hover:bg-gray-700 text-white font-semibold mt-5 py-2 px-4 rounded w-full">Back to Chat</button>
            </router-link>
            <button class="bg-red-600 hover:bg-red-700 text-white font-semibold mt-5 py-2 px-4 rounded w-full">Logout</button>
          </div>
        </div>
  
        <!-- Edit Profile Form -->
        <div class="p-4 lg:w-3/4">
          <div class="bg-white shadow-lg rounded-lg px-6 py-4">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Edit Profile</h2>
            <form @submit.prevent="updateProfile">
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
                <input v-model="user.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="profilePicture">Profile Picture URL</label>
                <input v-model="user.profilePicture" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="profilePicture" type="text" placeholder="Enter profile picture URL">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="position">Position</label>
                <input v-model="user.position" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="position" type="text" placeholder="Enter your position">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="bio">Bio</label>
                <textarea v-model="user.bio" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bio" rows="4" placeholder="Enter your bio"></textarea>
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="location">Location</label>
                <input v-model="user.location" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="location" type="text" placeholder="Enter your location">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="profession">Profession</label>
                <input v-model="user.profession" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="profession" type="text" placeholder="Enter your profession">
              </div>
              <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Save</button>
                <router-link to="/">
                  <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Cancel</button>
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: 'Sumil Makadia',
          profilePicture: 'https://via.placeholder.com/150',
          position: 'CEO',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          location: 'USA',
          profession: 'Java Developer'
        }
      };
    },
    methods: {
      updateProfile() {
        // Handle the profile update logic here
        // For now, just print the updated user data to the console
        console.log('Profile updated:', this.user);
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  