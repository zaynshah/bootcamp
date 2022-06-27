INSERT INTO stories(id, title, url, created_at, updated_at) VALUES (1, 'Voters Overwhelmingly Back Community Broadband in Chicago and Denver', 'hs://www.vice.com/en/article/xgzxvz/voters-overwhelmingly-back-community-broadband-in-chicago-and-denver', datetime('now'), datetime('now'));
INSERT INTO stories(id, title, url, created_at, updated_at) VALUES (2, 'eBird: A crowdsourced bird sighting database', 'https://ebird.org/home', datetime('now'), datetime('now'));
INSERT INTO stories(id, title, url, created_at, updated_at) VALUES (3, 'Karen Gillan teams up with Lena Headey, Michelle Yeoh, Angela Bassett and Carla Gugino in assassin thriller Gunpowder Milkshake', 'https://www.empireonline.com/movies/news/gunpowder-milk-shake-lena-headey-karen-gillan-exclusive/', datetime('now'), datetime('now'));
INSERT INTO stories(id, title, url, created_at, updated_at) VALUES (4, 'Pfizers coronavirus vaccine is more than 90 percent effective in first analysis, company reports', 'https://www.cnbc.com/2020/11/09/covid-vaccine-pfizer-drug-is-more-than-90percent-effective-in-preventing-infection.html', datetime('now'), datetime('now'));

INSERT INTO votes(direction, story_id, created_at, updated_at) VALUES ('up', 1, datetime('now'), datetime('now'));
INSERT INTO votes(direction, story_id, created_at, updated_at) VALUES ('up', 1, datetime('now'), datetime('now'));
INSERT INTO votes(direction, story_id, created_at, updated_at) VALUES ('down', 1, datetime('now'), datetime('now'));
INSERT INTO votes(direction, story_id, created_at, updated_at) VALUES ('down', 3, datetime('now'), datetime('now'));
INSERT INTO votes(direction, story_id, created_at, updated_at) VALUES ('up', 4, datetime('now'), datetime('now'));
INSERT INTO votes(direction, story_id, created_at, updated_at) VALUES ('down', 4, datetime('now'), datetime('now'));
INSERT INTO votes(direction, story_id, created_at, updated_at) VALUES ('down', 4, datetime('now'), datetime('now'));