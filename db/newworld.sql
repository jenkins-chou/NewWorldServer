/*
Navicat MySQL Data Transfer

Source Server         : admin
Source Server Version : 50722
Source Host           : localhost:3306
Source Database       : newworld

Target Server Type    : MYSQL
Target Server Version : 50722
File Encoding         : 65001

Date: 2018-04-25 20:10:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for live
-- ----------------------------
DROP TABLE IF EXISTS `live`;
CREATE TABLE `live` (
  `live_id` int(11) NOT NULL AUTO_INCREMENT,
  `live_name` varchar(255) DEFAULT NULL,
  `live_url` varchar(255) DEFAULT NULL,
  `live_author_id` int(11) DEFAULT NULL,
  `live_create_time` varchar(255) DEFAULT NULL,
  `live_watch_time` int(11) DEFAULT NULL,
  `live_status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`live_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of live
-- ----------------------------

-- ----------------------------
-- Table structure for test
-- ----------------------------
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of test
-- ----------------------------
INSERT INTO `test` VALUES ('2', 'jenkins');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) DEFAULT NULL,
  `user_real_name` varchar(255) DEFAULT NULL,
  `user_avatar_url` varchar(255) DEFAULT NULL,
  `user_health` varchar(255) DEFAULT NULL,
  `user_phone` varchar(255) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_address` varchar(255) DEFAULT NULL,
  `user_slogan` varchar(255) DEFAULT NULL,
  `user_status` varchar(255) DEFAULT NULL,
  `user_create_time` varchar(255) DEFAULT NULL,
  `user_remark` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'xixi', null, null, null, null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for video
-- ----------------------------
DROP TABLE IF EXISTS `video`;
CREATE TABLE `video` (
  `video_id` int(11) NOT NULL AUTO_INCREMENT,
  `video_name` varchar(255) DEFAULT NULL,
  `video_image_url` varchar(255) DEFAULT NULL,
  `video_url` varchar(255) DEFAULT NULL,
  `video_watch_times` varchar(255) DEFAULT NULL,
  `video_author_id` int(11) DEFAULT NULL,
  `video_create_time` varchar(255) DEFAULT NULL,
  `video_remark` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`video_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of video
-- ----------------------------
