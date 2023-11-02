<?php

class City
{
    public $name = null;
    public $country_id = null;
    public $district = null;
    public $population = null;
    public $id = null;

    public function insert()
    {
        DB::insert("INSERT INTO `cities` (`name`, `population`, `district`, `country_id`) 
        VALUES (?,?,?,?)", [$this->name, $this->population, $this->district, $this->country_id]);

        $this->id = DB::getPdo()->lastInsertId();
    }

    public function save()
    {
        if (isset($this->id)) {
            $this->update();
        } else {
            $this->insert();
        }
    }

    public function update()
    {
        DB::update("UPDATE `cities` SET `name` = ? , `district` = ? , `population` = ?, `country_id` = ? WHERE `id` = ?",
            [$this->name, $this->population, $this->district, $this->country_id, $this->id]);
    }

    public function findByID($id){
        $city = DB::selectOne("SELECT * FROM `cities` WHERE `id` = $id", [], 'City');
        $this->id = $city->id;
        $this->name=$city->name;
        $this->district=$city->district;
        $this->population=$city->population;
        $this->country_id=$city->country_id;
    }

}