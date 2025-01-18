ARG VERSION=lts-alpine3.21

FROM node:${VERSION}

# Crea la directory "workspace"
RUN mkdir -p /workspaces/frontend-src

WORKDIR /workspaces/frontend-src

RUN npm install -g @angular/cli