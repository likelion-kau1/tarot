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

  def month
    @month = ["January",
      "Februrary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Septempber",
      "October",
      "November",
      "December"]
  end

end
