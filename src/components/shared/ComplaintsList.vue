<template>
  <div class="relative xl:mx-auto">
    <!-- Search box -->
    <input type="text" v-model="searchQuery" placeholder="Search companies..." class="border border-gray-200 rounded-full px-4 w-4/12 py-4 mb-8 mt-3 ">

    <!-- Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-8">
      <div v-for="(company, index) in displayedCompanies" :key="index" class="border border-gray-300 shadow-xl rounded-lg overflow-hidden">
        <div class="flex items-start">
          <!-- Company logo/image -->
          <img src="@/assets/images/digi-bg.jpg" alt="Company Logo" class="w-1/3 sm:h-56 h-auto mr-6">

          <!-- Card -->
          <div class="p-4 relative z-10 w-70 text-left align-middle self-center items-center">
            <h3 class="text-2xl mb-2 font-bold text-gray-800 dark:text-gray-200">{{ company.name }}</h3>
            <div class="text-lg text-gray-500">{{ company.address }}</div>
            <div class="text-lg text-gray-500">{{ company.contact }}</div>
            <div class="text-lg text-gray-500">{{ company.website }}</div>

            <!-- Active deals -->
            <div v-if="company.activeDeals" class="text-base italic  text-gray-500">{{ company.activeDeals }}</div>

            <!-- Start free trial button -->
            <div class="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
              <div class="hidden">
                <p class="text-lg text-gray-500">Cancel anytime.</p>
                <p class="text-lg text-gray-500">No card required.</p>
              </div>
            </div>
          </div>
          <!-- End Card -->
        </div>
      </div>
    </div>
    <!-- End Grid -->

    <!-- Pagination -->
    <div class="flex justify-center mt-6">
      <nav class="flex items-center">
        <button @click="prevPage" :disabled="currentPage === 1" class="px-3 py-1 mr-2 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
          Previous
        </button>
        <div class="flex">
          <button v-for="pageNumber in totalPages" :key="pageNumber" @click="goToPage(pageNumber)" :class="{ 'bg-blue-500 text-white': pageNumber === currentPage }" class="px-3 py-1 mx-1 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
            {{ pageNumber }}
          </button>
        </div>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="px-3 py-1 ml-2 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
          Next
        </button>
      </nav>
    </div>
    <!-- End Pagination -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      companies: [
        {
          logo: '@/assets/images/profile-banner-2.jpg',
          name: 'Company Lorem Ipsum',
          address: '123 Street, City, Country',
          contact: '+1234567890',
          website: 'www.company1.com',
          activeDeals: 'Deals offer 3'
        },
        {
          logo: '@assets/images/profile-banner-2.jpg',
          name: 'Ipsum Company Nesas ',
          address: '456 Avenue, City, Country',
          contact: '+9876543210',
          website: 'www.company2.com',
          activeDeals: null
        },
        {
          logo: '@assets/images/profile-banner-2.jpg',
          name: 'Ipsum Company Nesas ',
          address: '456 Avenue, City, Country',
          contact: '+9876543210',
          website: 'www.company2.com',
          activeDeals: null
        },
        {
          logo: '@assets/images/profile-banner-2.jpg',
          name: 'Ipsum Company Nesas ',
          address: '456 Avenue, City, Country',
          contact: '+9876543210',
          website: 'www.company2.com',
          activeDeals: null
        },
        {
          logo: '@assets/images/profile-banner-2.jpg',
          name: 'Ipsum Company Nesas ',
          address: '456 Avenue, City, Country',
          contact: '+9876543210',
          website: 'www.company2.com',
          activeDeals: null
        },
        {
          logo: '@assets/images/profile-banner-2.jpg',
          name: 'Ipsum Company Nesas ',
          address: '456 Avenue, City, Country',
          contact: '+9876543210',
          website: 'www.company2.com',
          activeDeals: null
        },
        {
          logo: '@assets/images/profile-banner-2.jpg',
          name: 'Ipsum Company Nesas ',
          address: '456 Avenue, City, Country',
          contact: '+9876543210',
          website: 'www.company2.com',
          activeDeals: null
        },

        // Add more company objects as needed
      ],
      itemsPerPage: 5,
      currentPage: 1
    };
  },
  computed: {
    filteredCompanies() {
      return this.companies.filter(company =>
        company.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    totalPages() {
      return Math.ceil(this.filteredCompanies.length / this.itemsPerPage);
    },
    displayedCompanies() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredCompanies.slice(startIndex, endIndex);
    }
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    }
  }
};
</script>
