<script lang="ts">
	export let segment: string;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a aria-current="{segment === 'buttons' ? 'page' : undefined}" href="buttons">buttons</a></li>
		<li><a aria-current="{segment === 'lists' ? 'page' : undefined}" href="lists">lists</a></li>
		<li><a aria-current="{segment === 'card' ? 'page' : undefined}" href="card">card</a></li>
		<li><a aria-current="{segment === 'checkboxes' ? 'page' : undefined}" href="checkboxes">checkboxes</a></li>
		<li><a aria-current="{segment === 'chip' ? 'page' : undefined}" href="chip">chip</a></li>
		<li><a aria-current="{segment === 'date-pickers' ? 'page' : undefined}" href="date-pickers">date-pickers</a></li>
		<li><a aria-current="{segment === 'dialog' ? 'page' : undefined}" href="dialog">dialog</a></li>
		<li><a aria-current="{segment === 'images' ? 'page' : undefined}" href="images">images</a></li>
		<li><a aria-current="{segment === 'menus' ? 'page' : undefined}" href="menus">menus</a></li>
		<li><a aria-current="{segment === 'progress-indicators' ? 'page' : undefined}" href="progress-indicators">progress-indicators</a></li>
		<li><a aria-current="{segment === 'selects' ? 'page' : undefined}" href="selects">selects</a></li>
		<li><a aria-current="{segment === 'sliders' ? 'page' : undefined}" href="sliders">sliders</a></li>
		<li><a aria-current="{segment === 'snackbars' ? 'page' : undefined}" href="snackbars">snackbars</a></li>
		<li><a aria-current="{segment === 'table' ? 'page' : undefined}" href="table">table</a></li>
		<li><a aria-current="{segment === 'tabs' ? 'page' : undefined}" href="tabs">tabs</a></li>
		<li><a aria-current="{segment === 'text-fields' ? 'page' : undefined}" href="text-fields">text-fields</a></li>
		<li><a aria-current="{segment === 'tooltip' ? 'page' : undefined}" href="tooltip">tooltip</a></li>
		<li><a aria-current="{segment === 'treeview' ? 'page' : undefined}" href="treeview">treeview</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
	</ul>
</nav>
