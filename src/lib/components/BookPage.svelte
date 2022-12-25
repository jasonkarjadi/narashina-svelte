<script lang="ts">
  import type { Elem } from "$lib/types";

  export let body: Elem | undefined;
  $: ({ tag, content, className } = { ...body });
</script>

<svelte:element this={tag} class={className}>
  {#if Array.isArray(content)}
    {#each content as body, idx (idx)}
      <svelte:self {body} />
    {/each}
  {:else if typeof content === "object"}
    <svelte:self body={content} />
  {:else}
    {content}
  {/if}
</svelte:element>
