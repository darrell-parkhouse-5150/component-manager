create database `component_manager`;

use `component_manager`;

create table
    `users` (
        `user_id`        int (11) primary key auto_increment,
        `user_name`      varchar(30) not null,
        `num_components` int (5) not null,
        `email`          varchar(50) not null,
        `password`       varchar(50) not null,
        `updated_at`     datetime default current_timestamp,
        `created_at`     datetime
    );

create Table
    `components` (
        `component_id` int(11) primary key auto_increment,
        `component_name` varchar(30) not null,
        `author_name` varchar(30) not null,
        `version` int(5) not null,
        `c_type` enum ('standard', 'angular', 'react'),
        `updated_at` datetime default current_timestamp,
        `created_at` datetime
    );

alter table `components`
    drop column `version`;

alter table `components`
    add column `version` varchar(10) not null after `author_name`

insert into `users` (`user_id`, `user_name`, `num_components`, `email`, `password`, `updated_at`, `created_at`) 
    values (NULL, 'Darrell Parkhouse', '15', 'darrellparkhouse910@gmail.com', 'phpcoder5150', current_timestamp(), '2024-08-18 15:31:02');
    values (NULL, 'Molly Parkhouse', '15', 'm.parkhouse5150@gmail.com', 'phpcoder5150', current_timestamp(), '2024-08-18 15:31:02');
insert into `users` (`user_id`, `user_name`, `num_components`, `email`, `password`, `updated_at`, `created_at`)
    values (NULL, 'Molly Parkhouse', '15', 'm.parkhouse5150@gmail.com', 'phpcoder5150', current_timestamp(), current_timestamp());
    values (NULL, 'Molly Parkhouse', '15', 'm.parkhouse5150@gmail.com', 'phpcoder5150', current_timestamp(), '2024-08-18 15:31:02');
insert into `users` (`user_id`, `user_name`, `num_components`, `email`, `password`, `updated_at`, `created_at`)
    values (NULL, 'Travis Parkhouse', '0', 't.parkhouse5150@gmail.com', 'phpcoder5150', current_timestamp(), current_timestamp());

select u.*
from users u
order by u.num_components asc;

UPDATE `users` SET `num_components` = '12' WHERE `users`.`user_id` = 2; 
update `users` set `num_components` = '23' where `users`.`user_id` = 1;

insert into `components` (`component_id`, `component_name`, `author_name`, `version`, `c_type`, `updated_at`, `created_at`) 
    values (NULL, 'status_update', 'Darrell Parkhouse', '0.3.21', 'react', current_timestamp(), NULL);

insert into `components` (`component_id`, `component_name`, `author_name`, `version`, `c_type`, `updated_at`, `created_at`) 
    values (NULL, 'movie app', 'Molly Parkhouse', '0.3.21', 'angular', current_timestamp(), NULL); 

insert into `components` (`component_id`, `component_name`, `author_name`, `version`, `c_type`, `updated_at`, `created_at`) 
    values (NULL, 'twitter clone app', 'Darrell Parkhouse', '0.3.21', 'angular', current_timestamp(), NULL); 
insert into `components` (`component_id`, `component_name`, `author_name`, `version`, `c_type`, `updated_at`, `created_at`) 
    values (NULL, 'youtube clone app', 'Darrell Parkhouse', '0.13.21', 'standard', current_timestamp(), NULL); 
insert into `components` (`component_id`, `component_name`, `author_name`, `version`, `c_type`, `updated_at`, `created_at`) 
    values (NULL, 'friend request', 'Darrell Parkhouse', '2.3.21', 'standard', current_timestamp(), NULL); 
insert into `components` (`component_id`, `component_name`, `author_name`, `version`, `c_type`, `updated_at`, `created_at`) 
    values (NULL, 'follow system', 'Darrell Parkhouse', '1.34.31', 'react', current_timestamp(), NULL);

select c.component_id, c.component_name, c.author_name, c.version, c.c_type, c.updated_at, c.created_at from `components` c where c.author_name = 'Darrell Parkhouse';

select * from `components`;

select c.component_name, c.author_name
from components c
where c.author_name = 'Molly Parkhouse';

select c.component_name, 
       c.component_id 
from components c 
where component_name <> '' order by component_id limit 0

select c.author_name,
       c.component_name
from components c 
where c.author_name = 'Darrell Parkhouse'
and c.component_name != '';
use component_manager;
alter table `components`
    add column `loc` varchar(10) not null after `component_name`;

update `components` set `loc` = '12,000' where `components`.`component_id` = 1;
update `components` set `loc` = '12,834' where `components`.`component_id` = 2;
update `components` set `loc` = '126,412' where `components`.`component_id` = 3;
update `components` set `loc` = '163,386' where `components`.`component_id` = 4;
select c.component_id,
       c.component_name,
       c.loc,
       c.author_name,
       c.version from components c;


select c.loc from `components` c;

select SUM(c.loc) as total_lines from `components` c;

select c.loc from `components` c;

SELECT 
  component_name,
  loc,
  SUM(loc) OVER (ORDER BY component_name) AS running_total
FROM 
  components;

SELECT component_name, SUM(loc) AS total_loc
FROM components
GROUP BY component_name;

SELECT component_name, SUM(CAST(loc AS UNSIGNED)) AS total_loc
FROM components
GROUP BY component_name;

SELECT component_name, SUM(CAST(REPLACE(loc, ',', '') AS DECIMAL(20, 0))) AS total_loc
FROM components
GROUP BY component_name;

--! do not run
UPDATE `components` SET `loc` = '163,386' WHERE `components`.`component_id` = 4; 