<template>
  <div class="relative xl:mx-auto">
    <!-- Search box -->
    <input type="text" v-model="searchQuery" placeholder="Search companies..."
      class="border border-gray-200 rounded-full px-4 w-full sm:w-4/12 py-4 mb-8 mt-3 ">

    <!-- Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-8">
      <div v-for="(company, index) in displayedCompanies" :key="index"
        class="border border-gray-300 shadow-xl rounded-lg overflow-hidden">
        <div class="block sm:flex items-start">
          <!-- Company logo/image -->
          <img src="@/assets/images/digi-bg.jpg" alt="Company Logo"
            class="w-full sm:w-1/3 sm:h-72 h-auto object-cover mr-6">

          <!-- Card -->
          <div class="p-4  relative z-10 w-70 text-left align-middle self-center items-center">
            <div class="mb-2">
              <a :href="company.url"
                class="text-2xl mb-2 font-bold text-gray-800 dark:text-gray-200 hover:text-blue-500">{{ company.name
                }}</a>
            </div>
            <div class="text-lg text-gray-500 py-1
            "><span class="inline-block mr-2 align-middle">
                <svg width="16px" height="16px" viewBox="0 0 1024 1024" fill="#6b7280" class="icon" version="1.1"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z"
                    fill="" />
                </svg></span>{{ company.address }}</div>
            <div class="text-lg text-gray-500 py-1
            "><span class="inline-block mr-2 align-middle">

                <svg fill="#6b7280" height="16px" width="16px" version="1.1" id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 473.806 473.806" xml:space="preserve">
                  <g>
                    <g>
                      <path d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4
			c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8
			c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6
			c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5
			c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26
			c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9
			c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806
			C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20
			c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6
			c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1
			c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3
			c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5
			c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8
			c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9
			l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1
			C420.456,377.706,420.456,388.206,410.256,398.806z" />
                      <path d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2
			c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11
			S248.656,111.506,256.056,112.706z" />
                      <path d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11
			c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2
			c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z" />
                    </g>
                  </g>
                </svg></span>{{ company.contact }}</div>
            <div class="text-lg text-gray-500 py-1
            "><span class="inline-block mr-2 align-middle">

                <svg width="16px" height="16px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3"
                  stroke="#6b7280" fill="none">
                  <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6" />
                  <path d="M37.86,51.1A47,47,0,0,1,32,56.7" />
                  <path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85" />
                  <path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24" />
                  <line x1="10.37" y1="19.9" x2="53.75" y2="19.9" />
                  <line x1="32" y1="6.99" x2="32" y2="56.7" />
                  <line x1="11.05" y1="45.48" x2="37.04" y2="45.48" />
                  <line x1="7.14" y1="32.46" x2="56.86" y2="31.85" />
                  <path
                    d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z" />
                </svg></span>{{ company.website }}</div>

            <!-- Active deals -->
            <div v-if="company.activeDeals" class="text-base italic hidden
              text-gray-500">{{ company.activeDeals }}</div>

            <!-- Social Button Start  -->
            <div class="flex space-x-4 mt-5 ">
              <!-- Facebook -->
              <a :href="getFacebookShareLink()"
                class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm px-2 py-2 duration-500">

                <svg width="18px" height="18px" viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink">

                  <title>facebook [#176]</title>
                  <desc>Created with Sketch.</desc>
                  <defs>

                  </defs>
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill="#000000">
                      <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path
                          d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
                          id="facebook-[#176]">

                        </path>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
              <!-- WhatsApp -->
              <a :href="getWhatsAppShareLink()"
                class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm px-2 py-2 duration-500">
                <svg fill="#000000" width="18px" height="18px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z" />
                  <path
                    d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z" />
                </svg>
              </a>
              <!-- Twitter -->
              <a :href="getTwitterShareLink()"
                class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm px-2 py-2 duration-500">
                <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M19.7828 3.91825C20.1313 3.83565 20.3743 3.75444 20.5734 3.66915C20.8524 3.54961 21.0837 3.40641 21.4492 3.16524C21.7563 2.96255 22.1499 2.9449 22.4739 3.11928C22.7979 3.29366 23 3.6319 23 3.99986C23 5.08079 22.8653 5.96673 22.5535 6.7464C22.2911 7.40221 21.9225 7.93487 21.4816 8.41968C21.2954 11.7828 20.3219 14.4239 18.8336 16.4248C17.291 18.4987 15.2386 19.8268 13.0751 20.5706C10.9179 21.3121 8.63863 21.4778 6.5967 21.2267C4.56816 20.9773 2.69304 20.3057 1.38605 19.2892C1.02813 19.0108 0.902313 18.5264 1.07951 18.109C1.25671 17.6916 1.69256 17.4457 2.14144 17.5099C3.42741 17.6936 4.6653 17.4012 5.6832 16.9832C5.48282 16.8742 5.29389 16.7562 5.11828 16.6346C4.19075 15.9925 3.4424 15.1208 3.10557 14.4471C2.96618 14.1684 2.96474 13.8405 3.10168 13.5606C3.17232 13.4161 3.27562 13.293 3.40104 13.1991C2.04677 12.0814 1.49999 10.5355 1.49999 9.49986C1.49999 9.19192 1.64187 8.90115 1.88459 8.71165C1.98665 8.63197 2.10175 8.57392 2.22308 8.53896C2.12174 8.24222 2.0431 7.94241 1.98316 7.65216C1.71739 6.3653 1.74098 4.91284 2.02985 3.75733C2.1287 3.36191 2.45764 3.06606 2.86129 3.00952C3.26493 2.95299 3.6625 3.14709 3.86618 3.50014C4.94369 5.36782 6.93116 6.50943 8.78086 7.18568C9.6505 7.50362 10.4559 7.70622 11.0596 7.83078C11.1899 6.61019 11.5307 5.6036 12.0538 4.80411C12.7439 3.74932 13.7064 3.12525 14.74 2.84698C16.5227 2.36708 18.5008 2.91382 19.7828 3.91825ZM10.7484 9.80845C10.0633 9.67087 9.12171 9.43976 8.09412 9.06408C6.7369 8.56789 5.16088 7.79418 3.84072 6.59571C3.86435 6.81625 3.89789 7.03492 3.94183 7.24766C4.16308 8.31899 4.5742 8.91899 4.94721 9.10549C5.40342 9.3336 5.61484 9.8685 5.43787 10.3469C5.19827 10.9946 4.56809 11.0477 3.99551 10.9046C4.45603 11.595 5.28377 12.2834 6.66439 12.5135C7.14057 12.5929 7.49208 13.0011 7.49986 13.4838C7.50765 13.9665 7.16949 14.3858 6.69611 14.4805L5.82565 14.6546C5.95881 14.7703 6.103 14.8838 6.2567 14.9902C6.95362 15.4727 7.65336 15.6808 8.25746 15.5298C8.70991 15.4167 9.18047 15.6313 9.39163 16.0472C9.60278 16.463 9.49846 16.9696 9.14018 17.2681C8.49626 17.8041 7.74425 18.2342 6.99057 18.5911C6.63675 18.7587 6.24134 18.9241 5.8119 19.0697C6.14218 19.1402 6.48586 19.198 6.84078 19.2417C8.61136 19.4594 10.5821 19.3126 12.4249 18.6792C14.2614 18.0479 15.9589 16.9385 17.2289 15.2312C18.497 13.5262 19.382 11.1667 19.5007 7.96291C19.51 7.71067 19.6144 7.47129 19.7929 7.29281C20.2425 6.84316 20.6141 6.32777 20.7969 5.7143C20.477 5.81403 20.1168 5.90035 19.6878 5.98237C19.3623 6.04459 19.0272 5.94156 18.7929 5.70727C18.0284 4.94274 16.5164 4.43998 15.2599 4.77822C14.6686 4.93741 14.1311 5.28203 13.7274 5.89906C13.3153 6.52904 13 7.51045 13 8.9999C13 9.28288 12.8801 9.5526 12.6701 9.74221C12.1721 10.1917 11.334 9.92603 10.7484 9.80845Z"
                    fill="#0F0F0F" />
                </svg>
              </a>
            </div>
            <!-- End Social Button   -->


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
        <button @click="prevPage" :disabled="currentPage === 1"
          class="px-3 py-1 mr-2 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-black  active:text-black">
          Previous
        </button>
        <div class="flex">
          <button v-for="pageNumber in totalPages" :key="pageNumber" @click="goToPage(pageNumber)"
            :class="{ 'bg-blue-500 text-white  focus:text-black  active:text-black dark:text-white focus:bg-blue-500': pageNumber === currentPage }"
            class="px-3 py-1 mx-1 rounded-md border border-gray-300 hover:bg-gray-100 hover:text-black focus:outline-none focus:bg-gray-100 dark:text-white">
            {{ pageNumber }}
          </button>
        </div>
        <button @click="nextPage" :disabled="currentPage === totalPages"
          class="px-3 py-1 ml-2 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-white">
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
          url: "http://localhost:8080/compaines/single-company/",
          activeDeals: 'Deals offer 3'
        },
        {
          logo: '@assets/images/profile-banner-2.jpg',
          name: 'Ipsum Company Nesas ',
          address: '456 Avenue, City, Country',
          contact: '+9876543210',
          website: 'www.company2.com',
          url: "http://localhost:8080/compaines/single-company/",
          activeDeals: null
        },
        {
          logo: '@assets/images/profile-banner-2.jpg',
          name: 'Ipsum Company Nesas ',
          address: '456 Avenue, City, Country',
          contact: '+9876543210',
          website: 'www.company2.com',
          url: "http://localhost:8080/compaines/single-company/",
          activeDeals: null
        },
        {
          logo: '@assets/images/profile-banner-2.jpg',
          name: 'Ipsum Company Nesas ',
          address: '456 Avenue, City, Country',
          contact: '+9876543210',
          website: 'www.company2.com',
          url: "http://localhost:8080/compaines/single-company/",
          activeDeals: null
        },
        {
          logo: '@assets/images/profile-banner-2.jpg',
          name: 'Ipsum Company Nesas ',
          address: '456 Avenue, City, Country',
          contact: '+9876543210',
          website: 'www.company2.com',
          url: "http://localhost:8080/compaines/single-company/",
          activeDeals: null
        },
        {
          logo: '@assets/images/profile-banner-2.jpg',
          name: 'Ipsum Company Nesas ',
          address: '456 Avenue, City, Country',
          contact: '+9876543210',
          website: 'www.company2.com',
          url: "http://localhost:8080/compaines/single-company/",
          activeDeals: null
        },
        {
          logo: '@assets/images/profile-banner-2.jpg',
          name: 'Ipsum Company Nesas ',
          address: '456 Avenue, City, Country',
          contact: '+9876543210',
          website: 'www.company2.com',
          url: "http://localhost:8080/compaines/single-company/",
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
    getFacebookShareLink() {
      // Replace URL and text with the actual deal URL and text
      const url = encodeURIComponent(window.location.href);
      return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    },
    getWhatsAppShareLink() {
      // Replace URL and text with the actual deal URL and text
      const url = encodeURIComponent(window.location.href);
      return `https://api.whatsapp.com/send?text=${url}`;
    },
    getTwitterShareLink() {
      // Replace URL and text with the actual deal URL and text
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent('Check out this deal!');
      return `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    },
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
