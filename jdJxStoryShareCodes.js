/*
京喜故事互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等Node.js用户在此处填写京喜故事的好友码。
// github action用户的好友互助码填写到Action->Settings->Secrets->new Secret里面(Name填写 JXSTORY_SHARECODES(此处的Name必须按此来写,不能随意更改),内容处填写互助码,填写规则如下)
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let shareCodes = [
  'Fgv1jJKXYIKOi34ckY4lC8jy0ppMRnPPNKlyEn_2NJU@0kIkfjpjak7DnW96gHaqpvKxYjFSf-aNwPhjuSwBHTM=@BtFiJeXCID1FHaTuzvUc0NoUyOEGcHyv0pfXa8SwRLM=@L_8SmNTbHCBayCqwvB4Dog8lphsjdPiEVl7EcNQ9_9s=',//账号一的好友shareCode,不同好友中间用@符号隔开
  'doiDrm6jffYtf5hlRzBlM6nWvY_xy94spa9-6r3GyVM=@0kIkfjpjak7DnW96gHaqpvKxYjFSf-aNwPhjuSwBHTM=@BtFiJeXCID1FHaTuzvUc0NoUyOEGcHyv0pfXa8SwRLM=@L_8SmNTbHCBayCqwvB4Dog8lphsjdPiEVl7EcNQ9_9s=',//账号二的好友shareCode
  'doiDrm6jffYtf5hlRzBlM6nWvY_xy94spa9-6r3GyVM=@Fgv1jJKXYIKOi34ckY4lC8jy0ppMRnPPNKlyEn_2NJU=@BtFiJeXCID1FHaTuzvUc0NoUyOEGcHyv0pfXa8SwRLM=@L_8SmNTbHCBayCqwvB4Dog8lphsjdPiEVl7EcNQ9_9s=',
  'doiDrm6jffYtf5hlRzBlM6nWvY_xy94spa9-6r3GyVM=@Fgv1jJKXYIKOi34ckY4lC8jy0ppMRnPPNKlyEn_2NJU=@0kIkfjpjak7DnW96gHaqpvKxYjFSf-aNwPhjuSwBHTM=@L_8SmNTbHCBayCqwvB4Dog8lphsjdPiEVl7EcNQ9_9s='
]
// 判断github action里面是否有京喜故事互助码
if (process.env.JXSTORY_SHARECODES) {if (process.env.JXSTORY_SHARECODES.indexOf('&') > -1) {
    console.log(`您的互助码选择的是用&隔开\n`)
    shareCodes = process.env.JXSTORY_SHARECODES.split('&');
  } else if (process.env.JXSTORY_SHARECODES.indexOf('\n') > -1) {
    console.log(`您的互助码选择的是用换行隔开\n`)
    shareCodes = process.env.JXSTORY_SHARECODES.split('\n');
  } else {
    shareCodes = process.env.JXSTORY_SHARECODES.split();
  }
} else if (process.env.JXSTORY_SHARECODES) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < shareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['shareCodes' + index] = shareCodes[i];
}
