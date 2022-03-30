<template>
	<AppLayout>
		<div class="flex flex-col gap-y-4">
			<div
				class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2 mx-auto text-right"
			>
				<div v-for="(primary, index) in primaryColor" :key="{ index }">
					<div class="rounded w-20 h-20" :class="[primary.variant]" />
					<span class="text-xs text-neutral-500">{{ primary.hex }}</span>
				</div>
			</div>
			<div
				class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2 mx-auto text-right"
			>
				<div v-for="(secondary, index) in secondaryColor" :key="{ index }">
					<div class="rounded w-20 h-20" :class="[secondary.variant]" />
					<span class="text-xs text-neutral-500">{{ secondary.hex }}</span>
				</div>
			</div>
			<div
				class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2 mx-auto text-right"
			>
				<div v-for="(neutral, index) in neutralColor" :key="{ index }">
					<div class="rounded w-20 h-20" :class="[neutral.variant]" />
					<span class="text-xs text-neutral-500">{{ neutral.hex }}</span>
				</div>
			</div>
			<div
				class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2 mx-auto text-right"
			>
				<div v-for="(error, index) in errorColor" :key="{ index }">
					<div class="rounded w-20 h-20" :class="[error.variant]" />
					<span class="text-xs text-neutral-500">{{ error.hex }}</span>
				</div>
			</div>
		</div>
	</AppLayout>
</template>

<script>
import AppLayout from "@/layout/AppLayout";
import {
	primaryColor,
	secondaryColor,
	neutralColor,
	errorColor,
} from "../constants/colors";

export default {
	name: "ColorPallete",
	components: { AppLayout },
	data() {
		return {
			primaryColor,
			secondaryColor,
			neutralColor,
			errorColor,
		};
	},
};
</script>
