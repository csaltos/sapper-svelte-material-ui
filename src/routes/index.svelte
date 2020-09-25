<script lang="ts">
  import { Button } from "smelte";

  let count: number = 0;
</script>

<style lang="postcss">
	h1, figure, p {
		@apply text-center my-0 mx-auto;
	}

	h1 {
    @apply text-3xl uppercase font-bold m-0 mb-4 text-orange-500 font-sans;
	}

	figure {
		@apply m-0 mb-4;
	}

	img {
    @apply w-full max-w-5xl m-0 mb-4;
	}

	p {
		@apply my-0 mx-auto;
	}

  @screen md {
    h1 {
      @apply text-5xl;
    }
  }
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
	<img alt='Success Kid' src='successkid.jpg'>
	<figcaption>Have fun with Sapper!</figcaption>
</figure>

<p>
  <Button on:click={() => count += 1 }>click me</Button>
</p>

<p>Clicked: {count} {count == 1 ? "time" : "times"}</p>


<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
