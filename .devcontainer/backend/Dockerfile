ARG VERSION=3.14-rc-alpine

FROM python:${VERSION}

RUN mkdir -p /workspaces/backend-src

WORKDIR /workspaces/backend-src

COPY requirements.txt /workspaces/backend-src

RUN pip install -r requirements.txt

