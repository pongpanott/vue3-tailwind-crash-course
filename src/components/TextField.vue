<template>
	<div class="mb-2 flex flex-col">
		<label>{{ label }}</label>
		<input
			type="text"
			:placeholder="placeholder"
			@input="updateValue"
			:modelValue="modelValue"
			:disabled="disabled"
			class="border-neutral-300 outline-0 border-[1px] h-10 w-full px-4 placeholder-neutral-300 max-w-[320px] focus:border-primary-500"
			:class="[!isEmpty && 'border-secondary-500', error && 'border-error-500']"
		/>
		<div class="h-6 text-error-500 text-xs">
			<span v-if="error">this field is required</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "TextField",
	props: {
		placeholder: {
			type: String,
			required: true,
		},
		label: {
			type: String,
			required: true,
		},
		disabled: {
			type: Boolean,
			required: false,
		},
		error: {
			type: Boolean,
			required: false,
		},
		isEmpty: {
			type: Boolean,
			required: false,
		},
	},
	emits: ["update:modelValue"],
	methods: {
		updateValue(event) {
			this.$emit("update:modelValue", event.target.value);
		},
	},
};
</script>
