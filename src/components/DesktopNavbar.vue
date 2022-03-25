<template>
	<div class="bg-teal-500 h-[60px] px-4 hidden md:flex items-center">
		<div class="flex gap-x-4">
			<div v-for="item in navItems" :key="item.title">
				<router-link :to="item.path" class="text-white text-lg">
					{{ item.title }}</router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
import { navItems } from "@/constatns/navItems";

export default {
	name: "DesktopNavbar",
	data() {
		return {
			isNavOpen: false,
			navItems,
		};
	},
};
</script>
