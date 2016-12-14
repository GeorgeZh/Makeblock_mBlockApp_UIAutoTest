var By = require('selenium-webdriver').By

module.exports = {

	// BLUETOOTH : By.css('#connection-modal'),
	CLASSMODE: By.css('#classmode'),
	CREATIONMODE: By.css('#routerView > section > section > div > div:nth-child(2) > div > div > a'),

	LESSON : {
		ONE : By.css('#routerView li:nth-child(1) > a'),
		TWO : By.css('#routerView li:nth-child(2) > a'),
		THREE : By.css('#routerView li:nth-child(3) > a'),
	},

	TASK : {
		ONE : By.xpath('//*[@id="routerView"]/section/section/section[2]/section/section/section/ul/li[1]/div[1]/a'),
		TWO : By.xpath('//*[@id="routerView"]/section/section/section[2]/section/section/section/ul/li[1]/div[2]/a'),
		THREE : By.xpath('//*[@id="routerView"]/section/section/section[2]/section/section/section/ul/li[1]/div[3]/a'),
		FOUR : By.xpath('//*[@id="routerView"]/section/section/section[2]/section/section/section/ul/li[2]/div[3]/a'),
		FIVE : By.xpath('//*[@id="routerView"]/section/section/section[2]/section/section/section/ul/li[2]/div[2]/a'),
		SIX : By.xpath('//*[@id="routerView"]/section/section/section[2]/section/section/section/ul/li[2]/div[1]/a'),
		SEVEN : By.xpath('//*[@id="routerView"]/section/section/section[2]/section/section/section/ul/li[3]/div[1]/a'),
		EIGHT : By.xpath('//*[@id="routerView"]/section/section/section[2]/section/section/section/ul/li[3]/div[2]/a'),
		NINE : By.xpath('//*[@id="routerView"]/section/section/section[2]/section/section/section/ul/li[3]/div[3]/a'),
		TEN : By.xpath('//*[@id="routerView"]/section/section/section[2]/section/section/section/ul/li[4]/div[3]/a')
	},

	WORKSPACE : By.css('#blockWorkSpace'),

	GUIDE : 'guideGridMask',
	GESTURE : 'gestureSvg',

	MISSIONWARN : By.css('#routerView > div > section > div.tasktips-warp > div'),
	WIDGET : By.css('.blocklyWidgetDiv'),
	RUN : By.css('#runCode'),
	NEXTMISSION : By.css('#nextMissionBox'),
	SUCCESS : By.css('#missionSuccess'),

	BIN : By.css('#toolboxDiv')

}
