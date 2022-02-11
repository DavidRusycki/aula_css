<?php
/**
 * 
 */
class a  
{


    private $url;
    private $texto;
    private $target;
    private $style;

    public function __construct($sUrl, $sTexto) 
    {
        $this->setUrl($sUrl)->setTexto($sTexto);
    }

    /**
     * Get the value of url
     */ 
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * Set the value of url
     *
     * @return  self
     */ 
    public function setUrl($url)
    {
        $this->url = $url;

        return $this;
    }

    /**
     * Get the value of texto
     */ 
    public function getTexto()
    {
        return $this->texto;
    }

    /**
     * Set the value of texto
     *
     * @return  self
     */ 
    public function setTexto($texto)
    {
        $this->texto = $texto;

        return $this;
    }

    /**
     * Get the value of target
     */ 
    public function getTarget()
    {
        return $this->target;
    }

    /**
     * Set the value of target
     *
     * @return  self
     */ 
    public function setTarget($target)
    {
        $this->target = $target;

        return $this;
    }

    /**
     * Get the value of style
     */ 
    public function getStyle()
    {
        return $this->style;
    }

    /**
     * Set the value of style
     *
     * @return  self
     */ 
    public function setStyle($style)
    {
        $this->style = $style;

        return $this;
    }

    public function __toString()
    {
        return "<a href=\"{$this->getUrl()}\" target=\"{$this->getTarget()}\" style=\"{$this->getStyle()}\" >\"{$this->getTexto()}\"</a>";
    }
}
