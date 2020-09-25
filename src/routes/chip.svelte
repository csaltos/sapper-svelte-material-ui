<script lang="ts">
  import { Chip } from 'smelte';

  let closed = false;
  let clicked = false;
</script>

<h6 class="mb-3 mt-6">Basic</h6>
<Chip
  icon="face"
  removable
  selectable
  on:close={() => closed = true }
  on:click={() => clicked = true }
>test</Chip>

<h6 class="mb-3 mt-6">Outlined</h6>
<Chip
  icon="face"
  removable
  selectable
  outlined
>test</Chip>
