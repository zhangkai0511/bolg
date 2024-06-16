# python语法整理

## 一 、萌新语法

### 输入和输出
第一种：不带引号，让计算机读懂括号里的内容，打印最终结果
print()
```python
print(1+1)
2
```
第二种：带单引号，计算机无须理解，原样怎么述引号中的内容
```python
print('中华人民共和国')
中华人民共和国
```
第三种：带双引号，作用和单引号一样；当打印内容中有单引号时，可以使用单引号
```python
print("Let's go")
Letis go

print('Let\'s go')
Let's go

# 也可以使用转义字符+单引号（/'）来实现单引号
```

第四种：带三引号，实现换行
```python
print('''python小课
最好的python课程''')

python小课
最好的python课程

# 采用转义字符“\n”也可以换行
```

input（）
收集信息
```python
name = input('请输入你的forchange ID:')

# 使用变量赋值来获取输入的信息
```

### 变量的命名
1.只能一个词；<br/>
2.只能包含字母、数字和下划线；<br/>
3.不能以数字开头；<br/>
4.尽量描述包含的数据内容；<br/>
5.不要使用python函数名和关键字。<br/>

```python
number = 34
name = 'forchange'
list_class = ['基础语法课程','爬虫分析初阶','爬虫分析进阶','自动化办公']
```


<table >
    <tr>
        <th colspan="7" style="text-align: center;">python3.7.4中的关键字（不⽤记，熟悉即可） </th>
    </tr>
   <tr>
        <th>False</th>
        <th>None</th>
        <th>True</th>
        <th>and</th>
        <th>as</th>
        <th>assert</th>
        <th>async</th>
   </tr>
    <tr>
        <th>await</th>
        <th>break</th>
        <th>class</th>
        <th>continue</th>
        <th>def</th>
        <th>del</th>
        <th>eilf</th>
   </tr>
    <tr>
        <th>else</th>
        <th>except</th>
        <th>finally</th>
        <th>for</th>
        <th>from</th>
        <th>global</th>
        <th>if</th>
   </tr>
    <tr>
        <th>import</th>
        <th>in</th>
        <th>is</th>
        <th>almbda</th>
        <th>nonlocal</th>
        <th>not</th>
        <th>or</th>
   </tr>
    <tr>
        <th>pass</th>
        <th>raise</th>
        <th>return</th>
        <th>try</th>
        <th>while</th>
        <th>with</th>
        <th>yeild</th>
   </tr>

</table>

### 条件判断
条件判断的解释:让计算机知道，在什么条件下，该去做什么。

### 单向判断
if...
如果条件成立，就执行语句
```python
number = 6
if number > 3:
    print(number)
6

# 注意格式！if后面要加冒号，同时执行语句要缩进四个空格。（空格和tab,我选空格）
```

### 双向判断
if...else...
```python
number = 7
if number < 3:
    print(number)
else:
    number = number - 3
    print(number)
# 结果输出为4
# if和else是同一层级，不要缩进。if和else下的执行语句都需要缩进四个空格。
```

if...else...和if...if...的区别<br/>
if...else...一个条件满足后就不会进行其他判断（if代表的条件和else代表的条件是互斥的）<br/>
if...if...会遍历所有条件，一个条件无论满足还是不满足，都会进行下一个条件的判断

### 多向判断
if...elif...else...
三个及其以上条件的判断
```python
grade = 65
if 80 <= frade <= 100:
    print('成绩优秀')
elif 60 <= grade < 80:
    print('成绩中等')
else：
    print('成绩差')

# 结果输出为成绩中等
```
     
### IF嵌套
if 嵌套<br/>
使用if进行条件判断，还希望在条件成立的执行语句中在增加条件判断，即if中还有if，这两个if非平级
```python
grade = 15 
if 80 <= grade <= 100:>
    print('成绩优秀')
elif 60 <= grade ,80:
    print('成绩中等')
else :
    print('成绩差')
    if 20 <= grade <60:
        print('在努力一把')
    else :
        print('你要比以前更努力才行，你可以的！')

结果输出为：
成绩差
你要比以前更努力才行，你可以的！
# 注意，嵌套的第二个if缩进了4个空格，表示不同的层级。
```

## 二、数据类型
### 数据类型
python常见的数据类型：字符串，整数型，浮点型，列表，字典，布尔值，元祖。<br/>
最基本的数据类型有三种：<br/>
字符串str：用括号括起来的文本（如：'python'、'123'、'风变编程'）<br/>
整数int：不带小数点的数字（如:-1、1、520、1314）<br/>
浮点数float:带小数点的数字，运算结果存在误差（如:-0.15、3.1415、1.0）<br/>
列表list：是一种有序的集合，可以随时增加和删除其中的元素。标识是中括号[]。<br/>
元祖tuple:一种类似列表的数据类型，但是不能被修改。<br/>
字典dice:全称为dictionary,使用键值对(key-value)作为存储方式。标识是大括号{}。<br/>
布尔值bool:表示真假的数据类型，只有两个值，True和False。<br/>

### 数据的操作<br/><br/>
#### 字符串的拼接
初阶用法：使用'+'进行字符串的拼接
```python
print('风变'+'编程')
风变编程

name = '酱酱'
begin = '我叫'
print(begin + name)
我叫酱酱
```
进阶用法：使用'%'进行字符串的拼接
```python
name = '《凤求凰》'
name = 1
print('司马相如以%d曲%s打动了卓文君'%(number,name))
司马相如以一曲《凤求凰》打动了卓文君
```

#### 四则运算
| 运算符 | 表示 | 例子 |
|:-------:|:-------:|:-------:|
| + | 加 | 1 + 1 输出结果为2 |
| - | 减 | 1 - 1 输出结果为0 |
| * | 乘 | 3 * 2 输出结果为6 |
| / | 除 | 2 / 1 输出结果为1 |
| % | 取模-返回的除法的余数 | 5 % 2 输出结果为1 |
| ** | 幂-返回的x的y次幂 | 2 ** 3 输出结果为8 |
| // | 取整数-返回商的整数部分 | 11 // 22 输出结果为5 |

运算优先级：
与平时运算优先级一样：从左到右顺着来，括号里的优先算，乘除排在加减前。

#### 数据转换
type（）<br/>
查看变量的数据类型
```python
who = 'xiaojiangjiang'
print(type(who))
<class 'str'>

结果显示这是一个字符串类型的数据
```

str（）<br/>
将其他的数据类型强制转换为字符串
```python
begin = '我吃了'
number = 1
fruit = '个水果'
print(begin + str(number) + fruit)
我吃了1个水果

# 进行字符串拼接时，不同数据类型不能直接使用'+'连接，需要先将整数转换为字符串类型
```

int（）<br/>
将整数形式的字符串转化为整数（文本类字符串和浮点形式的字符串不能转化为整数）<br/>
对浮点数直接抹零取整
```python
print(int(3.8))
3
```

float()<br/>
将整数和字符串转换为浮点数（文字类字符串无法转换）
```python
print(float(8))
8.0
```

list()<br/>
将数据转换为列表类型
```python
a = 'python小课'
print(list(a))
['p','y','t','h','o','n','小','课']
```

len()<br/>
用于检查某个数据的长度
```python
bros = ['刘备','关羽','张飞']
print(len(bros))
3
emotion = 'happy'
print(len(emtion))
5
```

### 数据的常用语法<br/><br/>
#### 列表语法
列表的操作可分为两种类型，一种类型为对列表元素的处理，另一种类型为对列表的处理，每种类型都有四种操作：提取，修改，增加，删除（取改增删）。<br/><br/>
偏移量：


