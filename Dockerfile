FROM node:22-alpine AS base

RUN apk update && apk add bash

RUN corepack enable

FROM base AS build

WORKDIR /app/build

COPY . .

RUN pnpm install

ENV NODE_ENV=production

RUN echo "📦 Build starting ⏳"
RUN pnpm build
RUN echo "📦 Build passed ✅"

FROM base AS run

WORKDIR /app/run

COPY --link --from=build /app/build/dist dist
COPY --link --from=build /app/build/package.json package.json
COPY --link --from=build /app/build/vite.config.ts vite.config.ts
COPY --link --from=build /app/build/node_modules node_modules

EXPOSE 3000
CMD [ "pnpm", "preview", "--host", "--port", "3000" ]