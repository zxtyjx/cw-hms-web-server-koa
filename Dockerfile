FROM alpine

MAINTAINER zhaoxiang  zxsy113@live.com

# 创建目录并拷贝webServer应用到镜像
RUN mkdir -p /usr/src/webapp
WORKDIR /usr/src/webapp
COPY . /usr/src/webapp

# 安装node运行环境,并清楚缓存
RUN echo '@3.7 http://mirrors.aliyun.com/alpine/v3.7/main' >> /etc/apk/repositories \
&& apk update && apk upgrade \
&& apk add --no-cache nodejs-lts \
&& npm config set registry "https://registry.npm.taobao.org" \
&& npm i \
&& npm uninstall -g npm \
&& rm -rf /tmp/* \
&& rm -rf /root/.npm/

EXPOSE 3000

CMD node server.js