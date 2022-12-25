<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import "./reset.scss";
  import "./styles.scss";
  import "./utility.scss";
  import type { PageData } from "./[...id]/$types";

  const { id, breadcrumbs }: PageData = $page.data;

  let fontFamily = "noto_serif_jp";
  let colorScheme = "黒字白紙";

  onMount(() => {
    const resize = () => {
      document.documentElement.style.setProperty(
        "--doc-height",
        `${innerHeight}px`
      );
      document.documentElement.style.setProperty(
        "--bookpage-width",
        `${(innerHeight - 160) * 0.7071}px`
      );
    };
    resize();
    addEventListener("resize", resize);
    return () => {
      removeEventListener("resize", resize);
    };
  });
</script>

<header class="fullbar">
  <nav>
    <a href="/">ならしな</a>
    {#if breadcrumbs}
      {#each breadcrumbs as text, idx (text)}
        <span> / </span>
        <a
          href="/{id
            .split('/')
            .slice(0, idx + 1)
            .join('/')}">{text}</a
        >
      {/each}
    {/if}
  </nav>
</header>
<main class="{fontFamily} {colorScheme}">
  <slot />
</main>
