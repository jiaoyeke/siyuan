//index.js
//获取应用实例
const app = getApp()
// const order = ['demo1', 'demo2', 'demo3']

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],  //保存轮播图
    navlist: [],  //保存九宫格图片
    xiaochelist:[],  //保存校车数据
    xiaoyuanlist:[],  //保存校园风采数据
    laoshilist:[]     //保存名师展示数据
  },
  tel: function () {
    wx.makePhoneCall({
      phoneNumber: app.globalData.phoneNumber,
    })
  },
  loadMore: function () {
    //1.创建ajax请求   imagelist
    wx.request({
      url: 'http://127.0.0.1:3001/imagelist',
      success: (res) => {
        //console.log(res.data)
        this.setData({
          list: res.data
        });
      }
    });
    //2.获取数据保存list
  },
  loadMoreNav: function () {
    wx.request({
      url: 'http://127.0.0.1:3001/icons',
      success: (res) => {
        console.log(res)
        this.setData({
          navlist: res.data
        })
      }
    })
  },
  loadMoreXiao:function(){
    wx.request({
      url: 'http://127.0.0.1:3001/xiaoche',
      success:(res)=>{
        this.setData({
          xiaochelist:res.data
        })
      }
    })
  },
  loadMoreyuan:function(){
    wx.request({
      url: 'http://127.0.0.1:3001/xiaoyuan',
      success:(res)=>{
        this.setData({
          xiaoyuanlist:res.data
        })
      }
    })
  },
  loadMorelao:function(){
    wx.request({
      url: 'http://127.0.0.1:3001/laoshi',
      success:(res)=>{
        this.setData({
          laoshilist:res.data
        })
      }
    })
  },
  handleJump: function (e) {
    //1.获取自定义属性
    var id = e.target.dataset.id;
    console.log(id)
    //2.判断条件
    if (id==1) {
      wx.navigateTo({
        url: '/pages/xxxx/xxxx',
      });
    }
    if (id == 2) {
      wx.navigateTo({
        url: '/pages/newlist/newlist',
      });
    }
  },
  // handleJump: function () {
  //   //1.获取自定义属性
  //   // var id = e.target.dataset.id;
  //   // console.log(id)
  //   //2.判断条件
  //   //if (id==1) {
  //     wx.navigateTo({
  //       url: '/pages/xxxx/xxxx'
  //     })
  //   //}
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();   //获取轮播图数据
    this.loadMoreNav(); //获取四宫格数据
    this.loadMoreXiao(); //获取校车数据
    this.loadMoreyuan(); //获取校园风采数据
    this.loadMorelao();  //获取老师数据
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
