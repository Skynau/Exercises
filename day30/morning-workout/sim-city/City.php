<?php

require_once "DB.php";

class City
{
    public $name = null;
    public $district = null;
    public $country = null;
    public $population = null;
    public $id = null;



    public function insert()
    {
        DB::insert("INSERT INTO `cities` (`name`, `population`, `district`, `country`) 
        VALUES (?,?,?,?)", [$this->name, $this->population, $this->district, $this->country]);

        $this->id = DB::getPdo()->lastInsertId();
    }
}