SELECT `cities`.*, `countries`.`id`, `countries`.`name`
FROM `cities`
LEFT JOIN `countries` ON `cities`.`country_id` = `countries`.`id`
WHERE `cities`.`population` > 5000000

