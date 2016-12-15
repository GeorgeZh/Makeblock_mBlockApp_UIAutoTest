var driver = require('../Driver/driver').getDriver();
var test = require('selenium-webdriver/testing');
var should = require('should');
var By = require('selenium-webdriver').By

var url = require('../Data/url');
var elem = require('../Data/app_element');
var blockId = require('../Data/blockID_copy');
var block = require('../Data/block');
var tool = require('../Data/tool');

var opr = require('../Operation/opr');
var wait = require('../Operation/wait');

test.describe('Lesson UIAutoTest',function(){

	this.timeout(5 * 60 * 1000);

	test.before(function(){
		driver.manage().window().setSize(1024, 768);
	});

	test.it('All lessons should be unlocked',function(done){
		driver.get(url.main);
		opr.refreshLesson(1,1);
		driver.findElement(elem.CLASSMODE).click();
		driver.findElement(elem.ACTIVELESSON).getText().then((t) => {
			t.should.containEql("第一关");
		});
		driver.findElement(elem.LESSON.ONE).click();
		driver.findElement(elem.TASK.ONE).click();

		//lesson one task one
		opr.skipWarning(3);
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson one task two
		opr.skipWarning(2);
		var conn12 = blockId.lesson1.task2;
		opr.connection(conn12);
		driver.executeScript("return workspace.getBlockById('move_with_time').svgPathDark_").then((block) => {
			driver.actions().mouseDown(block).mouseMove({x:0,y:-10}).mouseUp().perform()
		});
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson one task three
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		var conn13 = blockId.lesson1.task3;
		opr.connection(conn13);
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson one task four
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		var conn14 = blockId.lesson1.task4;
		opr.connection(conn14);
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson one task five
		opr.skipWarning(2)
		opr.deleteCode('move_with_time');
		var conn15 = blockId.lesson1.task5;
		opr.connection(conn15);
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson one task six
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		opr.deleteCode('CzaBAzUPdzg9BlrI1tvF');
		var conn16 = blockId.lesson1.task6;
		opr.connection(conn16);
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson one task seven
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		opr.setBlockText(1,block.move.turnRight);
		opr.setBlockText(2,block.move.backward);
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson one task eight
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		opr.deleteCode('r0VWTqflgffDY2MWUSEE');
		var conn18 = blockId.lesson1.task8;
		opr.connection(conn18);
		opr.setBlockText(4,block.move.turnRight);
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson one task nine
		opr.skipWarning(3);
		var conn19 = blockId.lesson1.task9;
		for(var i=0;i<4;i++){
			opr.getToolBlockId(tool.Move.MINE,tool.Move.ONE).then((id) => {
				var newBlock = {};
				newBlock[id] = '1';
				conn19.push(newBlock);
				opr.connection(conn19);
			});
		};
		opr.setBlockText(2,block.move.backward);
		opr.setBlockText(3,block.move.turnLeft);
		opr.setBlockText(4,block.move.turnRight)
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//unlock lesson two
		wait.elementTextContains(elem.ACTIVELESSON,"第二关");
		driver.findElement(elem.ACTIVELESSON).getText().then((t) => {
			t.should.containEql("第二关");
		});
		wait.elementCssValueIs(elem.LOCK,'opacity','0');

		//lesson two task one
		driver.findElement(elem.LESSON.TWO).click();
		driver.findElement(elem.TASK.ONE).click();
		opr.skipWarning(2);
		var conn21 = blockId.lesson2.task1;
		opr.connection(conn21)
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson two task two
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		var conn22 = blockId.lesson2.task2;
		opr.getToolBlockId(tool.Show.MINE,tool.Show.ONE).then((id) => {
			var newBlock = {};
			newBlock[id] = '1';
			conn22.push(newBlock);
			opr.connection(conn22);
		});
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson two task three
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		var conn23 = blockId.lesson2.task3;
		opr.getToolBlockId(tool.Move.MINE,tool.Move.ONE).then((id) => {
			var newBlock = {};
			newBlock[id] = '1';
			conn23.push(newBlock);
		});
		opr.getToolBlockId(tool.Show.MINE,tool.Show.ONE).then((id) => {
			var newBlock = {};
			newBlock[id] = '1';
			conn23.push(newBlock);
			opr.connection(conn23);
		});
		opr.setBlockText(3,block.move.turnRight);
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson two task four
		opr.skipWarning(2);
		opr.setParam('8Y4cu51K8QkAsFh2a2hz',0,block.color.red);
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson two task five
		opr.skipWarning(2);
		opr.setParam('RZExTNNSv3VgukEvwr9D',0,block.color.black);
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson two task six
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		var conn26 = blockId.lesson2.task6;
		opr.getToolBlockId(tool.Show.MINE,tool.Show.TWO).then((id) => {
			var newBlock = {};
			newBlock[id] = '1';
			conn26.push(newBlock);
		});
		opr.getToolBlockId(tool.Show.MINE,tool.Show.TWO).then((id) => {
			var newBlock = {};
			newBlock[id] = '1';
			conn26.push(newBlock);
			opr.setParam(id,0,block.color.black);
			opr.connection(conn26);
		});
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson two task seven
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		var conn27 = blockId.lesson2.task7;
		opr.getToolBlockId(tool.Move.MINE,tool.Move.ONE).then((id) => {
			var newBlock = {};
			newBlock[id] = '1';
			conn27.push(newBlock);
			opr.connection(conn27);
			opr.setParam(id,1,"255");	
		});
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//unlock lesson three
		wait.elementTextContains(elem.ACTIVELESSON,"第三关");
		driver.findElement(elem.ACTIVELESSON).getText().then((t) => {
			t.should.containEql("第三关");
		});
		wait.elementCssValueIs(elem.LOCK,'opacity','0');

		//lesson three task one
		driver.findElement(elem.LESSON.THREE).click();
		driver.findElement(elem.TASK.ONE).click();
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		var conn31 = blockId.lesson3.task1;
		opr.connection(conn31);
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson three task two
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		var conn32 = blockId.lesson3.task2;
		opr.connection(conn32);
		opr.setParam("P2UWfEyIxSGyqFpTLn4X",0,'5')
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson three task three
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		var conn33 = blockId.lesson3.task3;
		opr.getToolBlockId(tool.Control.MINE,tool.Control.ONE).then((id) => {
			var newBlock = {};
			newBlock[id] = '3';
			conn33.splice(1,0,newBlock);
			opr.connection(conn33);
			opr.setParam(id,0,"7");	
		});
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson three task four
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		var conn34 = blockId.lesson3.task4;
		opr.getToolBlockId(tool.Control.MINE,tool.Control.ONE).then((id) => {
			var newBlock = {};
			newBlock[id] = '3';
			conn34.splice(1,0,newBlock);
			opr.connection(conn34);
			opr.setParam(id,0,"5");	
		});
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',20000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson three task five
		opr.skipWarning(3);
		opr.setParam("bbOpr3VV21pzWkrfDbBW",0,block.color.orange);
		opr.setParam("bbOpr3VV21pzWkrfDbBW",1,block.color.black);
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',20000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson three task six
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		var conn36 = blockId.lesson3.task6;
		opr.getToolBlockId(tool.Show.MINE,tool.Show.THREE).then((id) => {
			var newBlock = {};
			newBlock[id] = '1';
			conn36.splice(2,0,newBlock);
			opr.connection(conn36);
			opr.setParam(id,0,block.color.black);
			opr.setParam(id,1,block.color.orange);
		});
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson three task seven
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		var conn37 = blockId.lesson3.task7;
		opr.connection(conn37);
		opr.setParam("npyy3DZgRBKNZiLyCVoj",0,'5')
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',20000);
		driver.findElement(elem.NEXTMISSION).click();

		//unlock lesson four
		wait.elementTextContains(elem.ACTIVELESSON,"第四关");
		driver.findElement(elem.ACTIVELESSON).getText().then((t) => {
			t.should.containEql("第四关");
		});
		wait.elementCssValueIs(elem.LOCK,'opacity','0');

		//lesson four task one
		driver.findElement(elem.LESSON.FOUR).click();
		driver.findElement(elem.TASK.ONE).click();
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		var conn41 = blockId.lesson4.task1;
		opr.getToolBlockId(tool.Show.MINE,tool.Show.ONE).then((id) => {
			var newBlock = {};
			newBlock[id] = '1';
			conn41.push(newBlock);
			opr.connection(conn41)
			opr.setParam(id,0,block.color.blue);
			opr.setParam(id,1,block.color.black);
		});
		opr.getToolBlockId(tool.Show.MINE,tool.Show.TWO).then((id) => {
			var newBlock = {};
			newBlock[id] = '1';
			conn41.push(newBlock);
			opr.connection(conn41);
		});
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson four task two
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		var conn42 = blockId.lesson4.task2;
		opr.getToolBlockId(tool.Show.MINE,tool.Show.THREE).then((id) => {
			var newBlock = {};
			newBlock[id] = '1';
			conn42.push(newBlock);
			opr.connection(conn42)
			opr.setParam(id,0,block.color.black);
			opr.setParam(id,1,block.color.blue);
		});
		opr.getToolBlockId(tool.Show.MINE,tool.Show.ONE).then((id) => {
			var newBlock = {};
			newBlock[id] = '1';
			conn42.push(newBlock);
			opr.connection(conn42);
		});
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson four task three
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		opr.setBlockText(2,block.pinao.A5);
		opr.setBlockText(2,block.pinao.half,1);
		opr.setBlockText(4,block.pinao.E5);
		opr.setBlockText(4,block.pinao.half,1);
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson four task four
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		var conn44 = blockId.lesson4.task4;
		opr.getToolBlockId(tool.Control.MINE,tool.Control.ONE).then((id) => {
			var newBlock = {};
			newBlock[id] = '3';
			conn44.splice(1,0,newBlock);
			opr.connection(conn44)
			opr.setParam(id,0,"5");
		});
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson four task five
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		var conn45 = blockId.lesson4.task5;
		opr.connection(conn45);
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson four task six
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		var conn46 = blockId.lesson4.task6;
		opr.getToolBlockId(tool.Move.MINE,tool.Move.ONE).then((id) => {
			var newBlock = {};
			newBlock[id] = '1';
			conn46.push(newBlock);
			opr.connection(conn46);
		});
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//unlock lesson five
		wait.elementTextContains(elem.ACTIVELESSON,"第五关");
		driver.findElement(elem.ACTIVELESSON).getText().then((t) => {
			t.should.containEql("第五关");
		});
		wait.elementCssValueIs(elem.LOCK,'opacity','0');

		//lesson five task one
		driver.findElement(elem.LESSON.FIVE).click();
		driver.findElement(elem.TASK.ONE).click();
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		var conn51 = blockId.lesson5.task1;
		opr.getToolBlockId(tool.Move.MINE,tool.Move.ONE).then((id) => {
			var newBlock = {};
			newBlock[id] = '1';
			conn51.push(newBlock);
			opr.connection(conn51);
			opr.setBlockText(1,block.move.turnRight);
		});
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson five task two
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		var conn52 = blockId.lesson5.task2;
		opr.connection(conn52);
		opr.setParam("h875HcvoisesLk5awNU5",0,"3");
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson five task three
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		var conn53 = blockId.lesson5.task3;
		opr.getToolBlockId(tool.Control.MINE,tool.Control.ONE).then((id) => {
			var newBlock = {};
			newBlock[id] = '1';
			conn53.push(newBlock);
			opr.connection(conn53);
			opr.setParam(id,0,"5")
		});
		opr.getToolBlockId(tool.Move.MINE,tool.Move.ONE).then((id) => {
			var newBlock = {};
			newBlock[id] = '1';
			conn53.push(newBlock);
		});
		opr.getToolBlockId(tool.Show.MINE,tool.Show.ONE).then((id) => {
			var newBlock = {};
			newBlock[id] = '1';
			conn53.push(newBlock);
			opr.connection(conn53);
		});
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson five task four
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		opr.setWaitTime(1);
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson five task five
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		opr.setWaitTime(1);
		var conn55 = blockId.lesson5.task5;
		opr.connection(conn55);
		opr.specifyConnection("bhiS5s8ajNZpNeqO0681",1,"Zl05Nl1ZCOUPKj1NY26z",0);
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson five task six
		opr.skipWarning(2);
		opr.setWaitTime(1);
		var conn56 = blockId.lesson5.task6;
		var specifyId56 = '';
		opr.getToolBlockId(tool.Control.MINE,tool.Control.ONE).then((id) => {
			var newBlock = {};
			newBlock[id] = '2';
			conn56.splice(1,0,newBlock);
			specifyId56 = id;
			opr.connection(conn56);
		});
		opr.getToolBlockId(tool.Move.MINE,tool.Move.ONE).then((id) => {
			opr.specifyConnection(specifyId56,1,id,0);
			opr.setBlockText(2,block.move.turnLeft,2);
			opr.setParam(id,0,"3");
		});
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//lesson five task seven
		wait.elementCssValueIs(elem.WORKSPACE,'opacity','1');
		opr.setWaitTime(1);
		var conn57 = blockId.lesson5.task7;
		var specifyId57 = '';
		opr.getToolBlockId(tool.Sense.MINE,tool.Sense.ONE).then((id) => {
			var newBlock = {};
			newBlock[id] = '0';
			conn57.push(newBlock);
		});
		opr.getToolBlockId(tool.Control.MINE,tool.Control.ONE).then((id) => {
			var newBlock = {};
			newBlock[id] = '2';
			conn57.splice(1,0,newBlock);
			specifyId57 = id;
			opr.connection(conn57);
		});
		opr.getToolBlockId(tool.Show.MINE,tool.Show.THREE).then((id) => {
			opr.specifyConnection(specifyId57,1,id,0);
		});
		driver.findElement(elem.RUN).click();
		wait.elementCssValueIs(elem.SUCCESS,'opacity','1',10000);
		driver.findElement(elem.NEXTMISSION).click();

		//unlock all lesson
		wait.elementTextContains(elem.MORELESSON,"更多关卡");
		driver.findElement(elem.MORELESSON).getText().then((t) => {
			t.should.containEql("更多关卡");
		});
		done();

	});

	test.after(function(done){
		// driver.quit();
		done();
	});
});