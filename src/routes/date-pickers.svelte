<script lang="ts">
  import { DatePicker } from "smelte";
  let selected;
</script>

<small>I selected {selected ? selected.toLocaleDateString() : "nothing"}</small>
<DatePicker bind:value={selected} />