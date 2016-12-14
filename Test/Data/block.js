var By = require('selenium-webdriver').By

module.exports = {
	move : {
		forward : By.css('.blocklyWidgetDiv .goog-menuitem:nth-child(1)'),
		backward : By.css('.blocklyWidgetDiv .goog-menuitem:nth-child(2)'),
		turnLeft : By.css('.blocklyWidgetDiv .goog-menuitem:nth-child(3)'),
		turnRight : By.css('.blocklyWidgetDiv .goog-menuitem:nth-child(4)')
	},
	color : {
		red : By.css('.blocklyWidgetDiv .goog-palette-cell:nth-child(1)'),
		orange : By.css('.blocklyWidgetDiv .goog-palette-cell:nth-child(2)'),
		yellow : By.css('.blocklyWidgetDiv .goog-palette-cell:nth-child(3)'),
		green : By.css('.blocklyWidgetDiv .goog-palette-cell:nth-child(4)'),
		cyan : By.css('.blocklyWidgetDiv .goog-palette-cell:nth-child(5)'),
		blue : By.css('.blocklyWidgetDiv .goog-palette-cell:nth-child(6)'),
		purple : By.css('.blocklyWidgetDiv .goog-palette-cell:nth-child(7)'),
		black : By.css('.blocklyWidgetDiv .goog-palette-cell:nth-child(8)'),
		white : By.css('.blocklyWidgetDiv .goog-palette-cell:nth-child(9)'),
	},
	pinao : {
		C5 : By.css('#piano-keys > div > div.piano-key.note-name-C5'),
		D5 : By.css('#piano-keys > div > div.piano-key.note-name-D5'),
		E5 : By.css('#piano-keys > div > div.piano-key.note-name-E5'),
		F5 : By.css('#piano-keys > div > div.piano-key.note-name-F5'),
		G5 : By.css('#piano-keys > div > div.piano-key.note-name-G5'),
		A5 : By.css('#piano-keys > div > div.piano-key.note-name-A5'),
		B5 : By.css('#piano-keys > div > div.piano-key.note-name-B5'),
		C6 : By.css('#piano-keys > div > div.piano-key.note-name-C5'),
		quarter : By.css('.blocklyWidgetDiv .goog-menuitem:nth-child(1)'),
		half : By.css('.blocklyWidgetDiv .goog-menuitem:nth-child(2)'),
		eighth : By.css('.blocklyWidgetDiv .goog-menuitem:nth-child(3)'),
		whole : By.css('.blocklyWidgetDiv .goog-menuitem:nth-child(4)'),
		double : By.css('.blocklyWidgetDiv .goog-menuitem:nth-child(5)'),
	}
}