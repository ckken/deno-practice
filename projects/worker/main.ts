new Worker(new URL("worker.ts", import.meta.url).href, { type: "module" });
