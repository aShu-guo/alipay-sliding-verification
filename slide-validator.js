// 滑动验证码
Component({
  mixins: [],
  windowWidth: 750,
  data: {
    positionX: 0,
  },
  props: {
    onComplete: () => {},
  },
  didMount() {
    this.windowWidth = dd.getSystemInfoSync().windowWidth;
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    move(e) {
      if (this.data.positionX < 558) {
        const { pageX } = e.changedTouches[0];
        const rpx = (pageX * 750) / this.windowWidth;
        this.setData({ positionX: rpx - 80 >= 0 ? (rpx - 80 <= 279 * 2 ? rpx - 80 : 279 * 2) : 0 });
      }
    },
    end() {
      // (642-84) 单位是rpx
      // (容器宽度 - 滑块宽度)
      if (this.data.positionX < 279 * 2) {
        this.setData({ positionX: 0 });
      } else {
        this.props.onComplete();
      }
    },
  },
});
