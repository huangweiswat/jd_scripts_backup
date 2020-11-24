/*
2
 * @Author: lxk0301 https://github.com/lxk0301 
3
 * @Date: 2020-11-12 11:42:12 
4
 * @Last Modified by: lxk0301
5
 * @Last Modified time: 2020-11-23 12:27:20
6
 */
7
/*
8
东东小窝 https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_small_home.js
9
现有功能：
10
做日常任务任务，每日抽奖（有机会活动京豆，使用的是免费机会，不消耗WO币）
11
助力好友：一个账号一天只能助力一次(即：每个人助力机会只有一次)
12
后期有空优化相互助力功能
13
TODO；装扮领京豆（使用WO币购买装饰品可以获得京豆，分别可获得5,20，50,100,200,400,700，1200京豆）
14
​
15
注：目前使用此脚本会给脚本内置的两个码进行助力，请知晓
16
​
17
APP活动入口：
18
京东APP首页 ->搜索 玩一玩 -> DIY理想家
19
或 京东APP -> 我的-> 游戏与更多 - > 东东小窝
20
微信小程序入口：
21
来客有礼 - > 首页 -> 东东小窝
22
网页入口（注：进入后不能再此刷新，否则会有问题，需重新输入此链接进入）
23
https://h5.m.jd.com/babelDiy/Zeus/2HFSytEAN99VPmMGZ6V4EYWus1x/index.html
24
​
25
已支持IOS双京东账号,Node.js支持N个京东账号
26
脚本兼容: QuantumultX, Surge, Loon, 小火箭，JSBox, Node.js
27
===============Quantumultx===============
28
[task_local]
29
#东东小窝
30
16 0 * * * https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_small_home.js, tag=东东小窝, img-url=https://raw.githubusercontent.com/58xinian/icon/master/ddxw.png  enabled=true
31
​
32
================Loon==============
33
[Script]
34
cron "16 0 * * *" script-path=https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_small_home.js, tag=东东小窝
35
​
36
===============Surge=================
37
东东小窝 = type=cron,cronexp="16 0 * * *",wake-system=1,timeout=20,script-path=https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_small_home.js
38
​
39
============小火箭=========
40
东东小窝 = type=cron,script-path=https://raw.githubusercontent.com/lxk0301/jd_scripts/master/jd_small_home.js, cronexpr="16 0 * * *", timeout=200, enable=true
41
 */
42
const $ = new Env('东东小窝');
43
const notify = $.isNode() ? require('./sendNotify') : '';
44
//Node.js用户请在jdCookie.js处填写京东ck;
45
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
