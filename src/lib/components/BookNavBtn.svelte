<script lang="ts">
  export let mod = 0;
  export let max = 0;

  const [ariaLabel, btnIcon, diffVal] = max
    ? ["次の頁へ進む", "<", 2]
    : ["前の頁へ戻る", ">", -2];
  $: disabled = max ? mod >= max : mod <= 0;
</script>

<button
  class="booknavbtn"
  aria-label={ariaLabel}
  {disabled}
  on:click={() => (mod += diffVal)}
>
  {btnIcon}
</button>
