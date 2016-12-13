var driver = require('../Driver/driver').getDriver()
var elem = require('../Data/app_element')
var wait = require('./wait')
var By = require('selenium-webdriver').By
var until = require('selenium-webdriver').until

//跳过蓝牙连接
// var removeBluetooth = function(){
// 	driver.executeScript("document.getElementById('connection-modal').remove()")
// }

//解锁课程
var openLesson = function(lesson,task){
	if(lesson == 1){
		driver.executeScript('localStorage.setItem("lessons_status",'
			+'\'[{"lessonId":1,"sectionStatus":' + task + ',"isFirstStart":0}]\')')
	}else if(lesson == 2){
		driver.executeScript('localStorage.setItem("lessons_status",'
			+'\'[{"lessonId":1,"sectionStatus":10,"isFirstStart":0},'
			+'{"lessonId":2,"sectionStatus":' + task + ',"isFirstStart":0}]\')')
	}else if(lesson == 3){
		driver.executeScript('localStorage.setItem("lessons_status",'
			+'\'[{"lessonId":1,"sectionStatus":10,"isFirstStart":0},'
			+'{"lessonId":2,"sectionStatus":10,"isFirstStart":0},'
			+'{"lessonId":3,"sectionStatus":' + task + ',"isFirstStart":0}]\')')
	}else{
		console.log('lesson error')
	}
}

	// driver.executeScript('localStorage.setItem("lessons_status",'
	// 	+'\'[{"lessonId":1,"sectionStatus":10,"isFirstStart":0},'
	// 	+'{"lessonId":2,"sectionStatus":10,"isFirstStart":0},'
	// 	+'{"lessonId":3,"sectionStatus":8,"isFirstStart":0}]\')')

exports.skipWarning = function(num){
	driver.sleep(1000)
	for(var i=0;i<num;i++){
		driver.findElement(elem.MISSIONWARN).click()
		driver.sleep(500)
	}
}

exports.refreshLesson = function(lesson,task){
	openLesson(lesson,task)
	driver.navigate().refresh()
	// wait.elementLocated(elem.BLUETOOTH)
	// removeBluetooth()
}

//arg = {'id':'index'}
exports.connection = function(arg){
	var idArr=[]
	var indexArr=[]
	for(var id in arg){
		var index = arg[id]
		idArr.push(id)
		indexArr.push(index)
	}
	var num = idArr.length
	if(num == 2){
		driver.executeScript("Blockly.specifyConnection(arguments[0],arguments[1],arguments[2],arguments[3])",
			idArr[0],indexArr[0],idArr[1],indexArr[1])
	}else if(num > 2){
		for(var i=0;i<num-1;i++){
			switch(indexArr[i]){
				case "0":
					driver.executeScript("Blockly.specifyConnection(arguments[0],arguments[1],arguments[2],arguments[3])",
						idArr[i],0,idArr[i+1],0)
					break;
				case "1":
					driver.executeScript("Blockly.specifyConnection(arguments[0],arguments[1],arguments[2],arguments[3])",
						idArr[i],1,idArr[i+1],0)
					break;
				default:
					driver.executeScript("Blockly.specifyConnection(arguments[0],arguments[1],arguments[2],arguments[3])",
						idArr[i],indexArr[i],idArr[i+1],0)
			}
		}
	}else{
		console.log('The number of block is wrong')
	}
}

//arg = {'param':'paramCssSelector'}
exports.selectParam = function(id,arg){
	var paArr=[]
	var pcssArr=[]
	for(var pa in arg){
		var pcss = arg[pa]
		var p = Number(pa)
		paArr.push(p)
		pcssArr.push(pcss)
	}
	var num = paArr.length
	for(var i=0;i<num-1;i++){
		driver.executeScript("return workspace.getBlockById(arguments[0]).childBlocks_[arguments[1]].svgPathDark_",id2,paArr[i])
		.then((target) => {
			target.click()
			driver.sleep(300)
			driver.findElement(By.css(pcssArr[i])).click()
		})
	}
}

exports.param = function(id,arg){
	driver.executeScript("return workspace.getBlockById(arguments[0]).childBlocks_0.svgPathDark_",id)
	.then((target) => {
		target.click()
		driver.sleep(300)
		driver.findElement(By.css(arg[0])).click()
	})
}

exports.getBlocklEditableTextByNum = function(num){
	var css = "#blockWorkSpace .blocklyBlockCanvas > g >"
	var editableTest = " g.blocklyEditableText"
	var block = " g.blocklyDraggable >"
	for(var i=0;i<num;i++){
		css += block
	}
	css += editableTest
	return By.css(css)
}

exports.getBlockTextByNum = function(num){
	var css = "#blockWorkSpace .blocklyBlockCanvas > g >"
	var test = " g.blocklyText"
	var block = " g.blocklyDraggable >"
	for(var i=0;i<num;i++){
		css += block
	}
	css += test
	console.log(css)
	return By.css(css)
}

exports.setToolBlockId = function(toolLocator,blockLocator,id){
	driver.findElement(toolLocator).click()
	wait.elementIsVisible(blockLocator)
	driver.findElement(blockLocator).click()
	driver.executeScript("Blockly.selected.id=arguments[0]",id)
}

exports.getToolBlockId = function(toolLocator,blockLocator){
	driver.findElement(toolLocator).click()
	wait.elementIsVisible(blockLocator)
	driver.findElement(blockLocator).click()
	return driver.executeScript("return Blockly.selected.id")
}

exports.setBlockId = function(locator,id){
	driver.findElement(locator).click()
	driver.executeScript("Blockly.selected.id=arguments[0]",id)
}

exports.deleteCode = function(id){
	driver.executeScript("return workspace.getBlockById(arguments[0]).svgPathDark_",id).then((target) => {
		driver.actions()
		.mouseDown(target)
		.mouseMove(driver.findElement(elem.BIN))
		.mouseUp(driver.findElement(elem.BIN),{x:-10,y:0})
		.perform()
		driver.sleep(300)
	})
}