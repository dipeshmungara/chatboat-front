<script>

export default {
	name: 'CTASection',
}
</script>
<template>
	<div class="bg-gray-50 shadow-md mx-auto rounded-2xl py-12 dark:bg-white dark:mt-12">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 class="text-3xl font-extrabold text-center text-gray-800 mb-4">Download Our App</h2>
			<p class="text-lg text-gray-600 text-center mb-8">Get our app for your device and enjoy our amazing
				features! Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.</p>
			<div class="flex justify-center space-x-4">
				<a href="#"
					class=" flex items-center space-x-2  hover:opacity-80">
					<img src="@/assets/images/App-Store.png" alt="iOS App" class="w-56">
				</a>
				<a href="#"
					class="flex items-center space-x-2 hover:opacity-80">
					<img src="@/assets/images/Google-Play.png"  alt="Android App" class="w-56 ">
				</a>
			</div>
		</div>
	</div>
</template>


<style scoped>
/* Add Tailwind CSS classes here */
</style>