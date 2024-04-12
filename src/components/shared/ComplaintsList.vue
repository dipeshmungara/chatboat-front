<script setup>
  import { ref } from 'vue'; 
    // eslint-disable-next-line no-unused-vars
  const people = ref([
    {
      name: 'Sumil makadia',
      role: 'Co-Founder / CEO',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
	{
      name: 'Sumil makadia',
      role: 'Co-Founder / CEO',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
	{
      name: 'Sumil makadia',
      role: 'Co-Founder / CEO',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
	{
      name: 'Sumil makadia',
      role: 'Co-Founder / CEO',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
	{
      name: 'Sumil makadia',
      role: 'Co-Founder / CEO',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
	{
      name: 'Sumil makadia',
      role: 'Co-Founder / CEO',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
	{
      name: 'Sumil makadia',
      role: 'Co-Founder / CEO',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
	
    // More people...
  ]);
</script>

<template>
	<div class="bg-white py-24 sm:py-5 dark:bg-transparent">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Recent Complaints</h2>
		<p class="mt-6 text-lg leading-8 text-gray-600 dark:text-white">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
  
			<ul role="list" class="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				<li v-for="person in people" :key="person.name">
					<a :href="`/complaints/single-complaints/`" class="block">
					<div class="flex items-center gap-x-6 bg-gray-100 rounded-lg p-4 text-left">
						<img class="h-16 w-16 rounded-full" :src="person.imageUrl" alt="" />
						<div>
						<h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">{{ person.name }}</h3>
						<p class="text-sm font-semibold leading-6 text-indigo-600">{{ person.role }}</p>
						</div>
					</div>
					</a>
				</li>
			</ul>

		</div>
	</div>
  </template>
  
  
  
 