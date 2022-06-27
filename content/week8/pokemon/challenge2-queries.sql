-- ALL commands used for challenge 2
--SELECT * FROM pokemon limit 1;

------ SORT by height. Who is the shortest Pokemon? JOLTIK Who is the tallest? WAILORD
--SELECT name , height FROM pokemon
--ORDER BY height DESC limit 5;

------ The "original" Pokémon are those with numbers (ids) 1-151. Write a query to show only the original 151 Pokémon.
------ 1 Bulbasaur is and 151 is MEW
--SELECT id,name FROM pokemon
--ORDER BY id ASC limit 151;

------ The "Johto" Pokémon are those with numbers (ids) 152-251. Write a query to show only the 100 Johto Pokémon, using LIMIT and OFFSET.
------ 152-Chikorita 251-Celebi
-- SELECT id,name FROM pokemon
-- ORDER BY id ASC limit 100
-- OFFSET 151;

------(height is specified in centimetres and weight in grams). Find Pokémon who are taller than a metre (100cm) but lighter than 10kg (10000g) - hint: there should be 6.
------ 6 POKEMONS -ekans, GASTLY, Haunter, Weezing, Draitini and Spinda
----SELECT id, name FROM pokemon
----WHERE height>100 AND weight<10000

------Find Pokémon who are exactly one or two metres tall. 
----- 70 Pokemon
-- SELECT COUNT(*) FROM pokemon
-- WHERE height=100 or height=200

------Find Pokémon who weigh between 10 and 500 grams.
--=== 8 Pokemons
-- SELECT COUNT(*) FROM pokemon
-- WHERE weight BETWEEN 10 AND 500

------ Return the heights of the Pokémon named 'Machop', 'Machoke' and 'Machamp.
---- Machop = 80, Machoke = 150 and Machamp = 160
-- SELECT name,height FROM pokemon
-- WHERE name LIKE 'MAC____' OR name LIKE 'Mac___';

------Find all Pokémon whose name begins with "Cha". 
----== Charmander,Charmeleon,Charizard, Chansey, Chatot, Chandelure
-- SELECT name FROM pokemon
-- WHERE name LIKE 'Cha%'

------Find all Pokémon whose name ends with "saur".
----== Bulbasaur, Ivysaur, Venusaur 
-- SELECT name from pokemon
-- WHERE name LIKE '%saur'

------Join test example
-- SELECT name, description FROM pokemon
-- JOIN descriptions on descriptions.pokemon_id=pokemon.id
-- LIMIT 5;


------Return the names and descriptions of all Pokémon whose descriptions include the word "asleep"
----== 646 do not have asleep in description
-- SELECT Count(*) FROM pokemon
-- JOIN descriptions on pokemon.id = descriptions.pokemon_id
-- where description NOT LIKE '% asleep%';

------Who is the heaviest Pokémon whose description does not contain the "asleep"
----== Giratina  750000grams
-- SELECT name, weight, description FROM pokemon 
--  JOIN descriptions on descriptions.pokemon_id = pokemon.id
--  where description like '% asleep%'
--  ORDER BY weight DESC
--  LIMIT 1;

------JOIN types onto our pokemon table
-- SELECT name,type, weight, slot FROM pokemon
-- JOIN types ON types.pokemon_id = pokemon.id
-- WHERE pokemon_id in (1,4,25)

------List all the Fire type Pokémon (primary or secondary type).
-- SELECT name, type, slot FROM pokemon
-- JOIN types on types.pokemon_id = pokemon.id
-- WHERE type = 'Fire'

------ List all Pokémon whose primary type is Grass. 
-- SELECT name, type, slot FROM pokemon
-- JOIN types ON types.pokemon_id = pokemon.id
-- WHERE type = 'Grass'


------Which is the heaviest Ghost type Pokémon? 
----==Giratina
-- SELECT name, type, slot, weight FROM pokemon 
-- JOIN types on types.pokemon_id = pokemon.id
-- WHERE type = 'Ghost'
-- ORDER BY weight DESC 
-- LIMIT 2;


------What's the primary type of the heaviest Pokémon?
----==Grouden is ground and the heaviest
-- SELECT name, type, slot, weight FROM pokemon
-- JOIN types on types.pokemon_id = pokemon.id
-- WHERE slot = 1
-- ORDER BY weight DESC 
-- limit 2;

------Find all Pokémon whose secondary type is Fighting and whose description contains the word "punch".
----== Blaziken  Fighting and Breloom   Fighting
SELECT name, type, description, slot FROM pokemon
JOIN descriptions on descriptions.pokemon_id = pokemon.id
JOIN types on types.pokemon_id = pokemon.id
WHERE slot = 2 AND type='Fighting' AND description LIKE '%punch%'
limit 5
 
