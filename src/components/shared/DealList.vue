<script setup>
// eslint-disable-next-line no-unused-vars
const people = [
  {
    name: 'Sumil Makadia',
    role: 'Admin',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    email: 'sumilm@example.com',
    phone: '+1-202-555-0170'
  },
  {
    name: 'Cody Fisher',
    role: 'Admin',
    imageUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    email: 'codyfisher@example.com',
    phone: '+1-202-555-0114'
  },
  {
    name: 'Esther Howard',
    role: 'Admin',
    imageUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    email: 'estherhoward@example.com',
    phone: '+1-202-555-0143'
  },
  {
    name: 'Esther Howard',
    role: 'Admin',
    imageUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    email: 'estherhoward@example.com',
    phone: '+1-202-555-0143'
  }, {
    name: 'Esther Howard',
    role: 'Admin',
    imageUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    email: 'estherhoward@example.com',
    phone: '+1-202-555-0143'
  }, {
    name: 'Esther Howard',
    role: 'Admin',
    imageUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    email: 'estherhoward@example.com',
    phone: '+1-202-555-0143'
  }, {
    name: 'Esther Howard',
    role: 'Admin',
    imageUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    email: 'estherhoward@example.com',
    phone: '+1-202-555-0143'
  }, {
    name: 'Esther Howard',
    role: 'Admin',
    imageUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    email: 'estherhoward@example.com',
    phone: '+1-202-555-0143'
  }, {
    name: 'Esther Howard',
    role: 'Admin',
    imageUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    email: 'estherhoward@example.com',
    phone: '+1-202-555-0143'
  },
  // Add more people as needed
];
</script>
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
    <div v-for="(person, index) in people" :key="index" class="bg-white overflow-hidden shadow rounded-lg mb-5">
      <div class="p-4 flex items-center">
        <div class="flex-shrink-0">
          <img :src="person.imageUrl" :alt="person.name" class="h-12 w-12 rounded-full">
        </div>
        <div class="ml-5 text-left">
          <h3 class="text-lg font-medium text-gray-900">{{ person.name }}</h3>
          <p class="mt-1 text-sm text-gray-500">{{ person.role }}</p>
        </div>
      </div>
      <div class="border-t border-gray-200 p-4">
        <div class="grid grid-cols-2 gap-x-4">
          <div class="border-r border-gray-200 pr-4">
            <a href="mailto:janecooper@example.com" class="text-indigo-600 hover:text-indigo-900">Email</a>
          </div>
          <div>
            <a href="tel:+1-202-555-0170" class="text-indigo-600 hover:text-indigo-900">Call</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
/* Add any custom styling here */
</style>
