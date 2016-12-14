var By = require('selenium-webdriver').By

module.exports = {
	Phone : '',
	Move : {
		MINE : By.css('#toolboxDiv .move'),
		ONE : By.css('g.blocklyFlyout > g > g.blocklyBlockCanvas > g'),
		TWO : By.css('g.blocklyFlyout > g > g.blocklyBlockCanvas > g:nth-child(4)'),
		move_keep_run : By.css(''),
	},
	Show : {
		MINE : By.css('#toolboxDiv .show'),
		ONE : By.css('g.blocklyFlyout > g > g.blocklyBlockCanvas > g'),
		TWO : By.css('g.blocklyFlyout > g > g.blocklyBlockCanvas > g:nth-child(4)'),
		THREE : By.css('g.blocklyFlyout > g > g.blocklyBlockCanvas > g:nth-child(6)'),
	},
	Sense : {
		MINE : By.css('#toolboxDiv .sense'),
		ONE : By.css('g.blocklyFlyout > g > g.blocklyBlockCanvas > g'),
	},


	Math : '',
	Control : {
		MINE : By.css('#toolboxDiv .flow'),
		ONE : By.css('g.blocklyFlyout > g > g.blocklyBlockCanvas > g'),
		wait : By.css(''),
	}
}

