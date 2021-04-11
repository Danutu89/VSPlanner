<script>
	import ProjectList from "../components/ProjectList.svelte";
	import { page } from "../stores/page";

	let projects = [
		{
			icon: "http://localhost/api/media/projects/icons/Veelancing.png",
			id: 2,
			name: "Veelancing",
			short_name: "VE",
		},
		{
			icon: "http://localhost/api/media/projects/icons/default.png",
			id: 1,
			name: "NewApp",
			short_name: "NP",
		},
		{
			icon: "http://localhost/api/media/projects/icons/default.png",
			id: 4,
			name: "Nuj",
			short_name: "NJ",
		},
	];
</script>

<ProjectList {projects} />
