<script>
import feather from 'feather-icons';
import FaqSection from './FaqSection.vue';

export default {
	props: ['complaintInfo'],
	components: {
		FaqSection,
	},

	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="block sm:flex gap-0 sm:gap-10 mt-10">
		<!-- Single project left section details -->
		<div class="w-full sm:w-1/3 text-left">
			<!-- Single project client details -->
			<div class="mb-7">
				<p class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2">
					{{ complaintInfo.clientHeading }}
				</p>
				<ul class="leading-loose">
					<li v-for="info in complaintInfo.companyInfos" :key="info"
						class="font-general-regular text-ternary-dark dark:text-ternary-light">
						<span>{{ info.title }}: </span>
						<a href="#" :class="info.title == 'Website' || info.title == 'Phone'
								? 'hover:underline cursor-pointer'
								: ''
							" aria-label="Project Website and Phone">{{ info.details }}</a>
					</li>
				</ul>
			</div>

			<!-- Single project objectives -->

			<div class="mb-7">
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
					{{ complaintInfo.objectivesHeading }}
				</p>
				<p class="font-general-regular text-primary-dark dark:text-ternary-light">
					{{ complaintInfo.objectivesDetails }}
				</p>
			</div>

			<!-- Single project technologies -->
			<div class="mb-7">
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
					{{ complaintInfo.technologies[0].title }}
				</p>
				<p class="font-general-regular text-primary-dark dark:text-ternary-light">
					{{ complaintInfo.technologies[0].techs.join(', ') }}
				</p>
			</div>

			<!-- Single project social sharing -->
			<div>
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
					{{ complaintInfo.socialSharingsHeading }}
				</p>
				<div class="flex items-center gap-3 mt-5">
					<a v-for="social in complaintInfo.socialSharings" :key="social.id" :href="social.url"
						target="__blank" aria-label="Share Project"
						class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"><i
							:data-feather="social.icon" class="w-4 lg:w-5 h-4 lg:h-5"></i></a>
				</div>
			</div>
		</div>

		<!-- Single project right section details -->
		<div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
			<div>
				<FaqSection />
			</div>
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7 hidden">
				{{ complaintInfo.projectDetailsHeading }}
			</p>
			<p v-for="projectDetail in complaintInfo.projectDetails" :key="projectDetail.id"
				class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light hidden">
				{{ projectDetail.details }}
			</p>
		</div>
	</div>
</template>
