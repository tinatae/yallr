# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  body        :text             not null
#  rating      :integer
#  business_id :integer          not null
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ApplicationRecord
    validates :body, presence: true
    validates :rating, inclusion: { in: (1..5) }

    belongs_to :business

    belongs_to :author,
    class_name: :User

    # def starmaker
    #     ("★")*self.rating 
    # end

end
