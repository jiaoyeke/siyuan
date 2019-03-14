//app.js
//1:加载模块 express pool.js
const express = require("express");
const pool = require("./pool");
//2:创建服务器端对象
var app = express();
//3:监听 3000
app.listen(3001,function(){
	console.log('服务器创建成功');
});
//4:指定静态目录  public 
app.use(express.static("public"));
//5:加载跨域访问模块
const cors = require("cors");
//6:配置跨域访问模块 那个域名跨域访问允许
//  脚手架8080允许
//origin      允许跨域访问域名列表
//credentials 跨域访问保存session id
// app.use(cors({
//   origin:["http://127.0.0.1:8080",
//   "http://localhost:8080"],
//   credentials:true
// }));

//6.1:下载 express-session 并且配置
// const session = require("express-session");
// app.use(session({
//   secret:"128位随机字符", //安全字符串
//   resave:false,          //每次请求是否都更新数据
//   saveUninitialized:true, //初始化时保存数据
//   cookie:{
//     maxAge:1000 * 60 * 60 * 8
//   }
// }));


//7:加载第三方模块 body-parser
//body-parser 针对post请求处理请求参数
//如果配置成功 req.body..
const bodyParser = require("body-parser");
//8:配置对特殊 json是否是自动转换 不转换
app.use(bodyParser.urlencoded({extended:false}))


/
//vue_server_00/app.js
//功能十三:给小程序首页返回轮播数据
//1:将轮播保存 public/img/banner1.png
//2:GET /imagelist
app.get("/imagelist",(req,res)=>{
    var rows = [
      {code:1,img_url:"http://127.0.0.1:3001/img/lunbo/lunbo1.jpg"},
      {code:2,img_url:"http://127.0.0.1:3001/img/lunbo/lunbo2.jpg"}
    ];
    res.send(rows);
})
//3:创建js对象 图片编号 图片地址
//4:返回

//功能十四:返回小程序四宫格图片列表
//将九宫格图片复制 /public/icon/... 15:57
app.get("/icons",(req,res)=>{
 var rows = [
   {id:1,img_url:"http://127.0.0.1:3001/img/sgg/i1.png",title:"学校概况"},
   {id:2,img_url:"http://127.0.0.1:3001/img/sgg/i2.png",title:"校园资讯"},
   {id:3,img_url:"http://127.0.0.1:3001/img/sgg/i3.png",title:"教学展示"},
   {id:4,img_url:"http://127.0.0.1:3001/img/sgg/i4.png",title:"联系我们"},
 ];
 res.send(rows);
})

//功能 十八   返回校车接送数据
app.get("/xiaoche",(req,res)=>{
  var rows=[
    {code:1,img_url:"http://127.0.0.1:3001/img/xxys/xxys2.png",title:"校车接送",title2:"学校接送车情况小结，接送学生车辆安全涉及千家万户，关乎社会大局稳定。"},
    {code:2,img_url:"http://127.0.0.1:3001/img/xxys/xxys1.png",title:"课程丰富",title2:"多种热门课程助您的孩子学习，接送学生车辆安全涉及千家万户。"},
    {code:3,img_url:"http://127.0.0.1:3001/img/xxys/xxys3.png",title:"名校保障",title2:"培养人才的目标，我认为首先应该注重人格的陶冶，做一个堂堂正正的“人”。"}
  ];
  res.send(rows)
});

//功能十九 返回校园风采数据
app.get("/xiaoyuan",(req,res)=>{
  var rows=[
    {code:1,img_url:"http://127.0.0.1:3001/img/xyfc/xx.png",title:"图书馆"},
    {code:2,img_url:"http://127.0.0.1:3001/img/xyfc/xx2.png",title:"实验楼"},
    {code:3,img_url:"http://127.0.0.1:3001/img/xyfc/xx3.png",title:"校园一角"},
    {code:4,img_url:"http://127.0.0.1:3001/img/xyfc/xx4.png",title:"教室一角"},
  ];
  res.send(rows)
});

//功能二十  返回名师展示数据
app.get("/laoshi",(req,res)=>{
  var rows=[
    {id:1,img_url:"http://127.0.0.1:3001/img/laoshi/ls.jpg",title:"黄老师",title2:"历史老师"},
    {id:2,img_url:"http://127.0.0.1:3001/img/laoshi/ls3.jpg",title:"周老师",title2:"数学老师"},
    {id:3,img_url:"http://127.0.0.1:3001/img/laoshi/ls2.jpg",title:"王老师",title2:"生物老师"},
  ];
  res.send(rows)
})

//功能二十一  返回index2 关于我们数据
app.get("/guanyu",(req,res)=>{
  var rows=[
    {code:1,img_url:"http://127.0.0.1:3001/img/gywm/gywm.jpg"},
  ]  
  res.send(rows)
})

//功能二十二  返回index2 学校概况数据
app.get("/gaikuang",(req,res)=>{
  var rows=[
    {code:1,img_url:"http://127.0.0.1:3001/img/gywm/gywm2.jpg",title:"学校创办于二零零五年，以丰富的教育资源背景为依托以“为了求知者”为经营理念致力于为广大的求知者提供全面、有效、便捷的教学系统，力图为求知者排除求知路上的困难，明确方向，让学生面对学习不再盲目，为求知者的美好未来保驾护航成为求知者心目中的导航明灯。同时及时关注教育行业的全面动态与趋势，不断向广大的学生反馈与传达各类教育政策及考试信息等。"},
  ]  
  res.send(rows)
})

//功能二十三   返回index3 视频数据
app.get("/shipin",(req,res)=>{
  var rows=[
    {code:1,img_url:"http://127.0.0.1:3001/img/x.mp4",title:"幼儿教学视频展示"},
  ]
  res.send(rows)
})

//功能二十四  新闻列表分页查询
app.get("/xinwen",(req,res)=>{
  //1:参数
  //pno      页码:  用户需要查看页数 1 2 
  //pageSize 页大小:一页7
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //1.1:默认值 pno 1 pageSize = 7
  if(!pno){
    pno = 1;
  }
  if(!pageSize){
    pageSize = 7;
  }
  //1.2:创建变量保存执行进度
  var progress = 0; 
  //1.3:创建变量最终发送js对象
  var obj = {code:1}

  //2:sql语句
  var sql =" SELECT id,img_url,name,title,time FROM jiaoyu_xinwen LIMIT ?,?";
  var offset = (pno-1)*pageSize;
  //pageSize 造型int
  pageSize = parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
      if(err)throw err;
      progress += 50;     //进度值加50
      obj.data = result;  //保存当前面内容
      if(progress==100){  //如果进度值100
        res.send(obj);    //发送
      }
  });
  //3:sql语句总页数
  var sql =" SELECT count(id) as c";
      sql+=" FROM jiaoyu_xinwen";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    var ps = Math.ceil(result[0].c/pageSize);
    progress+=50;      //进度值加50
    obj.pageCount = ps;//保存总页数 
    if(progress==100){ //当前进度等于100
      res.send(obj);   //发送
    }
  })
  //4:返回结果 {code:1,data:[],pageCount:3}
})

//功能二十五   新闻详情
app.get("/newlist",(req,res)=>{
  var rows=[
    {id:1,title:"备战中考：家长应该做些什么？",title2:"2018-11-23 15:00",title3:"阅读 129",title4:"作为一个新初三的家长应该开始了解中考过程中的一些重要节点了，比如：中考报名、中考体育、中考签约、志愿填报等等，当家长了解了中考过程中的这些关键点，才能为孩子做好下一步的铺垫，由于升学这块涵盖的范围比较大，所以重点讲下中考签约和志愿填报。",title5:"首先来说说中考签约，这里面需要注意的地方颇多，其实这点家长应该从孩子的初二就应该开始关注了，因为有的孩子在初二下学期期末考试结束之后，由于成 绩突出，就会被一些名校看重而签约，另外等孩子上了初三以后，很多学校在签约的时候是关注初二下学期的期末成绩的，所以这次考试的成绩（包括各科的成绩） 希望家长能够记录下来备用。不过现在已经是新初三了，估计现在和大家说这些有点晚了，不过切莫错过初三这一年中重要的两次签约即可，进入初三之后，早的 一次就是初三上半年的期末，这也是全区靠前次大排名，能够看出自己的孩子在什么样的位置，衡量出自己的水平，这次成绩不要忽视，好好备考为好。当进入到三 月份的时候，各名校会举办一些中招咨询会，咨询会当天会全面为家长学生开放，这天，关注学校的家长，可以直接到现场进一步了解学校的情况，为孩子升学做好 准备。后一次大批签约是在五月份的中考一模之后，这次考试相当于一次小型的中考，题目偏难些，主要目的也是选拔一些优秀的孩子。如果家长能够提前知道这 些关键的考试，那么就可以帮助引导孩子在这几次的考试上发挥的更好些。"},
  ]
  res.send(rows)
})

//功能十五:用户退出 
app.get("/logout",(req,res)=>{
  //1:清空uid
  req.session.uid = null;
  //2:返回消息
  res.send({code:1,msg:"己退出"});
});


// //功能十六:美食列表分页查询
// app.get("/shoplist",(req,res)=>{
//   //1:参数
//   //pno      页码:  用户需要查看页数 1 2 
//   //pageSize 页大小:一页7
//   var pno = req.query.pno;
//   var pageSize = req.query.pageSize;
//   //1.1:默认值 pno 1 pageSize = 7
//   if(!pno){
//     pno = 1;
//   }
//   if(!pageSize){
//     pageSize = 7;
//   }
//   //1.2:创建变量保存执行进度
//   var progress = 0; 
//   //1.3:创建变量最终发送js对象
//   var obj = {code:1}

//   //2:sql语句
//   var sql =" SELECT id,img_url,name,tel";
//      sql +=" ,addr,time,star";
//      sql +=" FROM xz_shop"; 
//      sql +=" LIMIT ?,?";
//   var offset = (pno-1)*pageSize;
//   //pageSize 造型int
//   pageSize = parseInt(pageSize);
//   pool.query(sql,[offset,pageSize],(err,result)=>{
//       if(err)throw err;
//       progress += 50;     //进度值加50
//       obj.data = result;  //保存当前面内容
//       if(progress==100){  //如果进度值100
//         res.send(obj);    //发送
//       }
//   });
//   //3:sql语句总页数
//   var sql =" SELECT count(id) as c";
//       sql+=" FROM xz_shop";
//   pool.query(sql,(err,result)=>{
//     if(err)throw err;
//     var ps = Math.ceil(result[0].c/pageSize);
//     progress+=50;      //进度值加50
//     obj.pageCount = ps;//保存总页数 
//     if(progress==100){ //当前进度等于100
//       res.send(obj);   //发送
//     }
//   })
//   //4:返回结果 {code:1,data:[],pageCount:3}
// });



//功能十七:添加商品
//CREATE TABLE xz_pro(
//  id   INT PRIMARY KEY AUTO_INCREMENT,
//  name VARCHAR(25)
//);
app.get("/addpro",(req,res)=>{
  //1:参数
  //var id = req.query.id;
  var name = req.query.name;
  //2:sql
  var sql =" INSERT INTO xz_pro";
      sql+=" VALUES(null,?)";
  pool.query(sql,[name],(err,result)=>{
    if(err)throw err;
    res.send({code:1,msg:"添加成功"});
  })    
  //3:json
})

// //vue_server_00/app.js
app.get("/search",(req,res)=>{
  //1:获取参数 key pno pageSize
  var key = req.query.key;
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //2:设置默认值 1 7
  if(!pno){
    pno = 1;
  }
  if(!pageSize){
    pageSize = 7;
  }
  //3:创建sql搜索商品信息
  var sql =" SELECT lid,lname,price";
     sql +=" FROM xz_laptop";
     sql +=" WHERE lname LIKE ?";
     sql +=" LIMIT ?,?";
  //4:offset pageSize
  var offset  = (pno-1)*pageSize;
  pageSize = parseInt(pageSize);
  pool.query(sql,
    ["%"+key+"%",offset,pageSize],
    (err,result)=>{
      if(err)throw err;
      res.send({code:1,data:result});
    });
  //5:发送sql
  //7:执行成功 {code:1,data:}
});







