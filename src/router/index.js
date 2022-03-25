import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage";
import HappyHacking from "@/views/HappyHacking";

const routes = [
	{ path: "/", component: HomePage },
	{ path: "/excercise", component: HappyHacking },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
