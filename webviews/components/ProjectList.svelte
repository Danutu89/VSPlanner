<script>
	import ProjectCard from "./ProjectCard.svelte";

	export let projects = [];
</script>

<div class="list">
	{#each projects as project}
		<ProjectCard {project} />
	{/each}
</div>

<style>
	.list {
		display: flex;
		flex-flow: column;
	}
</style>
