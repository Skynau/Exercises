<?php

require_once 'DB.php';

class Region
{
    public $name = null;
    public $slug = null;
    public $id = null;

    public function insert()
    {
        $query = "INSERT INTO `regions2` (`name`, `slug`) VALUES (?, ?)";
        DB::insert($query, [$this->name, $this->slug]);
        $query = "SELECT `id` FROM `regions2` ORDER BY `id` DESC LIMIT 1";
        $this->id = DB::select($query);
    }

};