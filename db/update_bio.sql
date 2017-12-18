update bio_info
set (fullname, date_of_birth, place_of_birth, how_tall, body) = ($1, $2, $3, $4, $5)
where fullname = $6;