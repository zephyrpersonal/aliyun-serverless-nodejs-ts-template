# 阿里云函数计算模板

快速开发，测试，发布 [阿里云函数计算](https://help.aliyun.com/product/50980.html?spm=a2c4g.11186623.3.1.5f375943lgiGOq)

## 必要依赖

- nodejs8
- docker

## 建议准备

```bash
# 预下载aliyunfc runtime镜像
docker pull aliyunfc/runtime-nodejs8

# 扩展系统同时文件打开数
echo kern.maxfiles=65536 | sudo tee -a /etc/sysctl.conf
echo kern.maxfilesperproc=65536 | sudo tee -a /etc/sysctl.conf
sudo sysctl -w kern.maxfiles=65536
sudo sysctl -w kern.maxfilesperproc=65536
ulimit -n 65536
```

## 命令

```bash
yarn # 安装依赖

yarn config # 配置aliyun fun

yarn dev # 构建开发环境bundle
yarn dev:watch # watch构建

yarn test # 测试
```

## 目录结构

```test
•
├── __test__  # 单元测试用例
├── src
├───── index.ts # 函数入口
├── .funignore #  fun忽略配置
└── template.yml #  fun函数计算服务配置
```

## 内置库

| 库名          | 版本    | 介绍             | 仓库地址                                               |
| ------------- | ------- | ---------------- | ------------------------------------------------------ |
| co            | 4.6.0   | 控制流           | https://github.com/tj/co                               |
| gm            | 1.23.0  | 图片处理库       | https://github.com/aheckmann/gm                        |
| ali-oss       | 4.10.1  | OSS SDK          | https://github.com/ali-sdk/ali-oss                     |
| ali-mns       | 2.6.5   | MNS SDK          | https://github.com/InCar/ali-mns                       |
| tablestore    | 4.0.11  | OTS SDK          | https://github.com/aliyun/aliyun-tablestore-nodejs-sdk |
| aliyun-sdk    | 1.10.12 | Aliyun SDK       | https://github.com/aliyun-UED/aliyun-sdk-js            |
| @alicloud/fc2 | 2.1.0   | 函数计算 SDK     | https://github.com/aliyun/fc-nodejs-sdk                |
| opencv        | 6.0.0   | 视觉算法库       | https://github.com/peterbraden/node-opencv             |
| body          | 5.1.0   | http body 解析库 | https://github.com/Raynos/body                         |
| raw-body      | 2.3.2   | http body 解析库 | https://github.com/stream-utils/raw-body               |

## template.yml

参考 fun 的[规范](https://github.com/aliyun/fun/blob/master/docs/specs/2018-04-03-zh-cn.md)

## Trouble Shooting

- deploy 失败

  [https://github.com/aliyun/fun/issues/77](https://github.com/aliyun/fun/issues/77)
