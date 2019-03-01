# 扫描点餐Node后端示例结构
> 按照开源egg.js项目结构进行搭建

## 使用插件

1. egg-socket.io 使用socket.io构建websocket服务
2. egg-mongoose 使用mongoose连接操作mongo表
3. egg-redis 使用redis缓存数据，发布订阅模式实现分布式socket通信

## 后端代码规范流程

```
1. api接口请求
    url: /order/create  
    params: {totalMoney: 20.15, payType: 1, username: 'zhangsan'}
    response: {code: 0, data: {id: 'a71811'}, msg: 'success'}
    // 1. 鉴权 这步可抽离到拦截所有请求里面处理
    // 2. 参数校验
    // 3. service调用
    //    3.1 db操作 => model 操作
    //    3.2 业务处理
    // 4. 返回结果
```