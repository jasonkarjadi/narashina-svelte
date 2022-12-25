<script lang="ts">
  import BookNavBtn from "$lib/components/BookNavBtn.svelte";
  import BookPage from "$lib/components/BookPage.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  const { pages = [], breadcrumbs = [] } = data;
  // let marks: number[] | string[];

  const title = breadcrumbs.map((text) => `／${text}`);
  const max = pages ? pages.length - 2 + (pages.length % 2) : 0;

  let mod = 0;
  // export let fontFamily = "noto_serif_jp";
  // export let colorScheme = "黒字白紙";

  $: pageBodies = pages
    .slice(mod, mod + 2)
    .map(({ body }) => body)
    .reverse();
</script>

<svelte:head>
  <title>執筆書庫「ならしな」{title}</title>
</svelte:head>

<div class="bookwrap">
  <BookNavBtn bind:mod {max} />
  {#each pageBodies as body, idx (idx)}
    <div>
      <BookPage bind:body />
    </div>
  {/each}
  <BookNavBtn bind:mod />
</div>
<div class="booknav fullbar">
  <datalist id="bookmarks">
    <!-- {#each marks as mark (mark)}
      <option value={mark} />
    {/each} -->
  </datalist>
  <input type="range" {max} step={2} bind:value={mod} list="bookmarks" />
</div>
