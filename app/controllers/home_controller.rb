class HomeController < ApplicationController
  def index
    
    
  end
  
  def selection
    @card_list = ["Death","Judgement","Justice","Temperance",
      "The Chariot","The Devil","The Emperor","The Empress",
      "The Fool","The Hanged Man","The Hermit","The Hierophant",
      "The High Priestess","The Lovers","The Magician","The Moon",
      "The Star","The Strength","The Sun","The Tower",
      "The World","Wheel of Fortune"]
      
    @card_image = Array.new()
    
    for i in 0..21
      @card_image[i] = @card_list[i] + ".PNG"
    end
  end

  def result
      
    
  end

end
