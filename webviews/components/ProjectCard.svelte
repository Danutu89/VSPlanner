<script>
	import { push } from "../utils/history";

	import { project as projectPage } from "../stores/project";
	export let project;

	const handleGotoProject = () => {
		projectPage.set(project);
		push({ page: "project", slug: project.id });
	};
</script>

<div class="card" on:click={handleGotoProject}>
	<img src={project.icon} alt={project.name} width="40px" />
	<div class="info">
		<span class="name">{project.name}</span>
		<span class="code">{project.short_name}</span>
	</div>
</div>

<style>
	.card {
		display: flex;
		flex-flow: row;
		padding: 0.5rem 0.5rem;
		cursor: pointer;
	}

	.card:hover {
		background: var(--vscode-list-hoverBackground);
	}

	.card img {
		border-radius: 6px;
		margin: auto 0;
	}

	.card .info {
		display: flex;
		flex-flow: column;
	}

	.card .info .name {
		margin-left: 0.3rem;
	}

	.card .info .code {
		margin-left: 0.3rem;
		font-size: 10px;
	}
</style>
