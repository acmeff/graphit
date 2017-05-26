class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      table1 = Table.create(format: 'csv', title:'Cereal Nutrition', content: {"0":["","Cereal","Calories","Sugar","Fiber"],"1":["1","Common Sense Oat Bran","100","6","3"],"2":["2","Product 19","100","3","1"],"3":["3","All Bran Xtra Fiber","50","0","14"],"4":["4","Just Right","140","9","2"],"5":["5","Original Oat Bran","70","5","10"],"6":["6","Heartwise","90","5","6"],"7":["7","Special K","110","3","0"],"8":["8","Oatbake Raisin Nut","110","8","2"],"9":["9","Kenmei Rice Bran","150","9","2"],"10":["10","Nutri Grain","100","2","3"],"11":["11","Shredded Wheat Squares","90","5","3"],"12":["12","Oatmeal raisin Crisp","110","6","1"],"13":["13","hole Wheat Total","100","3","3"],"14":["14","Cheerios","110","1","2"],"15":["15","Total Raisin Bran","86.7","9.3","3.3"],"16":["16","Wheaties","100","3","3"],"17":["17","Raisin Nut Bran","110","8","3"],"18":["18","Wheat Chex","100","3","2"],"19":["19","Batman","110","10","0"],"20":["20","Ninja Turtles","110","13","0"],"21":["21","Capt. Crunch","120","12","0"],"22":["22","Trix","110","12","0"],"23":["23","Frosted Flakes","110","11","0"],"24":["24","Honey Smacks","110","15","1"],"25":["25","Froot Loops","110","13","1"],"26":["26","Puffed Rice","100","0","0"],"27":["27","Mueslix Crispy Blend","160","13","3"],"28":["28","Uncle Sam","110","0","7"],"29":["29","100% Bran","70","6","10"],"30":["30","Fruit \u0026 Fiber","96","6.4","4"],"31":["31","Bran Flakes","90","5","5"],"32":["32","Bran Buds","70","1","8"],"33":["33","Fruit'n Oat Bran","110","0","4"],"34":["34","Fruit'n Oat Bran Crunch","60","0","13"],"35":["35","Hodgson's Mill Wheat","108","0","4"],"36":["36","Hodgson's Mill Oat Bran","77","0","6"],"37":[""]}, owner_id: @user.id)

      graph1 = Graph.create(title:"Cereal Nutrition", x_data:["Common Sense Oat Bran","Product 19","All Bran Xtra Fiber","Just Right","Original Oat Bran","Heartwise","Special K","Oatbake Raisin Nut","Kenmei Rice Bran","Nutri Grain","Shredded Wheat Squares","Oatmeal raisin Crisp","hole Wheat Total","Cheerios","Total Raisin Bran","Wheaties","Raisin Nut Bran","Wheat Chex","Batman","Ninja Turtles","Capt. Crunch","Trix","Frosted Flakes","Honey Smacks","Froot Loops","Puffed Rice","Mueslix Crispy Blend","Uncle Sam","100% Bran","Fruit \u0026 Fiber","Bran Flakes","Bran Buds","Fruit'n Oat Bran","Fruit'n Oat Bran Crunch","Hodgson's Mill Wheat","Hodgson's Mill Oat Bran"],y_data:{"0":["Calories","100","100","50","140","70","90","110","110","150","100","90","110","100","110","86","100","110","100","110","110","120","110","110","110","110","100","160","110","70","96","90","70","110","60","108","77","NaN"],"1":["Sugar","6","3","0","9","5","5","3","8","9","2","5","6","3","1","9","3","8","3","10","13","12","12","11","15","13","0","13","0","6","6","5","1","0","0","0","0","NaN"],"2":["Fiber","3","1","14","2","10","6","0","2","2","3","3","1","3","2","3","3","3","2","0","0","0","0","0","1","1","0","3","7","10","4","5","8","4","13","4","6","NaN"]},format:"area",table_id: table1.id, owner_id: @user.id)

      table2 = Table.create(format: 'csv',title:"US Population Growth", content: {"0":["Country or Area","Year(s)","Variant","Value"],"1":["United States of America","2050","Instant replacement","410912.384"],"2":["United States of America","2045","Instant replacement","400279.463"],"3":["United States of America","2040","Instant replacement","389773.678"],"4":["United States of America","2035","Instant replacement","378862.862"],"5":["United States of America","2030","Instant replacement","366962.575"],"6":["United States of America","2025","Instant replacement","353904.586"],"7":["United States of America","2020","Instant replacement","340184.9"],"8":["United States of America","2015","Instant replacement","326240.783"],"9":["United States of America","2010","Instant replacement","312237.216"],"10":[""],"11":[""]}, owner_id: @user.id)

      Graph.create(title:"US Population Growth",x_data:["2050","2045","2040","2035","2030","2025","2020","2015","2010","NaN","NaN"],y_data:{"0":["Value","410912","400279","389773","378862","366962","353904","340184","326240","312237","NaN","NaN"]},format:"line",table_id: table2.id, owner_id: @user.id)
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def index
    @users = User.all
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
