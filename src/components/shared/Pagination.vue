<template>
  <div class="relative xl:mx-auto">
    <!-- Pagination -->
    <div class="flex justify-center mt-6">
      <nav class="flex items-center">
        <button @click="prevPage" :disabled="currentPage === 1" class="px-3 py-1 mr-2 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-black  active:text-black">
          Previous
        </button>
        <div class="flex">
          <button v-for="pageNumber in totalPages" :key="pageNumber" @click="goToPage(pageNumber)" :class="{ 'bg-blue-500 text-white  focus:text-black  active:text-black dark:text-white focus:bg-blue-500': pageNumber === currentPage }" class="px-3 py-1 mx-1 rounded-md border border-gray-300 hover:bg-gray-100 hover:text-black focus:outline-none focus:bg-gray-100 dark:text-white">
            {{ pageNumber }}
          </button>
        </div>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="px-3 py-1 ml-2 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-white">
          Next
        </button>
      </nav>
    </div>
    <!-- End Pagination -->
  </div>
</template>

