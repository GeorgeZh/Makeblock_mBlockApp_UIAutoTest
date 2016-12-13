
'use strict'

const driver = require('../Driver/driver').getDriver()
const should = require('should')
const By = require('selenium-webdriver').By
var until = require('selenium-webdriver').until
const Condition = require('selenium-webdriver/lib/webdriver').Condition

var timeout = 3000;

module.exports.setTimeout = function(time){
	timeout = time;
}

module.exports.titleIs = function(string,time){
	if(time == undefined){
		driver.wait(until.titleIs(string),timeout);
	}else{
		driver.wait(until.titleIs(string),time);
	};
};

module.exports.titleContains = function(string,time){
	if(time == undefined){
		driver.wait(until.titleContains(string),timeout);
	}else{
		driver.wait(until.titleContains(string),time);
	};
};

module.exports.urlIs = function(string,time){
	if(time == undefined){
		driver.wait(until.urlIs(string),timeout);
	}else{
		driver.wait(until.urlIs(string),time);
	};
};

module.exports.urlContains = function(string,time){
	if(time == undefined){
		driver.wait(until.urlContains(string),timeout);
	}else{
		driver.wait(until.urlContains(string),time);
	};
};

module.exports.elementCssValueIs = function(locator,css,value,time){
	var equal = function(value){
		return new Condition('until element ' + JSON.stringify(css) + 'to be' + JSON.stringify(value),
			function(driver){
				return driver.findElement(locator).getCssValue(css).then(function(v){
					return v === value;
				});
			});
	};
	if(time == undefined){
		driver.wait(equal(value),timeout);
	}else{
		driver.wait(equal(value),time);
	};
};

module.exports.elementCssValueContains = function(locator,css,value,time){
	var containEql = function(value){
		return new Condition('until element ' + JSON.stringify(css) + 'to contains' + JSON.stringify(value),
			function(driver){
				return driver.findElement(locator).getCssValue(css).then(function(v){
					return v.indexOf(value) !== -1;
				});
			});
	};
	if(time == undefined){
		driver.wait(containEql(value),timeout);
	}else{
		driver.wait(containEql(value),time);
	};
};

module.exports.elementAttributeIs = function(locator,attribute,value,time){
	var equal = function(value){
		return new Condition('until element ' + JSON.stringify(attribute) + 'to be' + JSON.stringify(value),
			function(driver){
				return driver.findElement(locator).getAttribute(attribute).then(function(v){
					return v === value;
				});
			});
	};
	if(time == undefined){
		driver.wait(equal(value),timeout);
	}else{
		driver.wait(equal(value),time);
	};
};

module.exports.elementAttributeContains = function(locator,attribute,value,time){
	var containEql = function(value){
		return new Condition('until element ' + JSON.stringify(attribute) + 'to contains' + JSON.stringify(value),
			function(driver){
				return driver.findElement(locator).getAttribute(attribute).then(function(v){
					return v.indexOf(value) !== -1;
				});
			});
	};
	if(time == undefined){
		driver.wait(containEql(value),timeout);
	}else{
		driver.wait(containEql(value),time);
	};
};

module.exports.elementTextIs = function(locator,value,time){
	if(time == undefined){
		driver.wait(until.elementTextIs(driver.findElement(locator),value),timeout);
	}else{
		driver.wait(until.elementTextIs(driver.findElement(locator),value),time);
	};
};

module.exports.elementTextContains = function(locator,value,time){
	if(time == undefined){
		driver.wait(elementTextContains(driver.findElement(locator),value),timeout);
	}else{
		driver.wait(elementTextContains(driver.findElement(locator),value),time);
	};
};

module.exports.elementLocated = function(locator,time){
	if(time == undefined){
		driver.wait(until.elementLocated(locator),timeout);
	}else{
		driver.wait(until.elementLocated(locator),time);
	};
};

module.exports.elementIsVisible = function(locator,time){
	if(time == undefined){
		driver.wait(until.elementIsVisible(driver.findElement(locator)),timeout);
	}else{
		driver.wait(until.elementIsVisible(driver.findElement(locator)),time);
	};
};

module.exports.elementIsNotVisible = function(locator,time){
	if(time == undefined){
		driver.wait(until.elementIsNotVisible(driver.findElement(locator)),timeout);
	}else{
		driver.wait(until.elementIsNotVisible(driver.findElement(locator)),time);
	};
};