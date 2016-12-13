/**************************************************************
*	Copyright (c) 2015, Zhang Shuzheng All rights reserved.
*
*	2015-03-12
*
*	����:��ˡ��
*
*	��ҳ��http://www.zhangshuzheng.cn/
*
*	���䣺469741414@qq.com
*
**************************************************************/

/**
 * jsonpץȡԶ����ַ���ݣ�ȫ���׼�֧��json��������ƽ̨
 * @param url
 * @param code
 * @param callback
 * @version 2015/03/12
 */
var JsonpUp =  {
	load : function(url, code, callback) {
		$.ajax({
			data: 'url=' + url + '&code=' + code,
			dataType: "jsonp", 
			jsonp:"callback",
			jsonpCallback : "getHtml",
			url: "http://192.168.1.23:8080/zheng/api/jsonp",
			success: function (json) {
				if (callback && (callback  instanceof Function)) {
					callback(json.result);
				}
			},
			error: function (xhr, status, ex) {
				if (callback && (callback  instanceof Function)) {
					callback('error');
				}
			}
		});
	}
}