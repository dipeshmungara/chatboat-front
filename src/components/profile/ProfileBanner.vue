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
        profession: 'Java Developer',
        posts: [
          { id: 1, title: 'First Post', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
          { id: 2, title: 'Second Post', body: 'Nulla vitae elit libero, a pharetra augue.' },
          { id: 3, title: 'Third Post', body: 'Donec ullamcorper nulla non metus auctor fringilla.' }
        ]
      }
    }
  }
}
</script>
<template>
      <div class="w-full mb-12">
        <img src="../../assets/images/profile-banner-2.jpg" class="w-full h-40 object-fill shadow-sm rounded-2xl" alt="Profile hero image" srcset="">
      </div>
    <div class="flex flex-col lg:flex-row">
      
      <!-- Left Sidebar -->
      <div class=" p-4 lg:w-1/4  " >
        <div class="dark:bg-white dark:shadow-lg dark:rounded-lg dark:px-6 dark:py-4">
            <div class="flex items-center mb-4">
            <img class="h-16 w-16 rounded-full object-cover mr-4" :src="user.profilePicture" alt="Profile Picture">
            <div class="text-left">
                <h1 class="text-lg font-semibold">{{ user.name }}</h1>
                <p class="text-sm">{{ user.position }}</p>
            </div>
            </div>
            <div class="border-t-2 border-primary-light  pt-5 dark:border-secondary-dark pb-5 ">
                <ul>
                    <li class="flex items-center mb-2">
                        <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    <a href="#" class="pl-2 hover:text-blue-700">Menu Item 1</a>
                    </li>
                    <li class="flex items-center mb-2">
                      <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    <a href="#" class="pl-2 hover:text-blue-700">Menu Item 2</a>
                    </li>
                    <li class="flex items-center mb-2">
                      <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    <a href="#" class="pl-2 hover:text-blue-700">Menu Item 3</a>
                    </li>
                    <li class="flex items-center mb-2">
                      <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    <a href="#" class="pl-2 hover:text-blue-700">Menu Item 4</a>
                    </li>
                    <li class="flex items-center mb-2">
                      <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    <a href="#" class="pl-2 hover:text-blue-700">Menu Item 5</a>
                    </li>
                </ul>
            </div>
            <button class="bg-red-600 hover:bg-red-700 text-white font-semibold mt-5 py-2 px-4 rounded w-full">Logout</button>
        </div>
      </div>
  
      <!-- Right Content -->
      <div class="p-4 lg:w-3/4">
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <!-- Profile Header -->
          <div class="dark:px-6 dark:py-4">
            <h1 class="text-3xl font-semibold text-gray-800">{{ user.name }}</h1>
            <p class="text-gray-600">{{ user.bio }}</p>
            <div class="mt-4">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{{ user.location }}</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#{{ user.profession }}</span>
            </div>
          </div>
  
          <!-- User Posts Section -->
          <div class="px-6 py-4">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">Posts</h2>
            <div v-for="post in user.posts" :key="post.id" class="bg-gray-100 rounded-lg p-4 mb-2">
              <h3 class="text-lg font-semibold text-gray-800">{{ post.title }}</h3>
              <p class="text-gray-600">{{ post.body }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  

  
  <style scoped>
  /* Add any custom styles here */
  </style>
  