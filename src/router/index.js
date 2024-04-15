import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'DigiTalk - Home',
		},
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
		meta: {
			title: 'DigiTalk - About',
		},
	},
	{
		path: '/projects',
		name: 'Projects',
		// route level code-splitting
		// this generates a separate chunk (projects.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "projects" */ '../views/Projects.vue'),
		meta: {
			title: 'DigiTalk - Projects',
		},
	},
	{
		path: '/projects/single-project',
		name: 'Single Project',
		// route level code-splitting
		// this generates a separate chunk (projects.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "projects" */ '../views/SingleProject.vue'
			),
		meta: {
			title: 'DigiTalk - Single Project',
		},
	},
	{
		path: '/contact',
		name: 'Contact',
		// route level code-splitting
		// this generates a separate chunk (projects.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "projects" */ '../views/Contact.vue'),
		meta: {
			title: 'DigiTalk - Contact',
		},
	},
	{
		path: '/compaines',
		name: 'Compaines',
		// route level code-splitting
		// this generates a separate chunk (projects.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "projects" */ '../views/Compaines.vue'),
		meta: {
			title: 'DigiTalk - Compaines',
		},
	},
	{
		path: '/compaines/single-company',
		name: 'Single Company',
		// route level code-splitting
		// this generates a separate chunk (projects.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "projects" */ '../views/SingleCompany.vue'),
		meta: {
			title: 'DigiTalk - Single Company',
		},
	},
	{
		path: '/complaints',
		name: 'Complaints',
		component: () =>
			import(/* webpackChunkName: "projects" */ '../views/Complaints.vue'),
		meta: {
			title: 'DigiTalk - Complaints',
		},
	},
	{
		path: '/profile',
		name: 'Profile',
		component: () =>
			import(/* webpackChunkName: "projects" */ '../views/Profile.vue'),
		meta: {
			title: 'DigiTalk - Contact',
		},
	},
	{
		path: '/login',
		name: 'Login',
		component: () =>
			import(/* webpackChunkName: "projects" */ '../views/Login.vue'),
		meta: {
			title: 'DigiTalk - Login',
		},
	},
	{
		path: '/signup',
		name: 'Signup',
		component: () =>
			import(/* webpackChunkName: "projects" */ '../views/Signup.vue'),
		meta: {
			title: 'DigiTalk - Signup',
		},
	},
	{
		path: '/deals',
		name: 'Deals',
		component: () =>
			import(/* webpackChunkName: "projects" */ '../views/Deals.vue'),
		meta: {
			title: 'DigiTalk - Deals',
		},
	},
	{
		path: '/complaints/single-complaints',
		name: 'SingleComplaints',
		component: () =>
			import(/* webpackChunkName: "projects" */ '../views/SingleComplaints.vue'),
		meta: {
			title: 'DigiTalk - Single Complaints',
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior() {
		document.getElementById('app').scrollIntoView();
	},
});

export default router;

/**
 * Below code will display the component/active page title
 * Powered by: Nangialai DigiTalk
 */

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
	// This goes through the matched routes from last to first, finding the closest route with a title.
	// e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
	// `/nested`'s will be chosen.
	const nearestWithTitle = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.title);

	// Find the nearest route element with meta tags.
	const nearestWithMeta = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	const previousNearestWithMeta = from.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	// If a route with a title was found, set the document (page) title to that value.
	if (nearestWithTitle) {
		document.title = nearestWithTitle.meta.title;
	} else if (previousNearestWithMeta) {
		document.title = previousNearestWithMeta.meta.title;
	}

	// Remove any stale meta tags from the document using the key attribute we set below.
	Array.from(
		document.querySelectorAll('[data-vue-router-controlled]')
	).map((el) => el.parentNode.removeChild(el));

	// Skip rendering meta tags if there are none.
	if (!nearestWithMeta) return next();

	// Turn the meta tag definitions into actual elements in the head.
	nearestWithMeta.meta.metaTags
		.map((tagDef) => {
			const tag = document.createElement('meta');

			Object.keys(tagDef).forEach((key) => {
				tag.setAttribute(key, tagDef[key]);
			});

			// We use this to track which meta tags we create so we don't interfere with other ones.
			tag.setAttribute('data-vue-router-controlled', '');

			return tag;
		})
		// Add the meta tags to the document head.
		.forEach((tag) => document.head.appendChild(tag));

	next();
});
