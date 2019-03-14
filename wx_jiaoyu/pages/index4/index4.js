// pages/index4/index4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rows:[],  //新闻列表
    pno:0,
    pageSize:7,
  },
  newItem: function (e) {
    //1.获取自定义属性
    // var id = e.target.dataset.id;
    // console.log(id)
    //2.判断条件
    // if (id == 1) {
    wx.navigateTo({
      url: '/pages/newlist/newlist',
    });
    //}
  },
  loadMore:function(){
    //显示加载动画
    wx.showLoading({
      title: "正在加载数据..."
    });
    //loadMore加载下一页
    //1:获取二个参数 pno pageSize
    var p = this.data.pno + 1;
    var ps = this.data.pageSize;
    //2:发送 ajax请求获取美食列表
    wx.request({
      url: "http://127.0.0.1:3001/xinwen",
      data: { pno: p, pageSize: ps },
      success: (res) => {
        //保存返回数据并且拼接操作
        var nrows = this.data.rows.concat(res.data.data);
        //显示数据
        this.setData({
          rows: nrows,         //当前页内容
          pno: p               //修改页码
        });
        //卸载动画
        setTimeout(function () {
          wx.hideLoading();
        }, 500);

      }
    });
     //3:将数据保存rows中
  },
  
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
    
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
    //0:shoplist.json
    //{"enablePullDownRefresh":true}
    //1:修改值pno=0 rows=[]
    this.setData({
      pno: 0,
      rows: []
    });
    //2:下拉操作显示第一页数据
    this.loadMore();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})