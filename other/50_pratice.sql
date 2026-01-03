-- student
create table student(
 sno varchar(10) primary key,
 sname varchar(20),
 sage int(2), 
 ssex varchar(5)
);

create table teacher(
 tno varchar(10) primary key, 
 tname varchar(20)
);

create table course(
 cno varchar(10),
 cname varchar(20), 
 tno varchar(20), 
 constraint pk_course primary key (cno,tno)
);

create table sc(
 sno varchar(10),
 cno varchar(10), 
 score float(4,2),
 constraint pk_sc primary key (sno,cno)
);

-- sno、sname、sage、ssex
insert into student values ('s001','張三',23,'男');
insert into student values ('s002','李四',23,'男');
insert into student values ('s003','吳鵬',25,'男');
insert into student values ('s004','琴沁',20,'女');
insert into student values ('s005','王麗',20,'女');
insert into student values ('s006','李波',21,'男');
insert into student values ('s007','劉玉',21,'男');
insert into student values ('s008','蕭蓉',21,'女');
insert into student values ('s009','陳蕭曉',23,'女');
insert into student values ('s010','陳美',22,'女');
insert into student values ('s011','王麗',24,'女');
insert into student values ('s012','蕭蓉',20,'女');

--tno、tname
insert into teacher values ('t001', '劉陽');
insert into teacher values ('t002', '諶燕');
insert into teacher values ('t003', '胡明星');

--cno、cname、tno
insert into course values ('c001','J2SE','t002');
insert into course values ('c002','Java Web','t002');
insert into course values ('c003','SSH','t001');
insert into course values ('c004','Oracle','t001');
insert into course values ('c005','SQL SERVER 2005','t003');
insert into course values ('c006','C#','t003');
insert into course values ('c007','JavaScript','t002');
insert into course values ('c008','DIV+CSS','t001');
insert into course values ('c009','PHP','t003');
insert into course values ('c010','EJB3.0','t002');

--sno、cno、score
insert into sc values ('s001','c001',78.9);
insert into sc values ('s002','c001',80.9);
insert into sc values ('s003','c001',81.9);
insert into sc values ('s004','c001',50.9);
insert into sc values ('s005','c001',59.9);
insert into sc values ('s001','c002',82.9);
insert into sc values ('s002','c002',72.9);
insert into sc values ('s003','c002',82.9);
insert into sc values ('s001','c003',59);
insert into sc values ('s006','c003',99.8);
insert into sc values ('s002','c004',52.9);
insert into sc values ('s003','c004',20.9);
insert into sc values ('s004','c004',59.8);
insert into sc values ('s005','c004',50.8);
insert into sc values ('s002','c005',92.9);
insert into sc values ('s001','c007',78.9);
insert into sc values ('s001','c010',78.9);

-- 查詢學生表的 前10條資料
SELECT * FROM student LIMIT 10;

-- 查詢成績表所有成績的最低分,平均分,總分
SELECT MAX(score) as max_score,
        MIN(score) as min_score,
        AVG(score) as avg_score
 FROM sc;

-- 查詢老師 “諶燕” 所帶的課程設數量
SELECT COUNT(*) AS course_count FROM course
    JOIN teacher
    on course.tno=teacher.tno
    WHERE teacher.tname = '諶燕'

-- 查詢所有老師所帶 的課程 數量
SELECT teacher.tname, count(course.cno) AS course_count FROM teacher
    JOIN course
    ON teacher.tno = course.tno
    GROUP BY teacher.tno,teacher.tname

-- 查詢姓”張”的學生名單
SELECT * FROM student
    WHERE SUBSTRING(student.sname,1,1) = '張'

-- 查詢課程名稱為’Oracle’且分數低於60 的學號和分數
SELECT student.sno, sc.score FROM student
    JOIN sc
    ON sc.sno = student.sno
    JOIN course
    ON sc.cno = course.cno
    WHERE course.cname = 'Oracle'

-- 查詢所有學生的選課 課程名稱
SELECT student.sname,course.cname FROM student
    JOIN sc
    ON sc.sno = student.sno
    JOIN course 
    ON sc.cno = course.cno
    GROUP BY student.sname,course.cname

-- 查詢任何一門課程成績在70 分以上的學生姓名.課程名稱和分數
SELECT student.sname, course.cname,sc.score FROM student
    JOIN sc
    ON sc.sno = student.sno
    JOIN course 
    ON sc.cno = course.cno
    WHERE sc.score > 70

-- 查詢不及格的課程,並按課程號從大到小排列 學號,課程號,課程名,分數
SELECT student.sno, course.cno,course.cname,sc.score FROM student
    JOIN sc
    ON sc.sno = student.sno
    JOIN course 
    ON sc.cno = course.cno
    WHERE sc.score < 60
    ORDER BY course.cno DESC

-- 查詢沒學過”諶燕”老師講授的任一門課程的學號,學生姓名
SELECT student.sno,student.sname FROM student
    JOIN sc
    ON sc.sno = student.sno
    JOIN course 
    ON sc.cno = course.cno
    JOIN teacher
    ON teacher.tno = course.tno
    WHERE teacher.tname != '諶燕'
    GROUP BY student.sno,student.sname 
    
-- 查詢兩門以上不及格課程的同學的學號及其平均成績
SELECT student.sno, AVG(sc.score) FROM student
    JOIN sc
    ON student.sno = sc.sno
    WHERE sc.score < 60
    GROUP BY student.sno
    HAVING COUNT(*)>2

-- 檢索’c004’課程分數小於60,按分數降序排列的同學學號
SELECT student.sno FROM student
    JOIN sc
    ON sc.sno = student.sno
    WHERE sc.cno = 'c004' AND sc.score < 60
    ORDER BY sc.score DESC

-- 查詢’c001’課程比’c002’課程成績高的所有學生的學號
SELECT student.sno FROM student
    JOIN sc
    ON sc sc1.sno = student.sno AND sc1.cno = 'c001'
    ON sc sc2.sno = student.sno AND sc2.cno = 'c002'
    WHERE sc1.score > sc2.score
-- 查詢平均成績大於60 分的同學的學號和平均成績
SELECT AVG(sc.score), student.sno FROM student
    JOIN sc
    ON sc.sno = student.sno
    GROUP BY student.sno
    HAVING AVG(sc.score)>60

-- 查詢所有同學的學號.姓名.選課數.總成績
SELECT student.sno,student.sname,COUNT(course.cno), SUM(sc.score) FROM student
    JOIN sc
    ON sc.sno = student.sno
    JOIN course
    ON course.cno = sc.cno
    GROUP BY student.sno

-- 查詢姓”劉”的老師的個數
SELECT COUNT(*) FROM teacher
    WHERE SUBSTRING(student.sname,1,1) = '劉'

-- 查詢只學”諶燕”老師所教的課的同學的學號:姓名
SELECT student.sno,student.sname FROM student
    JOIN sc
    ON sc.sno = student.sno
    JOIN course 
    ON sc.cno = course.cno
    JOIN teacher
    ON teacher.tno = course.tno
    GROUP BY student.sno,student.sname
    HAVING COUNT(teacher.sno) = 1
    AND MAX(teacher.tname) = '諶燕'

-- 查詢學過”c001″並且也學過編號”c002″課程的同學的學號.姓名
SELECT student.sno, student.sname FROM student
    JOIN sc sc1
    ON sc1.sno = student.sno AND sc1.cno = 'c001'
    JOIN sc sc2
    ON sc2.sno = student.sno AND sc2.cno = 'c002'

-- 查詢學過”諶燕”老師所教的所有課的同學的學號:姓名
SELECT s.sno, s.sname
FROM student s
JOIN sc sc ON sc.sno = s.sno
JOIN course c ON sc.cno = c.cno
JOIN teacher t ON t.tno = c.tno
WHERE t.tname = '諶燕'
GROUP BY s.sno, s.sname
HAVING COUNT(DISTINCT c.cno) = (
    SELECT COUNT(*) 
    FROM course
    JOIN teacher t2 ON t2.tno = course.tno
    WHERE t2.tname = '諶燕'
);

-- 查詢課程編號”c004″的成績比課程編號”c001″和”c002″課程低的所有同學的學號.姓名
SELECT student.sno, student.sname FROM student
    JOIN sc AS sc004
    ON sc004.sno = student.sno AND sc004.cno = 'c004'
    JOIN sc AS sc001
    ON sc001.sno = student.sno AND sc001.cno = 'c001'
    JOIN sc AS sc002
    ON sc002.sno = student.sno AND sc002.cno = 'c002'
    WHERE sc004.score < sc001.score AND sc004.score < sc002.score
-- 查詢所有課程成績小於60 分的同學的學號.姓名
SELECT DISTINCT s.sno, s.sname
FROM student s
JOIN sc ON sc.sno = s.sno
GROUP BY s.sno, s.sname
HAVING MAX(sc.score) < 60;

-- 查詢沒有學課的同學的學號.姓名
SELECT student.sno,student.sname FROM student
    LEFT JOIN sc
    ON sc.sno = student.sno
    WHERE sc.sno IS NULL;
    GROUP BY student.sno,student.sname

-- 查詢與學號為”s001″一起上過課的同學的學號和姓名
SELECT student.sno,student.sname FROM student
    JOIN sc
    ON sc.sno = student.sno
    WHERE sc.cno IN (
        SELECT cno from sc
        WHERE sc.sno = 's001'
    )
    AND sc.sno != 's001'
    GROUP BY student.sno,student.sname

-- 查詢跟學號為”s005″所修課程完全一樣的同學的學號和姓名
SELECT s.sno, s.sname
FROM student s
JOIN sc ON s.sno = sc.sno
GROUP BY s.sno, s.sname
HAVING GROUP_CONCAT(sc.cno ORDER BY sc.cno) = (
    SELECT GROUP_CONCAT(cno ORDER BY cno)
    FROM sc
    WHERE sno = 's005'
);

-- 查詢各科成績最高和最低的分 顯示:課程ID,最高分,最低分
SELECT sc.sno, MAX(sc.score), MIN(sc.score) FROM sc
    GROUP BY sc.sno