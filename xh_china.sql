SET NAMES UTF8;
DROP DATABASE IF EXISTS xh;
CREATE DATABASE xh CHARSET=UTF8;
USE xh;
/**用户信息**/
CREATE TABLE xh_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);

/**用户信息**/
INSERT INTO xh_user VALUES
(NULL, 'LL', '123456', '1428503223@qq.com', '13501234567', 'img/avatar/default.png', '凌渤', '1'),
(NULL, 'LB', '123456', '2392313921@qq.com', '13501234568', 'img/avatar/default.png', '李欢', '0'),
(NULL, 'CZQ', '123456', '33566189@qq.com', '13501234569', 'img/avatar/default.png', '陈志强', '1');


-- 评论列表
DROP TABLE IF EXISTS `xh_comment_list`;
CREATE TABLE `xh_comment_list` (
  `pid` int(11) NOT NULL,
  `title` varchar(64) DEFAULT NULL,
  `pic` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `xh_comment_list` (`pid`,`title`,`pic`) VALUES
(1,'有多少人知道，这些说唱歌手居然还隐藏着第二重身份','picture/sideber1.jpg'),
(2,'派克特暂隐退中文说唱圈','picture/sideber2.jpg'),
(3,'这些潮牌都在打折','picture/sideber3.png'),
(4,'现在的Rapper已经拽到不想演就不演了？我觉得不行。','picture/sideber4.jpg'),
(5,'审判结果出炉，不再是棋子的6ix9ine将作出何种选择？','picture/sideber5.jpg'),
(6,'火遍朋友圈的Know Know新歌抄袭了A妹？？','picture/sideber6.jpg'),
(7,'Jony J瞧不起idol还要当《青春有你》的说唱导师？','picture/sideber7.jpg'),
(8,'我眼里的2019中国说唱十佳专辑','picture/sideber8.jpg'),
(9,'当宋岳庭的《life’s a struggle》也遭到下架','picture/sideber9.jpg');
-- 文章
DROP TABLE IF EXISTS `xh_article`;
CREATE TABLE `xh_article` (
  `pid` int(11) NOT NULL,
  `title` varchar(64) DEFAULT NULL,
  `pic` varchar(128) DEFAULT NULL,
  `content` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `xh_article` (`pid`,`title`,`pic`,`content`) VALUES
(1,'Jony J的一次忘词，或许成就了如今的鬼卞！','picture/timthumb.jpg','12月15日，刚刚结束了演唱会的Jony J发微博，在字里行间中我们发现，接下来鬼老师会和自家厂牌Shooc一起走起！也就是说，鬼卞加入了Shooc厂牌…'),
(2,'火遍朋友圈的Know Know新歌抄袭了A妹？？','picture/timthumb7.jpg','前几天的朋友圈还在被Know Know的新歌刷屏，对于Know Know的新歌，网友们的反响也很不错，也很看好Higher brothers四人solo…    '),
(3,'Bridge对阿姨们说：如果你的孩子喜欢说唱，希望你能支持他','picture/timthumb4.jpg','上周六，叁加壹篮球联赛在重庆金开爱琴海李宁店举办总决赛，GOSH作为嘉宾出席，这是一个街头篮球比赛，观众未必了解说唱，而且商场里很多路人，于是Bridg…    '),
(4,'糟糕的2019终于快结束了。Drake：是吗我怎么没感觉？','picture/timthumb6.jpg','“糟糕的一年终于快结束了”，每年的末尾我们都喜欢这样说，还要说很多遍，假装明年会更好的亚子。 我不知道Drake有没有这么想过，但都快2020了，201…    '),
(5,'现在的Rapper已经拽到不想演就不演了？我觉得不行。','picture/timthumb5.jpg','当然，只是部分Rapper。 如果你上周末开冲了由Lil Xan和Junoflo领衔的音乐节，那可能多多少少都会有点失望，因为作为头牌艺人之一，Lil …    ');

-- 潮牌推荐
DROP TABLE IF EXISTS `xh_fashion_product`;
CREATE TABLE `xh_fashion_product` (
  `lid` int(11) NOT NULL,
  `title` varchar(64) DEFAULT NULL,
  `pic` varchar(128) DEFAULT NULL,
  `pic1` varchar(128) DEFAULT NULL,
  `pic2` varchar(128) DEFAULT NULL,
  `pic3` varchar(128) DEFAULT NULL,
  `pic4` varchar(128) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `href` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `xh_fashion_product`(`lid`,`title`,`pic1`,`pic2`,`pic3`,`pic4`,`price`,`href`) VALUES
(1,'NOT TO EXCEED 春季工装牛仔裤男拼接口袋宽松直筒抽绳束脚收脚裤','picture/product-list/Ptitle.jpg','picture/product-list/Ppicture1-l.jpg','picture/product-list/Ppicture1.1-l.jpg','picture/product-list/Ppicture1.2-l.jpg','178.00','/product_detail.html?lid=1'),
(2,'NUTTILY日系复古灯芯绒太空刺绣夹克男多口袋宽松翻领工装外套潮','picture/product-list/Ptitle.jpg','picture/product-list/Ppicture2-l.jpg','picture/product-list/Ppicture2.1-l.jpg','picture/product-list/Ppicture2.2-l.jpg','598.00','/product_detail.html?lid=2'),
(3,'NUTTILY 基础多色珊瑚绒情侣刺绣口袋拼接男士宽松圆领卫衣情侣','picture/product-list/Ptitle.jpg','picture/product-list/Ppicture3-l.jpg','picture/product-list/Ppicture3.1-l.jpg','picture/product-list/Ppicture3.2-l.jpg','298.00','/product_detail.html?lid=3'),
(4,'NOT TO EXCEED 春季潮牌腰带束脚水洗牛仔裤潮流百搭复古休闲长裤','picture/product-list/Ptitle.jpg','picture/product-list/Ppicture4-l.jpg','picture/product-list/Ppicture4.1-l.jpg','picture/product-list/Ppicture4.2-l.jpg','158.00','/product_detail.html?lid=4'),
(5,'NUTTILY  日系复古潮牌简约宽松拼接休闲百搭舒适直筒灯芯绒裤男','picture/product-list/Ptitle.jpg','picture/product-list/Ppicture5-l.jpg','picture/product-list/Ppicture5.1-l.jpg','picture/product-list/Ppicture5.2-l.jpg','190.00','/product_detail.html?lid=5'),
(6,'NUTTILY日系复古原创设计水洗浅牛仔色长裤宽松阔腿垂感牛仔裤男','picture/product-list/Ptitle.jpg','picture/product-list/Ppicture6-l.jpg','picture/product-list/Ppicture6.1-l.jpg','picture/product-list/Ppicture6.2-l.jpg','172.00','/product_detail.html?lid=6'),
(7,'NOT TO EXCEED春季国潮新款复古洗水做旧直筒休闲长裤宽松牛仔裤','picture/product-list/Ptitle.jpg','picture/product-list/Ppicture7-l.jpg','picture/product-list/Ppicture7.1-l.jpg','picture/product-list/Ppicture7.2-l.jpg','158.00','/product_detail.html?lid=7'),
(8,'NOT TO EXCEED 春季2020新款纯色直筒牛仔裤男深蓝百搭男休闲长裤','picture/product-list/Ptitle.jpg','picture/product-list/Ppicture8-l.jpg','picture/product-list/Ppicture8.1-l.jpg','picture/product-list/Ppicture8.2-l.jpg','158.00','/product_detail.html?lid=8'),
(9,'NOT TO EXCEED 春季新款直筒宽松纯色牛仔裤男深蓝色经典休闲长裤','picture/product-list/Ptitle.jpg','picture/product-list/Ppicture9-l.jpg','picture/product-list/Ppicture9.1-l.jpg','picture/product-list/Ppicture9.2-l.jpg','158.00','/product_detail.html?lid=9'),
(10,'NOT TO EXCEED 国潮2020双肩马甲包百搭实用个性小包街头战术背包','picture/product-list/Ptitle.jpg','picture/product-list/Ppicture10-l.jpg','picture/product-list/Ppicture10.1-l.jpg','picture/product-list/Ppicture10.2-l.jpg','138.00','/product_detail.html?lid=10')