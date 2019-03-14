// pages/index2/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xiaoyuanlist:[],  //校园风采
    guanyulist:[],     //关于我们
    gaikuanglist:[]    //学校概况
  },
  loadMoreyuan: function () {
    wx.request({
      url: 'http://127.0.0.1:3001/xiaoyuan',
      success: (res) => {
        this.setData({
          xiaoyuanlist: res.data
        })
      }
    })
  },
  loadMoreguanyu: function () {
    wx.request({
      url: 'http://127.0.0.1:3001/guanyu',
      success: (res) => {
        this.setData({
          guanyulist: res.data
        })
      }
    })
  },
  loadMoregaikuang: function () {
    wx.request({
      url: 'http://127.0.0.1:3001/gaikuang',
      success: (res) => {
        this.setData({
          gaikuanglist: res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMoreyuan();
    this.loadMoreguanyu();
    this.loadMoregaikuang()
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