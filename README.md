# DENO Practice

## Feature List 
+ hello-word `deno run projects/hello-word/index.ts`
+ doc-gen `deno doc projects/doc-gen/index.ts`
+ fetch `deno run --allow-net projects/fetch/index.ts https://baidu.com`
+ tcp-server `deno run --allow-net projects/tcp-server/index.ts` & `nc localhost 8080`
+ read-file `deno run --allow-read projects/read-file/index.ts ./readme.md`
+ http `deno run --allow-net projects/http/index.ts` & `deno compile --unstable index.ts` & `ab -n 100 -c 10 http://localhost:8080/`

## Command
+ debug your code `deno run --inspect-brk --allow-read --allow-net https://deno.land/std@0.82.0/http/file_server.ts`

## VScode Plugin 
[Plugin](https://github.com/denoland/vscode_deno)