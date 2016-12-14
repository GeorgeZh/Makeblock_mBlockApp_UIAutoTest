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
	wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
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
	for(var i=0;i<arg.length;i++){
		for(var id in arg[i]){
			var index = arg[i][id]
			idArr.push(id)
			indexArr.push(index)
		}
	}
	var num = idArr.length
	for(var i=0;i<num-1;i++){
		driver.executeScript("Blockly.specifyConnection(arguments[0],arguments[1],arguments[2],arguments[3])",
			idArr[i],indexArr[i],idArr[i+1],0)
	}
}

exports.specifyConnection = function(id1,index1,id2,index2){}

exports.setParam = function(id,num,param){
	driver.executeScript("return workspace.getBlockById(arguments[0]).childBlocks_[arguments[1]].svgPathDark_",id,num)
	.then((target) => {
		driver.actions().mouseDown(target).mouseUp().perform()
		wait.elementCssValueIs(elem.WIDGET,'display','block')
		if(typeof(param) !== 'string'){
			driver.findElement(param).click()
		}else{
			driver.actions().sendKeys(param).sendKeys('\uE007').perform()
		}
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

exports.setBlockEditableText = function(num,param){
	driver.findElement(this.getBlocklEditableTextByNum(num)).click()
	wait.elementCssValueIs(elem.WIDGET,'display','block')
	driver.findElement(param).click()
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

exports.getToolBlockId = function(toolLocator,blockLocator){
	driver.findElement(toolLocator).click()
	wait.elementIsVisible(blockLocator)
	// driver.findElement(blockLocator).click()
	driver.actions()
	.mouseMove(driver.findElement(blockLocator))
	.mouseDown(driver.findElement(blockLocator))
	.mouseUp()
	.perform()
	return driver.executeScript("return Blockly.selected.id")
}

exports.deleteCode = function(id){
	driver.executeScript("return workspace.getBlockById(arguments[0]).svgPathDark_",id).then((target) => {
		driver.actions()
		.mouseDown(target)
		.mouseMove(driver.findElement(elem.BIN))
		.mouseUp(driver.findElement(elem.BIN),{x:-10,y:0})
		.perform()
	})
}