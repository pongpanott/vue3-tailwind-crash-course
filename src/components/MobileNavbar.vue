<template>
	<div class="bg-teal-500 h-[60px] md:hidden">
		<div class="w-full h-full flex items-center justify-end px-4">
			<HamburgerIcon @click="toggleOpenNav" />
		</div>
		<div
			v-if="isNavOpen"
			class="h-screen absolute h-[calc(100%-60px)] bg-teal-500 border-t-2 w-full"
		>
			<div class="flex flex-col py-8 text-center gap-y-4">
				<div v-for="item in navItems" :key="item.title">
					<router-link :to="item.path" class="text-white text-lg">
						{{ item.title }}</router-link
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { navItems } from "@/constatns/navItems";
import HamburgerIcon from "@/components/Hamburger.vue";

export default {
	name: "MobileNavbar",
	components: { HamburgerIcon },
	data() {
		return {
			isNavOpen: false,
			navItems,
		};
	},
	methods: {
		toggleOpenNav() {
			this.isNavOpen = !this.isNavOpen;
		},
	},
};
</script>
