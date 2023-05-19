// 滑动验证码
Component({
  mixins: [],
  windowWidth: 750,
  data: {
    positionX: 0,
    completePosition: 0,
  },
  props: {
    onComplete: () => {},
    activeColor: '#00bec5',
    width: 642, // 单位为rpx
  },
  didMount() {
    this.windowWidth = dd.getSystemInfoSync().windowWidth;
    if (this.props.width < 350) {
      console.warn('[slide-validator]：宽度最小为350rpx');
      this.setData({ completePosition: 350 - 84 });
    } else {
      this.setData({ completePosition: this.props.width - 84 });
    }
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    move(e) {
      if (this.data.positionX < this.data.completePosition) {
        const { pageX: px } = e.changedTouches[0];
        const rpx = (px * 750) / this.windowWidth;
        this.setData({
          positionX:
            rpx - 84 >= 0 ? (rpx - 84 <= this.data.completePosition ? rpx - 84 : this.data.completePosition) : 0,
        });
      }
    },
    end() {
      // (642-84) 单位是rpx
      // (容器宽度 - 滑块宽度)
      if (this.data.positionX < this.data.completePosition) {
        this.setData({ positionX: 0 });
      } else {
        this.props.onComplete();
      }
    },
  },
});
