0 */1 * * * git -C /scripts/ pull >> /scripts/logs/pull.log 2>&1
2
2 */1 * * * crontab /scripts/docker/${CRONTAB_LIST_FILE}
3
3 */1 * * * npm install --prefix /scripts >> /scripts/logs/npm_install.log 2>&1
4
# 每3天的23:50分清理一次日志
5
50 23 */3 * * rm -rf /scripts/logs/*.log
6
​
7
​
8
##############短期活动##############
9
​
10
# 手机狂欢城
11
0 0-18/6,9 * * * node /scripts/jd_818.js >> /scripts/logs/jd_818.log 2>&1
12
# 星推官
13
#0,10 0 * * * node /scripts/jd_xtg.js >> /scripts/logs/jd_xtg.log 2>&1
14
# 京东全民营业领金币
15
0 */1 * * * node /scripts/jd_collectProduceScore.js >> /scripts/logs/jd_collectProduceScore.log 2>&1
16
​
17
​
18
##############长期活动##############
19
​
20
# 签到
21
0 0,12,18 * * * node /scripts/jd_bean_sign.js >> /scripts/logs/jd_bean_sign.log 2>&1
22
# 京小超兑换奖品
23
0 0 * * * node /scripts/jd_blueCoin.js >> /scripts/logs/jd_blueCoin.log 2>&1
24
# 摇京豆
25
0 0 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1
26
# 东东农场
27
5 6-18/6 * * * node /scripts/jd_fruit.js >> /scripts/logs/jd_fruit.log 2>&1
28
# 宠汪汪
29
15 */2 * * * node /scripts/jd_joy.js >> /scripts/logs/jd_joy.log 2>&1
30
# 宠汪汪喂食
31
15 */1 * * * node /scripts/jd_joy_feedPets.js >> /scripts/logs/jd_joy_feedPets.log 2>&1
32
# 宠汪汪积分兑换奖品
33
0 0-16/8 * * * node /scripts/jd_joy_reward.js >> /scripts/logs/jd_joy_reward.log 2>&1
34
# 宠汪汪偷好友积分与狗粮
35
0 0,6 * * * node /scripts/jd_joy_steal.js >> /scripts/logs/jd_joy_steal.log 2>&1
36
# 摇钱树
37
0 */2 * * * node /scripts/jd_moneyTree.js >> /scripts/logs/jd_moneyTree.log 2>&1
38
# 东东萌宠
39
5 6-18/6 * * * node /scripts/jd_pet.js >> /scripts/logs/jd_pet.log 2>&1
40
# 京东种豆得豆
41
0 7-22/1 * * * node /scripts/jd_plantBean.js >> /scripts/logs/jd_plantBean.log 2>&1
42
# 京东全民开红包
43
1 1 * * * node /scripts/jd_redPacket.js >> /scripts/logs/jd_redPacket.log 2>&1
44
# 进店领豆
45
10 0 * * * node /scripts/jd_shop.js >> /scripts/logs/jd_shop.log 2>&1
