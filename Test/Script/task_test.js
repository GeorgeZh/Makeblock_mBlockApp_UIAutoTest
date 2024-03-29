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

test.describe('Task UIAutoTest',function(){
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
			opr.skipWarning(3);
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
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
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
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
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
			opr.deleteCode('move_with_time');
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
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
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
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			opr.setBlockText(1,block.move.turnRight);
			opr.setBlockText(2,block.move.backward);
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
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			opr.deleteCode('r0VWTqflgffDY2MWUSEE');
			var conn = blockId.lesson1.task8;
			opr.connection(conn);
			opr.setBlockText(4,block.move.turnRight);
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson one and task nine should be successfully passed',function(done){
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
			var conn = blockId.lesson1.task9;
			for(var i=0;i<4;i++){
				opr.getToolBlockId(tool.Move.MINE,tool.Move.ONE).then((id) => {
					var newBlock = {};
					newBlock[id] = '1';
					conn.push(newBlock);
					opr.connection(conn);
				});
			};
			opr.setBlockText(2,block.move.backward);
			opr.setBlockText(3,block.move.turnLeft);
			opr.setBlockText(4,block.move.turnRight)
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

	});

	test.describe('LESSON TWO',function(){

		test.it('Lesson two and task one should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(2,1);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.TWO).click();
			driver.findElement(elem.TASK.ONE).click();
			opr.skipWarning(2);
			var conn = blockId.lesson2.task1;
			opr.connection(conn)
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson two and task two should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(2,2);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.TWO).click();
			driver.findElement(elem.TASK.TWO).click();
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			var conn = blockId.lesson2.task2;
			opr.getToolBlockId(tool.Show.MINE,tool.Show.ONE).then((id) => {
				var newBlock = {};
				newBlock[id] = '1';
				conn.push(newBlock);
				opr.connection(conn);
			});
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson two and task three should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(2,3);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.TWO).click();
			driver.findElement(elem.TASK.THREE).click();
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			var conn = blockId.lesson2.task3;
			opr.getToolBlockId(tool.Move.MINE,tool.Move.ONE).then((id) => {
				var newBlock = {};
				newBlock[id] = '1';
				conn.push(newBlock);
			});
			opr.getToolBlockId(tool.Show.MINE,tool.Show.ONE).then((id) => {
				var newBlock = {};
				newBlock[id] = '1';
				conn.push(newBlock);
				opr.connection(conn);
			});
			opr.setBlockText(3,block.move.turnRight);
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson two and task four should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(2,4);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.TWO).click();
			driver.findElement(elem.TASK.FOUR).click();
			opr.skipWarning(2);
			opr.setParam('8Y4cu51K8QkAsFh2a2hz',0,block.color.red);
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson two and task five should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(2,5);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.TWO).click();
			driver.findElement(elem.TASK.FIVE).click();
			opr.skipWarning(2);
			opr.setParam('RZExTNNSv3VgukEvwr9D',0,block.color.black);
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson two and task six should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(2,6);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.TWO).click();
			driver.findElement(elem.TASK.SIX).click();
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			var conn = blockId.lesson2.task6;
			opr.getToolBlockId(tool.Show.MINE,tool.Show.TWO).then((id) => {
				var newBlock = {};
				newBlock[id] = '1';
				conn.push(newBlock);
			});
			opr.getToolBlockId(tool.Show.MINE,tool.Show.TWO).then((id) => {
				var newBlock = {};
				newBlock[id] = '1';
				conn.push(newBlock);
				opr.setParam(id,0,block.color.black);
				opr.connection(conn);
			});
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson two and task seven should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(2,7);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.TWO).click();
			driver.actions()
			.mouseDown(driver.findElement(elem.TASK.FOUR))
			.mouseMove(driver.findElement(elem.TASK.THREE))
			.mouseUp(driver.findElement(elem.TASK.THREE))
			.perform()
			driver.findElement(elem.TASK.SEVEN).click();
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			var conn = blockId.lesson2.task7;
			opr.getToolBlockId(tool.Move.MINE,tool.Move.ONE).then((id) => {
				var newBlock = {};
				newBlock[id] = '1';
				conn.push(newBlock);
				opr.connection(conn);
				opr.setParam(id,1,"255");	
			});
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

	});

	test.describe('LESSON THREE',function(){

		test.it('Lesson three and task one should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(3,1);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.THREE).click();
			driver.findElement(elem.TASK.ONE).click();
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			var conn = blockId.lesson3.task1;
			opr.connection(conn);
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson three and task two should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(3,2);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.THREE).click();
			driver.findElement(elem.TASK.TWO).click();
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			var conn = blockId.lesson3.task2;
			opr.connection(conn);
			opr.setParam("P2UWfEyIxSGyqFpTLn4X",0,'5')
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson three and task three should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(3,3);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.THREE).click();
			driver.findElement(elem.TASK.THREE).click();
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			var conn = blockId.lesson3.task3;
			opr.getToolBlockId(tool.Control.MINE,tool.Control.ONE).then((id) => {
				var newBlock = {};
				newBlock[id] = '3';
				conn.splice(1,0,newBlock);
				opr.connection(conn);
				opr.setParam(id,0,"7");	
			});
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson three and task four should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(3,4);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.THREE).click();
			driver.findElement(elem.TASK.FOUR).click();
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			var conn = blockId.lesson3.task4;
			opr.getToolBlockId(tool.Control.MINE,tool.Control.ONE).then((id) => {
				var newBlock = {};
				newBlock[id] = '3';
				conn.splice(1,0,newBlock);
				opr.connection(conn);
				opr.setParam(id,0,"5");	
			});
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',20000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson three and task five should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(3,5);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.THREE).click();
			driver.findElement(elem.TASK.FIVE).click();
			opr.skipWarning(3);
			opr.setParam("bbOpr3VV21pzWkrfDbBW",0,block.color.orange);
			opr.setParam("bbOpr3VV21pzWkrfDbBW",1,block.color.black);
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',20000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson three and task six should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(3,6);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.THREE).click();
			driver.findElement(elem.TASK.SIX).click();
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			var conn = blockId.lesson3.task6;
			opr.getToolBlockId(tool.Show.MINE,tool.Show.THREE).then((id) => {
				var newBlock = {};
				newBlock[id] = '1';
				conn.splice(2,0,newBlock);
				opr.connection(conn);
				opr.setParam(id,0,block.color.black);
				opr.setParam(id,1,block.color.orange);
			});
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson three and task seven should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(3,7);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.THREE).click();
			driver.actions()
			.mouseDown(driver.findElement(elem.TASK.FOUR))
			.mouseMove(driver.findElement(elem.TASK.THREE))
			.mouseUp(driver.findElement(elem.TASK.THREE))
			.perform()
			driver.findElement(elem.TASK.SEVEN).click();
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			var conn = blockId.lesson3.task7;
			opr.connection(conn);
			opr.setParam("npyy3DZgRBKNZiLyCVoj",0,'5')
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',20000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

	});

	test.describe('LESSON FOUR',function(){

		test.it('Lesson four and task one should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(4,1);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.FOUR).click();
			driver.findElement(elem.TASK.ONE).click();
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			var conn = blockId.lesson4.task1;
			opr.getToolBlockId(tool.Show.MINE,tool.Show.ONE).then((id) => {
				var newBlock = {};
				newBlock[id] = '1';
				conn.push(newBlock);
				opr.connection(conn)
				opr.setParam(id,0,block.color.blue);
				opr.setParam(id,1,block.color.black);
			});
			opr.getToolBlockId(tool.Show.MINE,tool.Show.TWO).then((id) => {
				var newBlock = {};
				newBlock[id] = '1';
				conn.push(newBlock);
				opr.connection(conn);
			});
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson four and task two should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(4,2);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.FOUR).click();
			driver.findElement(elem.TASK.TWO).click();
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			var conn = blockId.lesson4.task2;
			opr.getToolBlockId(tool.Show.MINE,tool.Show.THREE).then((id) => {
				var newBlock = {};
				newBlock[id] = '1';
				conn.push(newBlock);
				opr.connection(conn)
				opr.setParam(id,0,block.color.black);
				opr.setParam(id,1,block.color.blue);
			});
			opr.getToolBlockId(tool.Show.MINE,tool.Show.ONE).then((id) => {
				var newBlock = {};
				newBlock[id] = '1';
				conn.push(newBlock);
				opr.connection(conn);
			});
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson four and task three should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(4,3);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.FOUR).click();
			driver.findElement(elem.TASK.THREE).click();
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			opr.setBlockText(2,block.pinao.A5);
			opr.setBlockText(2,block.pinao.half,1);
			opr.setBlockText(4,block.pinao.E5);
			opr.setBlockText(4,block.pinao.half,1);
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson four and task four should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(4,4);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.FOUR).click();
			driver.findElement(elem.TASK.FOUR).click();
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			var conn = blockId.lesson4.task4;
			opr.getToolBlockId(tool.Control.MINE,tool.Control.ONE).then((id) => {
				var newBlock = {};
				newBlock[id] = '3';
				conn.splice(1,0,newBlock);
				opr.connection(conn)
				opr.setParam(id,0,"5");
			});
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson four and task five should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(4,5);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.FOUR).click();
			driver.findElement(elem.TASK.FIVE).click();
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			var conn = blockId.lesson4.task5;
			opr.connection(conn);
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson four and task six should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(4,6);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.FOUR).click();
			driver.findElement(elem.TASK.SIX).click();
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			var conn = blockId.lesson4.task6;
			opr.getToolBlockId(tool.Move.MINE,tool.Move.ONE).then((id) => {
				var newBlock = {};
				newBlock[id] = '1';
				conn.push(newBlock);
				opr.connection(conn);
			});
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

	});

	test.describe('LESSON FIVE',function(){

		test.it('Lesson five and task one should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(5,1);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.FIVE).click();
			driver.findElement(elem.TASK.ONE).click();
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			var conn = blockId.lesson5.task1;
			opr.getToolBlockId(tool.Move.MINE,tool.Move.ONE).then((id) => {
				var newBlock = {};
				newBlock[id] = '1';
				conn.push(newBlock);
				opr.connection(conn);
				opr.setBlockText(1,block.move.turnRight);
			});
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson five and task two should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(5,2);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.FIVE).click();
			driver.findElement(elem.TASK.TWO).click();
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			var conn = blockId.lesson5.task2;
			opr.connection(conn);
			opr.setParam("h875HcvoisesLk5awNU5",0,"3");
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson five and task three should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(5,3);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.FIVE).click();
			driver.findElement(elem.TASK.THREE).click();
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			var conn = blockId.lesson5.task3;
			opr.getToolBlockId(tool.Control.MINE,tool.Control.ONE).then((id) => {
				var newBlock = {};
				newBlock[id] = '1';
				conn.push(newBlock);
				opr.connection(conn);
				opr.setParam(id,0,"5")
			});
			opr.getToolBlockId(tool.Move.MINE,tool.Move.ONE).then((id) => {
				var newBlock = {};
				newBlock[id] = '1';
				conn.push(newBlock);
			});
			opr.getToolBlockId(tool.Show.MINE,tool.Show.ONE).then((id) => {
				var newBlock = {};
				newBlock[id] = '1';
				conn.push(newBlock);
				opr.connection(conn);
			});
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson five and task four should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(5,4);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.FIVE).click();
			driver.findElement(elem.TASK.FOUR).click();
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			opr.setWaitTime(1);
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson five and task five should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(5,5);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.FIVE).click();
			driver.findElement(elem.TASK.FIVE).click();
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			opr.setWaitTime(1);
			var conn = blockId.lesson5.task5;
			opr.connection(conn);
			opr.specifyConnection("bhiS5s8ajNZpNeqO0681",1,"Zl05Nl1ZCOUPKj1NY26z",0);
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson five and task six should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(5,6);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.FIVE).click();
			driver.findElement(elem.TASK.SIX).click();
			opr.skipWarning(2);
			opr.setWaitTime(1);
			var conn = blockId.lesson5.task6;
			var specifyId = '';
			opr.getToolBlockId(tool.Control.MINE,tool.Control.ONE).then((id) => {
				var newBlock = {};
				newBlock[id] = '2';
				conn.splice(1,0,newBlock);
				specifyId = id;
				opr.connection(conn);
			});
			opr.getToolBlockId(tool.Move.MINE,tool.Move.ONE).then((id) => {
				opr.specifyConnection(specifyId,1,id,0);
				opr.setBlockText(2,block.move.turnLeft,2);
				opr.setParam(id,0,"3");
			});
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

		test.it('Lesson five and task seven should be successfully passed',function(done){
			driver.get(url.main);
			opr.refreshLesson(5,7);
			driver.findElement(elem.CLASSMODE).click();
			driver.findElement(elem.LESSON.FIVE).click();
			driver.actions()
			.mouseDown(driver.findElement(elem.TASK.FOUR))
			.mouseMove(driver.findElement(elem.TASK.THREE))
			.mouseUp(driver.findElement(elem.TASK.THREE))
			.perform()
			driver.findElement(elem.TASK.SEVEN).click();
			wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
			opr.setWaitTime(1);
			var conn = blockId.lesson5.task7;
			var specifyId = '';
			opr.getToolBlockId(tool.Sense.MINE,tool.Sense.ONE).then((id) => {
				var newBlock = {};
				newBlock[id] = '0';
				conn.push(newBlock);
			});
			opr.getToolBlockId(tool.Control.MINE,tool.Control.ONE).then((id) => {
				var newBlock = {};
				newBlock[id] = '2';
				conn.splice(1,0,newBlock);
				specifyId = id;
				opr.connection(conn);
			});
			opr.getToolBlockId(tool.Show.MINE,tool.Show.THREE).then((id) => {
				opr.specifyConnection(specifyId,1,id,0);
			});
			driver.findElement(elem.RUN).click();
			wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
			driver.findElement(elem.SUCCESS).getCssValue('opacity').then((c) => {
				c.should.be.eql('1');
			});
			done();
		});

	});

	test.after(function(done){
		driver.quit();
		done();
	});

});