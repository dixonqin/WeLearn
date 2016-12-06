var wrapper = require('../wrapper');
var Student = require('../Models/Student');

exports.checkListSchedule = function (msg) {
    if (msg.Content === 'schedule')
        return true;
};

exports.handleListSchedule = function (req, res) {
    Student.findOne({openid: req.weixin.FromUserName}, function(err,doc) {
        if (!doc) {
            res.reply("请先进行绑定");
            return;
        }
        else {
            res.reply([
                {
                    title: '我的课表',
                    description: '点击即可查看我的课表',
                    url: wrapper.urlScheduleInfo() + '?openid=' + req.weixin.FromUserName
                }
            ]);
        }
    });
};