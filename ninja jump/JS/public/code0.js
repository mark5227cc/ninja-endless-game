gdjs.GameCode = {};
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDPlayerObjects4= [];
gdjs.GameCode.GDPlayerFeetObjects1= [];
gdjs.GameCode.GDPlayerFeetObjects2= [];
gdjs.GameCode.GDPlayerFeetObjects3= [];
gdjs.GameCode.GDPlayerFeetObjects4= [];
gdjs.GameCode.GDPlayerSpriteObjects1= [];
gdjs.GameCode.GDPlayerSpriteObjects2= [];
gdjs.GameCode.GDPlayerSpriteObjects3= [];
gdjs.GameCode.GDPlayerSpriteObjects4= [];
gdjs.GameCode.GDPlatformObjects1= [];
gdjs.GameCode.GDPlatformObjects2= [];
gdjs.GameCode.GDPlatformObjects3= [];
gdjs.GameCode.GDPlatformObjects4= [];
gdjs.GameCode.GDRockObjects1= [];
gdjs.GameCode.GDRockObjects2= [];
gdjs.GameCode.GDRockObjects3= [];
gdjs.GameCode.GDRockObjects4= [];
gdjs.GameCode.GDScoreTextObjects1= [];
gdjs.GameCode.GDScoreTextObjects2= [];
gdjs.GameCode.GDScoreTextObjects3= [];
gdjs.GameCode.GDScoreTextObjects4= [];
gdjs.GameCode.GDBlackMaskObjects1= [];
gdjs.GameCode.GDBlackMaskObjects2= [];
gdjs.GameCode.GDBlackMaskObjects3= [];
gdjs.GameCode.GDBlackMaskObjects4= [];
gdjs.GameCode.GDPauseButtonObjects1= [];
gdjs.GameCode.GDPauseButtonObjects2= [];
gdjs.GameCode.GDPauseButtonObjects3= [];
gdjs.GameCode.GDPauseButtonObjects4= [];
gdjs.GameCode.GDSpringObjects1= [];
gdjs.GameCode.GDSpringObjects2= [];
gdjs.GameCode.GDSpringObjects3= [];
gdjs.GameCode.GDSpringObjects4= [];
gdjs.GameCode.GDPlayButtonObjects1= [];
gdjs.GameCode.GDPlayButtonObjects2= [];
gdjs.GameCode.GDPlayButtonObjects3= [];
gdjs.GameCode.GDPlayButtonObjects4= [];
gdjs.GameCode.GDRestartButtonObjects1= [];
gdjs.GameCode.GDRestartButtonObjects2= [];
gdjs.GameCode.GDRestartButtonObjects3= [];
gdjs.GameCode.GDRestartButtonObjects4= [];
gdjs.GameCode.GDTutorialTipsObjects1= [];
gdjs.GameCode.GDTutorialTipsObjects2= [];
gdjs.GameCode.GDTutorialTipsObjects3= [];
gdjs.GameCode.GDTutorialTipsObjects4= [];
gdjs.GameCode.GDFinalScoreTitleObjects1= [];
gdjs.GameCode.GDFinalScoreTitleObjects2= [];
gdjs.GameCode.GDFinalScoreTitleObjects3= [];
gdjs.GameCode.GDFinalScoreTitleObjects4= [];
gdjs.GameCode.GDFinalScoreObjects1= [];
gdjs.GameCode.GDFinalScoreObjects2= [];
gdjs.GameCode.GDFinalScoreObjects3= [];
gdjs.GameCode.GDFinalScoreObjects4= [];
gdjs.GameCode.GDNewRecordObjects1= [];
gdjs.GameCode.GDNewRecordObjects2= [];
gdjs.GameCode.GDNewRecordObjects3= [];
gdjs.GameCode.GDNewRecordObjects4= [];
gdjs.GameCode.GDBestScoreObjects1= [];
gdjs.GameCode.GDBestScoreObjects2= [];
gdjs.GameCode.GDBestScoreObjects3= [];
gdjs.GameCode.GDBestScoreObjects4= [];
gdjs.GameCode.GDLeftButtonObjects1= [];
gdjs.GameCode.GDLeftButtonObjects2= [];
gdjs.GameCode.GDLeftButtonObjects3= [];
gdjs.GameCode.GDLeftButtonObjects4= [];
gdjs.GameCode.GDRightButtonObjects1= [];
gdjs.GameCode.GDRightButtonObjects2= [];
gdjs.GameCode.GDRightButtonObjects3= [];
gdjs.GameCode.GDRightButtonObjects4= [];
gdjs.GameCode.GDJumpButtonObjects1= [];
gdjs.GameCode.GDJumpButtonObjects2= [];
gdjs.GameCode.GDJumpButtonObjects3= [];
gdjs.GameCode.GDJumpButtonObjects4= [];
gdjs.GameCode.GDWallObjects1= [];
gdjs.GameCode.GDWallObjects2= [];
gdjs.GameCode.GDWallObjects3= [];
gdjs.GameCode.GDWallObjects4= [];
gdjs.GameCode.GDBGObjects1= [];
gdjs.GameCode.GDBGObjects2= [];
gdjs.GameCode.GDBGObjects3= [];
gdjs.GameCode.GDBGObjects4= [];
gdjs.GameCode.GDdownObjects1= [];
gdjs.GameCode.GDdownObjects2= [];
gdjs.GameCode.GDdownObjects3= [];
gdjs.GameCode.GDdownObjects4= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.condition4IsTrue_0 = {val:false};
gdjs.GameCode.condition5IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};
gdjs.GameCode.condition4IsTrue_1 = {val:false};
gdjs.GameCode.condition5IsTrue_1 = {val:false};
gdjs.GameCode.conditionTrue_2 = {val:false};
gdjs.GameCode.condition0IsTrue_2 = {val:false};
gdjs.GameCode.condition1IsTrue_2 = {val:false};
gdjs.GameCode.condition2IsTrue_2 = {val:false};
gdjs.GameCode.condition3IsTrue_2 = {val:false};
gdjs.GameCode.condition4IsTrue_2 = {val:false};
gdjs.GameCode.condition5IsTrue_2 = {val:false};


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movingCamera").setNumber(1);
}{runtimeScene.getVariables().get("movingSpeed").setNumber(10);
}{runtimeScene.getVariables().get("increasedSpeedPerScore").setNumber(0.5);
}{runtimeScene.getVariables().get("maxMovingSpeed").setNumber(100);
}{runtimeScene.getVariables().get("topY").setNumber(0);
}{runtimeScene.getVariables().get("platformDistance").setNumber(90);
}{runtimeScene.getVariables().get("randomPlatformDistance").setNumber(5);
}{runtimeScene.getVariables().get("throwRocks").setNumber(1);
}{runtimeScene.getVariables().get("rockTime").setNumber(4);
}{runtimeScene.getVariables().get("rockWidth").setNumber(50);
}{runtimeScene.getVariables().get("rockSpeed").setNumber(80);
}{runtimeScene.getVariables().get("springChance").setNumber(5);
}{runtimeScene.getVariables().get("springWidth").setNumber(20);
}{runtimeScene.getVariables().get("commonJumpSpeed").setNumber(680);
}{runtimeScene.getVariables().get("springJumpSpeed").setNumber(2000);
}{runtimeScene.getVariables().get("springJumping").setNumber(0);
}{runtimeScene.getVariables().get("gamePaused").setNumber(0);
}{runtimeScene.getVariables().get("gameRunning").setNumber(1);
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewRecord"), gdjs.GameCode.GDNewRecordObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerFeet"), gdjs.GameCode.GDPlayerFeetObjects1);
gdjs.copyArray(runtimeScene.getObjects("TutorialTips"), gdjs.GameCode.GDTutorialTipsObjects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "GUI");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Pause");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "GameOver");
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerFeetObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerFeetObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDTutorialTipsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTipsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDNewRecordObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewRecordObjects1[i].hide();
}
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("PlayerSprite"), gdjs.GameCode.GDPlayerSpriteObjects3);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerSpriteObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerSpriteObjects3[i].flipX(true);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("PlayerSprite"), gdjs.GameCode.GDPlayerSpriteObjects3);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerSpriteObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerSpriteObjects3[i].flipX(false);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8184180);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDPlayerObjects2, gdjs.GameCode.GDPlayerObjects3);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerSprite"), gdjs.GameCode.GDPlayerSpriteObjects3);
{for(var i = 0, len = gdjs.GameCode.GDPlayerSpriteObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerSpriteObjects3[i].setAnimationName("idle");
}
}}

}


{

/* Reuse gdjs.GameCode.GDPlayerObjects2 */

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerSprite"), gdjs.GameCode.GDPlayerSpriteObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerSpriteObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerSpriteObjects2[i].setAnimationName("run");
}
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDPlayerObjects2, gdjs.GameCode.GDPlayerObjects3);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects3.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isFalling()) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects3[k] = gdjs.GameCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerSprite"), gdjs.GameCode.GDPlayerSpriteObjects3);
{for(var i = 0, len = gdjs.GameCode.GDPlayerSpriteObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerSpriteObjects3[i].setAnimationName("jump");
}
}}

}


{

/* Reuse gdjs.GameCode.GDPlayerObjects2 */

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerSprite"), gdjs.GameCode.GDPlayerSpriteObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerSpriteObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerSpriteObjects2[i].setAnimationName("fall");
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects3});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWallObjects3Objects = Hashtable.newFrom({"Wall": gdjs.GameCode.GDWallObjects3});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.GameCode.GDWallObjects2});gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Walljump").setNumber(2);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Walljump").setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.GameCode.GDWallObjects3);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
gdjs.GameCode.condition4IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects3Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWallObjects3Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Walljump")) == 1;
}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
gdjs.GameCode.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "1");
}if ( gdjs.GameCode.condition3IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition4IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8192228);
}
}}
}
}
}
if (gdjs.GameCode.condition4IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "1");
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").setJumpSpeed(900);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.GameCode.GDWallObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
gdjs.GameCode.condition3IsTrue_0.val = false;
gdjs.GameCode.condition4IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWallObjects2Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "1");
}if ( gdjs.GameCode.condition2IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition3IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8194204);
}
}if ( gdjs.GameCode.condition3IsTrue_0.val ) {
{
gdjs.GameCode.condition4IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("Walljump")) == 2;
}}
}
}
}
if (gdjs.GameCode.condition4IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "1");
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setJumpSpeed(900);
}
}}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.GameCode.GDJumpButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("LeftButton"), gdjs.GameCode.GDLeftButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("RightButton"), gdjs.GameCode.GDRightButtonObjects2);
{for(var i = 0, len = gdjs.GameCode.GDLeftButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDLeftButtonObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDRightButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRightButtonObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDJumpButtonObjects2[i].hide();
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("gamePaused")) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("gameRunning")) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerFeet"), gdjs.GameCode.GDPlayerFeetObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerSprite"), gdjs.GameCode.GDPlayerSpriteObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerSpriteObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerSpriteObjects2[i].setPosition((( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointX("Sprite")),(( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointY("Sprite")));
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerFeetObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerFeetObjects2[i].setPosition((( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointX("Feet")),(( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointY("Feet")));
}
}}

}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


{



}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerFeetObjects1Objects = Hashtable.newFrom({"PlayerFeet": gdjs.GameCode.GDPlayerFeetObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlatformObjects1Objects = Hashtable.newFrom({"Platform": gdjs.GameCode.GDPlatformObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRockObjects2Objects = Hashtable.newFrom({"Rock": gdjs.GameCode.GDRockObjects2});gdjs.GameCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDPlatformObjects1, gdjs.GameCode.GDPlatformObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlatformObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlatformObjects2[i].getVariableNumber(gdjs.GameCode.GDPlatformObjects2[i].getVariables().get("id")) == 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlatformObjects2[k] = gdjs.GameCode.GDPlatformObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlatformObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDRockObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRockObjects2Objects, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 4 - gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("rockWidth")) / 2, -(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("rockWidth"))) - 300, "");
}{for(var i = 0, len = gdjs.GameCode.GDRockObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRockObjects2[i].setZOrder(5);
}
}{for(var i = 0, len = gdjs.GameCode.GDRockObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRockObjects2[i].addForce(0, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("rockSpeed")), 1);
}
}}

}


{

/* Reuse gdjs.GameCode.GDPlatformObjects1 */

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlatformObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlatformObjects1[i].getVariableNumber(gdjs.GameCode.GDPlatformObjects1[i].getVariables().get("id")) == 4 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlatformObjects1[k] = gdjs.GameCode.GDPlatformObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlatformObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getVariables().get("movingCamera").setNumber(1);
}{runtimeScene.getVariables().get("throwRocks").setNumber(1);
}}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerFeet"), gdjs.GameCode.GDPlayerFeetObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlatformObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlatformObjects1[i].getVariableNumber(gdjs.GameCode.GDPlatformObjects1[i].getVariables().get("used")) == 0 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlatformObjects1[k] = gdjs.GameCode.GDPlatformObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlatformObjects1.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerFeetObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlatformObjects1Objects, false, runtimeScene, false);
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList8 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("movingCamera").setNumber(0);
}{runtimeScene.getVariables().get("throwRocks").setNumber(0);
}
{ //Subevents
gdjs.GameCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerFeetObjects2Objects = Hashtable.newFrom({"PlayerFeet": gdjs.GameCode.GDPlayerFeetObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlatformObjects2Objects = Hashtable.newFrom({"Platform": gdjs.GameCode.GDPlatformObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlatformObjects2Objects = Hashtable.newFrom({"Platform": gdjs.GameCode.GDPlatformObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlatformObjects1Objects = Hashtable.newFrom({"Platform": gdjs.GameCode.GDPlatformObjects1});gdjs.GameCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerFeet"), gdjs.GameCode.GDPlayerFeetObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlatformObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlatformObjects2[i].getVariableNumber(gdjs.GameCode.GDPlatformObjects2[i].getVariables().get("used")) == 0 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlatformObjects2[k] = gdjs.GameCode.GDPlatformObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlatformObjects2.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerFeetObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlatformObjects2Objects, false, runtimeScene, false);
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlatformObjects2 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlatformObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlatformObjects2[i].returnVariable(gdjs.GameCode.GDPlatformObjects2[i].getVariables().get("used")).setNumber(1);
}
}{runtimeScene.getVariables().get("score").add(gdjs.evtTools.object.pickedObjectsCount(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlatformObjects2Objects));
}{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("score"))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("springJumping")) == 1;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlatformObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlatformObjects1[i].getVariableNumber(gdjs.GameCode.GDPlatformObjects1[i].getVariables().get("used")) == 0 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlatformObjects1[k] = gdjs.GameCode.GDPlatformObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlatformObjects1.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlatformObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlatformObjects1[i].getY() > (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getPointY("")) + (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getHeight()) ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDPlatformObjects1[k] = gdjs.GameCode.GDPlatformObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlatformObjects1.length = k;}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlatformObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlatformObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlatformObjects1[i].returnVariable(gdjs.GameCode.GDPlatformObjects1[i].getVariables().get("used")).setNumber(1);
}
}{runtimeScene.getVariables().get("score").add(gdjs.evtTools.object.pickedObjectsCount(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlatformObjects1Objects));
}{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("score"))));
}
}}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("movingCamera")) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("totalMovingSpeed").setNumber(Math.min(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("movingSpeed")) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("increasedSpeedPerScore")) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("score")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("maxMovingSpeed"))));
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("totalMovingSpeed")) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("gameRunning")) == 1;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) > (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointY(""));
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointY("")), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getPointY("")) * 0.8, "Layer", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getY() > gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 2 + 20 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("gameRunning").setNumber(0);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlatformObjects2Objects = Hashtable.newFrom({"Platform": gdjs.GameCode.GDPlatformObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSpringObjects2Objects = Hashtable.newFrom({"Spring": gdjs.GameCode.GDSpringObjects2});gdjs.GameCode.eventsList11 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("springRandom")) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("springChance"));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlatformObjects2 */
gdjs.GameCode.GDSpringObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSpringObjects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("randomX")) + gdjs.random((( gdjs.GameCode.GDPlatformObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlatformObjects2[0].getWidth()) - gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("springWidth"))), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("topY")), "");
}{for(var i = 0, len = gdjs.GameCode.GDSpringObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSpringObjects2[i].setZOrder(1);
}
}}

}


};gdjs.GameCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) < gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("topY")) + gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 2 + (( gdjs.GameCode.GDPlatformObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlatformObjects2[0].getHeight());
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlatformObjects2 */
{runtimeScene.getVariables().get("topY").sub(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("platformDistance")) + gdjs.random(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("randomPlatformDistance"))));
}{runtimeScene.getVariables().get("randomX").setNumber(gdjs.random(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (( gdjs.GameCode.GDPlatformObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlatformObjects2[0].getWidth())));
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlatformObjects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("randomX")), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("topY")), "");
}{for(var i = 0, len = gdjs.GameCode.GDPlatformObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlatformObjects2[i].setZOrder(1);
}
}{runtimeScene.getVariables().get("springRandom").setNumber(gdjs.randomInRange(1, 100));
}
{ //Subevents
gdjs.GameCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlatformObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlatformObjects1[i].getY() > gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 2 + (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getHeight()) + 20 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlatformObjects1[k] = gdjs.GameCode.GDPlatformObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlatformObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlatformObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlatformObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlatformObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{



}


{



}


{



}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRockObjects2Objects = Hashtable.newFrom({"Rock": gdjs.GameCode.GDRockObjects2});gdjs.GameCode.eventsList14 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("rockTime")), "throwRock");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDRockObjects2.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "throwRock");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRockObjects2Objects, gdjs.random(300) - gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("rockWidth")) / 2, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("topY")), "");
}{for(var i = 0, len = gdjs.GameCode.GDRockObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRockObjects2[i].setZOrder(5);
}
}{for(var i = 0, len = gdjs.GameCode.GDRockObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRockObjects2[i].addForce(0, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("rockSpeed")), 1);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRockObjects1Objects = Hashtable.newFrom({"Rock": gdjs.GameCode.GDRockObjects1});gdjs.GameCode.eventsList15 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("throwRocks")) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Rock"), gdjs.GameCode.GDRockObjects2);
{for(var i = 0, len = gdjs.GameCode.GDRockObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRockObjects2[i].rotate(90, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Rock"), gdjs.GameCode.GDRockObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDRockObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDRockObjects2[i].getY() > gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 2 + (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getHeight()) + 20 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDRockObjects2[k] = gdjs.GameCode.GDRockObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDRockObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDRockObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDRockObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRockObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rock"), gdjs.GameCode.GDRockObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRockObjects1Objects, false, runtimeScene, true);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("springJumping")) == 0;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("gameRunning").setNumber(0);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSpringObjects1Objects = Hashtable.newFrom({"Spring": gdjs.GameCode.GDSpringObjects1});gdjs.GameCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setJumpSpeed(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("commonJumpSpeed")));
}
}{runtimeScene.getVariables().get("springJumping").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spring"), gdjs.GameCode.GDSpringObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSpringObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
/* Reuse gdjs.GameCode.GDSpringObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("springJumpSpeed")));
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDSpringObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSpringObjects1[i].setAnimation(1);
}
}{runtimeScene.getVariables().get("springJumping").setNumber(1);
}}

}


};gdjs.GameCode.eventsList17 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("gamePaused")) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "", 1);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Pause");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("gamePaused")) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "", 0);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Pause");
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPauseButtonObjects2Objects = Hashtable.newFrom({"PauseButton": gdjs.GameCode.GDPauseButtonObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.GameCode.GDPlayButtonObjects1});gdjs.GameCode.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PauseButton"), gdjs.GameCode.GDPauseButtonObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("gamePaused")) == 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPauseButtonObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("gamePaused").setNumber(1);
}{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "", 0);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Pause");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.GameCode.GDPlayButtonObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("gamePaused")) == 1;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("gamePaused").setNumber(0);
}{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "", 1);
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Pause");
}}

}


};gdjs.GameCode.eventsList19 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "p");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8225756);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("gamePaused").setNumber(1 - gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("gamePaused")));
}
{ //Subevents
gdjs.GameCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
{gdjs.GameCode.conditionTrue_2 = gdjs.GameCode.condition0IsTrue_1;
gdjs.GameCode.condition0IsTrue_2.val = false;
{
gdjs.GameCode.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}gdjs.GameCode.conditionTrue_2.val = true && gdjs.GameCode.condition0IsTrue_2.val;
}
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.systemInfo.isMobile();
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList20 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("gameRunning")) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList21 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("score")) > gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewRecord"), gdjs.GameCode.GDNewRecordObjects3);
{for(var i = 0, len = gdjs.GameCode.GDNewRecordObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDNewRecordObjects3[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("score")));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("BestScore"), gdjs.GameCode.GDBestScoreObjects2);
{for(var i = 0, len = gdjs.GameCode.GDBestScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBestScoreObjects2[i].setString("BEST: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.GameCode.GDBestScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBestScoreObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.GameCode.GDBestScoreObjects2[i].getWidth()) / 2);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRestartButtonObjects1Objects = Hashtable.newFrom({"RestartButton": gdjs.GameCode.GDRestartButtonObjects1});gdjs.GameCode.eventsList22 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8232660);
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FinalScore"), gdjs.GameCode.GDFinalScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "GameOver");
}{for(var i = 0, len = gdjs.GameCode.GDFinalScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFinalScoreObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("score"))));
}
}{for(var i = 0, len = gdjs.GameCode.GDFinalScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFinalScoreObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.GameCode.GDFinalScoreObjects2[i].getWidth()) / 2);
}
}
{ //Subevents
gdjs.GameCode.eventsList21(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("PlayerSprite"), gdjs.GameCode.GDPlayerSpriteObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerSpriteObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerSpriteObjects2[i].setAnimationName("fall");
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerSpriteObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerSpriteObjects2[i].setY(gdjs.GameCode.GDPlayerSpriteObjects2[i].getY() + (400 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.GameCode.GDRestartButtonObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
{
{gdjs.GameCode.conditionTrue_2 = gdjs.GameCode.condition0IsTrue_1;
gdjs.GameCode.condition0IsTrue_2.val = false;
{
gdjs.GameCode.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}gdjs.GameCode.conditionTrue_2.val = true && gdjs.GameCode.condition0IsTrue_2.val;
}
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDRestartButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.GameCode.eventsList23 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("gameRunning")) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList22(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList24 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList8(runtimeScene);
}


{


gdjs.GameCode.eventsList9(runtimeScene);
}


{


gdjs.GameCode.eventsList10(runtimeScene);
}


{


gdjs.GameCode.eventsList12(runtimeScene);
}


{


gdjs.GameCode.eventsList13(runtimeScene);
}


{


gdjs.GameCode.eventsList15(runtimeScene);
}


{


gdjs.GameCode.eventsList16(runtimeScene);
}


{


gdjs.GameCode.eventsList20(runtimeScene);
}


{


gdjs.GameCode.eventsList23(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDPlayerFeetObjects1.length = 0;
gdjs.GameCode.GDPlayerFeetObjects2.length = 0;
gdjs.GameCode.GDPlayerFeetObjects3.length = 0;
gdjs.GameCode.GDPlayerFeetObjects4.length = 0;
gdjs.GameCode.GDPlayerSpriteObjects1.length = 0;
gdjs.GameCode.GDPlayerSpriteObjects2.length = 0;
gdjs.GameCode.GDPlayerSpriteObjects3.length = 0;
gdjs.GameCode.GDPlayerSpriteObjects4.length = 0;
gdjs.GameCode.GDPlatformObjects1.length = 0;
gdjs.GameCode.GDPlatformObjects2.length = 0;
gdjs.GameCode.GDPlatformObjects3.length = 0;
gdjs.GameCode.GDPlatformObjects4.length = 0;
gdjs.GameCode.GDRockObjects1.length = 0;
gdjs.GameCode.GDRockObjects2.length = 0;
gdjs.GameCode.GDRockObjects3.length = 0;
gdjs.GameCode.GDRockObjects4.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects3.length = 0;
gdjs.GameCode.GDScoreTextObjects4.length = 0;
gdjs.GameCode.GDBlackMaskObjects1.length = 0;
gdjs.GameCode.GDBlackMaskObjects2.length = 0;
gdjs.GameCode.GDBlackMaskObjects3.length = 0;
gdjs.GameCode.GDBlackMaskObjects4.length = 0;
gdjs.GameCode.GDPauseButtonObjects1.length = 0;
gdjs.GameCode.GDPauseButtonObjects2.length = 0;
gdjs.GameCode.GDPauseButtonObjects3.length = 0;
gdjs.GameCode.GDPauseButtonObjects4.length = 0;
gdjs.GameCode.GDSpringObjects1.length = 0;
gdjs.GameCode.GDSpringObjects2.length = 0;
gdjs.GameCode.GDSpringObjects3.length = 0;
gdjs.GameCode.GDSpringObjects4.length = 0;
gdjs.GameCode.GDPlayButtonObjects1.length = 0;
gdjs.GameCode.GDPlayButtonObjects2.length = 0;
gdjs.GameCode.GDPlayButtonObjects3.length = 0;
gdjs.GameCode.GDPlayButtonObjects4.length = 0;
gdjs.GameCode.GDRestartButtonObjects1.length = 0;
gdjs.GameCode.GDRestartButtonObjects2.length = 0;
gdjs.GameCode.GDRestartButtonObjects3.length = 0;
gdjs.GameCode.GDRestartButtonObjects4.length = 0;
gdjs.GameCode.GDTutorialTipsObjects1.length = 0;
gdjs.GameCode.GDTutorialTipsObjects2.length = 0;
gdjs.GameCode.GDTutorialTipsObjects3.length = 0;
gdjs.GameCode.GDTutorialTipsObjects4.length = 0;
gdjs.GameCode.GDFinalScoreTitleObjects1.length = 0;
gdjs.GameCode.GDFinalScoreTitleObjects2.length = 0;
gdjs.GameCode.GDFinalScoreTitleObjects3.length = 0;
gdjs.GameCode.GDFinalScoreTitleObjects4.length = 0;
gdjs.GameCode.GDFinalScoreObjects1.length = 0;
gdjs.GameCode.GDFinalScoreObjects2.length = 0;
gdjs.GameCode.GDFinalScoreObjects3.length = 0;
gdjs.GameCode.GDFinalScoreObjects4.length = 0;
gdjs.GameCode.GDNewRecordObjects1.length = 0;
gdjs.GameCode.GDNewRecordObjects2.length = 0;
gdjs.GameCode.GDNewRecordObjects3.length = 0;
gdjs.GameCode.GDNewRecordObjects4.length = 0;
gdjs.GameCode.GDBestScoreObjects1.length = 0;
gdjs.GameCode.GDBestScoreObjects2.length = 0;
gdjs.GameCode.GDBestScoreObjects3.length = 0;
gdjs.GameCode.GDBestScoreObjects4.length = 0;
gdjs.GameCode.GDLeftButtonObjects1.length = 0;
gdjs.GameCode.GDLeftButtonObjects2.length = 0;
gdjs.GameCode.GDLeftButtonObjects3.length = 0;
gdjs.GameCode.GDLeftButtonObjects4.length = 0;
gdjs.GameCode.GDRightButtonObjects1.length = 0;
gdjs.GameCode.GDRightButtonObjects2.length = 0;
gdjs.GameCode.GDRightButtonObjects3.length = 0;
gdjs.GameCode.GDRightButtonObjects4.length = 0;
gdjs.GameCode.GDJumpButtonObjects1.length = 0;
gdjs.GameCode.GDJumpButtonObjects2.length = 0;
gdjs.GameCode.GDJumpButtonObjects3.length = 0;
gdjs.GameCode.GDJumpButtonObjects4.length = 0;
gdjs.GameCode.GDWallObjects1.length = 0;
gdjs.GameCode.GDWallObjects2.length = 0;
gdjs.GameCode.GDWallObjects3.length = 0;
gdjs.GameCode.GDWallObjects4.length = 0;
gdjs.GameCode.GDBGObjects1.length = 0;
gdjs.GameCode.GDBGObjects2.length = 0;
gdjs.GameCode.GDBGObjects3.length = 0;
gdjs.GameCode.GDBGObjects4.length = 0;
gdjs.GameCode.GDdownObjects1.length = 0;
gdjs.GameCode.GDdownObjects2.length = 0;
gdjs.GameCode.GDdownObjects3.length = 0;
gdjs.GameCode.GDdownObjects4.length = 0;

gdjs.GameCode.eventsList24(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
