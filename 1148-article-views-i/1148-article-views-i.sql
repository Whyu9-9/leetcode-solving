# Write your MySQL query statement below
SELECT DISTINCT(author_id) as id from Views where viewer_id = author_id order by author_id ASC;