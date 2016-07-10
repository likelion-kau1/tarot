class HomeController < ApplicationController
  def index
  end

  def user
    user = User.new
    user.name = params[:name]
    user.year = params[:year]
    user.month = params[:month]
    user.date = params[:date]
  end

  def selection
    @card_list = ["death","judgement","justice","temperance",
      "the chariot","the devil","the emperor","the empress",
      "the fool","the hanged man","the hermit","the hierophant",
      "the high priestess","the lovers","the magician","the moon",
      "the star","the strength","the sun","the tower",
      "the world","wheel of fortune"]
    @card = @card_list.sample(22).sort # 배열에서 비복원추출한 내용을 변수에 저장, (n)개의 표본 추출
    @image_ = Array.new()

    for i in 0..21
      @image_[i] = @card[i] + ".png"
    end

  end

  def result
    @card_list = ["death","judgement","justice","temperance",
      "the chariot","the devil","the emperor","the empress",
      "the fool","the hanged man","the hermit","the hierophant",
      "the high priestess","the lovers","the magician","the moon",
      "the star","the strength","the sun","the tower",
      "the world","wheel of fortune"]
    @card = @card_list.sample(3).sort # 배열에서 비복원추출한 내용을 변수에 저장, (n)개의 표본 추출
    @image_1 = @card[0] + ".png"
    @image_2 = @card[1] + ".png"
    @image_3 = @card[2] + ".png"
  end

end
