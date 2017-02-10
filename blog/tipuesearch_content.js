var tipuesearch = {"pages":[{"url":"./pages/about/","tags":"misc","text":"2017Spring 機械設計工程系協同產品設計實習 課程倉儲: http://github.com/mdecourse/2017springcd 課程投影片: http://mdecourse.github.io/2017springcd 課程網誌: http://mdecourse.github.io/2017springcd/blog","title":"About"},{"url":"./vrep-introduction.html","tags":"Course","text":"V-rep (Virtual robot experimentation platform) V-rep Overview http://www.coppeliarobotics.com/assets/v-repoverviewpresentation.pdf V-rep Licenses http://www.coppeliarobotics.com/assets/v-replicensingoverview.pdf User Settings: http://www.coppeliarobotics.com/helpFiles/en/settings.htm Scene .ttt http://www.coppeliarobotics.com/helpFiles/en/scenes.htm Each scene in V-REP has eight freely configurable pages. Individual pages can be accessed (i.e. displayed) through the page selector toolbar button: Model .ttm http://www.coppeliarobotics.com/helpFiles/en/models.htm Build clean model http://www.coppeliarobotics.com/helpFiles/en/buildingAModelTutorial.htm Shapes: http://www.coppeliarobotics.com/helpFiles/en/shapes.htm Object common properties: Selectable: indicates whether the object can be selected in the scene. Objects can always be selected in the scene hierarchy. Refer also to the simSetObjectProperty function. Invisible during selection: when enabled, then the object will be invisible for the selection process (i.e. you will be able to select through the object). Ignored by depth pass: when enabled, then the object will be ignored during the depth rendering pass. The depth rendering pass is used to correctly position the red sphere for camera movements. Select base of model instead: if enabled, then selecting the object in the scene will select its first parented object marked as object is model base instead (see further down). This property is convenient when protecting a model from faulty manipulations, allowing it to be manipulated as a single entity together with other objects. Refer to the section on models and also to the simSetObjectProperty function. Don't show as inside model selection: when selected, and the object is part of a model, then the model bounding box (i.e. model selection bounding box) will not encompass that object. This is useful for invisible objects that might make the model bounding box appear too big. This property has no functional effect. Refer also to the simSetObjectProperty function. Size factor: every object can be scaled (resized) at any time, also during simulation. The size factor will be scaled in a similar way and can be accessed programmatically in order to adjust a code's behavior (e.g. child script). Imagine a 2-wheeled kinematic robot whose movement is controlled in a simple way through a child script: the child script will calculate the new position of the robot according to several parameters (wheel rotation velocity, wheel diameter and distance between the two wheels). If the user scales the robot, the child script should adjust its calculation according to the new size parameters (wheel diameter and distance between the two wheels). It can do that by using the simGetObjectSizeFactor API function. Ignored for view-fitting: objects with this item selected will not be taken into account when fitting a scene to a view while no object is selected. Usually floors and similar will be tagged as such. Refer also to the view fitting toolbar button and to the simCameraFitToView api function. Extension string: a string that describes additional object properties, mainly used by extension plugins (see also the simGetExtensionString API function). Camera visibility layers: each object in V-REP can be assigned to one or several visibility layers. If there is at least one visibility layer that matches the layer selection dialog layers, then the object will be visible when seen from a camera. By default, a shape is assigned to the first layer, a joint to the second layer, a dummy to the third layer, etc. Can be seen by: allows to specify a camera or vision sensor (or a collection containing cameras or vision sensors) that will be the only one able to see the object. Collidable: allows enabling or disabling collision detection capability for the selected collidable object. Measurable: allows enabling or disabling minimum distance calculation capability for the selected measurable object. Detectable: allows enabling or disabling proximity sensor detection capability for the selected detectable object. Clicking details allows you to edit the detectable details. Renderable: allows enabling or disabling the vision sensor detection capability for the selected renderable object. Cuttable: allows enabling or disabling the mill cutting capability for the selected cuttable object. Object is model base: indicates whether the object should act as the base of a model. An object flagged as base of model has special properties (e.g. saving or copying the object will also automatically save/copy all its children and children's children, etc.). Additionally, when such an object is selected, the selection bounding box is displayed as thick stippled lines, encompassing the whole model. Refer to models, and to the select base of model instead item above. Edit model properties: allows opening the model dialog. Object / model can transfer or accept DNA: when this feature is enabled for an object or a model, then it will share a same identifier with all of its copies. An Object or model can then transfer its DNA (i.e. copy an instance of itself) to all of its siblings (i.e. objects/models with the same identifier), via the transfer DNA toolbar button. Imagine having 100 same robots in your scene that you want to modify in a similar way: simply modify one of them, select it, then click the transfer DNA toolbar button. This item should almost always be checked for a model base (see further up), to facilitate model re-instanciation. Main script: http://www.coppeliarobotics.com/helpFiles/en/mainScript.htm Child scripts: http://www.coppeliarobotics.com/helpFiles/en/childScripts.htm Joints Dynamically enabled joints are joints that are in force or torque mode or that operate in hybrid fashion, and that have a shape as parent object and exactly one child object which must be a non-static shape. In addition, it is possible to involve a joint in a loop closure configuration. In that case the joint has to connect to the two shapes through a dummy-dummy link (where the link type has to be Dynamics, overlap constraint). Joint properties: http://www.coppeliarobotics.com/helpFiles/en/jointProperties.htm Joint dynamic properties: http://www.coppeliarobotics.com/helpFiles/en/jointDynamicsProperties.htm Joint control callback functions: http://www.coppeliarobotics.com/helpFiles/en/jointCtrlCallbackScripts.htm Dummy properties: http://www.coppeliarobotics.com/helpFiles/en/dummyPropertiesDialog.htm Dummy functions: http://www.coppeliarobotics.com/helpFiles/en/dummiesDescription.htm Loop closure: Dynamic simulations: http://www.coppeliarobotics.com/helpFiles/en/designingDynamicSimulations.htm#staticAndRespondable Motion planning: http://www.coppeliarobotics.com/helpFiles/en/motionPlanningModule.htm Means of communication: http://www.coppeliarobotics.com/helpFiles/en/meansOfCommunication.htm V-rep API Embedded scripts: http://www.coppeliarobotics.com/helpFiles/en/scripts.htm Lua crash course: http://www.coppeliarobotics.com/helpFiles/en/luaCrashCourse.htm http://www.lua.org/pil/contents.html Access objects: http://www.coppeliarobotics.com/helpFiles/en/accessingGeneralObjects.htm V-rep API 函式列表: http://www.coppeliarobotics.com/helpFiles/en/apiFunctionListCategory.htm V-rep 外部控制方法: http://www.coppeliarobotics.com/helpFiles/en/externalControllerTutorial.htm V-rep remote API 範例 根據 http://www.coppeliarobotics.com/helpFiles/en/remoteApiServerSide.htm 中的說明. V-rep 啟動時, 會根據系統目錄下 remoteApiConnections.txt 檔案中的設定, 啟動 rempte api 功能. 以下為 one-link robot 的 V-rep remote API 程式範例: import vrep import sys # child threaded script: # 內建使用 port 19997 若要加入其他 port, 在 serve 端程式納入 #simExtRemoteApiStart(19999) vrep.simxFinish(-1) clientID = vrep.simxStart('127.0.0.1', 19997, True, True, 5000, 5) if clientID!= -1: print(\"Connected to remote server\") else: print('Connection not successful') sys.exit('Could not connect') errorCode,Revolute_joint_handle=vrep.simxGetObjectHandle(clientID,'Revolute_joint',vrep.simx_opmode_oneshot_wait) if errorCode == -1: print('Can not find left or right motor') sys.exit() errorCode=vrep.simxSetJointTargetVelocity(clientID,Revolute_joint_handle,2, vrep.simx_opmode_oneshot_wait) while True: choice = input(\"(e to exit, p to pause and enter to exec)>\") if choice == \"e\": print(\"exiting\") vrep.simxStopSimulation(clientID, vrep.simx_opmode_oneshot_wait) break elif choice == \"p\": vrep.simxPauseSimulation(clientID, vrep.simx_opmode_oneshot_wait) else: vrep.simxStartSimulation(clientID, vrep.simx_opmode_oneshot_wait) V-rep Remote API 函式列表: http://www.coppeliarobotics.com/helpFiles/en/remoteApiFunctionListCategory.htm V-rep 的 remote API 是以 V-rep plugin (動態連結程式庫) 的方式完成, 程式專案位於 programming/v_repExtRemoteApi 目錄中. V-rep remote API 可以進一步在 embedded script 程式中利用 Lua 程式進行延伸: myFunctionName=function(inInts,inFloats,inStrings,inBuffer) -- inInts, inFloats and inStrings are tables -- inBuffer is a string -- Perform any type of operation here. -- Always return 3 tables and a string, e.g.: return {},{},{},'' end 然後利用下列外部的 Python 程式進行呼叫: inputInts=[1,2,3] inputFloats=[53.21,17.39] inputStrings=['Hello','world!'] inputBuffer=bytearray() inputBuffer.append(78) inputBuffer.append(42) res,retInts,retFloats,retStrings,retBuffer=vrep.simxCallScriptFunction(clientID,'objectName',vrep.sim_scripttype_childscript, 'myFunctionName',inputInts,inputFloats,inputStrings,inputBuffer,vrep.simx_opmode_blocking) if res==vrep.simx_return_ok: print (retInts) print (retFloats) print (retStrings) print (retBuffer) Qt based custom UIs http://www.coppeliarobotics.com/helpFiles/en/customUIPlugin.htm V-rep Tutorials: http://www.coppeliarobotics.com/helpFiles/en/bubbleRobTutorial.htm http://www.coppeliarobotics.com/helpFiles/en/buildingAModelTutorial.htm http://www.coppeliarobotics.com/helpFiles/en/lineFollowingBubbleRobTutorial.htm http://www.coppeliarobotics.com/helpFiles/en/inverseKinematicsTutorial.htm http://www.coppeliarobotics.com/helpFiles/en/hexapodTutorial.htm http://www.coppeliarobotics.com/helpFiles/en/externalControllerTutorial.htm http://www.coppeliarobotics.com/helpFiles/en/pluginTutorial.htm http://www.coppeliarobotics.com/helpFiles/en/conveyorBeltTutorial.htm Compiling V-rep http://www.coppeliarobotics.com/helpFiles/en/compilingVrep.htm V-rep Other Interfaces http://www.coppeliarobotics.com/helpFiles/en/otherInterfaces.htm Extra contributions: http://www.coppeliarobotics.com/contributions/ V-rep Forum http://www.forum.coppeliarobotics.com/","title":"V-rep 簡介"},{"url":"./brython-editor.html","tags":"Course","text":"Brython 程式環境可以用來練習許多 Python3 的簡單語法, 也可以納入 Javascript 程式庫, 利用 Ajax 模式結合網際瀏覽器與伺服器上的資源解決協同產品設計流程上的問題. window.onload=function(){ brython(1); } 列出 2017 Spring 協同產品設計實習課程日期之 Python 程式碼如下: from browser import document, html import calendar import locale cal2 = document[\"cal2\"] def getClassdate(year=2017, startM=2, startD=20, w=0, note=\"\"): # w=0 表示課程排在星期一 # startM 表示開學月份, startD 表示開學日 # note 為課程初始告示 # default calendar MONDAY is the first day of the week # 每學期共有 18 週 totalW = 18 count = 0 # output = \"2017 Spring 2bCD (三) 08:10-12:00 各週上課日期: \" output = note + html.BR() # 若必須全年搜尋則 7 改為 12, 但是因為只有 18 週, 因此邏輯要修改讓程式較快結束 for month in range(startM, 7): monthArray = calendar.monthcalendar(2017, month) for week in range(len(monthArray)): weekArray = monthArray[week] # 只需要列出星期 (w+1) if weekArray[w] != 0: if month == startM: if weekArray[startM] > startD: count += 1 if count <= totalW: if month == 3 and weekArray[w] == 31: output += \"w\"+str(count)+\"-\"+ str(month)+ \"/\" + str(weekArray[w]) + \"(放假), \" else: output += \"w\"+str(count)+\"-\"+ str(month)+ \"/\" + str(weekArray[w]) + \", \" else: count += 1 if count <= totalW: if month == 3 and weekArray[w] == 31: output += \"w\"+str(count)+\"-\"+ str(month)+ \"/\" + str(weekArray[w]) + \"(放假), \" else: output += \"w\"+str(count)+\"-\"+ str(month)+ \"/\" + str(weekArray[w]) + \", \" cal2 <= output # 2b 協同產品設計實習 (三 w=2) getClassdate(year=2017, startM=2, startD=20, w=2, note=\"2017 Spring 2bCD (三) 08:10-12:00 各週上課日期: \") cal2 <= html.BR() + html.BR() # 2a 協同產品設計實習 (四 w=3) getClassdate(year=2017, startM=2, startD=20, w=3, note=\"2017 Spring 2aCD (四) 08:10-12:00 各週上課日期: \") cal2 <= html.BR() + html.BR() # 1a 網際內容管理 (五 w=4) getClassdate(year=2017, startM=2, startD=20, w=4, note=\"2017 Spring 1aWCM (五) 13:20-16:10 各週上課日期: \") cal2 <= html.BR() + html.BR() # VE1a 網際內容管理 (五 w=4) getClassdate(year=2017, startM=2, startD=20, w=4, note=\"2017 Spring VE1aCP (五) 18:30-20:00 各週上課日期: \") cal2 <= html.BR() + html.BR() 利用伺服器執行 Python3 程式 Jupyterhub: https://8888.kmol.info:9443 利用以下的編輯器執行 Python3 程式 在 Firefox 中, 以 Preferences - General - Downloads 選擇\"Always ask me where to save files\" 在 Chrome 中, 以 Settings - Advanced - Downloads 選擇 Ask where to save each file before downloading function doSave(){ var blob = new Blob([localStorage[\"py_src\"]], {type: \"text/plain;charset=utf-8\"}); filename = document.getElementById('filename').value saveAs(blob, filename+\".py\"); } import sys import time import traceback import javascript from browser import document as doc, window, alert has_ace = True try: editor = window.ace.edit(\"editor\") session = editor.getSession() session.setMode(\"ace/mode/python\") editor.setOptions({ 'enableLiveAutocompletion': True, 'enableSnippets': True, 'highlightActiveLine': False, 'highlightSelectedWord': True }) except: from browser import html editor = html.TEXTAREA(rows=20, cols=70) doc[\"editor\"] <= editor def get_value(): return editor.value def set_value(x):editor.value = x editor.getValue = get_value editor.setValue = set_value has_ace = False if hasattr(window, 'localStorage'): from browser.local_storage import storage else: storage = None def reset_src(): if storage is not None and \"py_src\" in storage: editor.setValue(storage[\"py_src\"]) else: editor.setValue('for i in range(10):\\n\\tprint(i)') editor.scrollToRow(0) editor.gotoLine(0) def reset_src_area(): if storage and \"py_src\" in storage: editor.value = storage[\"py_src\"] else: editor.value = 'for i in range(10):\\n\\tprint(i)' class cOutput: def __init__(self,target): self.target = doc[target] def write(self,data): self.target.value += str(data) #if \"console\" in doc: sys.stdout = cOutput(\"console\") sys.stderr = cOutput(\"console\") def to_str(xx): return str(xx) info = sys.implementation.version doc['version'].text = 'Brython %s.%s.%s' % (info.major, info.minor, info.micro) output = '' def show_console(ev): doc[\"console\"].value = output doc[\"console\"].cols = 60 doc[\"console\"].rows = 10 # load a Python script def load_script(evt): _name = evt.target.value + '?foo=%s' % time.time() editor.setValue(open(_name).read()) # run a script, in global namespace if in_globals is True def run(*args): global output doc[\"console\"].value = '' src = editor.getValue() if storage is not None: storage[\"py_src\"] = src t0 = time.perf_counter() try: #ns = {'__name__':'__main__'} ns = {'__name__':'editor'} exec(src, ns) state = 1 except Exception as exc: traceback.print_exc(file=sys.stderr) state = 0 output = doc[\"console\"].value print('<completed in %6.2f ms>' % ((time.perf_counter() - t0) * 1000.0)) return state if has_ace: reset_src() else: reset_src_area() def clear_console(ev): doc[\"console\"].value = \"\" doc['run'].bind('click',run) doc['show_console'].bind('click',show_console) doc['clear_console'].bind('click',clear_console) Filename: .py Run Output 清除 from browser import document as doc import script1 def ex1(ev): script1.editor.setValue('''#ex1 簡單的 for 迴圈範例 for i in range(10): print(i) ''') script1.editor.scrollToRow(0) script1.editor.gotoLine(0) doc['ex1'].bind('click',ex1) ex1 -for 迴圈 from browser import document as doc import script1 def ex2(ev): script1.editor.setValue('''#溫度轉換程式 from browser import document as doc # 因為此函式與滑鼠互動, 需要 event 當作輸入 def convTemp(): mystring = \"\" cdegree = input(\"請輸入攝氏溫度:\") fdegree = float(cdegree)*9/5 + 32 output_string = \"攝氏 \" + str(cdegree) + \"度=華氏 \" + str(fdegree) + \"度\" # 利用 print() 將轉換結果送到 console 區 print(output_string) #直接呼叫 convTemp() 執行 convTemp() ''') script1.editor.scrollToRow(0) script1.editor.gotoLine(0) doc['ex2'].bind('click',ex2) ex2 -溫度換算 from browser import document import script1 def get_file(e): data = open(\"./../python_ex/for1.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"get\"].bind(\"click\", get_file) from browser import document import script1 def get_temp1(e): data = open(\"./../python_ex/temp1.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"get_temp1\"].bind(\"click\", get_temp1) from browser import document import script1 def get_ver_and_kw(e): data = open(\"./../python_ex/ver_and_kw.py\").read() script1.editor.setValue(data) script1.editor.scrollToRow(0) script1.editor.gotoLine(0) document[\"get_ver_and_kw\"].bind(\"click\", get_ver_and_kw) for1.py temp1.py ver_and_kw.py","title":"網際 Brython 程式執行環境"},{"url":"./2017spring-cd.html","tags":"Course","text":"協同產品設計實習在銜接計算機程式、電腦輔助設計實習課程, 讓學員以分組協同的方式進行產品設計實習. 歷年協同產品設計實習課程 2016 Spring 協同產品設計實習 2015 Spring 協同產品設計實習 2014 Spring 協同產品設計實習 協同產品設計實習課程規劃 分組規劃: 每班自選組員, 分為 8 組, 每四組分配一台 8GB Ram/500GB HD 電腦作為廣域網路伺服器. 各組成員必須利用自建網站與 Github Pages 進行協同歷程簡報、網誌與操作流程影片 (分別放在 Youtube 與 Vimeo , 並冠上學員學號、系所名稱與課程名稱) 展示. 協同實習專案: (一) 多連桿機構 由 Solvespace 與 Onshape 完成組立後, (二) 以程式套件取得特定點的迴轉軌跡後, (三) 利用各組自行編寫的 Python3 + C 程式進行軌跡點座標進行驗證. (四) 之後將各連桿機構 (包括單桿、四連桿與多連桿單一自由度系統) 轉入 V-rep 進行驅動模擬後, (五) 轉由 remote API 模式, 以區域網路或廣域網路之 Python3 程式進行 V-rep 連桿機構之驅動模擬控制. 確定可以利用各連桿尺寸調控目標端點的迴轉路徑後, (六) 接著在 Onshape 中, 以協同模式完成多連桿機構的細部組立設計後, (七) 再根據多連桿機構的設計材料表, 進行備料, 此階段並導入 Arduino 直流馬達控制系統, 並以 Delta 3D Printer 印出多連桿系統的實體零件後, 進行多連桿機構系統的實體組立與運動控制. (八) 最後, 每四組各自利用所完成的 多連桿機構 , 組成一四足行走機構, 在 V-rep 中完成運動模擬後, 每班所完成的兩具行走機構, 分別在 V-rep 虛擬環境與實體環境中進行運動模擬與行走測試. 協同產品設計實習評分標準: (一) 各參與協同學員是否按步就班利用網際簡報、網誌與操作影片呈現細節內容 (50%) - 各組學員根據實際完成內容自評成績後 * 老師認可百分比 (二) 各組學員在產品設計實習過程是否互助砥礪完成既定工作任務 (分組成員互評) (20%) - 各組學員根據實際內容舉證互評成績平均, 參考系統: https://pygroup-ag100.rhcloud.com (三) 上課出席與表現 (各學員根據實際內容舉證自評成績 * 老師認可百分比) (30%) 協同產品設計實習各週上課日期 2017 Spring 08:10-12:00 各週上課日期: w1 -2/22 2b (三) & 2/23 2a (四) - 請每人準備一個隨身碟, 下載 可攜程式系統 (30MB) (或從倉儲中 下載 ). 接著請 下載 Onshape_help.pdf (17.2 MB), 了解如何利用 Solvespace 與 Onshape 組立單軸旋轉連桿系統、四連桿系統與 多連桿系統 . w2 -3/1 2b (三) & 3/2 2a (四) - 每班分為八組, 每四組分配一台 8GB Ram/500GB HD 電腦作為 IPv4/IPv6 伺服器, 了解如何利用 IPv4 與 IPv6 網路連線傳輸設計檔案. 各組 CMSimfly 區域網站的應用. 各組以協同模式完成 Solvespace 與 Onshape 單軸旋轉連桿系統與四連桿系統. w3 -3/8 2b (三) & 3/9 2a (四) - 各組以協同模式完成 Solvespace 與 Onshape 之 多連桿系統 組立. 各組完成廣域網路與 Github Pages 網頁與簡報呈現各組學員與分組協同工作流程細節. w4 -3/15 2b (三) & 3/14 2a (四) - 單連桿與四連桿機構轉入 V-rep 進行運動模擬 w5 -3/22 2b (三) & 3/23 2a (四) - 單連桿與四連桿機構轉入 V-rep 進行運動模擬 w6 -3/29 2b (三) & 3/30 2a (四) - 多連桿機構轉入 V-rep 進行運動模擬 w7 -4/5 2b (三) & 4/6 2a (四) - 多連桿機構轉入 V-rep 進行運動模擬 w8 -4/12 2b (三) & 4/13 2a (四) - 各組期中簡報 (含影片拍攝與上傳) 與評分 w9 -4/19 2b (三) & 4/20 2a (四) - V-rep remote API 運動控制 w10 -4/26 2b (三) & 4/27 2a (四) - V-rep remote API 運動控制 w11 -5/3 2b (三) & 5/4 2a (四) - Arduino 直流馬達控制 w12 -5/10 2b (三) & 5/11 2a (四) - Arduino 直流馬達控制 w13 -5/17 2b (三) & 5/18 2a (四) - Onshape 行走機構細部設計 (含齒輪傳動) w14 -5/24 2b (三) & 5/25 2a (四) - Onshape 行走機構細部設計 (含齒輪傳動) w15 -5/31 2b (三) & 6/1 2a (四) - V-rep 行走機構模擬與零件列印組立測試 w16 -6/7 2b (三) & 6/8 2a (四) - V-rep 行走機構模擬與零件列印組立測試 w17 -6/14 2b (三) & 6/15 2a (四) - V-rep 行走機構模擬與零件列印組立測試 w18 -6/21 2b (三) & 6/22 2a (四) - 各組期末簡報 (含影片拍攝與上傳) 與評分 參考資料: 機械設計工程系-協同產品設計實習課程: cd v-rep 8bar simulation from 虎尾科大機械設計工程 on Vimeo . https://github.com/spacether/pycalculix","title":"2017Spring 協同產品設計實習"}]};