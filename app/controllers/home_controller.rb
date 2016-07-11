class HomeController < ApplicationController
  def index

  end

  def selection
    $name = params[:name]
    result

    $card_list = ["death","judgement","justice","temperance",
      "the chariot","the devil","the emperor","the empress",
      "the fool","the hanged man","the hermit","the hierophant",
      "the high priestess","the lovers","the magician","the moon",
      "the star","the strength","the sun","the tower",
      "the world","wheel of fortune"]
      result
    $card = $card_list.sample(22).sort # 배열에서 비복원추출한 내용을 변수에 저장, (n)개의 표본 추출
    result
    $image_ = Array.new()
    result

    for i in 0..21
      $image_[i] = $card[i] + ".png"
      result
    end

  end

  def result

  end

end
