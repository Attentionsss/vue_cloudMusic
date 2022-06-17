Vue全家桶 + 魔改ElementUI 仿网易云客户端 (PC) 在线播放器 ☁️🎵
===
> 之前没有用过vue全家桶做过项目，网易云网页版的界面确实一言难尽，但是PC客户端体验还是很好的。***Binaryify*** 作者打造的网易云接口非常完善，有200多个接口，于是就有了模仿网易云PC客户端制作一个网页在线播放器的想法，使其体验接近客户端。

⚡[预览地址](http://8.142.173.124/cloudMusic)

特性 
---
* Vue全家桶开发
* 支持歌词滚动
* 支持电台播放
* 数据持久化 (刷新页面数据不会丢失)
* 高颜值在线播放器 
* 音乐标题自适应
* 支持网易云手机号登录
* 支持评论功能
* 每日推荐歌曲
* 支持歌曲、 歌单、视频、 MV、 专辑、 电台收藏以及取消收藏
* 视频、 MV播放
* symbol 引用 iconfont svg格式的字体图标


技术栈
---
* ***Vue*** 全家桶
* ***ElementUI*** 魔改样式 ，体验接近网易云PC客户端
* ***vuex-persistedstate*** （Vuex持久化插件）
* ***Less***（CSS 预处理语言）
* ***better-scroll*** 歌词滚动
* ***vue-lazyload*** 图片懒加载 , 加载动画

### 后端接口
https://binaryify.github.io/NeteaseCloudMusicApi

### 接口调试工具
https://www.apifox.cn/


部分功能展示
---

### 首页
![Image text](https://github.com/Attentionsss/UserImages/blob/main/%E9%A6%96%E9%A1%B5.png?raw=true)

### 首页歌单
![Image text](https://github.com/Attentionsss/UserImages/blob/main/%E9%A6%96%E9%A1%B5%E6%AD%8C%E5%8D%95.png?raw=true)

### 歌词
![Image text](https://github.com/Attentionsss/UserImages/blob/main/%E6%AD%8C%E8%AF%8D.png?raw=true)

### 每日推荐
![Image text](https://github.com/Attentionsss/UserImages/blob/main/%E6%AF%8F%E6%97%A5%E6%8E%A8%E8%8D%90.png?raw=true)

### 搜索
![Image text](https://github.com/Attentionsss/UserImages/blob/main/%E6%90%9C%E7%B4%A2png.png?raw=true)

部署
---
### 前端项目 ###
```JavaScript

npm install

npm run dev

```
### 后端项目 ###
```JavaScript

git clone git@github.com:sqaiyan/netmusic-node.git

cd netmusic-node 

npm install 

node app.js

```

功能
---
### 已实现功能 ###
- [X] 个性推荐 (banner、推荐歌单)
- [X] 首页歌单 (可以按照 tag 进行筛选)
- [X] 首页歌手 (可以按照语种、分类、首字母进行筛选)
- [X] 视频和MV的推荐和播放
- [X] 评论功能 (支持评论和点赞,以及个人评论可以删除)
- [X] 手机号登录和退出
- [X] 收藏功能 (支持歌曲、歌单、专辑、电台、视频、MV的收藏以及取消收藏)
- [X] 歌曲播放 
- [X] 歌词滚动 
- [X] 歌单内搜索
- [X] 个人信息修改以及头像修改
- [X] 每日推荐
- [X] 播放列表和历史记录
- [X] 搜索 (搜索历史、热搜榜、搜索成功的页面)
- [X] 播放模式切换 (顺序、循环、随机)
- [X] 媒体列表 (歌单、专辑、电台)

### 功能TODO ###
- [ ] 支持歌曲下载
- [ ] 登陆方式支持验证码和二维码
- [ ] 夜间模式
- [ ] 适配移动端
- [ ] 添加歌单和歌单修改
- [ ] 心动模式

已知问题
---
* 电台详情的接口突然不提供对应点赞数和播放时间的数据，电台的点赞数和播放时间会显示有问题，暂时没有找到更好的解决措施
* 歌手页跳转不能跳转到个人信息页面，接口也是突然 (之前是可以的) 不提供歌手的用户id, 把歌手跳转个人信息界面移除了
