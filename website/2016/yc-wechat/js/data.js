var data = {
    "inquiry_type": "1", "insurances": [{
        "insurance_id": "1",
        "type": "1",
        "number": "QZ01",
        "name": "交强险/车船税",
        "description": "发生车险事故时，赔偿对第三方造成的人身及财产损失（不保本车及车上人员），强制购买    100%用户购买",
        "status": "1",
        "SDEW": "0",
        "rank": "1",
        "created_at": "-0001-11-30 00:00:00",
        "updated_at": "-0001-11-30 00:00:00",
        "styles": [{"style_id": "1", "insurance_id": "1", "name": "投保", "status": "1", "rank": "1"}]
    }, {
        "insurance_id": "2",
        "type": "2",
        "number": "JC01",
        "name": "车损险",
        "description": "车辆发生碰撞时，赔偿自己车辆损失的费用，是对车最基本的保障   90%用户购买",
        "status": "1",
        "checked_style": {
            id: 2,
            name: '投保'
        },
        "is_pay": 0,
        "SDEW": "1",
        "rank": "1",
        "created_at": "-0001-11-30 00:00:00",
        "updated_at": "-0001-11-30 00:00:00",
        "styles": [{"style_id": "2", "insurance_id": "2", "name": "投保", "status": "1", "rank": "1"}, {
            "style_id": "3",
            "insurance_id": "2",
            "name": "不投保",
            "status": "1",
            "rank": "2"
        }]
    }, {
        "insurance_id": "3",
        "type": "2",
        "number": "JC02",
        "name": "三者险",
        "description": "撞上土豪、撞坏豪车真心赔不起，而三者险就是用于赔偿这类对他人造成的人身及财产损失",
        "status": "1",
        "SDEW": "1",
        "rank": "2",
        "created_at": "-0001-11-30 00:00:00",
        "updated_at": "-0001-11-30 00:00:00",
        "styles": [{"style_id": "4", "insurance_id": "3", "name": "不投保", "status": "1", "rank": "1"}, {
            "style_id": "5",
            "insurance_id": "3",
            "name": "5万",
            "status": "1",
            "rank": "2"
        }, {"style_id": "6", "insurance_id": "3", "name": "10万", "status": "1", "rank": "3"}, {
            "style_id": "7",
            "insurance_id": "3",
            "name": "20万",
            "status": "1",
            "rank": "4"
        }, {"style_id": "8", "insurance_id": "3", "name": "30万", "status": "1", "rank": "5"}, {
            "style_id": "9",
            "insurance_id": "3",
            "name": "50万",
            "status": "1",
            "rank": "6"
        }, {"style_id": "10", "insurance_id": "3", "name": "100万", "status": "1", "rank": "7"}, {
            "style_id": "11",
            "insurance_id": "3",
            "name": "200万",
            "status": "1",
            "rank": "8"
        }]
    }, {
        "insurance_id": "4",
        "type": "2",
        "number": "JC03",
        "name": "盗抢险",
        "description": "赔偿全车被盗、抢劫、抢夺造成的车辆损失  54%用户购买",
        "status": "1",
        "SDEW": "1",
        "rank": "3",
        "created_at": "-0001-11-30 00:00:00",
        "updated_at": "-0001-11-30 00:00:00",
        "styles": [{
            "style_id": "12",
            "insurance_id": "4",
            "name": "投保",
            "status": "1",
            "rank": "1"
        }, {"style_id": "13", "insurance_id": "4", "name": "不投保", "status": "1", "rank": "2"}]
    }, {
        "insurance_id": "5",
        "type": "2",
        "number": "JC04",
        "name": "司机座位险",
        "description": "驾驶者自身责任发生车险事故，赔偿车内驾驶员自身的伤亡和医疗费用  60%用户购买",
        "status": "1",
        "SDEW": "1",
        "rank": "4",
        "created_at": "-0001-11-30 00:00:00",
        "updated_at": "-0001-11-30 00:00:00",
        "styles": [{
            "style_id": "14",
            "insurance_id": "5",
            "name": "不投保",
            "status": "1",
            "rank": "1"
        }, {"style_id": "15", "insurance_id": "5", "name": "1万", "status": "1", "rank": "2"}, {
            "style_id": "16",
            "insurance_id": "5",
            "name": "2万",
            "status": "1",
            "rank": "3"
        }, {"style_id": "17", "insurance_id": "5", "name": "3万", "status": "1", "rank": "4"}, {
            "style_id": "18",
            "insurance_id": "5",
            "name": "5万",
            "status": "1",
            "rank": "5"
        }, {"style_id": "19", "insurance_id": "5", "name": "10万", "status": "1", "rank": "6"}]
    }, {
        "insurance_id": "6",
        "type": "2",
        "number": "JC05",
        "name": "乘客座位险",
        "description": "发生车险事故时，赔偿车内乘客的伤亡和医疗费用   67%用户购买",
        "status": "1",
        "SDEW": "1",
        "rank": "5",
        "created_at": "-0001-11-30 00:00:00",
        "updated_at": "-0001-11-30 00:00:00",
        "styles": [{
            "style_id": "20",
            "insurance_id": "6",
            "name": "不投保",
            "status": "1",
            "rank": "1"
        }, {"style_id": "21", "insurance_id": "6", "name": "1万", "status": "1", "rank": "2"}, {
            "style_id": "22",
            "insurance_id": "6",
            "name": "2万",
            "status": "1",
            "rank": "3"
        }, {"style_id": "23", "insurance_id": "6", "name": "3万", "status": "1", "rank": "4"}, {
            "style_id": "24",
            "insurance_id": "6",
            "name": "5万",
            "status": "1",
            "rank": "5"
        }, {"style_id": "25", "insurance_id": "6", "name": "10万", "status": "1", "rank": "6"}]
    }, {
        "insurance_id": "7",
        "type": "3",
        "number": "FJ01",
        "name": "玻璃险",
        "description": "赔偿车窗、挡风玻璃的单独开裂、破碎损失  47%用户购买",
        "status": "1",
        "SDEW": "0",
        "rank": "1",
        "created_at": "-0001-11-30 00:00:00",
        "updated_at": "-0001-11-30 00:00:00",
        "styles": [{
            "style_id": "26",
            "insurance_id": "7",
            "name": "不投保",
            "status": "1",
            "rank": "1"
        }, {"style_id": "27", "insurance_id": "7", "name": "国产", "status": "1", "rank": "2"}, {
            "style_id": "28",
            "insurance_id": "7",
            "name": "进口",
            "status": "1",
            "rank": "3"
        }]
    }, {
        "insurance_id": "8",
        "type": "3",
        "number": "FJ02",
        "name": "涉水险",
        "description": "车辆在积水路面涉水行驶或被水淹后，致发动机损坏给予赔偿  34%用户购买",
        "status": "1",
        "SDEW": "0",
        "rank": "2",
        "created_at": "-0001-11-30 00:00:00",
        "updated_at": "-0001-11-30 00:00:00",
        "styles": [{
            "style_id": "29",
            "insurance_id": "8",
            "name": "投保",
            "status": "1",
            "rank": "1"
        }, {"style_id": "30", "insurance_id": "8", "name": "不投保", "status": "1", "rank": "2"}]
    }, {
        "insurance_id": "9",
        "type": "3",
        "number": "FJ03",
        "name": "划痕险",
        "description": "赔偿车身表面油漆单独划伤的损失；行驶碰撞的划痕损失归车损险43%用户购买",
        "status": "1",
        "SDEW": "0",
        "rank": "3",
        "created_at": "-0001-11-30 00:00:00",
        "updated_at": "-0001-11-30 00:00:00",
        "styles": [{
            "style_id": "31",
            "insurance_id": "9",
            "name": "不投保",
            "status": "1",
            "rank": "1"
        }, {"style_id": "32", "insurance_id": "9", "name": "2000", "status": "1", "rank": "2"}, {
            "style_id": "33",
            "insurance_id": "9",
            "name": "5000",
            "status": "1",
            "rank": "3"
        }, {"style_id": "34", "insurance_id": "9", "name": "1万", "status": "1", "rank": "4"}, {
            "style_id": "35",
            "insurance_id": "9",
            "name": "2万",
            "status": "1",
            "rank": "5"
        }]
    }, {
        "insurance_id": "10",
        "type": "3",
        "number": "FJ04",
        "name": "自燃险",
        "description": "因车辆自身发生问题引起燃烧时，赔偿因此造成的电器线路和供油系统的维修损失   32%用户购买",
        "status": "1",
        "SDEW": "0",
        "rank": "4",
        "created_at": "-0001-11-30 00:00:00",
        "updated_at": "-0001-11-30 00:00:00",
        "styles": [{
            "style_id": "36",
            "insurance_id": "10",
            "name": "投保",
            "status": "1",
            "rank": "1"
        }, {"style_id": "37", "insurance_id": "10", "name": "不投保", "status": "1", "rank": "2"}]
    }, {
        "insurance_id": "11",
        "type": "3",
        "number": "FJ05",
        "name": "新增加设备损失险",
        "description": "负责赔偿车辆由于发生碰撞等意外事故而造成的车上新增设备的直接损失",
        "status": "1",
        "SDEW": "0",
        "rank": "5",
        "created_at": "-0001-11-30 00:00:00",
        "updated_at": "-0001-11-30 00:00:00",
        "styles": [{
            "style_id": "38",
            "insurance_id": "11",
            "name": "投保",
            "status": "1",
            "rank": "1"
        }, {"style_id": "39", "insurance_id": "11", "name": "不投保", "status": "1", "rank": "2"}]
    }, {
        "insurance_id": "12",
        "type": "3",
        "number": "FJ06",
        "name": "修理期间费用补偿险",
        "description": "保险期间内，发生机动车损失保险责任范围内的事故，造成车身损毁，致使被保险机动车停驶，向被保险人补偿修理期间费用，作为代步车费用或弥补停驶损失。",
        "status": "1",
        "SDEW": "0",
        "rank": "6",
        "created_at": "-0001-11-30 00:00:00",
        "updated_at": "-0001-11-30 00:00:00",
        "styles": [{
            "style_id": "40",
            "insurance_id": "12",
            "name": "投保",
            "status": "1",
            "rank": "1"
        }, {"style_id": "41", "insurance_id": "12", "name": "不投保", "status": "1", "rank": "2"}]
    }, {
        "insurance_id": "13",
        "type": "3",
        "number": "FJ07",
        "name": "车上货物责任险",
        "description": "致使保险车辆上所载货物遭受直接损毁，依法应由被保险人承担的经济赔偿责任，以及被保险人为减少车上货物损失而支付的合理的施救、保护费用，由保险人在保险单载明的赔偿限额内计算赔偿的保险。在投保了第三者责任险的基础上方可投保车上货物责任保险",
        "status": "1",
        "SDEW": "0",
        "rank": "7",
        "created_at": "-0001-11-30 00:00:00",
        "updated_at": "-0001-11-30 00:00:00",
        "styles": [{
            "style_id": "42",
            "insurance_id": "13",
            "name": "投保",
            "status": "1",
            "rank": "1"
        }, {"style_id": "43", "insurance_id": "13", "name": "不投保", "status": "1", "rank": "2"}]
    }, {
        "insurance_id": "14",
        "type": "3",
        "number": "FJ08",
        "name": "精神损害抚慰金责任险",
        "description": "致使第三者或本车上人员的伤残、死亡或怀孕妇女意外流产，受害方据此提出精神损失赔偿请求",
        "status": "1",
        "SDEW": "0",
        "rank": "8",
        "created_at": "-0001-11-30 00:00:00",
        "updated_at": "-0001-11-30 00:00:00",
        "styles": [{
            "style_id": "44",
            "insurance_id": "14",
            "name": "投保",
            "status": "1",
            "rank": "1"
        }, {"style_id": "45", "insurance_id": "14", "name": "不投保", "status": "1", "rank": "2"}]
    }, {
        "insurance_id": "15",
        "type": "3",
        "number": "FJ09",
        "name": "机动车损失保险无法找到第三方特约险",
        "description": "保险事故发生后，应当承担事故责任的第三方无法找到时，被保险人向保险公司索赔",
        "status": "1",
        "SDEW": "0",
        "rank": "9",
        "created_at": "-0001-11-30 00:00:00",
        "updated_at": "-0001-11-30 00:00:00",
        "styles": [{
            "style_id": "46",
            "insurance_id": "15",
            "name": "投保",
            "status": "1",
            "rank": "1"
        }, {"style_id": "47", "insurance_id": "15", "name": "不投保", "status": "1", "rank": "2"}]
    }, {
        "insurance_id": "16",
        "type": "3",
        "number": "FJ10",
        "name": "指定修理厂险",
        "description": "要求车辆在出险后可自主选择具有被保险机动车辆专修资格的修理厂进行修理",
        "status": "1",
        "SDEW": "0",
        "rank": "10",
        "created_at": "-0001-11-30 00:00:00",
        "updated_at": "-0001-11-30 00:00:00",
        "styles": [{
            "style_id": "48",
            "insurance_id": "16",
            "name": "投保",
            "status": "1",
            "rank": "1"
        }, {"style_id": "49", "insurance_id": "16", "name": "不投保", "status": "1", "rank": "2"}]
    }], "form_data": {
        "insurance": "1", "risks": "30万", "is_risks": "2"
    }
}