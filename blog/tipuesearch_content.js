var tipuesearch = {"pages":[{"tags":"misc","url":"./pages/about/","title":"About","text":"2016Fall 修課成員網誌"},{"tags":"Misc","url":"./2016fallcp-qi-mo-kao-zhou.html","title":"2016fallcp 期末考週","text":"2016fallcp 期末考週 window.onload=function(){ brython(1); } W17 週心得與程式範例: W16 週心得與程式範例: W15 週心得與程式範例: from browser import document from browser import html import random id3 = document[\"id3\"] def guess(ev): # 清除 id3 中的內容 id3.clear() id3 <= \"開始玩猜數字遊戲\" + html.BR() 標準答案 = random.randint(1, 100) 你猜的數字 = int(input(\"請輸入您所猜整數:\")) 猜測次數 = 1 while 標準答案 != 你猜的數字: if 標準答案 < 你猜的數字: #print(\"太大了，再猜一次 :)加油\") # 清除 id3 中的內容 id3.clear() id3 <= \"猜第\" + str(猜測次數) + \"次, 太大了，再猜一次 :)加油\" + html.BR() else: #print(\"太小了，再猜一次 :)加油\") # 清除 id3 中的內容 id3.clear() id3 <= \"猜第\" + str(猜測次數) + \"次, 太小了，再猜一次 :)加油\" + html.BR() 你猜的數字 = int(input(\"請輸入您所猜整數:\")) 猜測次數 += 1 #print(\"猜對了！總共猜了\", 猜測次數, \"次\") id3 <= \"猜對了！答案為\" + str(標準答案) + \", 總共猜了\" + str(猜測次數) + \"次\" document[\"but3\"].bind(\"click\", guess) 玩猜數字遊戲 以下猜數字遊戲 from browser import document from browser import html import random id3 = document[\"id3\"] def guess(ev): # 清除 id3 中的內容 id3.clear() id3 <= \"開始玩猜數字遊戲\" + html.BR() 標準答案 = random.randint(1, 100) 你猜的數字 = int(input(\"請輸入您所猜整數:\")) 猜測次數 = 1 while 標準答案 != 你猜的數字: if 標準答案 < 你猜的數字: #print(\"太大了，再猜一次 :)加油\") # 清除 id3 中的內容 id3.clear() id3 <= \"猜第\" + str(猜測次數) + \"次, 太大了，再猜一次 :)加油\" + html.BR() else: #print(\"太小了，再猜一次 :)加油\") # 清除 id3 中的內容 id3.clear() id3 <= \"猜第\" + str(猜測次數) + \"次, 太小了，再猜一次 :)加油\" + html.BR() 你猜的數字 = int(input(\"請輸入您所猜整數:\")) 猜測次數 += 1 #print(\"猜對了！總共猜了\", 猜測次數, \"次\") id3 <= \"猜對了！答案為\" + str(標準答案) + \", 總共猜了\" + str(猜測次數) + \"次\" document[\"but3\"].bind(\"click\", guess) 玩猜數字遊戲 from browser import document as doc from browser import html container = doc['container'] def numPrint(ev): mystring = \"\" num = input(\"請輸入重複執行次數:\") #for i in range(1, 11): for i in range(1, int(num)+1): mystring += str(i) + \": hello mde\" + html.BR() container <= mystring doc['w13'].bind('click',numPrint) 取重複執行次數後, 列印出來 列印迴圈 from browser import document as doc from browser import html container = doc['container'] def numPrint(ev): mystring = \"\" num = input(\"請輸入重複執行次數:\") #for i in range(1, 11): for i in range(1, int(num)+1): mystring += str(i) + \": hello mde\" + html.BR() container <= mystring doc['w13'].bind('click',numPrint) 取重複執行次數後, 列印出來 其中各週心得請嵌入個人現場操作 vimeo 影片 以 pre 附上練習的範例執行,以及課程影片摘要"},{"tags":"Misc","url":"./w16-lian-xi.html","title":"W16 練習","text":"window.onload=function(){ brython(1); } from browser import alert import random ans = random.randint(1, 100) a_in = int(input(\"輸入整數:\")) guess = 1 while ans != a_in: if a_in < ans: a_in = int(input(\"too small\")) else: a_in = int(input(\"too big\")) guess += 1 alert(\"恭喜答對 ,一共猜了\" + (str(guess)) + \"次\")"},{"tags":"Misc","url":"./w15.html","title":"W15","text":"W14影片重點 影片說明 從 Leo Editor 的節點 @edit @path @button 的用法到 pelican 轉 .md 檔案成為 blog 網誌, 並加入 Brython 程式導入與執行的方法 @settings->設定節點 @edit->增新節點 @path->儲存路徑 @button->按鈕 移動節點 ctrl+u 向上移動 ctrl+d 向下移動 ctrl+r 向右移動 ctrl+l 向左移動 ctrl+i 新增內容 ctrl+b 執行內容"},{"tags":"Misc","url":"./w14-lian-xi.html","title":"W14 練習","text":"以下為第十四週開始的城市練習,要利用 http://mde.tw/2016fallcp/course/Python3Programs.txt 要整理Brython 的用法. window.onload=function(){ brython(1); } from browser import document as doc container = doc['ex1'] container<=\"W14練習\" from browser import document as doc from browser import html container = doc['ex2'] mystring = input(\"要印出什麼字串?\") mynum = input(\"要印幾次?\") for i in range(int(mynum)): #container<=\"W14練習-2\"+html.BR() container<=mystring+html.BR()"},{"tags":"Misc","url":"./w12.html","title":"W12","text":"畫19格吉他譜 畫線練習 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"chord1\"] ctx = canvas.getContext(\"2d\") ''' # 改用 background 函式繪圖 # 水平線 for i in range(5): ctx.beginPath() # 設定線的寬度為 1 個單位 if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(99, 100+i*30) ctx.lineTo(201, 100+i*30) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(6): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 ctx.moveTo(100+i*20, 100) ctx.lineTo(100+i*20, 220) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() ''' def canvasText(x, y, fontSize, string, sup, sub, color, ctx): # 標定各弦音符號, 以及把位編號 ctx.beginPath() ctx.fillStyle = color ctx.strokeStyle = color #ctx.font = \"20px Arial\" ctx.font = str(fontSize)+ \"px Arial\" ctx.fillText(string, x, y) ctx.font = str(fontSize-8)+ \"px Arial\" if sup != \"\": ctx.fillText(sup, x+fontSize/1.6, y-fontSize/2) if sub != \"\": ctx.fillText(sup, x+fontSize/1.6, y) ctx.fill() ctx.stroke() ctx.closePath() # 設法利用運算印出吉他各把位的音名 def doreme(x, y, fontSize, order, ctx): # EADGBE (guitar string) # FgGaAbBCdDeE (C=Do, D=Re, E=Mi) #簡譜 1 2 3 4 5 6 7 #音名 C D E F G A B #唱名 Do Re Mi Fa Sol La Ti # 讓音名數列可以每 12 音名後, 升高 key 後從頭開始 if order > 12: order = order % 12 if order == 1: canvasText(x, y, fontSize, \"A\", \"\", \"\", \"black\", ctx) elif order ==2: canvasText(x, y, fontSize, \"B\", \"b\", \"\", \"red\", ctx) elif order == 3: canvasText(x, y, fontSize, \"B\", \"\", \"\", \"black\", ctx) elif order == 4: canvasText(x, y, fontSize, \"C\", \"\", \"\", \"black\", ctx) elif order == 5: canvasText(x, y, fontSize, \"D\", \"b\", \"\", \"red\", ctx) elif order == 6: canvasText(x, y, fontSize, \"D\", \"\", \"\", \"black\", ctx) elif order == 7: canvasText(x, y, fontSize, \"E\", \"b\", \"\", \"red\", ctx) elif order == 8: canvasText(x, y, fontSize, \"E\", \"\", \"\", \"black\", ctx) elif order == 9: canvasText(x, y, fontSize, \"F\", \"\", \"\", \"black\", ctx) elif order == 10: canvasText(x, y, fontSize, \"G\", \"b\", \"\", \"red\", ctx) elif order == 11: canvasText(x, y, fontSize, \"G\", \"\", \"\", \"black\", ctx) elif order == 12: canvasText(x, y, fontSize, \"A\", \"b\", \"\", \"red\", ctx) else: canvasText(x, y, fontSize, \"A\", \"b\", \"\", \"red\", ctx) def background(x, y, xinc, yinc, xnum, ynum, ctx): # 水平線 for i in range(ynum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(x-1, y+i*yinc) ctx.lineTo(x+xnum*xinc+1, y+i*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(xnum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 ctx.moveTo(x+i*xinc, y) ctx.lineTo(x+i*xinc, y+ynum*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 標定各弦音符號, 以及把位編號 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.font = \"20px Arial\" sixString = [\"E\", \"A\", \"D\", \"G\", \"B\", \"E\"] stringNum = 0 for i in sixString: ctx.fillText(i, x-7+stringNum*xinc, y-10) stringNum = stringNum + 1 num = 1 for j in range(1,20,1): ctx.fillText(j,50,95+num*yinc) num = num + 1 ctx.fill() ctx.stroke() ctx.closePath() # EADGBE (guitar string) # FgGaAbBCdDeE (C=Do, D=Re, E=Mi) #################################### # 以下利用數列運算, 從已知第1把位的音名分別推算各把位的音名 # 吉他初始音名次序 816(11)38 #################################### firstBar = [8, 1, 6, 11, 3, 8] # j 為往下增量 for j in range(0): # k 為 往右把位初始值 fontSize = 15 for k in range(6): bx = x + (k)*w - fontSize/3 by = y + (j)*h+h/2 + fontSize/2 order = firstBar[k] + j + 1 doreme(bx, by, fontSize, order, ctx) # 一開始 x, y 為圓球圓心, 但是為了配合和弦繪圖 # 將 x, y 改為和弦的左上角座標 x, y # 配合 w, h, wcoord, hcoord 進行運算得到圓的圓心座標 bx, by #def ball(x, y, w, h , wcoord, hcoord, r, color, ctx): def ball(x, y, w, h , wcoord, hcoord, color, ctx): bx = x + (wcoord-1)*w by = y + (hcoord-1)*h+h/2 if w < h: r2 = w/2 -2 else: r2 = h/2 -2 ctx.beginPath() #ctx.fillStyle = 'black' ctx.fillStyle = color #ctx.strokeStyle = \"black\" ctx.strokeStyle = color #ctx.arc(50, 80, 9, 0, 2*math.pi, False) ctx.arc(bx, by, r2, 0, 2*math.pi, False) # 為了疊上各把位的音名, 暫時不填色 #ctx.fill() ctx.stroke() ctx.closePath() x = 300 y = 200 w = 20 h = 30 # 將前面的水平線與垂直線繪圖改用 background 繪圖 background(100, 100, w, h, 5, 19, ctx) #background(x, y, w, h, 5, 4, ctx) #background(100, 300, 10, 10, 5, 4, ctx) #background(300, 100, 10, 10, 5, 12, ctx) # 配合 300, 300 的和絃背景, w=30, h=30, (1,1) 位置放入圓 #for i in range( 6): # for j in range(3): # ball(x, y, w, h, i+1, j+1, 'black', ctx) #ball(x, y, w, h, 1, 4, 'red', ctx) #ball(300, 300, 30, 20, 1, 1, 9, 'black', ctx) window.onload=function(){ brython(1); } 1-19數字 1 2 3 4 5 6 7 8 9 10 11 12 13 14 ctx.beginPath() ctx.fillText = 'black' ctx.strokeStyle = \"black\" num = 1 for j in range(1,20,1): ctx.fillText(j,50,95+num*yinc) num = num + 1 ctx.fillText() ctx.stroke() ctx.closePath() from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"chord1\"] ctx = canvas.getContext(\"2d\") ''' # 改用 background 函式繪圖 # 水平線 for i in range(5): ctx.beginPath() # 設定線的寬度為 1 個單位 if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(99, 100+i*30) ctx.lineTo(201, 100+i*30) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(6): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 ctx.moveTo(100+i*20, 100) ctx.lineTo(100+i*20, 220) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() x = 300 y = 200 w = 20 h = 30 background(100, 100, w, h, 5, 19, ctx)"},{"tags":"Misc","url":"./w11.html","title":"W11","text":"畫線練習 畫線練習 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"chord1\"] ctx = canvas.getContext(\"2d\") def background(x, y, xinc, yinc, xnum, ynum, ctx): # 水平 for i in range(ynum+1): ctx.beginPath() if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(x-1, y+i*yinc) ctx.lineTo(x+xnum*xinc+1, y+i*yinc) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直 for i in range(xnum+1): ctx.beginPath() ctx.lineWidth = 1 ctx.moveTo(x+i*xinc, y) ctx.lineTo(x+i*xinc, y+ynum*yinc) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() background(50, 100, 20, 25, 5, 4, ctx) # 1 與 AMajor ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.font = \"30px Arial\" ctx.fillText(\"AMajor\", 50, 70) # 1 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(90, 138, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"1\", 85, 143) ctx.fill() ctx.stroke() ctx.closePath() # 2 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(110, 138, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"2\", 105, 143) ctx.fill() ctx.stroke() ctx.closePath() # 3 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(130, 138, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"3\", 125, 143) ctx.fill() ctx.stroke() ctx.closePath() # o ctx.beginPath() ctx.arc(70, 90, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() ctx.beginPath() ctx.arc(150, 90, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() # x ctx.beginPath() #ctx.arc(50, 90, 5, 0, 2*math.pi, False) ctx.moveTo(45, 85) ctx.lineTo(55, 95) ctx.moveTo(55, 85) ctx.lineTo(45, 95) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() background(250, 100, 20, 25, 5, 4, ctx) # 1 與 AMajor ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.font = \"30px Arial\" ctx.fillText(\"CMajor\", 250, 70) # 1 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(330, 113, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"1\", 325, 118) ctx.fill() ctx.stroke() ctx.closePath() # 2 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(290, 138, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"2\", 285, 143) ctx.fill() ctx.stroke() ctx.closePath() # 3 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(270, 162, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"3\", 265, 167) ctx.fill() ctx.stroke() ctx.closePath() # o ctx.beginPath() ctx.arc(310, 90, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() ctx.beginPath() ctx.arc(350, 90, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() # x ctx.beginPath() #ctx.arc(250, 90, 5, 0, 2*math.pi, False) ctx.moveTo(245, 85) ctx.lineTo(255, 95) ctx.moveTo(255, 85) ctx.lineTo(245, 95) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() background(450, 100, 20, 25, 5, 4, ctx) # 1 與 AMajor ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.font = \"30px Arial\" ctx.fillText(\"GMajor\", 450, 70) # 1 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(470, 138, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"1\", 465, 143) ctx.fill() ctx.stroke() ctx.closePath() # 2 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(450, 162, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"2\", 445, 167) ctx.fill() ctx.stroke() ctx.closePath() # 3 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(530, 162, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"3\", 525, 167) ctx.fill() ctx.stroke() ctx.closePath() # 4 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(550, 162, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"4\", 545, 167) ctx.fill() ctx.stroke() ctx.closePath() # o ctx.beginPath() ctx.arc(490, 90, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() ctx.beginPath() ctx.arc(510, 90, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() background(50, 300, 20, 25, 5, 4, ctx) # 1 與 AMajor ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.font = \"30px Arial\" ctx.fillText(\"DMajor\", 50, 270) # 1 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(110, 338, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"1\", 105, 343) ctx.fill() ctx.stroke() ctx.closePath() # 2 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(130, 362, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"2\", 125, 367) ctx.fill() ctx.stroke() ctx.closePath() # 3 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(150, 338, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"3\", 145, 343) ctx.fill() ctx.stroke() ctx.closePath() # o ctx.beginPath() ctx.arc(90, 290, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() ctx.beginPath() #ctx.arc(150, 390, 5, 0, 2*math.pi, False) #ctx.lineWidth =3 #ctx.strokeStyle = \"black\" #ctx.stroke() #ctx.closePath() # x ctx.beginPath() #ctx.arc(50, 390, 5, 0, 2*math.pi, False) ctx.moveTo(45, 285) ctx.lineTo(55, 295) ctx.moveTo(55, 285) ctx.lineTo(45, 295) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() # x ctx.beginPath() #ctx.arc(50, 90, 5, 0, 2*math.pi, False) ctx.moveTo(65, 285) ctx.lineTo(75, 295) ctx.moveTo(75, 285) ctx.lineTo(65, 295) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() background(250, 300, 20, 25, 5, 4, ctx) # 1 與 AMajor ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.font = \"30px Arial\" ctx.fillText(\"EMajor\", 250, 270) # 1 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(310, 313, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"1\", 305, 318) ctx.fill() ctx.stroke() ctx.closePath() # 2 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(270, 338, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"2\", 265, 343) ctx.fill() ctx.stroke() ctx.closePath() # 3 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(290, 338, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"3\", 285, 343) ctx.fill() ctx.stroke() ctx.closePath() # o ctx.beginPath() ctx.arc(330, 290, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() ctx.beginPath() #ctx.arc(150, 390, 5, 0, 2*math.pi, False) #ctx.lineWidth =3 #ctx.strokeStyle = \"black\" #ctx.stroke() #ctx.closePath() # o ctx.beginPath() ctx.arc(350, 290, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() ctx.beginPath() #ctx.arc(150, 390, 5, 0, 2*math.pi, False) #ctx.lineWidth =3 #ctx.strokeStyle = \"black\" #ctx.stroke() #ctx.closePath() # x ctx.beginPath() #ctx.arc(50, 390, 5, 0, 2*math.pi, False) ctx.moveTo(245, 285) ctx.lineTo(255, 295) ctx.moveTo(255, 285) ctx.lineTo(245, 295) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() background(450, 300, 20, 25, 5, 4, ctx) # 1 與 AMajor ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.font = \"30px Arial\" ctx.fillText(\"Cmaj7\", 450, 270) # 1 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(490, 338, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"1\", 485, 343) ctx.fill() ctx.stroke() ctx.closePath() # 2 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(470, 362, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"2\", 465, 367) ctx.fill() ctx.stroke() ctx.closePath() # o ctx.beginPath() ctx.arc(510, 290, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() ctx.beginPath() #ctx.arc(150, 390, 5, 0, 2*math.pi, False) #ctx.lineWidth =3 #ctx.strokeStyle = \"black\" #ctx.stroke() #ctx.closePath() # o ctx.beginPath() ctx.arc(530, 290, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() ctx.beginPath() ctx.arc(550, 290, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() # x ctx.beginPath() #ctx.arc(50, 390, 5, 0, 2*math.pi, False) ctx.moveTo(445, 285) ctx.lineTo(455, 295) ctx.moveTo(455, 285) ctx.lineTo(445, 295) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() 上述: window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"chord1\"] ctx = canvas.getContext(\"2d\") def background(x, y, xinc, yinc, xnum, ynum, ctx): # 水平 for i in range(ynum+1): ctx.beginPath() if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(x-1, y+i*yinc) ctx.lineTo(x+xnum*xinc+1, y+i*yinc) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直 for i in range(xnum+1): ctx.beginPath() ctx.lineWidth = 1 ctx.moveTo(x+i*xinc, y) ctx.lineTo(x+i*xinc, y+ynum*yinc) ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() background(50, 100, 20, 25, 5, 4, ctx) # 1 與 AMajor ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.font = \"30px Arial\" ctx.fillText(\"AMajor\", 50, 70) # 1 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(90, 138, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"1\", 85, 143) ctx.fill() ctx.stroke() ctx.closePath() # 2 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(110, 138, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"2\", 105, 143) ctx.fill() ctx.stroke() ctx.closePath() # 3 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(130, 138, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"3\", 125, 143) ctx.fill() ctx.stroke() ctx.closePath() # o ctx.beginPath() ctx.arc(70, 90, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() ctx.beginPath() ctx.arc(150, 90, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() # x ctx.beginPath() #ctx.arc(50, 90, 5, 0, 2*math.pi, False) ctx.moveTo(45, 85) ctx.lineTo(55, 95) ctx.moveTo(55, 85) ctx.lineTo(45, 95) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() background(250, 100, 20, 25, 5, 4, ctx) # 1 與 AMajor ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.font = \"30px Arial\" ctx.fillText(\"CMajor\", 250, 70) # 1 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(330, 113, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"1\", 325, 118) ctx.fill() ctx.stroke() ctx.closePath() # 2 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(290, 138, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"2\", 285, 143) ctx.fill() ctx.stroke() ctx.closePath() # 3 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(270, 162, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"3\", 265, 167) ctx.fill() ctx.stroke() ctx.closePath() # o ctx.beginPath() ctx.arc(310, 90, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() ctx.beginPath() ctx.arc(350, 90, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() # x ctx.beginPath() #ctx.arc(250, 90, 5, 0, 2*math.pi, False) ctx.moveTo(245, 85) ctx.lineTo(255, 95) ctx.moveTo(255, 85) ctx.lineTo(245, 95) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() background(450, 100, 20, 25, 5, 4, ctx) # 1 與 AMajor ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.font = \"30px Arial\" ctx.fillText(\"GMajor\", 450, 70) # 1 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(470, 138, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"1\", 465, 143) ctx.fill() ctx.stroke() ctx.closePath() # 2 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(450, 162, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"2\", 445, 167) ctx.fill() ctx.stroke() ctx.closePath() # 3 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(530, 162, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"3\", 525, 167) ctx.fill() ctx.stroke() ctx.closePath() # 4 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(550, 162, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"4\", 545, 167) ctx.fill() ctx.stroke() ctx.closePath() # o ctx.beginPath() ctx.arc(490, 90, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() ctx.beginPath() ctx.arc(510, 90, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() background(50, 300, 20, 25, 5, 4, ctx) # 1 與 AMajor ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.font = \"30px Arial\" ctx.fillText(\"DMajor\", 50, 270) # 1 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(110, 338, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"1\", 105, 343) ctx.fill() ctx.stroke() ctx.closePath() # 2 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(130, 362, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"2\", 125, 367) ctx.fill() ctx.stroke() ctx.closePath() # 3 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(150, 338, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"3\", 145, 343) ctx.fill() ctx.stroke() ctx.closePath() # o ctx.beginPath() ctx.arc(90, 290, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() ctx.beginPath() #ctx.arc(150, 390, 5, 0, 2*math.pi, False) #ctx.lineWidth =3 #ctx.strokeStyle = \"black\" #ctx.stroke() #ctx.closePath() # x ctx.beginPath() #ctx.arc(50, 390, 5, 0, 2*math.pi, False) ctx.moveTo(45, 285) ctx.lineTo(55, 295) ctx.moveTo(55, 285) ctx.lineTo(45, 295) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() # x ctx.beginPath() #ctx.arc(50, 90, 5, 0, 2*math.pi, False) ctx.moveTo(65, 285) ctx.lineTo(75, 295) ctx.moveTo(75, 285) ctx.lineTo(65, 295) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() background(250, 300, 20, 25, 5, 4, ctx) # 1 與 AMajor ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.font = \"30px Arial\" ctx.fillText(\"EMajor\", 250, 270) # 1 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(310, 313, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"1\", 305, 318) ctx.fill() ctx.stroke() ctx.closePath() # 2 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(270, 338, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"2\", 265, 343) ctx.fill() ctx.stroke() ctx.closePath() # 3 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(290, 338, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"3\", 285, 343) ctx.fill() ctx.stroke() ctx.closePath() # o ctx.beginPath() ctx.arc(330, 290, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() ctx.beginPath() #ctx.arc(150, 390, 5, 0, 2*math.pi, False) #ctx.lineWidth =3 #ctx.strokeStyle = \"black\" #ctx.stroke() #ctx.closePath() # o ctx.beginPath() ctx.arc(350, 290, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() ctx.beginPath() #ctx.arc(150, 390, 5, 0, 2*math.pi, False) #ctx.lineWidth =3 #ctx.strokeStyle = \"black\" #ctx.stroke() #ctx.closePath() # x ctx.beginPath() #ctx.arc(50, 390, 5, 0, 2*math.pi, False) ctx.moveTo(245, 285) ctx.lineTo(255, 295) ctx.moveTo(255, 285) ctx.lineTo(245, 295) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() background(450, 300, 20, 25, 5, 4, ctx) # 1 與 AMajor ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.font = \"30px Arial\" ctx.fillText(\"Cmaj7\", 450, 270) # 1 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(490, 338, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"1\", 485, 343) ctx.fill() ctx.stroke() ctx.closePath() # 2 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(470, 362, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"2\", 465, 367) ctx.fill() ctx.stroke() ctx.closePath() # o ctx.beginPath() ctx.arc(510, 290, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() ctx.beginPath() #ctx.arc(150, 390, 5, 0, 2*math.pi, False) #ctx.lineWidth =3 #ctx.strokeStyle = \"black\" #ctx.stroke() #ctx.closePath() # o ctx.beginPath() ctx.arc(530, 290, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() ctx.beginPath() ctx.arc(550, 290, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() # x ctx.beginPath() #ctx.arc(50, 390, 5, 0, 2*math.pi, False) ctx.moveTo(445, 285) ctx.lineTo(455, 295) ctx.moveTo(455, 285) ctx.lineTo(445, 295) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath()"},{"tags":"Misc","url":"./w10.html","title":"W10","text":"畫線練習 畫線練習 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) # 然後畫直線到 (150, 200) 座標點 ctx.lineTo(150, 200) # 畫右上左下的斜線 ctx.moveTo(150, 100) ctx.lineTo(100, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag2\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 for i in range(5): ctx.moveTo(100+i*10, 100) ctx.lineTo(100+i*10, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() from browser import document as doc from browser import html import math import re # 準備繪圖畫布 canvas = doc[\"japanflag3\"] container = doc[\"container3\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 水平線 for i in range(5): ctx.beginPath() # 設定線的寬度為 1 個單位 if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(99, 100+i*30) ctx.lineTo(201, 100+i*30) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(6): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 ctx.moveTo(100+i*20, 100) ctx.lineTo(100+i*20, 220) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 1 與 AMajor ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.font = \"30px Arial\" ctx.fillText(\"AMajor\", 100, 70) # 1 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(140, 145, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"1\", 135, 150) ctx.fill() ctx.stroke() ctx.closePath() # 2 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(160, 145, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"2\", 155, 150) ctx.fill() ctx.stroke() ctx.closePath() # 3 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(180, 145, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"3\", 175, 150) ctx.fill() ctx.stroke() ctx.closePath() # o ctx.beginPath() ctx.arc(120, 80, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() ctx.beginPath() ctx.arc(200, 80, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() # x ctx.beginPath() #ctx.arc(100, 80, 5, 0, 2*math.pi, False) ctx.moveTo(95, 75) ctx.lineTo(105, 85) ctx.moveTo(105, 75) ctx.lineTo(95, 85) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() 上述 from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag1\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 將畫筆移動到 (100, 100) 座標點 ctx.moveTo(100, 100) # 然後畫直線到 (150, 200) 座標點 ctx.lineTo(150, 200) # 畫右上左下的斜線 ctx.moveTo(150, 100) ctx.lineTo(100, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"japanflag2\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 for i in range(5): ctx.moveTo(100+i*10, 100) ctx.lineTo(100+i*10, 200) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() from browser import document as doc from browser import html import math import re # 準備繪圖畫布 canvas = doc[\"japanflag3\"] container = doc[\"container3\"] ctx = canvas.getContext(\"2d\") # 以下可以利用 ctx 物件進行畫圖 # 水平線 for i in range(5): ctx.beginPath() # 設定線的寬度為 1 個單位 if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(99, 100+i*30) ctx.lineTo(201, 100+i*30) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(6): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 ctx.moveTo(100+i*20, 100) ctx.lineTo(100+i*20, 220) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 1 與 AMajor ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.font = \"30px Arial\" ctx.fillText(\"AMajor\", 100, 70) # 1 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(140, 145, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"1\", 135, 150) ctx.fill() ctx.stroke() ctx.closePath() # 2 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(160, 145, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"2\", 155, 150) ctx.fill() ctx.stroke() ctx.closePath() # 3 ctx.beginPath() ctx.fillStyle = 'black' ctx.strokeStyle = \"black\" ctx.arc(180, 145, 9, 0, 2*math.pi, False) ctx.fill() ctx.stroke() ctx.closePath() ctx.beginPath() ctx.fillStyle = 'white' ctx.font = \"16px Arial\" ctx.fillText(\"3\", 175, 150) ctx.fill() ctx.stroke() ctx.closePath() # o ctx.beginPath() ctx.arc(120, 80, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() ctx.beginPath() ctx.arc(200, 80, 5, 0, 2*math.pi, False) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath() # x ctx.beginPath() #ctx.arc(100, 80, 5, 0, 2*math.pi, False) ctx.moveTo(95, 75) ctx.lineTo(105, 85) ctx.moveTo(105, 75) ctx.lineTo(95, 85) ctx.lineWidth =3 ctx.strokeStyle = \"black\" ctx.stroke() ctx.closePath()"}]};