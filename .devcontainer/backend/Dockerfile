ARG VERSION=3.14-rc-alpine

FROM python:${VERSION}

RUN apk add --no-cache build-base libffi-dev openssl-dev python3-dev py3-pip

RUN mkdir -p /workspaces/backend-src

WORKDIR /workspaces/backend-src

COPY requirements.txt /workspaces/backend-src

RUN pip install -r requirements.txt  

RUN apk add curl

