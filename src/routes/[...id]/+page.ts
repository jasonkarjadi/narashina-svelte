import type { PageLoad } from "./$types";
import data from "$lib/data";

export const load = (({ params }) => {
  return data.find(({ id }) => params.id || "index" === id);
}) satisfies PageLoad;
