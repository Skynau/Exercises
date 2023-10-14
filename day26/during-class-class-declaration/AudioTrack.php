<?php
class AudioTrack
{
    // wrong:
    // public $track_Database = $ourDatabase;
    // public $track_Id = $trackDatabase[$trackIDkey];
    // public $track_name = $trackDatabase[$trackIDKey['trackName']];
    // public $track_length = 
    // public $track_playing = 
    // public $album_name =
    
    //to get rid of the deprecation error when using DBBlackbox:
    public ?int $id = null;

    public $name = null;
    public $author_name = null;
    public $length = 0;
    public $year_of_release = null;
    public $album_name = null;

    // public function __construct($name)
    // {
    //     $this->name = $name;
    // }

    // wrong:
    // public function __construct()
    // {
    // }
    // public function play()
    // {
    //     //choose a track at random from $ourDatabase and play it
    // }
    // save info about the track:
    public function save()
    {

    }

    //delete info about track:
    public function delete()
    {

    }

    // retrieve info about author:
    public function getAuthor()
    {

    }

    public function getLengthMinutes()
    {

    }
}