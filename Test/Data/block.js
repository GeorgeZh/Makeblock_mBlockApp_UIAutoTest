var By = require('selenium-webdriver').By

module.exports = {
	move : {
		forward : By.css('.blocklyWidgetDiv .goog-menuitem:nth-child(1)'),
		backward : By.css('.blocklyWidgetDiv .goog-menuitem:nth-child(2)'),
		turnLeft : By.css('.blocklyWidgetDiv .goog-menuitem:nth-child(3)'),
		turnRight : By.css('.blocklyWidgetDiv .goog-menuitem:nth-child(4)')
	},
}