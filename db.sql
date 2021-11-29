
--
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `email` varchar(255) NOT NULL,
  `mssv` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

 --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `address`
--

CREATE TABLE `address` (
  `MSSV` varchar(8) NOT NULL,
  `houseaddress` varchar(40) NOT NULL,
  `street` varchar(40) NOT NULL,
  `ward` varchar(40) NOT NULL,
  `district` varchar(40) NOT NULL,
  `city` varchar(40) NOT NULL,
  `addressType` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Cấu trúc bảng cho bảng `classroom`
--

CREATE TABLE `classroom` (
  `roomID` varchar(10) NOT NULL,
  `roomType` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


--
-- Cấu trúc bảng cho bảng `dependent`
--

CREATE TABLE `dependent` (
  `MSSV` varchar(8) NOT NULL,
  `fullName` varchar(30) NOT NULL,
  `phoneNumber` varchar(10) DEFAULT NULL,
  `relation` varchar(10) DEFAULT NULL,
  `job` varchar(10) DEFAULT NULL,
  `address` varchar(70) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Cấu trúc bảng cho bảng `graduatedstudent`
--

CREATE TABLE `graduatedstudent` (
  `MSSV` varchar(10) NOT NULL,
  `diplomaType` varchar(15) NOT NULL,
  `graduateYear` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Cấu trúc bảng cho bảng `groupclass`
--

CREATE TABLE `groupclass` (
  `classID` varchar(3) NOT NULL,
  `groupID` varchar(1) NOT NULL,
  `subjectID` varchar(12) NOT NULL,
  `year` int(5) NOT NULL,
  `semester` int(1) NOT NULL,
  `startTime` time DEFAULT NULL,
  `endTime` time DEFAULT NULL,
  `MSGV` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Cấu trúc bảng cho bảng `joinactivity`
--

CREATE TABLE `joinactivity` (
  `MSSV` varchar(8) NOT NULL,
  `activityID` varchar(10) NOT NULL,
  `joinDate` date DEFAULT NULL,
  `dayReceive` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Cấu trúc bảng cho bảng `social_activity`
--

CREATE TABLE `social_activity` (
  `activityID` varchar(10) NOT NULL,
  `activityName` varchar(30) NOT NULL,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  `totalDay` int(11) DEFAULT NULL,
  `departmentID` varchar(10) NOT NULL,
  `maxstudent` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Cấu trúc bảng cho bảng `student`
--

CREATE TABLE `student` (
  `MSSV` varchar(8) NOT NULL,
  `school_email` varchar(50) NOT NULL,
  `fname` varchar(20) DEFAULT NULL,
  `midname` varchar(20) DEFAULT NULL,
  `lname` varchar(20) NOT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `training_system` varchar(10) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `social_day` int(11) DEFAULT NULL,
  `GPA` float DEFAULT NULL,
  `personal_email` varchar(40) DEFAULT NULL,
  `MSGV` varchar(10) NOT NULL,
  `departmentID` varchar(10) NOT NULL,
  `TCTL` int(2) DEFAULT NULL,
  `Khoa` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Cấu trúc bảng cho bảng `study`
--

CREATE TABLE `study` (
  `MSSV` varchar(8) NOT NULL,
  `subjectID` varchar(12) NOT NULL,
  `classID` varchar(3) NOT NULL,
  `groupID` varchar(1) NOT NULL,
  `roomID` varchar(10) NOT NULL,
  `finalscore` float DEFAULT NULL,
  `exercisescore` float DEFAULT NULL,
  `labscore` float DEFAULT NULL,
  `total_score` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Cấu trúc bảng cho bảng `teacher`
--

CREATE TABLE `teacher` (
  `MSGV` varchar(10) NOT NULL,
  `fullName` varchar(30) NOT NULL,
  `phoneNumber` varchar(10) DEFAULT NULL,
  `position` varchar(10) DEFAULT NULL,
  `join_school_Year` date NOT NULL,
  `departmentID` varchar(10) NOT NULL,
  `schoolEmail` varchar(30) NOT NULL,
  `personalEmail` varchar(30) DEFAULT NULL,
  `address` varchar(30) DEFAULT NULL,
  `salary` int(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Cấu trúc bảng cho bảng `undergraduate`
--

CREATE TABLE `undergraduate` (
  `MSSV` varchar(8) NOT NULL,
  `studentStatus` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Cấu trúc bảng cho bảng `week`
--

CREATE TABLE `week` (
  `classID` varchar(3) NOT NULL,
  `groupID` varchar(1) NOT NULL,
  `subjectID` varchar(12) NOT NULL,
  `week` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Chỉ mục cho bảng `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`MSSV`,`houseaddress`,`street`,`ward`,`district`,`city`) USING BTREE;

--
-- Chỉ mục cho bảng `classroom`
--
ALTER TABLE `classroom`
  ADD PRIMARY KEY (`roomID`);

--
-- Chỉ mục cho bảng `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`departmentID`),
  ADD UNIQUE KEY `departmentName` (`departmentName`),
  ADD KEY `fk_dep_teacher` (`MGR`);

--
-- Chỉ mục cho bảng `dependent`
--
ALTER TABLE `dependent`
  ADD PRIMARY KEY (`MSSV`,`fullName`);

--
-- Chỉ mục cho bảng `graduatedstudent`
--
ALTER TABLE `graduatedstudent`
  ADD PRIMARY KEY (`MSSV`);

--
-- Chỉ mục cho bảng `groupclass`
--
ALTER TABLE `groupclass`
  ADD PRIMARY KEY (`classID`,`groupID`,`subjectID`),
  ADD KEY `MSGV` (`MSGV`),
  ADD KEY `subject_groupclss_fk` (`subjectID`),
  ADD KEY `classID` (`classID`,`groupID`);

--
-- Chỉ mục cho bảng `joinactivity`
--
ALTER TABLE `joinactivity`
  ADD PRIMARY KEY (`MSSV`,`activityID`),
  ADD KEY `activityID_fr` (`activityID`);

--
-- Chỉ mục cho bảng `social_activity`
--
ALTER TABLE `social_activity`
  ADD PRIMARY KEY (`activityID`),
  ADD KEY `social_activity` (`departmentID`);

--
-- Chỉ mục cho bảng `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`MSSV`),
  ADD KEY `fk_teacher_student` (`MSGV`),
  ADD KEY `fk_department_student` (`departmentID`);

--
-- Chỉ mục cho bảng `study`
--
ALTER TABLE `study`
  ADD PRIMARY KEY (`MSSV`,`subjectID`,`classID`,`groupID`,`roomID`),
  ADD KEY `subjectID` (`subjectID`),
  ADD KEY `classID` (`classID`,`groupID`),
  ADD KEY `roomID` (`roomID`);

--
-- Chỉ mục cho bảng `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`subjectID`);

--
-- Chỉ mục cho bảng `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`MSGV`),
  ADD KEY `teacher` (`departmentID`);

--
-- Chỉ mục cho bảng `undergraduate`
--
ALTER TABLE `undergraduate`
  ADD PRIMARY KEY (`MSSV`);

--
-- Chỉ mục cho bảng `week`
--
ALTER TABLE `week`
  ADD PRIMARY KEY (`classID`,`groupID`,`subjectID`,`week`),
  ADD KEY `week_subject` (`subjectID`);

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `fk_student_address` FOREIGN KEY (`MSSV`) REFERENCES `student` (`MSSV`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `department`
--
ALTER TABLE `department`
  ADD CONSTRAINT `fk_dep_teacher` FOREIGN KEY (`MGR`) REFERENCES `teacher` (`MSGV`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `dependent`
--
ALTER TABLE `dependent`
  ADD CONSTRAINT `dependent_ibfk_1` FOREIGN KEY (`MSSV`) REFERENCES `student` (`MSSV`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `graduatedstudent`
--
ALTER TABLE `graduatedstudent`
  ADD CONSTRAINT `graduatedstudent_ibfk_1` FOREIGN KEY (`MSSV`) REFERENCES `student` (`MSSV`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `groupclass`
--
ALTER TABLE `groupclass`
  ADD CONSTRAINT `groupclass_ibfk_1` FOREIGN KEY (`MSGV`) REFERENCES `teacher` (`MSGV`) ON DELETE CASCADE,
  ADD CONSTRAINT `subject_groupclss_fk` FOREIGN KEY (`subjectID`) REFERENCES `subject` (`subjectID`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `joinactivity`
--
ALTER TABLE `joinactivity`
  ADD CONSTRAINT `activityID_fr` FOREIGN KEY (`activityID`) REFERENCES `social_activity` (`activityID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `joinactivity_ibfk_1` FOREIGN KEY (`MSSV`) REFERENCES `student` (`MSSV`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `study`
--
ALTER TABLE `study`
  ADD CONSTRAINT `study_ibfk_1` FOREIGN KEY (`MSSV`) REFERENCES `undergraduate` (`MSSV`),
  ADD CONSTRAINT `study_ibfk_2` FOREIGN KEY (`subjectID`) REFERENCES `subject` (`subjectID`),
  ADD CONSTRAINT `study_ibfk_3` FOREIGN KEY (`classID`,`groupID`) REFERENCES `groupclass` (`classID`, `groupID`),
  ADD CONSTRAINT `study_ibfk_4` FOREIGN KEY (`roomID`) REFERENCES `classroom` (`roomID`);

--
-- Các ràng buộc cho bảng `week`
--
ALTER TABLE `week`
  ADD CONSTRAINT `group_class_fk` FOREIGN KEY (`classID`,`groupID`) REFERENCES `groupclass` (`classID`, `groupID`) ON DELETE CASCADE,
  ADD CONSTRAINT `week_groupclass_fk` FOREIGN KEY (`subjectID`) REFERENCES `subject` (`subjectID`) ON DELETE CASCADE;
COMMIT;

