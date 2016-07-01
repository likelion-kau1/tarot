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
    @image_1 = @card[0] + ".png"
    @image_2 = @card[1] + ".png"
    @image_3 = @card[2] + ".png"
    @image_4 = @card[3] + ".png"
    @image_5 = @card[4] + ".png"
    @image_6 = @card[5] + ".png"
    @image_7 = @card[6] + ".png"
    @image_8 = @card[7] + ".png"
    @image_9 = @card[8] + ".png"
    @image_10 = @card[9] + ".png"
    @image_11 = @card[10] + ".png"
    @image_12 = @card[11] + ".png"
    @image_13 = @card[12] + ".png"
    @image_14 = @card[13] + ".png"
    @image_15 = @card[14] + ".png"
    @image_16 = @card[15] + ".png"
    @image_17 = @card[16] + ".png"
    @image_18 = @card[17] + ".png"
    @image_19 = @card[18] + ".png"
    @image_20 = @card[19] + ".png"
    @image_21 = @card[20] + ".png"
    @image_22 = @card[21] + ".png"
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
