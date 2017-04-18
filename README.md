# Tohken Ranbu Helper
## 首先
修改自(https://github.com/hitomi/tohken)

感谢（消失了很久的）[@毫无存在感的凌](http://www.weibo.com/moelynn)

## 介绍
Chrome插件一枚，适用于DMM游戏刀剑乱舞

## 功能
* 疲劳度查看以及疲劳演算
* 远征，损坏提醒
* 锻刀和捞刀结果预知

## 目录结构
```
src─┐
    │  manifest.json
    │
    ├─assets
    │  │  bgs.png                     # 右下角的背景
    │  │  icon.png                    # 图标
    │  │  icon_128.png                # 图标
    │  │  sakura.png                  # 樱花
    │  │  # 存放资源的目录
    │  └─sword
    |     sword_id.png                # Q版刀剑
    │     # 存放Q版刀剑的目录
    ├─devtools
    │  │  devtools.html
    │  │  devtools.js
    │  │
    │  └─panel
    │      │  index.html           # 面板宿主
    │      │
    │      ├─app
    │      │      app.js          # Vue构造，主体部分
    │      │      config.js       # 默认的设置
    │      │      data.js         # 默认的数据
    │      │      define.js       # 定义静态数据（新刀添加数据&婶婶修改爱刀名称）
    │      │      event.js        # 休息时的疲劳计算
    │      │      inject.js       # 页面注入，负责推送通知
    │      │      log.js          # 暂无作用
    │      │      parse.js        # 解析和填充数据
    │      │      router.js       # 数据包路由
    │      │      store.js        # 储存部分的封装
    │      │      view.js         # 默认的视图数据
    │      │
    │      ├─assets
    │      │      main.css
    │      │      # 样式
    │      └─template
    │              about.html         # 关于
    │              config.html        # 设置
    │              forge_rep.html     # 本丸
    │              logs.html          # 记录
    │              party_item.html    # 队伍
    │              # 面板
    ├─popup
    │      container.html
    │      popup.coffee
    │      popup.html
    │      resize.coffee
    │      # 远征、掉刀、受伤、手入弹出提醒
    └─thirdparty
            aes.js
            FileSaver.js
            jquery.js
            livereload.js
            lodash.js
            pad-nopadding-min.js
            vue.js
            # 第三方库
```
## 运行机理（不太懂x）

利用Chrome Devtools API来监听符合条件的网络通讯并将数据传至路由组件。

解析并将处理后的数据传递至view模型中。

通过Vue.js的数据绑定机制来更新视图

## 参考资料
https://developer.chrome.com/extensions/api_index

https://lodash.com/docs

http://vuejs.org/

https://github.com/eligrey/FileSaver.js

## License
CC0 1.0 Universal
