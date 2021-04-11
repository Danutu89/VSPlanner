<script>
	import { onMount } from "svelte";
	import Home from "./Home.svelte";
	import Login from "./Login.svelte";
	import { page } from "../stores/page";
	import Project from "./Project.svelte";
	import { history } from "../utils/history";
	import Footer from "../components/Footer.svelte";

	// $: {
	// 	tsvscode.setState({ page });
	// }

	onMount(async () => {
		window.addEventListener("message", async (event) => {
			const message = event.data;
		});

		// tsvscode.postMessage({ type: "init", value: undefined });
	});

	$: {
		console.log($history);
	}
</script>

{#if $history}
	{#if $history.page === "login"}
		<Login />
	{:else if $history.page === "home"}
		<Home />
	{:else if $history.page === "project"}
		<Project />
	{/if}
	<Footer />
{/if}
