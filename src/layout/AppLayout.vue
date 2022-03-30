<template>
	<MobileNavbar />
	<DesktopNavbar />
	<div class="flex flex-col justify-center rounded px-4 py-8">
		<slot></slot>
	</div>
</template>

<script>
import MobileNavbar from "@/components/MobileNavbar.vue";
import DesktopNavbar from "@/components/DesktopNavbar.vue";

export default {
	name: "AppLayout",
	components: {
		MobileNavbar,
		DesktopNavbar,
	},
};
</script>
