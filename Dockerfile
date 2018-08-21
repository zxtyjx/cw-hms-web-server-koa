FROM node:alpine

MAINTAINER zhaoxiang  zxsy113@live.com

# ENV
# RESDIR: 资源根目录
# INDEXFILE: 入口文件

# 创建目录并拷贝webServer应用到镜像
RUN mkdir -p /usr/src/webapp
WORKDIR /usr/src/webapp
COPY . /usr/src/webapp
RUN npm config set registry https://registry.npm.taobao.org && npm i

EXPOSE 3000

CMD node server.js