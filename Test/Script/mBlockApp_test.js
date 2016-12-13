var driver = require('../Driver/driver').getDriver();
var test = require('selenium-webdriver/testing');
var should = require('should');
var By = require('selenium-webdriver').By

var url = require('../Data/url');
var elem = require('../Data/app_element');
var blockId = require('../Data/blockID');
var block = require('../Data/block');
var tool = require('../Data/tool');

var opr = require('../Operation/opr');
var wait = require('../Operation/wait');

test.describe('mBlockApp UIAutoTest',function(){
	this.timeout(5 * 60 * 1000)

	test.before(function(){
		driver.manage().window().setSize(1024, 768)
	});

	test.describe('LESSON ONE',function(){

		test.it('Lesson one and task one should be successfully passed',function(done){
			driver.get(url.main);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.ONE).click();
			driver.findElement(elem.TASK.ONE).click();
			opr.skipWarning(3)
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson one and task two should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(1,2)
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.ONE).click();
			driver.findElement(elem.TASK.TWO).click();
			opr.skipWarning(2);
			var conn = blockId.lesson1.task2;
			opr.connection(conn);
			driver.executeScript("return workspace.getBlockById('move_with_time').svgPathDark_").then((block) => {
				driver.actions().mouseDown(block).mouseMove({x:0,y:-10}).mouseUp().perform()
			});
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson one and task three should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(1,3);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.ONE).click();
			driver.findElement(elem.TASK.THREE).click();
			driver.sleep(1000)
			var conn = blockId.lesson1.task3;
			opr.connection(conn);
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson one and task four should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(1,4);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.ONE).click();
			driver.findElement(elem.TASK.FOUR).click();
			driver.sleep(1000)
			var conn = blockId.lesson1.task4;
			opr.connection(conn);
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson one and task five should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(1,5);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.ONE).click();
			driver.findElement(elem.TASK.FIVE).click();
			opr.skipWarning(2)
			opr.deleteCode('move_with_time')
			var conn = blockId.lesson1.task5;
			opr.connection(conn);
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson one and task six should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(1,6);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.ONE).click();
			driver.findElement(elem.TASK.SIX).click();
			driver.sleep(1000)
			opr.deleteCode('CzaBAzUPdzg9BlrI1tvF');
			var conn = blockId.lesson1.task6;
			opr.connection(conn);
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson one and task seven should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(1,7);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.ONE).click();
			driver.findElement(elem.TASK.SEVEN).click();
			driver.sleep(1000);
			driver.executeScript("document.getElementById(arguments[0]).remove()",elem.GUIDE).then(() => {
				driver.findElement(opr.getBlocklEditableTextByNum(1)).click();
				wait.elementCssValueIs(elem.WIDGET,'display','block')
				driver.findElement(block.move.turnRight).click()
				driver.findElement(opr.getBlocklEditableTextByNum(2)).click()
				wait.elementCssValueIs(elem.WIDGET,'display','block')
				driver.findElement(block.move.backward).click()
			})
			driver.executeScript("document.getElementById(arguments[0]).remove()",elem.GESTURE)
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson one and task eight should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(1,8);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.ONE).click();
			driver.findElement(elem.TASK.EIGHT).click();
			driver.sleep(1000)
			opr.deleteCode('r0VWTqflgffDY2MWUSEE');
			var conn = blockId.lesson1.task8;
			opr.connection(conn);
			driver.findElement(opr.getBlocklEditableTextByNum(4)).click()
			wait.elementCssValueIs(elem.WIDGET,'display','block')
			driver.findElement(block.move.turnRight).click()
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it.only('Lesson one and task nine should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(1,9);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.ONE).click();
			driver.actions()
			.mouseDown(driver.findElement(elem.TASK.FOUR))
			.mouseMove(driver.findElement(elem.TASK.THREE))
			.mouseUp(driver.findElement(elem.TASK.THREE))
			.perform()
			driver.findElement(elem.TASK.NINE).click();
			opr.skipWarning(3);
			opr.getToolBlockId(tool.Move.MINE,tool.Move.move_with_time).then((id) => {
				console.log(id)
			})


			// opr.setToolBlockId(tool.Move.MINE,tool.Move.move_with_time,'move_with_time1');
			// opr.setToolBlockId(tool.Move.MINE,tool.Move.move_with_time,'move_with_time2');
			// opr.setToolBlockId(tool.Move.MINE,tool.Move.move_with_time,'move_with_time3');
			// opr.setToolBlockId(tool.Move.MINE,tool.Move.move_with_time,'move_with_time4');
			// var conn = {"h[=u_}+jb|]`f3L)SQyA":'0',
			// 			"move_with_time1":'1',
			// 			"move_with_time2":'1',
			// 			"move_with_time3":'1',
			// 			"move_with_time4":'0'};
			// opr.connection(conn);
			// var conn = blockId.lesson1.task8;
			// opr.connection(conn);
			// driver.findElement(opr.getBlocklEditableTextByNum(4)).click()
			// wait.elementCssValueIs(elem.WIDGET,'display','block')
			// driver.findElement(block.move.turnRight).click()
			// driver.findElement(elem.RUN).click();
			// wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			// driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
			// 	c.should.be.eql('1');
			// });
			done();
		});

	});

	test.after(function(done){
		// driver.quit();
		done();
	});

});