<template>
  <div class="w-full mb-12">
    <img src="../../assets/images/profile-banner-2.jpg" class="w-full h-40 object-fill shadow-sm rounded-2xl" alt="Profile hero image">
  </div>
  <div class="flex flex-col lg:flex-row">

    <!-- Left Sidebar - User List and Search -->
    <div class="p-4 lg:w-2/6">
      <div class="bg-white shadow-lg rounded-lg px-6 py-4">
        <!-- Search Bar -->
        <div class="mb-4">
          <input v-model="searchQuery" @input="filterUsers" type="text" placeholder="Search users..." class="w-full p-2 border rounded-lg">
        </div>
        <!-- Action Buttons with Icons -->
        <div class="flex justify-between mb-4">
          <button @click="setActiveChat" class="bg-green-600 hover:bg-green-700 text-sm text-white font-semibold py-1 px-4 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4 0H7a2 2 0 01-2-2V10a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2z" />
            </svg> Active
          </button>
          <button @click="setInactiveChat" class="bg-yellow-600 hover:bg-yellow-700 text-sm text-white font-semibold py-1 px-4 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.28-4.28c.63-.63.18-1.72-.71-1.72H5a2 2 0 00-2 2v10c0 .55.22 1.05.59 1.41L10 17.41V19a2 2 0 002 2h3a1 1 0 001-1v-1l2.38-2.38c.35-.35.62-.84.62-1.39V9a1 1 0 00-1-1H16l-1-1z" />
            </svg> Inactive
          </button>
          <button @click="closeChat" class="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-1 px-4 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg> Close
          </button>
        </div>
        <hr>
        <!-- User List -->
        <ul class="mt-2">
          <li v-for="user in filteredUsers" :key="user.id" class="mb-4">
            <div @click="selectUser(user)" class="flex items-center cursor-pointer hover:bg-gray-100 rounded-lg p-2">
              <img :src="user.profilePicture" class="h-10 w-10 rounded-full object-cover mr-4" alt="Profile Picture">
              <div class="text-left">
                <h3 class="text-lg font-semibold">{{ user.name }}</h3>
                <p class="text-sm text-gray-600">{{ user.position }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Right Content - Chat Box -->
    <div class="p-4 lg:w-3/4">
      <div v-if="selectedUser" class="bg-white shadow-lg rounded-lg overflow-hidden">
        <!-- Profile Header -->
        <div class="flex items-start px-6">
    <img src="https://via.placeholder.com/150" alt="Profile Image" class="w-16 h-16 rounded-full mr-4">
    <div class="text-left">
      <h1 class="text-3xl font-semibold text-gray-800">{{ selectedUser.name }}</h1>
      <p class="text-gray-600">{{ selectedUser.bio }}</p>
      
    </div>
  </div>

        <!-- Chat Section -->
        <div class="px-6 py-4">
          <h2 class="text-xl font-semibold text-gray-800 mb-4 hidden">Chat</h2>
          <div class="bg-gray-100 rounded-lg p-4 mb-2 h-64 overflow-y-auto">
            <div v-for="chat in selectedUser.chats" :key="chat.id" :class="{'text-right': chat.sender === 'User'}" class="mb-2 text-left">
              <span :class="{'bg-blue-100 text-blue-800': chat.sender === selectedUser.name, 'bg-white text-gray-800': chat.sender === 'User'}" class="inline-block rounded-lg px-3 py-1">{{ chat.message }}</span>
            </div>
          </div>
          <div class="flex mt-4">
            <input v-model="selectedUser.newMessage" @keyup.enter="sendMessage(selectedUser)" class="flex-1 p-2 border rounded-l-lg" placeholder="Type a message">
            <button @click="sendMessage(selectedUser)" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-r-lg">Send</button>
          </div>
        </div>
      </div>
      <div v-else class="bg-white shadow-lg rounded-lg px-6 py-4">
        <p class="text-gray-600">Select a user to start chatting</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: 'Agent Csweb',
          profilePicture: 'https://via.placeholder.com/150',
          position: 'CEO',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          location: 'USA',
          profession: 'Java Developer',
          chats: [
            { id: 1, sender: 'Agent Csweb', message: 'Hello, how can I help you?' },
            { id: 2, sender: 'User', message: 'I need help with my account.' },
          ],
          newMessage: '',
          isActive: true
        },
        {
          id: 2,
          name: 'Agent Smith',
          profilePicture: 'https://via.placeholder.com/150',
          position: 'Support Agent',
          bio: 'Quisque venenatis lacus in vehicula pretium.',
          location: 'Canada',
          profession: 'Technical Support',
          chats: [
            { id: 1, sender: 'Agent Smith', message: 'Welcome! How can I assist you today?' },
            { id: 2, sender: 'User', message: 'I have a technical issue.' },
          ],
          newMessage: '',
          isActive: false
        },
        {
          id: 3,
          name: 'Agent Brown',
          profilePicture: 'https://via.placeholder.com/150',
          position: 'Support Agent',
          bio: 'Vivamus lacinia orci sit amet nisi ullamcorper, non commodo nisl gravida.',
          location: 'UK',
          profession: 'Customer Support',
          chats: [
            { id: 1, sender: 'Agent Brown', message: 'Hello! How can I help you today?' },
            { id: 2, sender: 'User', message: 'I need assistance with my order.' },
          ],
          newMessage: '',
          isActive: true
        },
        {
          id: 4,
          name: 'Agent Cabro',
          profilePicture: 'https://via.placeholder.com/150',
          position: 'Support Agent',
          bio: 'Vivamus lacinia orci sit amet nisi ullamcorper, non commodo nisl gravida.',
          location: 'UK',
          profession: 'Customer Support',
          chats: [
            { id: 1, sender: 'Agent Cabro', message: 'Hello! How can I help you today?' },
            { id: 2, sender: 'User', message: 'I need assistance with my order.' },
          ],
          newMessage: '',
          isActive: false
        }
      ],
      searchQuery: '',
      filteredUsers: [],
      selectedUser: null
    };
  },
  methods: {
    filterUsers() {
      const query = this.searchQuery.trim().toLowerCase();
      this.filteredUsers = this.users.filter(user => 
        user.name.toLowerCase().includes(query) || 
        user.position.toLowerCase().includes(query)
      );
    },
    selectUser(user) {
      this.selectedUser = user;
    },
    sendMessage(user) {
      if (user.newMessage.trim() !== '') {
        user.chats.push({ id: user.chats.length + 1, sender: 'User', message: user.newMessage });
        user.newMessage = '';
      }
    },
    setActiveChat() {
      this.filteredUsers = this.users.filter(user => user.isActive);
    },
    setInactiveChat() {
      this.filteredUsers = this.users.filter(user => !user.isActive);
    },
    closeChat() {
      this.filteredUsers = [];
      this.selectedUser = null;
    }
  },
  created() {
    this.filteredUsers = this.users;
  }
}
</script>

<style scoped>
/* Add any custom styles here */
</style>
