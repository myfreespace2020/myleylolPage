function userLan(){
	var language = window.navigator.userLanguage || window.navigator.language;
	var map_lang = {
		"zh-TW": {
			quote: ["08就是愛單機遊戲啦，2014年接觸Steam，2017開始瘋狂加遊戲庫，喜歡RPG，尤其是JRPG遊戲，歡迎各位30cm&E奶認親","如果需要聯繫我的，請至我的Steam加我好友，Steam很常在線上，有什麼問題歡迎Steam私訊我", "日常都用FB通信，不過盡量還是用Steam聯繫", "論壇私訊需要耗體力，所以發給我消息我會已讀不回(不是不理你)，非要使用私訊的話請先加給我需要耗費的體力，謝謝"],
			friend: ["加好友", "聊天"]
		},
		"zh-CN": {
			quote: ["单机游戏爱好者，2014年接触Steam，2017踏上喜+1的道路，喜欢RPG，尤其是JRPG游戏，欢迎大佬加好友，py一个；keylol大佬个个都是人才，说话又好听，超喜欢在里面的","如果需要联系我的，请至我的Steam加我好友，Steam很常在线上，有什么问题欢迎Steam私讯我", "完全没有在用微信、QQ，所以找我请用Steam联系", "论坛私讯需要耗体力，所以发给我消息我会已读不回(不是不理你，萌新我真的很想升级)，非要使用私讯的话请先加给我需要耗费的体力，谢谢"],
			friend: ["加好友", "聊天"]		
		},
		other: {
			quote: ["I love single player games, and I get addicted to RPG games, especially JRPG games. It's my pleasure to meet you.","Feel free to contact me if you have any problem, please use Steam to reach me", "Using Steam to chat is the literacy of an OG(Original Gamer)", "It takes \"Ti-Li\" to send private message in keylol, so if you use this function to chat, I will NOT response to you"],
			friend: ["Add friend", "Chat"]
		}	
	};
	var to_trans;
	if(map_lang.hasOwnProperty(language))
		to_trans = map_lang[language]
	else 
		to_trans = map_lang.other;
	
	Array.from(document.querySelectorAll("[id^='quote-']")).forEach(e => {
		console.log(e);
		e.innerText = to_trans.quote[parseInt(e.getAttribute("id").replace("quote-", ""))];	
	});
	
	Array.from(document.querySelectorAll("[id^='friend-']")).forEach(e => {
		e.innerText = to_trans.friend[parseInt(e.getAttribute("id").replace("friend-", ""))];	
	});
	
	
}

window.onload = function(){
	userLan();
	
}