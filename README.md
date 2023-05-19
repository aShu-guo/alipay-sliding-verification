# alipay-sliding-verification

支付宝小程序、钉钉小程序滑动验证码（行为式验证码）

## 使用方式

- 在小程序项目中新建一个组件文件夹，例如：slide-validator
- 需要开启小程序开发者工具的less编译

在根目录下新建`mini.project.json`文件，并添加
```json
"compileOptions": {
    "less": true
  }
```
- 拷贝本项目下的 .less .axml .json .js 四个文件到文件夹
- 在需要使用的页面引入组件，例如：
```json
 "usingComponents": {
    "cal": "/calendar/calendar"
  }
```
- 最后在页面添加组件
```html
 <slide-validator onComplete="slideComplete"></slide-validator>
```

也可以不开启less编译， 用户需自行将less文件中的样式copy到一个新的acss文件中使用。

## 支持功能
- 支持自定义验证组件宽度
- 支持自定义背景色
- 支持自定义滑块内容


## 参数说明
|  参数名	   | 参数类型	  |  默认值	   | 说明  |
|  ----  | ----  | ----  | ----  |
| onComplete  | Event | 单元格  | 滑动到终点时的回调函数 |
| activeColor  | String | #00bec5  | 滑块左侧填充的背景色 |
| width  | Number | 642  | 组件宽度 |
| icon  | slot | -  | 滑块内容插槽 |

## 示例


### 简单用法
```html
<slide-validator onComplete="slideComplete"></slide-validator>
```
![May-19-2023 16-46-33](https://github.com/aShu-guo/alipay-sliding-verification/assets/65716236/e9bd2b37-9e1a-44d0-a9d2-6c35399e5095)

滑动未到终点自动回弹

![May-19-2023 17-35-28](https://github.com/aShu-guo/alipay-sliding-verification/assets/65716236/63d53b94-282b-4157-b64e-e9d1cc3d3d84)

### 自定义宽度、颜色

```html
<slide-validator onComplete="slideComplete" width="{{400}}" activeColor="green">
</slide-validator>
```
![May-19-2023 17-37-50](https://github.com/aShu-guo/alipay-sliding-verification/assets/65716236/69d8a5cf-d93f-4e5b-ad67-cb524ba88e03)

### 自定义滑块内容

```html
<slide-validator onComplete="slideComplete" width="{{400}}" activeColor="green">
  <view slot="icon">click!</view>
</slide-validator>
```

![May-19-2023 17-39-04](https://github.com/aShu-guo/alipay-sliding-verification/assets/65716236/3a1ea5c8-0f4e-47ea-8bb2-4616754c1c9f)




