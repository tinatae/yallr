json.review do
  json.partial! '/api/reviews/review', review: @review
  # json.extract! review :rating, :body
end

json.author do
  json.partial! '/api/users/user', user: @review.author
end

json.average_rating @review.business.average_rating