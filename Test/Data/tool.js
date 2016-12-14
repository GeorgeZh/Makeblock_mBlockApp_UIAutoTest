var By = require('selenium-webdriver').By

module.exports = {
	Phone : '',
	Move : {
		MINE : By.css('#toolboxDiv .move'),
		move_with_time : By.css('g.blocklyFlyout > g > g.blocklyBlockCanvas > g'),
	},
	Show : {
		MINE : By.css('#toolboxDiv .show'),
		play_tone_pinao : By.css('g.blocklyFlyout > g > g.blocklyBlockCanvas > g'),
		set_mbot_leds_with_time : By.css('g.blocklyFlyout > g > g.blocklyBlockCanvas > g:nth-child(4)'),
		set_mbot_leds : By.css('g.blocklyFlyout > g > g.blocklyBlockCanvas > g:nth-child(6)'),
	},
	Sense : '',


	Math : '',
	Control : {
		MINE : By.css('#toolboxDiv .flow'),
		controls_repeat_ext : By.css('g.blocklyFlyout > g > g.blocklyBlockCanvas > g')
	}
}

