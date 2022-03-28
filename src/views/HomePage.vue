<template>
	<AppLayout>
		<div class="text-center">
			<p class="text-teal-500 text-3xl">Hello Tailwind</p>
			<p class="text-gray-500 mt-2">
				Enjoy building your component from scratch.
			</p>
		</div>
	</AppLayout>
</template>

<script>
import AppLayout from "@/layout/AppLayout.vue";

export default {
	name: "HomePage",
	components: { AppLayout },
};
</script>
