class HomeController < ApplicationController
  def index

  end

  def selection
    $name = params[:name]
    result

    @card_list = ["death","judgement","justice","temperance",
      "the chariot","the devil","the emperor","the empress",
      "the fool","the hanged man","the hermit","the hierophant",
      "the high priestess","the lovers","the magician","the moon",
      "the star","the strength","the sun","the tower",
      "the world","wheel of fortune"]
    @card_description = ["죽음카드","심판카드","정의카드","인내","전차카드","악마카드","황제카드","여제카드","멍청이카드",
    "교수형카드","광대카드","대사제카드","대여제카드","사랑꾼","마법사","달","별","힘","태양","탑","세계","운명의 수레바퀴"]
    @card = @card_list.sample(22) # 배열에서 비복원추출한 내용을 변수에 저장, (n)개의 표본 추출

    $image_ = Array.new()
    result

    for i in 0..21
      $image_[i] = @card[i] + ".png"
      result
    end

  end

  def saveuser
    user = User.new
    user.name = $name
    user.save
  end

  def picks
    pick = Pick.new
    pick.card_id = params[:card_id]
    pick.save
    redirect_to "/home/selection"
  end

  def result
    @picks = Pick.all
  end

  def destroy
    @target = Pick.all
    @target.each do |t|
      t.delete
    end
    redirect_to "/home/selection"
  end


  def destroy_pick
    @pick = Pick.all
    @pick.each do |p|
      p.destroy
    end

    redirect_to "/"
  end
end
