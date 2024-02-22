/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  USE_PASSAGE: "wechat-test",

  // 使用微信测试号：公众号APP_ID
  APP_ID: "",

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: "",

  PROVINCE: "湖北",
  CITY: "武汉",

  USERS: [
    {
      // 想要发送的人的名字
      name: "元宝",
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "ojNe959X56NLBD6ENeE1LWFlcnEg",
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: "AYNA-zzlqX83rDx2eosq0B275CcFTnm9U-m_YT_zC-s",
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: "08-28",
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: "*生日",
          name: "元宝",
          year: "1996",
          date: "07-15",
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: "生日",
          name: "元宝",
          year: "1996",
          date: "08-28",
        },
        {
          type: "纪念日",
          name: "定亲",
          year: "2023",
          date: "11-18",
        },
        {
          type: "纪念日",
          name: "结婚",
          year: "2023",
          date: "12-02",
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: "love_day", date: "2021-10-21" },
        // 邂逅纪念日
        { keyword: "miss_day", date: "2021-10-13" },
        { keyword: "get_marry_day", date: "2023-12-02" },
      ],
    },
    {
      // 想要发送的人的名字
      name: "七七",
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "ojNe952Rt52tVUUAmgHqn7lpcLuw",
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: "AYNA-zzlqX83rDx2eosq0B275CcFTnm9U-m_YT_zC-s",
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: "08-28",
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: "*生日",
          name: "元宝",
          year: "1996",
          date: "07-15",
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: "生日",
          name: "元宝",
          year: "1996",
          date: "08-28",
        },
        // {
        //   type: "节日",
        //   name: "定亲",
        //   year: "2023",
        //   date: "11-18",
        // },
        // {
        //   type: "节日",
        //   name: "结婚",
        //   year: "2023",
        //   date: "12-02",
        // },
        {
          type: "纪念日",
          name: "定亲",
          year: "2023",
          date: "11-18",
        },
        {
          type: "纪念日",
          name: "结婚",
          year: "2023",
          date: "12-02",
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: "love_day", date: "2021-10-21" },
        // 邂逅纪念日
        { keyword: "miss_day", date: "2021-10-13" },
        { keyword: "get_marry_day", date: "2023-12-02" },
      ],
    },
  ],
  // earthy_love_words
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "e55rfMv7GFao-J1tJNsQTbdgDs2ZJQRsaQNwrLeBJOs",

  CALLBACK_USERS: [
    {
      name: "七七",
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "ojNe952Rt52tVUUAmgHqn7lpcLuw",
    },
  ],
};

module.exports = USER_CONFIG;

/* 🗓️{{date.DATA}}

今天是我们在一起的第{{love_day.DATA}}天，爱你❤️

今日{{city.DATA}}天气☁️：{{weather.DATA}}
温度🌡️: {{min_temperature.DATA}}-{{max_temperature.DATA}}
风向：{{wind_direction.DATA}}
风级：{{wind_scale.DATA}}
湿度：{{shidu.DATA}}
空气质量：{{aqi.DATA}}/{{quality.DATA}}
预防感冒提醒：{{ganmao.DATA}}
生日：{{birthday_message.DATA}}
定亲：{{wx_birthday_2.DATA}}
结婚：{{wx_birthday_3.DATA}}

「{{earthy_love_words_0.DATA}}{{earthy_love_words_1.DATA}}{{earthy_love_words_2.DATA}}{{earthy_love_words_3.DATA}}{{earthy_love_words_4.DATA}}」

今天也要好好爱老公嗷~ */
