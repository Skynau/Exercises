<?php

class Computer
{
    public ?string $model = null;
    public ?string $operating_system = null;
    public bool $is_portable = false;
    public string $status = 'off';

    public function switchOff()
    {
        $this->status = 'off';
    }

    public function toggleSwitch()
    {
        if ($this->status === 'off') {
            $this->status = 'on';
        } else {
            $this->status = 'off';
        }
        // $this->status = $this->status === 'on' ? 'off' : 'on';
    }
}

