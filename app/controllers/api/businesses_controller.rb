class Api::BusinessesController < ApplicationController
  
  def index
    # businesses = bounds ? Business.in_bounds(bounds) : Business.all
 
    # if params[:searchCategory]
    #   businesses = businesses.where("'category': :searchCategory")
    # end
    businesses = Business.all
    @businesses = businesses.includes(:reviews)
    render :index
  end

  def show
    @business = Business.find(params[:id])
    render :show
  end

  private

  def business_params
    params.require(:business).permit(:name, :category, :lat, :lng, :website, :phonenumber, :address1, :address2 )
  end

  # def bounds
  #   params[:bounds]
  # end
end

#  id          :bigint           not null, primary key
#  name        :string           not null
#  category    :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  website     :string
#  phonenumber :string
#  address1    :string           not null
#  address2    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null