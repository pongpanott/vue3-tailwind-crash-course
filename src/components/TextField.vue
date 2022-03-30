<template>
	<div class="mb-2 flex flex-col">
		<label>{{ label }}</label>
		<input
			type="text"
			:placeholder="placeholder"
			@input="updateValue"
			:modelValue="modelValue"
			:disabled="disabled"
		/>
		<div class="h-6"><span v-if="error">this field is required</span></div>
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
