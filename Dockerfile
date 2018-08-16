FROM node:alpine

MAINTAINER zhaoxiang  zxsy113@live.com

# 创建目录并拷贝webServer应用到镜像
RUN mkdir -p /usr/src/webapp
WORKDIR /usr/src/webapp
COPY . /usr/src/webapp

EXPOSE 3000

CMD node server.js